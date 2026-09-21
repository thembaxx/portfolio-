import { ArrowDown, Mail, MapPin, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="py-12 sm:py-16 md:py-24 border-b border-[var(--line)] transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[var(--card)] border border-[var(--line)] text-xs font-medium text-[var(--ink)]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]"></span>
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[var(--mute)]" strokeWidth={1.75} aria-hidden="true" />
            <span>Based in South Africa</span>
          </span>
          <span className="text-[var(--mute)]" aria-hidden="true">·</span>
          <span className="text-[var(--accent)] font-semibold">
            Open to remote opportunities
          </span>
        </div>

        {/* Headlines */}
        <div className="space-y-4 max-w-3xl">
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[var(--ink)] leading-[1.15]">
            Themba Mndebele
            <span className="block font-sans font-medium text-lg sm:text-2xl text-[var(--mute)] mt-2">
              Frontend Developer · React · TypeScript
            </span>
          </h1>

          {/* Italic serif pull-quote style lead paragraph as required by design system */}
          <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-[var(--ink)] leading-relaxed max-w-2xl">
            "I build high-performance, accessible, production-ready web applications with a focus on UI/UX detail and clean architecture."
          </p>

          <p className="text-sm sm:text-base text-[var(--mute)] leading-relaxed max-w-2xl font-sans">
            Specialising in <strong className="text-[var(--ink)] font-semibold">React</strong>, <strong className="text-[var(--ink)] font-semibold">TypeScript</strong>, and <strong className="text-[var(--ink)] font-semibold">Next.js</strong> to deliver thoughtful, resilient user experiences.
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="font-sans font-medium text-[var(--mute)] uppercase tracking-wider text-[11px]">
            Specialities:
          </span>
          {["React", "TypeScript", "Next.js", "Tailwind CSS", "UI/UX Engineering"].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-[var(--accentSoft)] text-[var(--accent)] font-medium"
            >
              {tech}
            </span>
          ))}
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[var(--card)] border border-[var(--line)] text-[var(--ink)] font-medium">
            <Sparkles className="w-3.5 h-3.5 text-[var(--accent)]" strokeWidth={1.75} aria-hidden="true" />
            <span>AI-Assisted Workflows</span>
          </span>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[var(--accent)] text-white font-medium text-sm hover:opacity-90 active:scale-95 transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
          >
            <span>View my work</span>
            <ArrowDown className="w-4 h-4" strokeWidth={2} aria-hidden="true" />
          </a>

          <a
            href="mailto:me@themba.dev"
            className="inline-flex items-center gap-1.5 px-2 py-1 text-sm font-medium text-[var(--ink)] hover:underline decoration-[var(--accent)] underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded"
          >
            <Mail className="w-4 h-4 text-[var(--accent)]" strokeWidth={1.75} aria-hidden="true" />
            <span>Email me</span>
          </a>

          <div className="flex items-center gap-3 pl-2 border-l border-[var(--line)]">
            <a
              href="https://github.com/thembaxx"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-full text-[var(--mute)] hover:text-[var(--ink)] hover:bg-[var(--card)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/themba-p"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-full text-[var(--mute)] hover:text-[var(--accent)] hover:bg-[var(--card)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
