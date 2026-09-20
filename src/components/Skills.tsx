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
    <section id="skills" className="py-20 border-b border-slate-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-sky-400">
            <span>Skills &amp; Expertise</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Technologies and core capabilities
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
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
                className="p-6 rounded-xl bg-[#11131f] border border-slate-800/80 space-y-4 hover:border-slate-700/80 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-slate-800/80 text-sky-400 border border-slate-700/50">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">{category.title}</h3>
                    <p className="text-xs text-slate-400">{category.description}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs font-medium rounded-md bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:border-slate-700 transition-colors"
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
