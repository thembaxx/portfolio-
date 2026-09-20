"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Menu, X, ArrowUpRight, Sun, Moon } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Analytics", href: "#analytics" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Approach", href: "#approach" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Monogram / Name Logo */}
        <Link
          href="#"
          className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md p-1 active:scale-[0.98] transition-transform duration-150 ease-out"
          aria-label="Themba Mndebele Home"
        >
          <div className="w-8 h-8 rounded-lg bg-secondary/80 border border-border flex items-center justify-center font-semibold text-primary text-sm group-hover:border-primary/50 transition-colors">
            TM
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight leading-none group-hover:text-primary transition-colors">
              Themba Mndebele
            </span>
            <span className="text-[11px] text-muted-foreground font-normal leading-tight">
              Frontend Developer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-wider font-medium text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded px-1.5 py-1"
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
              className="p-2 rounded-lg bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-accent transition-colors active:scale-[0.98] transition-transform duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Toggle light and dark theme"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>
          )}

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium bg-primary text-primary-foreground hover:bg-primary/90 pl-3.5 pr-2.5 py-2 rounded-lg active:scale-[0.98] transition-transform duration-150 ease-out shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <span>Let&rsquo;s talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent active:scale-[0.98] transition-transform duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring border border-border"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border bg-card px-4 pt-3 pb-5 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-muted-foreground hover:text-foreground py-1.5 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full text-xs font-medium bg-primary text-primary-foreground hover:bg-primary/90 pl-4 pr-3 py-2 rounded-lg active:scale-[0.98] transition-transform duration-150 ease-out"
            >
              <span>Let&rsquo;s talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
