import { SectionLabel } from "./SectionLabel";

const categories = [
  {
    title: "Frontend",
    skills: "React, Next.js, TypeScript, JavaScript, Tailwind CSS, HTML5, CSS3",
  },
  {
    title: "Architecture",
    skills: "Component architecture, state management, REST APIs, responsive design, Git",
  },
  { title: "Quality", skills: "Vitest, Playwright, accessibility (a11y), frontend testing" },
  { title: "AI-assisted", skills: "Gemini, DeepSeek, Kimi, OpenCode, Cline, CodeRabbit" },
];

export function Skills() {
  return (
    <section id="skills" className="portfolio-section" aria-label="Toolkit">
      <div className="portfolio-wrap">
        <SectionLabel title="02 — Toolkit" note="Used in production" />
        <dl className="toolkit-list">
          {categories.map((category) => (
            <div key={category.title}>
              <dt className="mono">{category.title}</dt>
              <dd>{category.skills}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
