"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { LogoMark } from "./LogoMark";
import { brand } from "@/lib/brand";
import { useTheme } from "next-themes";

const emptySubscribe = () => () => {};

export function Navbar() {
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = mounted && resolvedTheme === "dark";
  const label = isDark ? "Switch to light theme" : "Switch to dark theme";

  return (
    <header className="portfolio-header">
      <Link href="/#top" className="portfolio-brand" aria-label="Themba Mndebele, top">
        <LogoMark size={32} />
        <span className="brand-wordmark">
          {brand.name}
          <i aria-hidden="true">.</i>
        </span>
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
          aria-pressed={mounted ? isDark : undefined}
          title={mounted ? label : "Toggle theme"}
        >
          <span aria-hidden="true">◐</span>
        </button>
      </nav>
    </header>
  );
}
