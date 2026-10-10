import { vitest, describe, test, expect } from "vitest";
import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { ProjectSection } from "../components/ProjectSection";
import { Contact } from "../components/Contact";
import { ProjectScreenshotGallery } from "../components/ProjectScreenshotGallery";
import { Footer } from "../components/Footer";
import Home from "../app/page";
import RootLayout from "../app/layout";

// Mock next/font/google
vitest.mock("next/font/google", () => ({
  Instrument_Serif: () => ({ variable: "--font-fraunces" }),
  Geist: () => ({ variable: "--font-inter" }),
  Geist_Mono: () => ({ variable: "--font-geist-mono" }),
}));

vitest.mock("../components/ParticleBackground", () => ({
  ParticleBackground: () => <canvas aria-hidden="true" />,
}));

// Mock next/image cleanly for JSDOM
vitest.mock("next/image", () => ({
  default: (props: React.ImgHTMLAttributes<HTMLImageElement> & { fill?: boolean; priority?: boolean }) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { fill, priority, ...rest } = props;
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...rest} alt={props.alt || ""} />;
  },
}));

// Mock next-themes
vitest.mock("next-themes", () => ({
  useTheme: () => ({
    theme: "dark",
    resolvedTheme: "dark",
    setTheme: vitest.fn(),
  }),
  ThemeProvider: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

describe("Themba Mndebele — editorial portfolio", () => {
  test("navigation works from the homepage and project detail pages, with an accessible theme toggle", () => {
    render(<Navbar />);
    expect(screen.getByRole("link", { name: "Themba Mndebele, top" })).toHaveAttribute("href", "/#top");
    for (const [name, href] of [["Work", "/#work"], ["About", "/#about"], ["Contact", "/#contact"]]) {
      expect(screen.getByRole("link", { name })).toHaveAttribute("href", href);
    }
    const themeToggle = screen.getByRole("button", { name: "Switch to light theme" });
    expect(themeToggle).toHaveAttribute("title", "Switch to light theme");
    expect(themeToggle).toHaveAttribute("aria-pressed", "true");
  });

  test("hero presents the supplied name, availability, technology focus, and contact actions", () => {
    render(<Hero />);
    expect(screen.getByRole("heading", { level: 1, name: "Themba Mndebele" })).toBeDefined();
    expect(screen.getByText("South Africa")).toBeDefined();
    expect(screen.getByText("Open to remote roles")).toBeDefined();
    expect(screen.getByRole("link", { name: /Selected work/ })).toHaveAttribute("href", "#work");
    expect(screen.getByRole("link", { name: "me@themba.dev" })).toHaveAttribute("href", "mailto:me@themba.dev");
  });

  test("about preserves the supplied experience and engineering ownership", () => {
    render(<About />);
    expect(screen.getByText(/Four years building React products/)).toBeDefined();
    expect(screen.getByText(/owning architecture, reliability and security myself/)).toBeDefined();
  });

  test("toolkit groups the supplied skills by domain", () => {
    render(<Skills />);
    for (const category of ["Frontend", "Architecture", "Quality", "AI-assisted"]) {
      expect(screen.getByText(category)).toBeDefined();
    }
    expect(screen.getByText(/React, Next.js, TypeScript/)).toBeDefined();
    expect(screen.getByText(/Vitest, Playwright/)).toBeDefined();
  });

  test("renders Featured Projects including Mileia and Lumni", () => {
    render(<ProjectSection />);
    expect(screen.getByText("Mileia")).toBeDefined();
    expect(screen.getByText("Lumni")).toBeDefined();
    expect(screen.getByRole("link", { name: "Read Mileia case study" })).toHaveAttribute("href", "/projects/mileia");
    expect(screen.getByRole("link", { name: "Read Lumni case study" })).toHaveAttribute("href", "/projects/lumni");
    expect(screen.getByRole("link", { name: /Open live demo for Mileia/ })).toHaveAttribute("href", "https://mileia.vercel.app");
    expect(screen.getByRole("link", { name: /View GitHub repository for Lumni/ })).toHaveAttribute("href", "https://github.com/thembaxx/lumni");
  });

  test("renders screenshot gallery toggle buttons with accessible ARIA attributes and live region announcements", () => {
    render(<ProjectScreenshotGallery projectName="Mileia" screenshots={[
      { src: "/projects/mileia-1.png", alt: "Marketplace", type: "desktop", label: "Marketplace View" },
      { src: "/projects/mileia-2.png", alt: "Services", type: "desktop", label: "Services Directory" },
    ]} />);
    const marketplaceBtn = screen.getByRole("tab", { name: "Show Marketplace View screenshot for Mileia" });
    const servicesBtn = screen.getByRole("tab", { name: "Show Services Directory screenshot for Mileia" });

    expect(marketplaceBtn).toBeDefined();
    expect(servicesBtn).toBeDefined();
    expect(marketplaceBtn.getAttribute("aria-selected")).toBe("true");
    expect(servicesBtn.getAttribute("aria-selected")).toBe("false");

    expect(screen.getByText("Showing Marketplace View screenshot for Mileia")).toBeDefined();

    fireEvent.click(servicesBtn);
    expect(screen.getByText("Showing Services Directory screenshot for Mileia")).toBeDefined();
    expect(servicesBtn.getAttribute("aria-selected")).toBe("true");
  });

  test("renders Contact section with email mailto link and social profiles", () => {
    render(<Contact />);
    expect(screen.getByText("me@themba.dev")).toBeDefined();
    expect(screen.getByRole("link", { name: /LinkedIn profile/ })).toBeDefined();
  });

  test("renders Contact section with copy email button and triggers clipboard copy with feedback", async () => {
    const writeTextMock = vitest.fn().mockResolvedValue(undefined);
    Object.assign(navigator, {
      clipboard: {
        writeText: writeTextMock,
      },
    });

    render(<Contact />);
    const copyButton = screen.getByRole("button", { name: /copy email address/i });
    expect(copyButton).toBeDefined();

    fireEvent.click(copyButton);
    expect(writeTextMock).toHaveBeenCalledWith("me@themba.dev");

    expect(await screen.findByText("Copied ✓")).toBeDefined();
    expect(screen.getByText("Email address me@themba.dev copied to clipboard")).toBeDefined();
  });

  test("clipboard rejection provides an accessible recovery message", async () => {
    Object.assign(navigator, { clipboard: { writeText: vitest.fn().mockRejectedValue(new Error("Permission denied")) } });
    render(<Contact />);
    fireEvent.click(screen.getByRole("button", { name: /copy email address/i }));
    expect(await screen.findByRole("status")).toHaveTextContent(/Could not copy automatically/);
    expect(screen.getByRole("link", { name: "me@themba.dev" })).toHaveAttribute("href", "mailto:me@themba.dev");
  });

  test("copy confirmation resets and its timer is cleaned up on unmount", async () => {
    vitest.useFakeTimers();
    try {
      Object.assign(navigator, { clipboard: { writeText: vitest.fn().mockResolvedValue(undefined) } });
      const { unmount } = render(<Contact />);
      await act(async () => { fireEvent.click(screen.getByRole("button", { name: /copy email address/i })); });
      expect(screen.getByText("Copied ✓")).toBeDefined();
      act(() => vitest.advanceTimersByTime(2000));
      expect(screen.getByText("Copy email")).toBeDefined();
      await act(async () => { fireEvent.click(screen.getByRole("button", { name: /copy email address/i })); });
      unmount();
      expect(vitest.getTimerCount()).toBe(0);
    } finally {
      vitest.useRealTimers();
    }
  });

  test("renders Footer copyright and information", () => {
    render(<Footer />);
    expect(screen.getByText("Frontend Developer · South Africa")).toBeDefined();
  });

  test("renders single Skip to content link targeting #main-content with accessible focus styles", () => {
    render(
      <RootLayout>
        <Home />
      </RootLayout>,
      { container: document.body }
    );
    const skipLinks = screen.getAllByRole("link", { name: "Skip to content" });
    expect(skipLinks.length).toBe(1);
    expect(skipLinks[0].getAttribute("href")).toBe("#main-content");
    expect(skipLinks[0].className).toContain("sr-only");
    expect(skipLinks[0].className).toContain("focus-visible:not-sr-only");
  });
});
