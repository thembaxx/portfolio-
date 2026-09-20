import { Layers, Terminal, TestTube2, Bot } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  description: string;
  skills: string[];
}

export function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend Development",
      icon: Layers,
      description: "Core UI technologies and modern frontend frameworks",
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
    },
    {
      title: "Engineering & Architecture",
      icon: Terminal,
      description: "System design, state management, and developer tooling",
      skills: [
        "REST APIs",
        "API Integration",
        "Component Architecture",
        "Responsive Web Design",
        "Git / GitHub",
        "State Management",
      ],
    },
    {
      title: "Testing & Quality",
      icon: TestTube2,
      description: "Automated unit, integration, and end-to-end testing",
      skills: ["Vitest", "Playwright", "Frontend Testing", "Accessibility (a11y)"],
    },
    {
      title: "AI-Assisted Engineering",
      icon: Bot,
      description: "Modern AI-assisted development tooling and models",
      skills: ["Gemini", "Kimi", "DeepSeek", "OpenCode", "Cline", "CodeRabbit"],
    },
  ];

  return (
    <section id="skills" className="py-20 border-b border-border transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-primary">
            <span>Skills &amp; expertise</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground [text-wrap:balance]">
            Technologies and core capabilities
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground [text-wrap:pretty]">
            Grouped by functional domain. Only includes tools and frameworks actively used in production and verified projects.
          </p>
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="p-6 rounded-3xl bg-card border border-border space-y-4 hover:border-primary/50 transition-colors shadow-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-secondary text-primary border border-border shrink-0">
                    <Icon className="w-5 h-5" strokeWidth={1.75} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground [text-wrap:balance]">{category.title}</h3>
                    <p className="text-xs text-muted-foreground [text-wrap:pretty]">{category.description}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs font-medium rounded-md bg-secondary/80 border border-border text-foreground hover:bg-accent transition-colors whitespace-nowrap"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
