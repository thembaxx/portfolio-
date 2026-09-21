export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-[var(--card)] text-[var(--mute)] border-t border-[var(--line)] transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center md:text-left">
          <p className="font-serif font-semibold text-[var(--ink)] text-sm">Themba Mndebele</p>
          <p className="text-xs text-[var(--mute)] font-sans">
            Frontend Developer · React · TypeScript · South Africa
          </p>
        </div>

        <div className="flex items-center gap-6 text-xs font-semibold uppercase tracking-wider">
          <a
            href="https://github.com/thembaxx"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--ink)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded px-1.5 py-0.5"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/themba-p"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--ink)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded px-1.5 py-0.5"
          >
            LinkedIn
          </a>
          <a
            href="mailto:me@themba.dev"
            className="hover:text-[var(--ink)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded px-1.5 py-0.5"
          >
            Email me
          </a>
        </div>

        <div className="text-xs text-[var(--mute)] text-center md:text-right font-sans">
          &copy; {currentYear} Themba Mndebele. Built with React &amp; TypeScript.
        </div>
      </div>
    </footer>
  );
}
