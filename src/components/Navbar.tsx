"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Approach", href: "#approach" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#090a0f]/80 border-b border-slate-800/60 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Monogram / Name Logo */}
        <Link
          href="#"
          className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-sky-400 rounded-md p-1"
          aria-label="Themba Mndebele Home"
        >
          <div className="w-8 h-8 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-center font-semibold text-sky-400 text-sm group-hover:border-sky-500/50 transition-colors">
            TM
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-slate-100 tracking-tight leading-none group-hover:text-white transition-colors">
              Themba Mndebele
            </span>
            <span className="text-[11px] text-slate-400 font-normal leading-tight">
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
              className="text-xs uppercase tracking-wider font-medium text-slate-300 hover:text-sky-400 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400 rounded px-1.5 py-1"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium bg-slate-800/90 hover:bg-slate-700 text-slate-100 hover:text-white border border-slate-700/80 hover:border-slate-600 px-3.5 py-1.5 rounded-md transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
          >
            <span>Let&apos;s talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-sky-400" />
          </a>

          <button
            type="button"
            className="md:hidden p-2 rounded-md text-slate-400 hover:text-slate-100 hover:bg-slate-800/80 focus:outline-none focus:ring-2 focus:ring-sky-400"
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
        <div className="md:hidden border-b border-slate-800 bg-[#0c0e17] px-4 pt-3 pb-5 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-slate-300 hover:text-sky-400 py-1.5 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full text-xs font-medium bg-sky-500/10 text-sky-400 hover:bg-sky-500/20 border border-sky-500/30 px-4 py-2 rounded-md transition-all"
            >
              <span>Let&apos;s talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
