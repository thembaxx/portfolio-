import Link from "next/link";
import { projects, getProject } from "@/data/projects";
import { notFound, permanentRedirect } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProjectScreenshotGallery } from "@/components/ProjectScreenshotGallery";
import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react";

export function generateStaticParams() {
  return [...projects.map(project => ({ id: project.id })), { id: "lumni" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = getProject(id === "lumni" ? "lumnie" : id);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — ${project.subtitle} | Themba Mndebele`,
    description: project.description,
    alternates: { canonical: `/projects/${project.id}` },
    openGraph: {
      title: `${project.title} — Case Study by Themba Mndebele`,
      description: project.description,
      url: `https://themba.dev/projects/${project.id}`,
      images: [{ url: project.screenshots[0].src, width: project.screenshots[0].width, height: project.screenshots[0].height, alt: project.screenshots[0].alt }],
      siteName: "Themba Mndebele Portfolio",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} Case Study — Themba Mndebele`,
      images: [project.screenshots[0].src],
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
  if (id === "lumni") permanentRedirect("/projects/lumnie");
  const project = getProject(id);

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
      <main id="main-content" className="project-page flex-1 py-12 sm:py-16" tabIndex={-1}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Back link */}
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--mute)] hover:text-[var(--ink)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded py-1"
          >
            <ArrowLeft className="w-4 h-4" />
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
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[var(--accent)] text-white text-xs font-medium hover:opacity-90 transition-all shadow-sm"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[var(--ink)] hover:underline underline-offset-4"
              >
                <span>GitHub Repository</span>
              </a>
            </div>
          </div>

          {/* Case Study Details & Screenshots Grid */}
          <div className="space-y-8 pt-6 border-t border-[var(--line)]">
            <div className="space-y-6">
              <h2 className="font-serif text-xl text-[var(--ink)]">
                Key Technical Features
              </h2>
              <ul className="space-y-3 text-xs sm:text-sm text-[var(--ink)] font-sans">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="project-gallery">
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
