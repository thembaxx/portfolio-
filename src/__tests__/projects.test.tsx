import { describe, test, expect, vitest } from "vitest";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ProjectScreenshotGallery } from "../components/ProjectScreenshotGallery";
import ProjectPage, { generateMetadata, generateStaticParams } from "../app/projects/[id]/page";
import sitemap from "../app/sitemap";
import { projects } from "../data/projects";
import * as projectCatalog from "../data/projects";
import { ProjectCard } from "../components/ProjectCard";

vitest.mock("next/image", () => ({
  // eslint-disable-next-line @next/next/no-img-element
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => <img {...props} alt={props.alt} />,
}));
vitest.mock("../components/Navbar", () => ({ Navbar: () => <nav /> }));
vitest.mock("next/navigation", () => ({
  notFound: () => { throw new Error("NOT_FOUND"); },
  permanentRedirect: (url: string) => { throw new Error(`REDIRECT:${url}`); },
}));

const ids = projects.map(project => project.id);

describe("Featured project routing and screenshots", () => {
  test("every listed project has imagery, including live-only and GitHub-only projects", () => {
    expect(projects.length).toBeGreaterThan(6);
    for (const project of projects) {
      expect(project.screenshots.length).toBeGreaterThan(0);
      expect(project.screenshots[0].src).toMatch(/^\/projects\/|^https:\/\//);
      expect(project.screenshots[0].alt).toBeTruthy();
    }
    const githubOnly = projects.find(project => !project.liveUrl);
    expect(githubOnly?.screenshots[0].label).toBe("GitHub repository preview");
    const syncedLive = projects.find(project => project.id === "mentra");
    expect(syncedLive?.screenshots[0].src).toMatch(/\/projects\/mentra\.jpg|image\.thum\.io/);
  });

  test("generates all featured pages and excludes the old listing from the sitemap", () => {
    expect(generateStaticParams()).toEqual([...ids.map(id => ({ id })), { id: "lumni" }]);
    expect(sitemap().map(entry => entry.url)).toEqual([
      "https://themba.dev", ...ids.map(id => `https://themba.dev/projects/${id}`),
    ]);
  });

  test("case study, social image, and canonical URL use the new project", async () => {
    render(await ProjectPage({ params: Promise.resolve({ id: "hydromental" }) }));
    expect(screen.getByRole("heading", { name: "Hydromental", level: 1 })).toBeDefined();
    expect(screen.getByRole("link", { name: "Open Live Demo for Hydromental" })).toHaveAttribute("href", "https://hydromental.vercel.app");
    expect(screen.getByRole("img")).toHaveAttribute("src", "/projects/hydromental.jpg");
    const metadata = await generateMetadata({ params: Promise.resolve({ id: "hydromental" }) });
    expect(metadata.alternates?.canonical).toBe("/projects/hydromental");
    expect(metadata.openGraph?.images).toEqual([expect.objectContaining({ url: "/projects/hydromental.jpg" })]);
  });

  test("old Lumni bookmarks redirect to Lumnie and unknown projects return not found", async () => {
    await expect(ProjectPage({ params: Promise.resolve({ id: "lumni" }) })).rejects.toThrow("REDIRECT:/projects/lumnie");
    for (const id of ["unknown", "toString"]) {
      await expect(ProjectPage({ params: Promise.resolve({ id }) })).rejects.toThrow("NOT_FOUND");
    }
  });

  test("GitHub-only projects render details and social metadata without a demo or screenshot", async () => {
    const project = { id: "example", title: "Example", subtitle: "Open-source project", oneLiner: "", description: "A GitHub-only project.", features: [], technologies: [], screenshots: [], liveUrl: "", githubUrl: "https://github.com/thembaxx/example" };
    const lookup = vitest.spyOn(projectCatalog, "getProject").mockReturnValue(project);
    try {
      const { unmount } = render(await ProjectPage({ params: Promise.resolve({ id: project.id }) }));
      expect(screen.getByRole("heading", { level: 1, name: project.title })).toBeDefined();
      expect(screen.queryByRole("link", { name: /Live Demo/ })).toBeNull();
      expect(screen.getByRole("link", { name: `View GitHub repository for ${project.title}` })).toHaveAttribute("href", project.githubUrl);
      expect(screen.queryByRole("img")).toBeNull();
      expect(screen.queryByRole("heading", { name: "Key Technical Features" })).toBeNull();
      const metadata = await generateMetadata({ params: Promise.resolve({ id: project.id }) });
      expect(metadata.openGraph?.images).toEqual([expect.objectContaining({ url: "/brand/social.png" })]);
      unmount();
      render(<ProjectCard project={project} index={0} />);
      expect(screen.getByRole("link", { name: "Read Example project details" })).toHaveAttribute("href", "/projects/example");
      expect(screen.queryByRole("link", { name: /live demo/i })).toBeNull();
    } finally {
      lookup.mockRestore();
    }
  });

  test("a single desktop screenshot retains its full dimensions and can open at full size", () => {
    render(<ProjectScreenshotGallery projectName="leesmaat" screenshots={[
      { src: "/projects/leesmaat.jpg", alt: "Bilingual placement", type: "desktop", label: "Placement", width: 1280, height: 670 },
    ]} />);
    expect(screen.queryByRole("tablist")).toBeNull();
    expect(screen.getByRole("img")).toHaveAttribute("width", "1280");
    expect(screen.getByRole("img")).toHaveAttribute("height", "670");
    expect(screen.getByRole("link", { name: /View full Placement screenshot/ })).toHaveAttribute("href", "/projects/leesmaat.jpg");
  });

  test("gallery tabs support keyboard selection, focus, and linked panels", () => {
    render(<ProjectScreenshotGallery projectName="Example" screenshots={[
      { src: "/first.jpg", alt: "First view", type: "desktop", label: "First" },
      { src: "/second.jpg", alt: "Second view", type: "desktop", label: "Second" },
    ]} />);
    const first = screen.getByRole("tab", { name: /Show First/ });
    const second = screen.getByRole("tab", { name: /Show Second/ });
    first.focus();
    fireEvent.keyDown(first, { key: "ArrowRight" });
    expect(second).toHaveFocus();
    expect(second).toHaveAttribute("aria-selected", "true");
    expect(first).toHaveAttribute("tabindex", "-1");
    expect(screen.getByRole("tabpanel")).toHaveAttribute("aria-labelledby", second.id);
    expect(screen.getByRole("img")).toHaveAttribute("src", "/second.jpg");
    fireEvent.keyDown(second, { key: "Home" });
    expect(first).toHaveFocus();
    expect(first).toHaveAttribute("aria-selected", "true");
  });
});
