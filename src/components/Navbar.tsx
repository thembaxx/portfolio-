"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

const emptySubscribe = () => () => {};

export function Navbar() {
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = mounted && resolvedTheme === "dark";
  const label = isDark ? "Switch to light theme" : "Switch to dark theme";

  return (
    <header className="portfolio-header">
      <Link href="/#top" className="mono portfolio-brand" aria-label="Themba Mndebele, top">
        TM — Portfolio
      </Link>
      <nav className="mono" aria-label="Main navigation">
        <Link href="/#work">Work</Link>
        <Link href="/#about">About</Link>
        <Link href="/#contact">Contact</Link>
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
