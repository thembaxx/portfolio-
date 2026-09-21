import { ProjectCard, ProjectData } from "./ProjectCard";
import { FolderGit2 } from "lucide-react";

export function ProjectSection() {
  const projects: ProjectData[] = [
    {
      id: "mileia",
      title: "Mileia",
      subtitle: "On-Demand Tradesperson Marketplace Platform",
      oneLiner: "An on-demand marketplace connecting local residents with verified tradespeople.",
      description:
        "Mileia connects homeowners and businesses in Cape Town with verified tradespeople. Demonstrates location-aware filtering, responsive service discovery UI, stateful booking request flows, and accessible form controls.",
      features: [
        "React component architecture & custom search filtering hooks",
        "TypeScript type safety across booking workflows & service data schemas",
        "Mobile-first responsive interface tailored for field tradespeople and customers",
        "Tailwind CSS styling with consistent design tokens and accessible contrast",
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
      subtitle: "AI-Powered Study Ecosystem for Matric Students",
      oneLiner: "An AI-powered web platform providing adaptive quizzes, past paper revisions, and study analytics.",
      description:
        "Lumni empowers South African Matric students with AI-assisted learning tools. Demonstrates React 19 features, Next.js 16 App Router architecture, state management with Zustand, Appwrite backend integration, and offline caching with IndexedDB.",
      features: [
        "AI model integration for dynamic quiz generation and explanation breakdowns",
        "Zustand state management for interactive flashcards, session timers, and quiz scoring",
        "Syllabus alignment with past paper PDF rendering & KaTeX mathematical expression support",
        "Offline-first client caching using Dexie.js & IndexedDB for low-connectivity environments",
      ],
      technologies: ["React 19", "TypeScript", "Next.js 16", "Tailwind CSS", "Appwrite"],
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
    <section id="projects" className="py-16 sm:py-20 border-b border-[var(--line)] transition-colors scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="max-w-2xl space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--accent)] font-sans">
            <FolderGit2 className="w-4 h-4" strokeWidth={1.75} aria-hidden="true" />
            <span>Featured work</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-normal tracking-tight text-[var(--ink)]">
            Production projects &amp; applications
          </h2>
          <p className="text-sm sm:text-base text-[var(--mute)] font-sans">
            A curated selection of production applications showcasing React architecture, TypeScript rigor, responsive UI/UX, and AI integrations.
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
