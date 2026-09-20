export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-card text-muted-foreground border-t border-border transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center md:text-left">
          <p className="text-sm font-semibold text-foreground">Themba Mndebele</p>
          <p className="text-xs text-muted-foreground">
            Frontend Developer · React · TypeScript · South Africa
          </p>
        </div>

        <div className="flex items-center gap-6 text-xs font-medium">
          <a
            href="https://github.com/thembaxx"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring rounded px-1 py-0.5"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/themba-p"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring rounded px-1 py-0.5"
          >
            LinkedIn
          </a>
          <a
            href="mailto:me@themba.dev"
            className="hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring rounded px-1 py-0.5"
          >
            Email
          </a>
        </div>

        <div className="text-xs text-muted-foreground text-center md:text-right">
          &copy; {currentYear} Themba Mndebele. Built with React &amp; TypeScript.
        </div>
      </div>
    </footer>
  );
}
