import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { projects } from "@/data/projects";

beforeEach(() => {
  vi.resetModules();
  vi.stubEnv("SITE_URL", "https://themba.dev");
  vi.stubEnv("VERCEL_ENV", "production");
  vi.stubEnv("INDEXING_ENABLED", "");
});
afterEach(() => vi.unstubAllEnvs());

describe("Portfolio discovery", () => {
  test("all public discovery documents use the configured canonical origin", async () => {
    vi.stubEnv("SITE_URL", "https://portfolio.example/");
    const { siteMetadata, identitySchema, projectMetadata, projectSchema } = await import("@/lib/seo");
    const { llmsDocument } = await import("@/lib/llms");
    const { default: sitemap } = await import("@/app/sitemap");
    const { default: robots } = await import("@/app/robots");
    expect(siteMetadata.metadataBase).toEqual(new URL("https://portfolio.example"));
    expect(siteMetadata.title).toEqual({ default: "Themba Mndebele — Frontend Developer", template: "%s | Themba Mndebele" });
    expect(identitySchema["@graph"][0]["@id"]).toBe("https://portfolio.example/#person");
    expect(sitemap().map(entry => entry.url)).toEqual([
      "https://portfolio.example", ...projects.map(project => `https://portfolio.example/projects/${project.id}`),
    ]);
    expect(robots().sitemap).toBe("https://portfolio.example/sitemap.xml");
    expect(llmsDocument()).not.toContain("https://themba.dev");
    for (const project of projects) {
      expect(projectMetadata(project).alternates?.canonical).toBe(`/projects/${project.id}`);
      const schema = projectSchema(project)["@graph"][0];
      expect(schema.mainEntityOfPage).toBe(`https://portfolio.example/projects/${project.id}`);
      expect(schema.image).toBe(`https://portfolio.example${project.screenshots[0].src}`);
      expect(schema.url).toBe(project.liveUrl);
    }
  });

  test("previews and explicit staging settings disable indexing across metadata, robots and sitemap", async () => {
    for (const setting of ["preview", "staging"]) {
      vi.resetModules();
      vi.stubEnv("VERCEL_ENV", setting === "preview" ? "preview" : "production");
      vi.stubEnv("INDEXING_ENABLED", setting === "staging" ? "false" : "");
      const { siteMetadata } = await import("@/lib/seo");
      const { default: robots } = await import("@/app/robots");
      const { default: sitemap } = await import("@/app/sitemap");
      expect(siteMetadata.robots).toMatchObject({ index: false, follow: false });
      expect(robots().rules).toEqual({ userAgent: "*", disallow: "/" });
      expect(sitemap()).toEqual([]);
    }
  });

  test("the requested llm.txt alias serves the same plain text as llms.txt, with all six projects", async () => {
    const { GET: short } = await import("@/app/llms.txt/route");
    const { GET: alias } = await import("@/app/llm.txt/route");
    const { GET: full } = await import("@/app/llms-full.txt/route");
    const response = short();
    const text = await response.text();
    expect(await alias().text()).toBe(text);
    expect(response.headers.get("content-type")).toBe("text/plain; charset=utf-8");
    expect(response.headers.get("link")).toBe('<https://themba.dev/llms.txt>; rel="canonical"');
    const details = await full().text();
    for (const project of projects) {
      expect(text).toContain(`[${project.title}](https://themba.dev/projects/${project.id})`);
      expect(details).toContain(project.liveUrl);
      expect(details).toContain(project.githubUrl);
      for (const feature of project.features) expect(details).toContain(feature);
    }
    expect(text).not.toContain("Mileia");
  });

  test("structured data cannot close its script tag through embedded content", async () => {
    const { serializeSchema } = await import("@/lib/seo");
    const content = { description: "</script><script>alert(1)</script>" };
    const encoded = serializeSchema(content);
    expect(encoded).not.toContain("<");
    expect(JSON.parse(encoded)).toEqual(content);
  });
});
