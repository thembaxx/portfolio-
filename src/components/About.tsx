import { Cpu, UserCheck } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 border-b border-border transition-colors scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-start gap-10 lg:gap-16">
          {/* Section Heading */}
          <div className="md:w-1/3 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-primary">
              <UserCheck className="w-4 h-4" strokeWidth={1.75} aria-hidden="true" />
              <span>About me</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground [text-wrap:balance]">
              Engineering with strong design thinking &amp; modern AI workflows.
            </h2>
          </div>

          {/* Recruiter-friendly concise background */}
          <div className="md:w-2/3 space-y-6 text-muted-foreground text-base leading-relaxed">
            <p className="[text-wrap:pretty]">
              I am a frontend developer with approximately{" "}
              <strong className="text-foreground font-semibold">4 years of professional experience</strong>{" "}
              specialising in <strong className="text-foreground font-semibold">React, TypeScript, Next.js</strong>, and modern CSS architecture. My passion lies in crafting high-performance, resilient, and intuitive user interfaces.
            </p>

            <p className="[text-wrap:pretty]">
              With a background bridging design and engineering, I prioritize design system consistency, responsive layouts, accessibility, and state management. I care deeply about how digital products look, feel, and function for real users.
            </p>

            <div className="p-5 rounded-2xl bg-card border border-border space-y-3 shadow-xs">
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <Cpu className="w-4 h-4 text-primary" strokeWidth={1.75} aria-hidden="true" />
                <span>AI-Assisted Engineering Workflow</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed [text-wrap:pretty]">
                I integrate modern AI tooling—including Gemini, DeepSeek, Kimi, OpenCode, Cline, and CodeRabbit—into my engineering workflow. I leverage AI to accelerate research, investigate bugs, write comprehensive test suites with Vitest and Playwright, and explore optimal implementation strategies while maintaining full ownership over code architecture, reliability, and security.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
