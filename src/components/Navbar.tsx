"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon } from "lucide-react";

const emptySubscribe = () => () => {};

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <>
      <header className="sticky top-0 z-40 bg-[var(--bg)]/90 backdrop-blur-md border-b border-[var(--line)] transition-colors">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo / Brand */}
          <Link
            href="#"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-lg p-1"
            aria-label="Themba Mndebele Home"
          >
            <div className="w-8 h-8 rounded-full bg-[var(--accentSoft)] border border-[var(--line)] flex items-center justify-center font-serif font-semibold text-[var(--accent)] text-sm group-hover:scale-105 transition-transform">
              TM
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-semibold text-sm sm:text-base tracking-tight text-[var(--ink)] leading-none">
                Themba Mndebele
              </span>
              <span className="text-xs text-[var(--mute)] font-sans mt-0.5 leading-none">
                Frontend Developer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-wider text-[var(--mute)] hover:text-[var(--ink)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded px-1.5 py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile menu toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              className="w-9 h-9 flex items-center justify-center rounded-lg text-[var(--mute)] hover:text-[var(--ink)] hover:bg-[var(--card)] transition-colors border border-[var(--line)]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" strokeWidth={1.75} aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" strokeWidth={1.75} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation-drawer"
            className="md:hidden border-b border-[var(--line)] bg-[var(--bg)] px-4 pt-3 pb-5 space-y-3"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-medium text-[var(--mute)] hover:text-[var(--ink)] py-1.5 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Floating Theme Toggle Button - Fixed Top Right as specified */}
      {mounted && (
        <button
          type="button"
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className="fixed top-3.5 right-4 z-50 w-10 h-10 rounded-full bg-[var(--card)] border border-[var(--line)] text-[var(--ink)] flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
          aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
          title={isDark ? "Switch to light theme" : "Switch to dark theme"}
        >
          {isDark ? (
            <Sun className="w-4 h-4 text-amber-400" strokeWidth={2} aria-hidden="true" />
          ) : (
            <Moon className="w-4 h-4 text-[var(--ink)]" strokeWidth={2} aria-hidden="true" />
          )}
        </button>
      )}
    </>
  );
}
