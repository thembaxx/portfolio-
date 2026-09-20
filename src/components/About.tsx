import { Cpu, UserCheck } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 border-b border-border transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-start gap-10 lg:gap-16">
          {/* Section Heading */}
          <div className="md:w-1/3 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-primary">
              <UserCheck className="w-4 h-4" strokeWidth={1.75} aria-hidden="true" />
              <span>About &amp; Approach</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground [text-wrap:balance]">
              Engineering focus and professional approach
            </h2>
          </div>

          {/* Recruiter-friendly concise background */}
          <div className="md:w-2/3 space-y-6 text-muted-foreground text-sm sm:text-base leading-relaxed">
            <p className="[text-wrap:pretty]">
              I am a frontend developer with{" "}
              <strong className="text-foreground font-semibold">4 years of professional experience</strong>{" "}
              building modern web applications with <strong className="text-foreground font-semibold">React, TypeScript, Next.js</strong>, and Tailwind CSS.
            </p>

            <p className="[text-wrap:pretty]">
              My focus is on creating responsive, performant, and accessible user interfaces. I value component modularity, design system fidelity, and clear state management—ensuring that complex web interfaces remain scalable and maintainable.
            </p>

            {/* AI-assisted workflow card */}
            <div className="p-5 rounded-2xl bg-card border border-border space-y-2.5 shadow-2xs">
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <Cpu className="w-4 h-4 text-primary" strokeWidth={1.75} aria-hidden="true" />
                <span>AI-Assisted Development Workflow</span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed [text-wrap:pretty]">
                I utilize modern AI tools (including Gemini, DeepSeek, Kimi, and CodeRabbit) as engineering productivity accelerators for technical research, rapid edge-case discovery, and test suite generation—while maintaining full ownership over code quality, architecture, and security.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
