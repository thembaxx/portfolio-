import { Code2, Cpu, UserCheck } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 border-b border-slate-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-start gap-10 lg:gap-16">
          {/* Section Heading */}
          <div className="md:w-1/3 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-sky-400">
              <UserCheck className="w-4 h-4" />
              <span>About Me</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Engineering with strong design thinking &amp; modern AI workflows.
            </h2>
          </div>

          {/* Recruiter-friendly concise background */}
          <div className="md:w-2/3 space-y-6 text-slate-300 text-base leading-relaxed">
            <p>
              I am a frontend developer with approximately{" "}
              <strong className="text-white font-semibold">4 years of professional experience</strong>{" "}
              specialising in <strong className="text-white font-semibold">React, TypeScript, Next.js</strong>, and modern CSS architecture. My passion lies in crafting high-performance, resilient, and intuitive user interfaces.
            </p>

            <p>
              With a background bridging design and engineering, I prioritize design system consistency, responsive layouts, accessibility, and state management. I care deeply about how digital products look, feel, and function for real users.
            </p>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 space-y-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-100">
                <Cpu className="w-4 h-4 text-sky-400" />
                <span>AI-Assisted Engineering Workflow</span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                I integrate modern AI tooling—including Gemini, DeepSeek, Kimi, OpenCode, Cline, and CodeRabbit—into my engineering workflow. I leverage AI to accelerate research, investigate bugs, write comprehensive test suites with Vitest and Playwright, and explore optimal implementation strategies while maintaining full ownership over code architecture, reliability, and security.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
