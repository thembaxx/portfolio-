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
    {
      id: "next-beta",
      title: "Nextdot (next-beta)",
      subtitle: "Full-Stack E-Commerce & Management Platform",
      oneLiner: "A full-stack web application showcasing product catalogs, cart management, and modern UI components.",
      description:
        "Nextdot (next-beta) is a web application built with Next.js, React, and TypeScript. Demonstrates product discovery, dynamic filter states, responsive card grid architecture, and clean client-server data flow.",
      features: [
        "Dynamic product filtering and responsive catalog layout",
        "Client-side cart state handling and checkout UI workflows",
        "TypeScript interfaces ensuring strict props and API response typing",
        "Optimized image rendering using Next.js Image component",
      ],
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
      tools: ["UI System", "API Integration"],
      screenshots: [
        {
          src: "/projects/next-beta-1.png",
          alt: "Nextdot application interface showing product showcase grid and interactive navigation",
          type: "desktop",
          label: "Product Showcase",
        },
        {
          src: "/projects/next-beta-2.png",
          alt: "Nextdot detail view interface displaying item configuration and cart actions",
          type: "desktop",
          label: "Product Detail View",
        },
      ],
      liveUrl: "https://next-beta-five.vercel.app",
      githubUrl: "https://github.com/thembaxx/next-beta",
    },
  ];

  return (
    <section id="projects" className="py-20 border-b border-border transition-colors scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-primary">
            <FolderGit2 className="w-4 h-4" strokeWidth={1.75} aria-hidden="true" />
            <span>Featured work</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground [text-wrap:balance]">
            Production projects &amp; applications
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground [text-wrap:pretty]">
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
