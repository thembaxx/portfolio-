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

  test("renders Hero with title, role and primary contact CTAs without gradients", () => {
    const { container } = render(<Hero />);
    expect(screen.getByText("Based in South Africa")).toBeDefined();
    expect(screen.getByText("Open to remote opportunities")).toBeDefined();
    expect(screen.getByText("View my work")).toBeDefined();
    expect(screen.getByText("Let’s connect")).toBeDefined();
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
    expect(screen.queryByText("Nextdot (next-beta)")).toBeNull();
  });

  test("renders Contact section with email mailto link and social profiles", () => {
    render(<Contact />);
    expect(screen.getByText("mndebele.themba@gmail.com")).toBeDefined();
    expect(screen.getByText("LinkedIn Profile")).toBeDefined();
  });

  test("renders Footer copyright and information", () => {
    render(<Footer />);
    expect(screen.getByText("Frontend Developer · React · TypeScript · South Africa")).toBeDefined();
  });
});
