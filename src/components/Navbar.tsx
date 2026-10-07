"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";

const emptySubscribe = () => () => {};

export function Navbar() {
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = mounted && resolvedTheme === "dark";
  const label = isDark ? "Switch to light theme" : "Switch to dark theme";

  return (
    <header className="portfolio-header">
      <a href="/#top" className="mono portfolio-brand" aria-label="Themba Mndebele, top">
        TM — Portfolio
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
