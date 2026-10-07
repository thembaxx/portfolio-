import { ProjectCard, ProjectData } from "./ProjectCard";
import { SectionLabel } from "./SectionLabel";

export function ProjectSection() {
  const projects: ProjectData[] = [
    {
      id: "mileia",
      title: "Mileia",
      subtitle: "On-demand tradesperson marketplace · Cape Town",
      oneLiner: "An on-demand marketplace connecting local residents with verified tradespeople.",
      description:
        "Connects homeowners and businesses with verified tradespeople — location-aware discovery, stateful booking requests and accessible forms, designed mobile-first for people working in the field.",
      features: [
        "Custom search and filtering hooks",
        "Type-safe booking workflows and service schemas",
        "Design tokens with accessible contrast",
      ],
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
      tools: ["Component Architecture", "UI/UX Engineering"],
      screenshots: [
        {
          src: "/projects/mileia-1.png",
          alt: "Mileia marketplace homepage interface showing tradesperson discovery and service filtering",
          type: "desktop",
          label: "Marketplace View",
        },
        {
          src: "/projects/mileia-2.png",
          alt: "Mileia trade service listing page showing professional profiles and booking CTAs",
          type: "desktop",
          label: "Services Directory",
        },
      ],
      liveUrl: "https://mileia.vercel.app",
      githubUrl: "https://github.com/thembaxx/mileia",
    },
    {
      id: "lumni",
      title: "Lumni",
      subtitle: "AI study companion for Matric students",
      oneLiner: "An AI-powered web platform providing adaptive quizzes, past paper revisions, and study analytics.",
      description:
        "An AI-assisted learning platform for South African Matric learners: generated quizzes and explanations, past papers with rendered maths, and an offline-first client for patchy connections.",
      features: [
        "AI quiz generation and explanation breakdowns",
        "Flashcards, session timers and scoring in Zustand",
        "Past paper PDFs with KaTeX maths",
        "IndexedDB caching for low-connectivity use",
      ],
      technologies: ["React 19", "Next.js 16", "Zustand", "Appwrite", "Dexie", "Vitest", "Playwright"],
      tools: ["Zustand", "Vitest", "Playwright", "KaTeX"],
      screenshots: [
        {
          src: "/projects/lumni-1.png",
          alt: "Lumni AI learning companion home screen featuring study mode choices and course selection",
          type: "desktop",
          label: "Platform Overview",
        },
        {
          src: "/projects/lumni-2.png",
          alt: "Lumni student dashboard showing study stats, active flashcards, and progress tracking",
          type: "desktop",
          label: "Dashboard View",
        },
      ],
      liveUrl: "https://lumni-psi.vercel.app",
      githubUrl: "https://github.com/thembaxx/lumni",
    },
  ];

  return (
    <section id="work" className="portfolio-section" aria-labelledby="work-heading">
      <span id="projects" className="legacy-anchor" aria-hidden="true" />
      <div className="portfolio-wrap">
        <SectionLabel title="01 — Selected work" note="2 products" />
        <h2 id="work-heading" className="section-heading">Built, shipped, <em>live.</em></h2>
        <div className="project-list">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
