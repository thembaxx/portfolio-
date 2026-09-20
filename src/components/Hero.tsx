import { ArrowDown, Mail, MapPin, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden border-b border-border transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          {/* Availability & Location Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-card border border-border text-xs font-medium shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-muted-foreground" strokeWidth={1.75} aria-hidden="true" />
              <span>Based in South Africa</span>
            </span>
            <span className="text-muted-foreground" aria-hidden="true">·</span>
            <span className="text-primary font-semibold">
              Open to remote opportunities
            </span>
          </div>

          {/* Main Value Proposition */}
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] [text-wrap:balance]">
              Frontend Developer building{" "}
              <span className="text-primary font-bold">
                thoughtful digital experiences
              </span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl font-normal [text-wrap:pretty]">
              Hi, I’m <strong className="text-foreground font-semibold">Themba Mndebele</strong>. I
              specialise in <strong className="text-foreground font-medium">React</strong>,{" "}
              <strong className="text-foreground font-medium">TypeScript</strong>, and modern web
              development&mdash;combining clean engineering architecture with meticulous UI/UX detail.
            </p>
          </div>

          {/* Tech stack highlights */}
          <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
            <span className="font-mono text-muted-foreground">Specialities:</span>
            {["React", "Next.js", "TypeScript", "Tailwind CSS", "UI/UX"].map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md bg-card border border-border text-foreground font-medium shadow-2xs whitespace-nowrap"
              >
                {tech}
              </span>
            ))}
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-accent border border-border text-primary font-medium whitespace-nowrap">
              <Sparkles className="w-3 h-3 text-primary" strokeWidth={1.75} aria-hidden="true" />
              <span>AI Workflows</span>
            </span>
          </div>

          {/* Call to Actions */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            {/* Button with icon on right gets slightly smaller padding on the icon side: pl-4.5 pr-3.5 */}
            <a
              href="#projects"
              className="inline-flex items-center gap-2 pl-4.5 pr-3.5 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm shadow-sm hover:bg-primary/90 active:scale-[0.97] transition-[color,background-color,border-color,transform] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <span>View projects</span>
              <ArrowDown className="w-4 h-4" strokeWidth={2} aria-hidden="true" />
            </a>

            {/* Button with icon on left gets slightly smaller padding on the icon side: pl-3.5 pr-4.5 */}
            <a
              href="mailto:me@themba.dev"
              className="inline-flex items-center gap-2 pl-3.5 pr-4.5 py-2.5 rounded-lg bg-card hover:bg-accent text-foreground border border-border text-sm font-medium active:scale-[0.97] transition-[color,background-color,border-color,transform] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Mail className="w-4 h-4 text-primary" strokeWidth={1.75} aria-hidden="true" />
              <span>Contact me</span>
            </a>

            <div className="flex items-center gap-2 ml-2 pl-2 border-l border-border">
              <a
                href="https://github.com/thembaxx"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-card hover:bg-accent border border-border text-muted-foreground hover:text-foreground active:scale-[0.95] transition-[color,background-color,border-color,transform] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-label="GitHub Profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/themba-p"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-card hover:bg-accent border border-border text-muted-foreground hover:text-primary active:scale-[0.95] transition-[color,background-color,border-color,transform] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
