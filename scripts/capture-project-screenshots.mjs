/**
 * Capture truthful desktop screenshots of public project homepages.
 * Run after the GitHub catalog sync. Never fabricate a UI when a site is unavailable:
 * uncaptured projects keep a labeled live-preview/repository-image fallback.
 */
import { access, mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const catalogPath = path.join(root, "src/data/github-projects.json");
const manifestPath = path.join(root, "src/data/project-screenshots.json");
const imagesDir = path.join(root, "public/projects");
const featuredIds = new Set(["lumnie", "citylit", "hydromental", "procodiapp", "mypets", "leesmaat"]);

const exists = async (file) => access(file).then(() => true, () => false);

async function main() {
  const catalog = JSON.parse(await readFile(catalogPath, "utf8"));
  const existing = JSON.parse(await readFile(manifestPath, "utf8"));
  const overrides = { ...existing };
  await mkdir(imagesDir, { recursive: true });

  const targets = catalog.filter((project) => {
    if (featuredIds.has(project.id) || !/^[a-z0-9][a-z0-9_-]*$/.test(project.id)) return false;
    try {
      const url = new URL(project.liveUrl);
      return url.protocol === "https:" && Boolean(url.hostname);
    } catch {
      return false;
    }
  });
  const pending = [];
  for (const project of targets) {
    const file = path.join(imagesDir, project.id + ".jpg");
    if (overrides[project.id]?.[0]?.src === "/projects/" + project.id + ".jpg" && await exists(file)) continue;
    pending.push(project);
  }
  if (!pending.length) {
    console.log("All available live project screenshots are already captured.");
    return;
  }

  const { chromium } = await import("playwright");
  const browser = await chromium.launch({ headless: true });
  let captured = 0;
  let failed = 0;

  async function capture(project) {
    const page = await browser.newPage({
      viewport: { width: 1440, height: 900 },
      deviceScaleFactor: 1,
      reducedMotion: "reduce",
      colorScheme: "light",
    });
    try {
      const response = await page.goto(project.liveUrl, { waitUntil: "domcontentloaded", timeout: 35000 });
      if (response && response.status() >= 400) throw new Error("HTTP " + response.status());
      await page.waitForLoadState("networkidle", { timeout: 6000 }).catch(() => {});
      await page.evaluate(() => document.fonts.ready).catch(() => {});
      await page.waitForTimeout(1500);
      const title = await page.title();
      const body = await page.locator("body").innerText({ timeout: 5000 }).catch(() => "");
      if (/authentication required|vercel authentication|deployment protection|404: not_found|deployment_not_found/i.test(title + " " + body.slice(0, 300))) {
        throw new Error("Protected or unavailable deployment");
      }
      if ((await page.locator("body").count()) === 0) throw new Error("No document body");
      await page.screenshot({
        path: path.join(imagesDir, project.id + ".jpg"),
        type: "jpeg",
        quality: 82,
        animations: "disabled",
        caret: "hide",
        fullPage: false,
      });
      overrides[project.id] = [{
        src: "/projects/" + project.id + ".jpg",
        alt: project.title + " public website captured at a desktop viewport",
        label: "Website screenshot",
        type: "desktop",
        width: 1440,
        height: 900,
      }];
      captured++;
      console.log("Captured " + project.id + " (" + page.url() + ")");
    } catch (error) {
      failed++;
      console.warn("Could not capture " + project.id + ": " + error.message);
    } finally {
      await page.close();
    }
  }
  try {
    // Two browser tabs at once balance speed with stability on GitHub-hosted runners.
    for (let i = 0; i < pending.length; i += 2) {
      await Promise.all(pending.slice(i, i + 2).map(capture));
    }
  } finally {
    await browser.close();
  }
  await writeFile(manifestPath, JSON.stringify(Object.fromEntries(
    Object.entries(overrides).sort(([a], [b]) => a.localeCompare(b))
  ), null, 2) + "\n");
  console.log("Desktop captures: " + captured + " successful, " + failed + " unavailable.");
}

main().catch((error) => { console.error(error); process.exitCode = 1; });
