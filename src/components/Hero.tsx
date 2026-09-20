import { ArrowDown, Mail, MapPin, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden border-b border-slate-800/50">
      {/* Background visual highlight */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-sky-500/10 blur-[120px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          {/* Availability & Location Badge */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs font-medium text-slate-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span>Based in South Africa</span>
            </span>
            <span className="text-slate-600">·</span>
            <span className="text-sky-400">Open to remote opportunities</span>
          </div>

          {/* Main Value Proposition */}
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
              Frontend Developer building{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400">
                thoughtful digital experiences
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              Hi, I&apos;m <strong className="text-white font-semibold">Themba Mndebele</strong>. I
              specialise in <strong className="text-slate-100 font-medium">React</strong>,{" "}
              <strong className="text-slate-100 font-medium">TypeScript</strong>, and modern web
              development—combining clean engineering architecture with meticulous UI/UX detail.
            </p>
          </div>

          {/* Tech stack highlights */}
          <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-slate-400">
            <span className="font-mono text-slate-500">Specialities:</span>
            {["React", "Next.js", "TypeScript", "Tailwind CSS", "UI/UX"].map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded bg-slate-800/60 border border-slate-700/50 text-slate-300 font-medium"
              >
                {tech}
              </span>
            ))}
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-sky-950/40 border border-sky-800/40 text-sky-300 font-medium">
              <Sparkles className="w-3 h-3 text-sky-400" />
              <span>AI Workflows</span>
            </span>
          </div>

          {/* Call to Actions */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-sm transition-all shadow-lg shadow-sky-500/20 focus:outline-none focus:ring-2 focus:ring-sky-400"
            >
              <span>View projects</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href="mailto:mndebele.themba@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-800/90 hover:bg-slate-700/90 text-slate-100 border border-slate-700 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400"
            >
              <Mail className="w-4 h-4 text-sky-400" />
              <span>Contact me</span>
            </a>

            <div className="flex items-center gap-2 ml-2 pl-2 border-l border-slate-800">
              <a
                href="https://github.com/thembaxx"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400"
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
                className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-sky-400 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400"
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
