import Link from "next/link";
import { projectMetadata, projectSchema, serializeSchema } from "@/lib/seo";
import { projects, getProject } from "@/data/projects";
import { notFound, permanentRedirect } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProjectScreenshotGallery } from "@/components/ProjectScreenshotGallery";
import {
  ArrowLeftIcon,
  ArrowSquareOutIcon,
  CheckCircleIcon,
  GithubLogoIcon,
} from "@phosphor-icons/react/ssr";

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
            <ArrowLeftIcon className="w-4 h-4" aria-hidden="true" />
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
                  className="squircle-chip px-3 py-1 text-xs font-medium rounded-xl bg-[var(--accentSoft)] text-[var(--accent)]"
                >
                  {tech}
                </span>
              ))}
              {project.tools?.map((tool) => (
                <span
                  key={tool}
                  className="squircle-chip px-3 py-1 text-xs font-medium rounded-xl bg-[var(--card)] border border-[var(--line)] text-[var(--mute)]"
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
                  className="squircle-cta inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[var(--accent)] text-white text-xs font-medium hover:opacity-90 active:scale-95 transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                >
                  <span>Live Demo</span>
                  <ArrowSquareOutIcon className="w-3.5 h-3.5" aria-hidden="true" />
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
                  <GithubLogoIcon className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  <span>GitHub Repository</span>
                </a>
              )}
            </div>
          </div>

          {project.caseStudy && (
            <section
              aria-labelledby="case-study-title"
              className="space-y-6 pt-6 border-t border-[var(--line)]"
            >
              <h2 id="case-study-title" className="font-serif text-2xl text-[var(--ink)]">
                Behind the project
              </h2>
              {(project.caseStudy.audience || project.caseStudy.contribution) && (
                <dl className="grid gap-6 sm:grid-cols-2 text-sm">
                  {project.caseStudy.audience && (
                    <div className="space-y-2">
                      <dt className="font-semibold">Who it serves</dt>
                      <dd className="leading-relaxed text-[var(--mute)]">
                        {project.caseStudy.audience}
                      </dd>
                    </div>
                  )}
                  {project.caseStudy.contribution && (
                    <div className="space-y-2">
                      <dt className="font-semibold">Work covered</dt>
                      <dd className="leading-relaxed text-[var(--mute)]">
                        {project.caseStudy.contribution}
                      </dd>
                    </div>
                  )}
                </dl>
              )}
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold">The problem</h3>
                  <p className="text-sm leading-relaxed text-[var(--mute)]">
                    {project.caseStudy.problem}
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold">The decision</h3>
                  <p className="text-sm leading-relaxed text-[var(--mute)]">
                    {project.caseStudy.decision}
                  </p>
                </div>
              </div>
              {project.caseStudy.walkthrough && (
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold">Try the main journey</h3>
                  <ol className="list-decimal pl-5 space-y-2 text-sm leading-relaxed text-[var(--mute)]">
                    {project.caseStudy.walkthrough.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                </div>
              )}
              {project.caseStudy.tradeoff && (
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold">The tradeoff</h3>
                  <p className="text-sm leading-relaxed text-[var(--mute)]">
                    {project.caseStudy.tradeoff}
                  </p>
                </div>
              )}
              <div className="space-y-3">
                <h3 className="text-sm font-semibold">Evidence to inspect</h3>
                <p className="text-xs leading-relaxed text-[var(--mute)]">
                  Explore the current demo or inspect the source revision used for this case study.
                  Restricted source links need repository access. Test scenarios describe what is
                  checked; they are not a claim about a current test run.
                </p>
                <ul className="space-y-3 text-sm">
                  {project.caseStudy.evidence.map((item) => (
                    <li key={item.url}>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-start gap-2 text-[var(--ink)] underline decoration-[var(--accent)] underline-offset-4 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                      >
                        <span>
                          {item.label}
                          {item.requiresRepositoryAccess && (
                            <span className="block text-xs text-[var(--mute)] font-normal">
                              Repository access required
                            </span>
                          )}
                        </span>
                        <ArrowSquareOutIcon
                          className="w-4 h-4 shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="squircle-panel space-y-2 rounded-2xl border border-[var(--line)] p-4 sm:p-5">
                <h3 className="text-sm font-semibold">Validation and outcomes</h3>
                <p className="text-sm leading-relaxed text-[var(--mute)]">
                  {project.caseStudy.validationStatus}
                </p>
              </div>
            </section>
          )}

          {/* Case Study Details & Screenshots Grid */}
          {(project.features.length > 0 || project.screenshots.length > 0) && (
            <div className="space-y-8 pt-6 border-t border-[var(--line)]">
              {project.features.length > 0 && (
                <div className="space-y-6">
                  <h2 className="font-serif text-xl text-[var(--ink)]">Key Technical Features</h2>
                  <ul className="space-y-3 text-xs sm:text-sm text-[var(--ink)] font-sans">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <CheckCircleIcon
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
