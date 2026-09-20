import { Palette, Zap, Sparkles, BookOpen } from "lucide-react";

export function Approach() {
  const principles = [
    {
      title: "Design-Minded Engineering",
      icon: Palette,
      description:
        "I care deeply about how interfaces look, feel, and behave—not just whether they function. I build robust design systems with pixel-perfect attention to detail, motion design, and micro-interactions.",
    },
    {
      title: "Modern Tech Stack & Quality",
      icon: Zap,
      description:
        "React, TypeScript, Next.js, and Tailwind CSS are at the core of my workflow. I maintain clean component architecture, strong static typing, and high standards for performance and accessibility.",
    },
    {
      title: "AI-Assisted Workflow",
      icon: Sparkles,
      description:
        "I leverage modern AI tools (Gemini, DeepSeek, CodeRabbit) to accelerate research, debug edge cases, write tests, and explore implementations—while retaining absolute technical ownership.",
    },
    {
      title: "Continuous Learning",
      icon: BookOpen,
      description:
        "Web development evolves rapidly. I consistently experiment with emerging web specifications, state management paradigms, and testing methodologies to stay ahead.",
    },
  ];

  return (
    <section id="approach" className="py-20 border-b border-border transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 dark:text-sky-400">
            <span>Engineering Philosophy</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            How I approach software engineering
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Principled execution combining engineering rigor, visual design craft, and modern AI acceleration.
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-5 rounded-xl bg-card border border-border space-y-3 hover:border-primary/50 transition-all shadow-xs"
              >
                <div className="p-2.5 w-fit rounded-lg bg-secondary text-blue-600 dark:text-sky-400 border border-border">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
