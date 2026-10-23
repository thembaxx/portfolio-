import Link from "next/link";
import { projectMetadata, projectSchema, serializeSchema } from "@/lib/seo";
import { projects, getProject } from "@/data/projects";
import { notFound, permanentRedirect } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProjectScreenshotGallery } from "@/components/ProjectScreenshotGallery";
import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react";

export function generateStaticParams() {
  return [...projects.map((project) => ({ id: project.id })), { id: "lumni" }];
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = getProject(id === "lumni" ? "lumnie" : id);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return projectMetadata(project);
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (id === "lumni") permanentRedirect("/projects/lumnie");
  const project = getProject(id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--ink)] transition-colors">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeSchema(projectSchema(project)) }}
      />
      <Navbar />
      <main id="main-content" className="project-page flex-1 py-12 sm:py-16" tabIndex={-1}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Back link */}
          <Link
            href="/#work"
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
            {project.oneLiner && (
              <p className="font-serif italic text-lg sm:text-xl text-[var(--ink)]">
                &quot;{project.oneLiner}&quot;
              </p>
            )}
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
              {project.liveUrl && (
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
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View GitHub repository for ${project.title}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[var(--ink)] hover:underline decoration-[var(--accent)] underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded"
                >
                  <svg
                    className="w-3.5 h-3.5 fill-current shrink-0"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  <span>GitHub Repository</span>
                </a>
              )}
            </div>
          </div>

          {/* Case Study Details & Screenshots Grid */}
          {(project.features.length > 0 || project.screenshots.length > 0) && (
            <div className="space-y-8 pt-6 border-t border-[var(--line)]">
              {project.features.length > 0 && (
                <div className="space-y-6">
                  <h2 className="font-serif text-xl text-[var(--ink)]">Key Technical Features</h2>
                  <ul className="space-y-3 text-xs sm:text-sm text-[var(--ink)] font-sans">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <CheckCircle2
                          className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="project-gallery">
                <ProjectScreenshotGallery
                  projectName={project.title}
                  screenshots={project.screenshots}
                />
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
