"use client";

import { useState, useEffect, useCallback, useSyncExternalStore } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Menu, X, ArrowUpRight, Sun, Moon } from "lucide-react";

const emptySubscribe = () => () => {};

function useIsMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mounted = useIsMounted();
  const { theme, setTheme } = useTheme();

  // Close mobile drawer on Escape key press
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setMobileMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen, handleKeyDown]);

  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/85 border-b border-border transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Monogram / Identity Logo */}
        <Link
          href="#"
          className="flex items-center gap-2.5 group p-1 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label="Themba Mndebele - Return to top"
        >
          <div className="w-8 h-8 rounded-lg bg-secondary/80 border border-border flex items-center justify-center font-bold text-primary text-sm group-hover:border-primary/50 transition-colors">
            TM
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight leading-none group-hover:text-primary transition-colors">
              Themba Mndebele
            </span>
            <span className="text-[11px] text-muted-foreground font-normal leading-tight mt-0.5">
              Frontend Developer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-wider font-medium text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded px-1.5 py-1"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Theme Switcher, CTA Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          {/* Theme Switcher */}
          {mounted && (
            <button
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-accent active:scale-[0.95] transition-[color,background-color,border-color,transform] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-400" strokeWidth={1.75} aria-hidden="true" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" strokeWidth={1.75} aria-hidden="true" />
              )}
            </button>
          )}

          {/* Primary Navbar CTA */}
          <a
            href="mailto:mndebele.themba@gmail.com"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium bg-primary text-primary-foreground hover:bg-primary/90 pl-3.5 pr-2.5 py-2 rounded-lg active:scale-[0.97] transition-[color,background-color,border-color,transform] duration-150 ease-out shadow-2xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <span>Let’s talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.75} aria-hidden="true" />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent active:scale-[0.95] transition-[color,background-color,border-color,transform] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background border border-border"
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

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="md:hidden border-b border-border bg-card px-4 pt-3 pb-5 space-y-3"
        >
          <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground py-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded px-2"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-border">
            <a
              href="mailto:mndebele.themba@gmail.com"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full text-xs font-medium bg-primary text-primary-foreground hover:bg-primary/90 pl-4 pr-3 py-2.5 rounded-lg active:scale-[0.97] transition-[color,background-color,border-color,transform] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <span>Let’s talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.75} aria-hidden="true" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
