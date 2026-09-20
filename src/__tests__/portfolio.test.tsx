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

interface MockImageProps {
  src: string;
  alt?: string;
  fill?: boolean;
  priority?: boolean;
  [key: string]: unknown;
}

// Mock next/image cleanly for JSDOM
vitest.mock("next/image", () => ({
  default: ({ src, alt, fill, priority, ...rest }: MockImageProps) => {
    void fill;
    void priority;
    // eslint-disable-next-next/no-img-element
    return <img src={src} {...rest} alt={alt || ""} />;
  },
}));

// Mock next-themes
vitest.mock("next-themes", () => ({
  useTheme: () => ({
    theme: "dark",
    setTheme: vitest.fn(),
  }),
  ThemeProvider: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

describe("Themba Mndebele Developer Portfolio", () => {
  test("renders Navbar with branding and navigation links", () => {
    render(<Navbar />);
    expect(screen.getByText("Themba Mndebele")).toBeDefined();
    expect(screen.getByText("Frontend Developer")).toBeDefined();
    expect(screen.getByText("About")).toBeDefined();
    expect(screen.getByText("Projects")).toBeDefined();
    expect(screen.getByText("Skills")).toBeDefined();
  });

  test("renders Hero with headline, role and primary CTAs", () => {
    render(<Hero />);
    expect(screen.getByText("Based in South Africa")).toBeDefined();
    expect(screen.getByText("Open to remote opportunities")).toBeDefined();
    expect(screen.getByText("View my work")).toBeDefined();
    expect(screen.getByText("Let’s connect")).toBeDefined();
  });

  test("renders About section with concise experience and AI workflow card", () => {
    render(<About />);
    expect(screen.getByText("4 years of professional experience")).toBeDefined();
    expect(screen.getByText("AI-Assisted Development Workflow")).toBeDefined();
  });

  test("renders Skills grouped logically", () => {
    render(<Skills />);
    expect(screen.getByText("Core Frontend Architecture")).toBeDefined();
    expect(screen.getByText("State, APIs & System Design")).toBeDefined();
    expect(screen.getByText("Testing & Quality Assurance")).toBeDefined();
    expect(screen.getByText("Developer Tooling & AI Workflows")).toBeDefined();
    expect(screen.getAllByText("React").length).toBeGreaterThan(0);
    expect(screen.getAllByText("TypeScript").length).toBeGreaterThan(0);
  });

  test("renders Featured Case Studies with production applications", () => {
    render(<ProjectSection />);
    expect(screen.getByText("Mileia")).toBeDefined();
    expect(screen.getByText("Lumni")).toBeDefined();
  });

  test("renders Contact section with direct email and LinkedIn profile", () => {
    render(<Contact />);
    expect(screen.getByText("mndebele.themba@gmail.com")).toBeDefined();
    expect(screen.getByText("LinkedIn Profile")).toBeDefined();
  });

  test("renders Footer copyright and information", () => {
    render(<Footer />);
    expect(screen.getByText("Frontend Developer · React · TypeScript · South Africa")).toBeDefined();
  });
});
