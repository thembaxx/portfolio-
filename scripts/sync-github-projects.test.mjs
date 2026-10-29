import { afterEach, describe, expect, test, vi } from "vitest";
import { mkdtemp, readFile, rm, stat, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fetchProjects, syncProjects } from "./sync-github-projects.mjs";

const config = { owner: "thembaxx", since: "2026-08-18", exclude: ["portfolio-", "thembaxx"] };
const directories = [];
afterEach(async () => {
  await Promise.all(
    directories.splice(0).map((directory) => rm(directory, { recursive: true, force: true })),
  );
});

function repository(name, overrides = {}) {
  return {
    name,
    owner: { login: "thembaxx" },
    created_at: "2026-10-18T00:00:00Z",
    private: false,
    fork: false,
    language: "TypeScript",
    description: null,
    homepage: null,
    html_url: `https://github.com/thembaxx/${name}`,
    ...overrides,
  };
}

function response(value, status = 200) {
  return { ok: status >= 200 && status < 300, status, json: async () => value };
}

function content(value) {
  return { content: Buffer.from(value).toString("base64") };
}

describe("GitHub project sync", () => {
  test("includes the fixed start date and future projects; excludes older, private, forked and non-project repos", async () => {
    const repos = [
      repository("future", { created_at: "2027-02-01T00:00:00Z" }),
      repository("boundary", { created_at: "2026-08-18T00:00:00Z" }),
      repository("old", { created_at: "2026-08-17T23:59:59Z", pushed_at: "2026-10-18T00:00:00Z" }),
      repository("private", { private: true }),
      repository("fork", { fork: true }),
      repository("archived", { archived: true }),
      repository("disabled", { disabled: true }),
      repository("Portfolio-"),
      repository("thembaxx"),
      repository("other-owner", { owner: { login: "someone-else" } }),
    ];
    const fetchImpl = vi.fn(async (url) =>
      response(url.includes("/users/") ? repos : null, url.includes("/users/") ? 200 : 404),
    );
    const projects = await fetchProjects(config, { fetchImpl, token: "" });
    expect(projects.map((project) => project.id)).toEqual(["future", "boundary"]);
    expect(fetchImpl).toHaveBeenCalledTimes(5);
  });

  test("paginates past 100 repositories instead of silently dropping projects", async () => {
    const firstPage = Array.from({ length: 100 }, (_, index) =>
      repository(`old-${index}`, { created_at: "2020-01-01T00:00:00Z" }),
    );
    const fetchImpl = vi.fn(async (url) => {
      if (url.includes("/users/"))
        return response(url.endsWith("page=1") ? firstPage : [repository("last-page")]);
      return response(null, 404);
    });
    expect(
      (await fetchProjects(config, { fetchImpl, token: "" })).map((project) => project.id),
    ).toEqual(["last-page"]);
    expect(fetchImpl.mock.calls[1][0]).toContain("page=2");
  });

  test("uses readable README content and actual dependencies, deduplicates technologies, and validates demo URLs", async () => {
    const fetchImpl = vi.fn(async (url) => {
      if (url.includes("/users/"))
        return response([repository("my-app", { homepage: "javascript:alert(1)" })]);
      if (url.endsWith("/readme"))
        return response(
          content(
            "# My app\n\n![Build](badge.svg)\n\nA **reading companion** with [offline lessons](https://example.com) for learners.\n\n## Run\n\nnpm install",
          ),
        );
      return response(
        content(
          JSON.stringify({
            dependencies: { react: "19", next: "16", motion: "12", "framer-motion": "12" },
            devDependencies: { typescript: "5" },
          }),
        ),
      );
    });
    const [project] = await fetchProjects(config, { fetchImpl, token: "test-token" });
    expect(project.title).toBe("My app");
    expect(project.description).toBe("A reading companion with offline lessons for learners.");
    expect(project.technologies).toEqual(["React", "Next.js", "TypeScript", "Motion"]);
    expect(project.liveUrl).toBe("");
    expect(fetchImpl.mock.calls[0][1].headers.Authorization).toBe("Bearer test-token");
  });

  test("supports empty repositories and missing documentation without inventing a demo or screenshot", async () => {
    const fetchImpl = async (url) =>
      url.includes("/users/")
        ? response([
            repository("empty", { language: null }),
            repository("documented", {
              description: "A useful community project.",
              homepage: "https://example.com/app",
            }),
          ])
        : response(null, 404);
    const projects = await fetchProjects(config, { fetchImpl, token: "" });
    expect(projects.find((project) => project.id === "empty")).toMatchObject({
      description: "Source code and documentation for Empty.",
      liveUrl: "",
      screenshots: [],
      technologies: [],
    });
    expect(projects.find((project) => project.id === "documented")).toMatchObject({
      description: "A useful community project.",
      liveUrl: "https://example.com/app",
    });
  });

  test("rejects API failures and malformed responses", async () => {
    for (const status of [401, 403, 429, 500]) {
      await expect(
        fetchProjects(config, { fetchImpl: async () => response(null, status), token: "" }),
      ).rejects.toThrow(`(${status})`);
    }
    await expect(
      fetchProjects(config, { fetchImpl: async () => response({}), token: "" }),
    ).rejects.toThrow("invalid repository list");
    await expect(fetchProjects({ ...config, since: "bad-date" })).rejects.toThrow(
      "valid YYYY-MM-DD",
    );
  });

  test("preserves reviewed private live projects and removes inactive saved entries", async () => {
    const directory = await mkdtemp(join(tmpdir(), "portfolio-active-sync-"));
    directories.push(directory);
    const configPath = join(directory, "config.json");
    const outputPath = join(directory, "projects.json");
    await writeFile(
      configPath,
      JSON.stringify({ ...config, activeRepoNames: ["private-live", "public-live"] }),
    );
    await writeFile(
      outputPath,
      JSON.stringify([
        {
          id: "private-live",
          title: "Private Live",
          liveUrl: "https://private-live.vercel.app",
          githubUrl: "",
        },
        {
          id: "archived",
          title: "Archived",
          liveUrl: "https://archived.vercel.app",
          githubUrl: "",
        },
      ]) + "\n",
    );
    const fetchImpl = async (url) =>
      url.includes("/users/")
        ? response([repository("public-live", { homepage: "https://public-live.vercel.app" })])
        : response(null, 404);
    const result = await syncProjects({ configPath, outputPath, fetchImpl, token: "" });
    expect(result).toEqual({ count: 2, changed: true });
    expect(JSON.parse(await readFile(outputPath, "utf8")).map((project) => project.id)).toEqual([
      "private-live",
      "public-live",
    ]);
  });

  test("keeps the last catalog after a partial failure and leaves an unchanged snapshot untouched", async () => {
    const directory = await mkdtemp(join(tmpdir(), "portfolio-sync-"));
    directories.push(directory);
    const configPath = join(directory, "config.json");
    const outputPath = join(directory, "projects.json");
    await writeFile(configPath, JSON.stringify(config));
    await writeFile(outputPath, "previous successful catalog\n");
    const failedFetch = async (url) =>
      url.includes("/users/") ? response([repository("new")]) : response(null, 500);
    await expect(
      syncProjects({ configPath, outputPath, fetchImpl: failedFetch, token: "" }),
    ).rejects.toThrow("(500)");
    expect(await readFile(outputPath, "utf8")).toBe("previous successful catalog\n");

    const fetchImpl = async (url) =>
      url.includes("/users/") ? response([repository("new")]) : response(null, 404);
    expect(await syncProjects({ configPath, outputPath, fetchImpl, token: "" })).toEqual({
      count: 1,
      changed: true,
    });
    const before = await stat(outputPath);
    expect(await syncProjects({ configPath, outputPath, fetchImpl, token: "" })).toEqual({
      count: 1,
      changed: false,
    });
    expect((await stat(outputPath)).mtimeMs).toBe(before.mtimeMs);
    expect(JSON.parse(await readFile(outputPath, "utf8"))[0].id).toBe("new");
  });
});
