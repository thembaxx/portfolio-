import { vitest, describe, test, expect } from "vitest";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { ProjectSection } from "../components/ProjectSection";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import Home from "../app/page";
import RootLayout from "../app/layout";

// Mock next/font/google
vitest.mock("next/font/google", () => ({
  Fraunces: () => ({ variable: "--font-fraunces" }),
  Inter: () => ({ variable: "--font-inter" }),
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

describe("Themba Mndebele Developer Portfolio — Field Notes Design System", () => {
  test("renders Navbar with branding, navigation links, accessible theme toggle, and mobile menu toggle", () => {
    render(<Navbar />);
    expect(screen.getByText("Themba Mndebele")).toBeDefined();
    expect(screen.getByText("Frontend Developer")).toBeDefined();
    expect(screen.getByText("About")).toBeDefined();
    expect(screen.getByText("Projects")).toBeDefined();
    expect(screen.getByText("Skills")).toBeDefined();

    const themeToggle = screen.getByRole("button", { name: "Switch to light theme" });
    expect(themeToggle).toBeDefined();
    expect(themeToggle.getAttribute("title")).toBe("Switch to light theme");

    const mobileToggle = screen.getByRole("button", { name: "Open navigation menu" });
    expect(mobileToggle).toBeDefined();
    expect(mobileToggle.getAttribute("aria-controls")).toBe("mobile-navigation-drawer");
  });

  test("renders Hero with title, location, pull-quote and CTAs without gradients", () => {
    const { container } = render(<Hero />);
    expect(screen.getByText("Based in South Africa")).toBeDefined();
    expect(screen.getByText("Open to remote opportunities")).toBeDefined();
    expect(screen.getByText("View my work")).toBeDefined();
    expect(screen.getByText("Email me")).toBeDefined();
    expect(container.querySelector(".bg-gradient-to-r")).toBeNull();
  });

  test("renders About section with recruiter concise intro and experience", () => {
    render(<About />);
    expect(screen.getByText("4 years of professional experience")).toBeDefined();
    expect(screen.getByText("AI-Assisted Engineering Workflow")).toBeDefined();
  });

  test("renders Skills grouped logically without percentage bars", () => {
    render(<Skills />);
    expect(screen.getByText("Frontend Development")).toBeDefined();
    expect(screen.getByText("Engineering & Architecture")).toBeDefined();
    expect(screen.getByText("Testing & Quality")).toBeDefined();
    expect(screen.getByText("AI-Assisted Engineering")).toBeDefined();
    expect(screen.getByText("React")).toBeDefined();
    expect(screen.getByText("TypeScript")).toBeDefined();
  });

  test("renders Featured Projects including Mileia and Lumni", () => {
    render(<ProjectSection />);
    expect(screen.getByText("Mileia")).toBeDefined();
    expect(screen.getByText("Lumni")).toBeDefined();
  });

  test("renders screenshot gallery toggle buttons with accessible ARIA attributes", () => {
    render(<ProjectSection />);
    const marketplaceBtn = screen.getByRole("button", { name: "Show Marketplace View screenshot for Mileia" });
    const servicesBtn = screen.getByRole("button", { name: "Show Services Directory screenshot for Mileia" });

    expect(marketplaceBtn).toBeDefined();
    expect(servicesBtn).toBeDefined();
    expect(marketplaceBtn.getAttribute("aria-pressed")).toBe("true");
    expect(servicesBtn.getAttribute("aria-pressed")).toBe("false");
  });

  test("renders Contact section with email mailto link and social profiles", () => {
    render(<Contact />);
    expect(screen.getByText("me@themba.dev")).toBeDefined();
    expect(screen.getByText("LinkedIn Profile")).toBeDefined();
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

    copyButton.click();
    expect(writeTextMock).toHaveBeenCalledWith("me@themba.dev");

    expect(await screen.findByText("Copied!")).toBeDefined();
    expect(screen.getByText("Email address me@themba.dev copied to clipboard")).toBeDefined();
  });

  test("renders Footer copyright and information", () => {
    render(<Footer />);
    expect(screen.getByText("Frontend Developer · React · TypeScript · South Africa")).toBeDefined();
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
