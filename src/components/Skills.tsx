import { Layers, Terminal, TestTube2, Wrench } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  description: string;
  skills: string[];
}

export function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Core Frontend Architecture",
      icon: Layers,
      description: "Modern web standards, UI frameworks, and type safety",
      skills: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 & CSS3"],
    },
    {
      title: "State, APIs & System Design",
      icon: Terminal,
      description: "Data fetching, client state, and backend integration",
      skills: ["REST APIs", "Appwrite", "Zustand", "Component Design", "Responsive Web Design", "Git & GitHub"],
    },
    {
      title: "Testing & Quality Assurance",
      icon: TestTube2,
      description: "Automated verification, accessibility, and performance",
      skills: ["Vitest", "Playwright", "React Testing Library", "Accessibility (WCAG)", "Web Vitals"],
    },
    {
      title: "Developer Tooling & AI Workflows",
      icon: Wrench,
      description: "Productivity tools for research, debugging, and code analysis",
      skills: ["Gemini", "DeepSeek", "Kimi", "CodeRabbit", "IndexedDB / Dexie.js", "Vercel"],
    },
  ];

  return (
    <section id="skills" className="py-16 md:py-24 border-b border-border transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-primary">
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground [text-wrap:balance]">
            Skills &amp; Technologies
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground [text-wrap:pretty]">
            Grouped by domain. Tools and frameworks actively used to deliver production applications.
          </p>
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="p-6 rounded-3xl bg-card border border-border space-y-4 hover:border-primary/40 transition-colors shadow-2xs"
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

                <div className="flex flex-wrap gap-2 pt-1">
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
