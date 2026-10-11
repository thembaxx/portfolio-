"use client";

import { useSyncExternalStore } from "react";
import { LogoMark } from "./LogoMark";
import { brand } from "@/lib/brand";
import { useTheme } from "next-themes";

const emptySubscribe = () => () => {};

export function Navbar() {
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = mounted && resolvedTheme === "dark";
  const label = isDark ? "Switch to light theme" : "Switch to dark theme";

  return (
    <header className="portfolio-header">
      <a href="/#top" className="portfolio-brand" aria-label="Themba Mndebele, top">
        <LogoMark size={32} /><span className="brand-wordmark">{brand.name}<i aria-hidden="true">.</i></span>
      </a>
      <nav className="mono" aria-label="Main navigation">
        <a href="/#work">Work</a>
        <a href="/#about">About</a>
        <a href="/#contact">Contact</a>
        <button
          type="button"
          className="theme-toggle"
          disabled={!mounted}
          onClick={() => setTheme(isDark ? "light" : "dark")}
          aria-label={mounted ? label : "Toggle theme"}
          title={mounted ? label : "Toggle theme"}
        >
          <span aria-hidden="true">◐</span>
        </button>
      </nav>
    </header>
  );
}
