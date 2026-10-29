import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { resolve } from "node:path";

const root = new URL("../", import.meta.url);
const technologyNames = {
  react: "React",
  next: "Next.js",
  typescript: "TypeScript",
  tailwindcss: "Tailwind CSS",
  three: "Three.js",
  "@react-three/fiber": "React Three Fiber",
  motion: "Motion",
  "framer-motion": "Motion",
  firebase: "Firebase",
  vite: "Vite",
};

function summaryFromReadme(markdown) {
  const paragraphs = markdown
    .replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, "")
    .replace(/```[\s\S]*?```/g, "")
    .replace(/<!--[\s\S]*?-->/g, "")
    .split(/\r?\n\s*\r?\n/);
  for (const paragraph of paragraphs) {
    const text = paragraph.trim();
    if (!text || /^(?:#|[>|!]|[-*+]\s|\d+\.\s|<)/.test(text)) continue;
    if (/create-next-app|create-react-app|first, run the development server/i.test(text)) continue;
    const plain = text
      .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
      .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
      .replace(/<[^>]*>/g, "")
      .replace(/[*_`]/g, "")
      .replace(/\s+/g, " ")
      .trim();
    if (plain.length >= 30) return plain.length > 420 ? `${plain.slice(0, 417)}…` : plain;
  }
  return "";
}

function liveUrl(homepage) {
  try {
    const url = new URL(homepage);
    return ["https:", "http:"].includes(url.protocol) && !url.username && !url.password
      ? url.href
      : "";
  } catch {
    return "";
  }
}

export async function fetchProjects(
  config,
  { fetchImpl = fetch, token = process.env.GITHUB_TOKEN ?? process.env.GH_TOKEN } = {},
) {
  const since = Date.parse(`${config.since}T00:00:00Z`);
  if (
    !/^[\w-]+$/.test(config.owner) ||
    !/^\d{4}-\d{2}-\d{2}$/.test(config.since) ||
    !Number.isFinite(since) ||
    new Date(since).toISOString().slice(0, 10) !== config.since
  ) {
    throw new Error("Configure a GitHub owner and a valid YYYY-MM-DD start date.");
  }
  const excluded = new Set(config.exclude.map((name) => name.toLowerCase()));
  const headers = { Accept: "application/vnd.github+json", "X-GitHub-Api-Version": "2022-11-28" };
  if (token) headers.Authorization = `Bearer ${token}`;

  async function request(path, optional = false) {
    const response = await fetchImpl(`https://api.github.com${path}`, {
      headers,
      signal: AbortSignal.timeout(30_000),
    });
    if (optional && response.status === 404) return null;
    if (!response.ok) throw new Error(`GitHub request failed (${response.status}): ${path}`);
    return response.json();
  }

  const repositories = [];
  for (let page = 1; ; page++) {
    const batch = await request(
      `/users/${config.owner}/repos?type=owner&sort=created&direction=desc&per_page=100&page=${page}`,
    );
    if (!Array.isArray(batch)) throw new Error("GitHub returned an invalid repository list.");
    repositories.push(...batch);
    if (batch.length < 100) break;
  }

  const eligible = repositories
    .filter(
      (repo) =>
        repo.owner.login.toLowerCase() === config.owner.toLowerCase() &&
        !repo.private &&
        !repo.fork &&
        !repo.archived &&
        !repo.disabled &&
        Date.parse(repo.created_at) >= since &&
        !excluded.has(repo.name.toLowerCase()),
    )
    .sort((a, b) => b.created_at.localeCompare(a.created_at) || a.name.localeCompare(b.name));

  const projects = [];
  for (const repo of eligible) {
    const path = `/repos/${config.owner}/${encodeURIComponent(repo.name)}`;
    const readme = await request(`${path}/readme`, true);
    const packageFile = await request(`${path}/contents/package.json`, true);
    const packageJson = packageFile?.content
      ? JSON.parse(Buffer.from(packageFile.content, "base64").toString("utf8"))
      : {};
    const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
    const technologies = [
      ...new Set([
        ...Object.entries(technologyNames)
          .filter(([name]) => name in dependencies)
          .map(([, name]) => name),
        ...(repo.language ? [repo.language] : []),
      ]),
    ];
    const title = repo.name.replace(/[-_]+/g, " ").replace(/^./, (char) => char.toUpperCase());
    const summary = readme?.content
      ? summaryFromReadme(Buffer.from(readme.content, "base64").toString("utf8"))
      : "";
    const description =
      summary || repo.description?.trim() || `Source code and documentation for ${title}.`;
    projects.push({
      id: repo.name.toLowerCase(),
      title,
      subtitle: repo.language ? `${repo.language} project` : "Open-source project",
      oneLiner: "",
      description,
      features: [],
      technologies,
      screenshots: [],
      liveUrl: liveUrl(repo.homepage),
      githubUrl: repo.html_url,
    });
  }
  return projects;
}

export async function syncProjects({
  configPath = new URL("github-projects.config.json", root),
  outputPath = new URL("src/data/github-projects.json", root),
  fetchImpl = fetch,
  token = process.env.GITHUB_TOKEN ?? process.env.GH_TOKEN,
} = {}) {
  const config = JSON.parse(await readFile(configPath, "utf8"));
  // Keep reviewed active live projects when their repositories are private.
  // The portfolio's Actions token cannot enumerate other private repositories.
  const published = await fetchProjects(config, { fetchImpl, token });
  let previous = "";
  try {
    previous = await readFile(outputPath, "utf8");
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
  }
  const allowlist = Array.isArray(config.activeRepoNames)
    ? new Set(config.activeRepoNames.map((name) => name.toLowerCase()))
    : null;
  const publicProjects = allowlist ? published.filter((p) => allowlist.has(p.id)) : published;
  const merged = new Map(publicProjects.map((p) => [p.id, p]));
  if (allowlist && previous) {
    const saved = JSON.parse(previous);
    if (!Array.isArray(saved)) throw new Error("Invalid saved project catalog.");
    for (const project of saved) {
      if (!allowlist.has(project.id) || !project.liveUrl || merged.has(project.id)) continue;
      // The current GitHub list deliberately excludes archived, disabled and forked repos.
      // Do not resurrect an archived *public* project from the last saved snapshot.
      // Private source can be retained only as a reviewed, live-only entry.
      const response = await fetchImpl(
        `https://api.github.com/repos/${encodeURIComponent(config.owner)}/${encodeURIComponent(project.id)}`,
        {
          headers: {
            Accept: "application/vnd.github+json",
            "X-GitHub-Api-Version": "2022-11-28",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
          signal: AbortSignal.timeout(30_000),
        },
      );
      if (response.status !== 404) {
        if (!response.ok) {
          throw new Error(`GitHub repository status check failed (${response.status}): ${project.id}`);
        }
        const repo = await response.json();
        if (
          repo.archived ||
          repo.disabled ||
          repo.fork ||
          !repo.private ||
          repo.owner?.login?.toLowerCase() !== config.owner.toLowerCase()
        ) continue;
      }
      merged.set(project.id, { ...project, githubUrl: "" });
    }
  }
  const projects = allowlist
    ? [...allowlist].map((id) => merged.get(id)).filter(Boolean)
    : publicProjects;
  const content = `${JSON.stringify(projects, null, 2)}\n`;
  if (content !== previous) await writeFile(outputPath, content);
  return { count: projects.length, changed: content !== previous };
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    const { count, changed } = await syncProjects();
    console.log(`${count} GitHub projects synced; ${changed ? "catalog updated" : "no changes"}.`);
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
