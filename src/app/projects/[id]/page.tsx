import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProjectScreenshotGallery } from "@/components/ProjectScreenshotGallery";
import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react";

interface ProjectDetail {
  id: string;
  title: string;
  subtitle: string;
  oneLiner: string;
  description: string;
  features: string[];
  technologies: string[];
  tools?: string[];
  screenshots: Array<{
    src: string;
    alt: string;
    type: "desktop" | "mobile";
    label: string;
  }>;
  liveUrl: string;
  githubUrl: string;
}

const projectsMap: Record<string, ProjectDetail> = {
  mileia: {
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
  lumni: {
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
};

export function generateStaticParams() {
  return [{ id: "mileia" }, { id: "lumni" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projectsMap[id];

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — ${project.subtitle} | Themba Mndebele`,
    description: project.description,
    openGraph: {
      title: `${project.title} — Case Study by Themba Mndebele`,
      description: project.description,
      url: `https://themba.dev/projects/${project.id}`,
      siteName: "Themba Mndebele Portfolio",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} Case Study — Themba Mndebele`,
      description: project.description,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projectsMap[id];

  if (!project) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    headline: project.subtitle,
    description: project.description,
    applicationCategory: "WebApplication",
    operatingSystem: "Web Browser",
    author: {
      "@type": "Person",
      name: "Themba Mndebele",
      url: "https://themba.dev",
    },
    url: project.liveUrl,
    codeRepository: project.githubUrl,
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--ink)] transition-colors">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main id="main-content" className="flex-1 py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Back link */}
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--mute)] hover:text-[var(--ink)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded py-1"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>Back to projects</span>
          </Link>

          {/* Header */}
          <div className="space-y-4 max-w-3xl">
            <h1 className="font-serif text-3xl sm:text-5xl font-normal text-[var(--ink)] tracking-tight">
              {project.title}
            </h1>
            <p className="font-serif italic text-lg sm:text-xl text-[var(--ink)]">
              &quot;{project.oneLiner}&quot;
            </p>
            <p className="text-sm sm:text-base text-[var(--mute)] leading-relaxed font-sans">
              {project.description}
            </p>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-[var(--accentSoft)] text-[var(--accent)]"
                >
                  {tech}
                </span>
              ))}
              {project.tools?.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-[var(--card)] border border-[var(--line)] text-[var(--mute)]"
                >
                  {tool}
                </span>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open Live Demo for ${project.title}`}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[var(--accent)] text-white text-xs font-medium hover:opacity-90 active:scale-95 transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View GitHub repository for ${project.title}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[var(--ink)] hover:underline decoration-[var(--accent)] underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded"
              >
                <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>GitHub Repository</span>
              </a>
            </div>
          </div>

          {/* Case Study Details & Screenshots Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pt-6 border-t border-[var(--line)]">
            <div className="lg:col-span-5 space-y-6">
              <h2 className="font-serif text-xl text-[var(--ink)]">
                Key Technical Features
              </h2>
              <ul className="space-y-3 text-xs sm:text-sm text-[var(--ink)] font-sans">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-7">
              <ProjectScreenshotGallery
                projectName={project.title}
                screenshots={project.screenshots}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
