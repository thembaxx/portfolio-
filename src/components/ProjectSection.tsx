import { ProjectCard, ProjectData } from "./ProjectCard";
import { FolderGit2 } from "lucide-react";

export function ProjectSection() {
  const projects: ProjectData[] = [
    {
      id: "mileia",
      title: "Mileia",
      subtitle: "On-Demand Tradesperson Marketplace Platform",
      oneLiner: "An on-demand marketplace application connecting Cape Town residents with verified local tradespeople.",
      demonstrates: ["React & TypeScript", "Mobile-First UX", "Dynamic Filtering", "Component Architecture"],
      description:
        "Engineered the full frontend application using Next.js App Router and TypeScript. Built responsive location-aware service selection flows, interactive service category filtering, and a mobile-optimised design system tailored for fast field access.",
      features: [
        "Location-aware trade service search and verified professional directory",
        "On-demand booking request flow with dynamic service selection",
        "Mobile-first responsive UI built with Tailwind CSS and accessible controls",
        "Client-side state management and reusable UI component library",
      ],
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
      screenshots: [
        {
          src: "/projects/mileia-1.png",
          alt: "Mileia marketplace homepage interface",
          type: "desktop",
          label: "Marketplace View",
        },
        {
          src: "/projects/mileia-2.png",
          alt: "Mileia tradesperson services listing",
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
      subtitle: "AI-Powered Study Platform for South African Matric Students",
      oneLiner: "An AI-enhanced study ecosystem providing adaptive quizzes, flashcards, and exam preparation for Matric students.",
      demonstrates: ["React 19 & Next.js 16", "AI API Integration", "Offline-First Storage", "Automated Testing"],
      description:
        "Built the complete web application leveraging React 19, Next.js 16, TypeScript, and Appwrite backend services. Implemented adaptive quiz interfaces with KaTeX math rendering, Zustand state management, IndexedDB offline caching via Dexie.js, and Vitest test coverage.",
      features: [
        "AI-generated personalized quizzes and South African Matric syllabus past paper modules",
        "Offline-first architecture utilizing Dexie.js and IndexedDB local caching",
        "Interactive study analytics dashboard with KaTeX mathematical expression rendering",
        "Comprehensive unit and component test suites written with Vitest and React Testing Library",
      ],
      technologies: ["React 19", "TypeScript", "Next.js 16", "Tailwind CSS", "Appwrite", "Vitest"],
      screenshots: [
        {
          src: "/projects/lumni-1.png",
          alt: "Lumni AI study platform homepage view",
          type: "desktop",
          label: "Platform View",
        },
        {
          src: "/projects/lumni-2.png",
          alt: "Lumni study session dashboard interface",
          type: "desktop",
          label: "Dashboard View",
        },
      ],
      liveUrl: "https://lumni-psi.vercel.app",
      githubUrl: "https://github.com/thembaxx/lumni",
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-24 border-b border-border transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-primary">
            <FolderGit2 className="w-4 h-4" strokeWidth={1.75} aria-hidden="true" />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground [text-wrap:balance]">
            Production Web Applications
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground [text-wrap:pretty]">
            Credible engineering evidence showcasing React architecture, TypeScript rigor, responsive UI/UX, state management, and automated testing.
          </p>
        </div>

        {/* Project List */}
        <div className="space-y-12">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
