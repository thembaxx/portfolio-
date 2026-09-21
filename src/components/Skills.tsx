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
    <section id="skills" className="py-16 sm:py-20 border-b border-[var(--line)] transition-colors scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="max-w-2xl space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--accent)] font-sans">
            <span>Skills &amp; expertise</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-normal tracking-tight text-[var(--ink)]">
            Technologies and core capabilities
          </h2>
          <p className="text-sm sm:text-base text-[var(--mute)] font-sans">
            Grouped by functional domain. Only includes tools and frameworks actively used in production and verified projects.
          </p>
        </div>

        {/* Responsive Skill Grid: 1 col on mobile, 2 cols at 760px, 4 cols at 1080px desktop breakpoint */}
        <div className="grid grid-cols-1 min-[760px]:grid-cols-2 min-[1080px]:grid-cols-4 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="p-6 rounded-2xl bg-[var(--card)] border border-[var(--line)] space-y-4 flex flex-col justify-between transition-colors"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--accentSoft)] text-[var(--accent)] border border-[var(--line)] flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" strokeWidth={1.75} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-normal text-[var(--ink)]">{category.title}</h3>
                    <p className="text-xs text-[var(--mute)] font-sans mt-1 leading-relaxed">{category.description}</p>
                  </div>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs font-medium rounded-full bg-[var(--accentSoft)] text-[var(--accent)] whitespace-nowrap"
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
