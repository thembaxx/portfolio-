import { ProjectCard, ProjectData } from "./ProjectCard";
import { FolderGit2 } from "lucide-react";

export function ProjectSection() {
  const projects: ProjectData[] = [
    {
      id: "next-beta",
      title: "Nextdot (next-beta)",
      subtitle: "Personalized Estate & Document Management Guidance System",
      oneLiner:
        "Clear recommendations on which documents to track, when to update them, and who to share them with.",
      description:
        "Nextdot provides personalized, structured guidance tailored to each family's unique circumstances. Built with Next.js App Router and React Server Components, it helps families keep vital estate documents organized, current, and securely shared.",
      features: [
        "Dynamic family document tracking and personalized status recommendations",
        "Role-based document sharing and access permission controls",
        "Interactive timeline for document updates and compliance checks",
        "Responsive, accessible web application with structured layout architecture",
      ],
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
      tools: ["Lucide Icons", "PostCSS", "App Router"],
      screenshots: [
        {
          src: "/projects/next-beta-1.png",
          alt: "Nextdot landing interface screenshot",
          type: "desktop",
          label: "Landing Overview",
        },
        {
          src: "/projects/next-beta-2.png",
          alt: "Nextdot features section screenshot",
          type: "desktop",
          label: "Feature Details",
        },
      ],
      liveUrl: "https://dev.nextdot.app",
      githubUrl: "https://github.com/Rattlehub-Digital-Ltd/next-beta",
    },
    {
      id: "mileia",
      title: "Mileia",
      subtitle: "On-Demand Tradesperson Marketplace Platform",
      oneLiner:
        "Connect with verified local tradespeople in Cape Town on demand.",
      description:
        "Mileia is an on-demand marketplace connecting Cape Town residents with verified local tradespeople (plumbers, electricians, builders). Features location-based filtering, instant booking workflows, and mobile-first responsive layout.",
      features: [
        "Location-aware trade service search and verified professional directory",
        "On-demand booking request flow and service estimation interface",
        "Mobile-first responsive UI built for frictionless field access",
        "Polished design system with dynamic service filtering components",
      ],
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
      tools: ["Lucide Icons", "UI/UX Architecture"],
      screenshots: [
        {
          src: "/projects/mileia-1.png",
          alt: "Mileia homepage marketplace screenshot",
          type: "desktop",
          label: "Marketplace View",
        },
        {
          src: "/projects/mileia-2.png",
          alt: "Mileia services list screenshot",
          type: "desktop",
          label: "Services Listing",
        },
      ],
      liveUrl: "https://mileia.vercel.app",
      githubUrl: "https://github.com/thembaxx/mileia",
    },
    {
      id: "lumni",
      title: "Lumni",
      subtitle: "AI-Powered Study Companion for South African Matric Students",
      oneLiner:
        "Pass your Matric with confidence using personalized quizzes, flashcards, and smart study planning.",
      description:
        "Lumni is a full-featured study ecosystem designed specifically for South African Matric students. Built with Next.js 16, React 19, TypeScript, Appwrite, and AI model integrations, it delivers adaptive quizzes, past paper revisions, interactive flashcards, and real-time study analytics.",
      features: [
        "AI-generated personalized quizzes, flashcards, and exam preparation modules",
        "South African Matric subject syllabus alignment & past paper repository",
        "Real-time study session analytics, performance graphs, and goal tracking",
        "Robust offline-first architecture with Dexie.js and IndexedDB caching",
      ],
      technologies: ["React 19", "TypeScript", "Next.js 16", "Tailwind CSS", "Appwrite"],
      tools: ["Vitest", "Playwright", "Zustand", "Katex", "Sentry"],
      screenshots: [
        {
          src: "/projects/lumni-1.png",
          alt: "Lumni AI study platform homepage screenshot",
          type: "desktop",
          label: "Platform Overview",
        },
        {
          src: "/projects/lumni-2.png",
          alt: "Lumni study dashboard screenshot",
          type: "desktop",
          label: "Dashboard View",
        },
      ],
      liveUrl: "https://lumni-psi.vercel.app",
      githubUrl: "https://github.com/thembaxx/lumni",
    },
  ];

  return (
    <section id="projects" className="py-20 border-b border-slate-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-sky-400">
            <FolderGit2 className="w-4 h-4" />
            <span>Featured Work</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Production projects &amp; applications
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
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
