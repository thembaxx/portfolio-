"use client";

import { useState } from "react";
import { Mail, ArrowUpRight, Copy, Check } from "lucide-react";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("me@themba.dev");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback in case clipboard permission is rejected
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 border-b border-[var(--line)] transition-colors relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--accent)] font-sans">
              <span>Get in touch</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight leading-tight text-[var(--ink)]">
              Have an opportunity or project in mind? Let’s build something exceptional.
            </h2>
            <p className="text-sm sm:text-base text-[var(--mute)] leading-relaxed font-sans">
              I am actively available for full-time frontend engineering roles, React development contracts, and technical collaborations. Feel free to reach out via email or LinkedIn.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <div className="flex flex-wrap items-center gap-2">
              <a
                href="mailto:me@themba.dev"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-[var(--accent)] text-white font-medium text-sm hover:opacity-90 active:scale-95 transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              >
                <Mail className="w-4 h-4" strokeWidth={2} aria-hidden="true" />
                <span>me@themba.dev</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                aria-label="Copy email address to clipboard"
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-3 rounded-full bg-[var(--card)] border border-[var(--line)] text-xs font-medium text-[var(--ink)] hover:bg-[var(--accentSoft)] hover:text-[var(--accent)] active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[var(--accent)]" strokeWidth={2} aria-hidden="true" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[var(--mute)]" strokeWidth={1.75} aria-hidden="true" />
                    <span>Copy</span>
                  </>
                )}
              </button>
              <span className="sr-only" aria-live="polite">
                {copied ? "Email address copied to clipboard" : ""}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="https://www.linkedin.com/in/themba-p"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-sm font-medium text-[var(--ink)] hover:underline decoration-[var(--accent)] underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded"
              >
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-4 h-4 text-[var(--accent)]" strokeWidth={1.75} aria-hidden="true" />
              </a>

              <a
                href="https://github.com/thembaxx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-sm font-medium text-[var(--ink)] hover:underline decoration-[var(--accent)] underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-4 h-4 text-[var(--accent)]" strokeWidth={1.75} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
