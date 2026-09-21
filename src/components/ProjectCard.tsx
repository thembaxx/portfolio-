import { ExternalLink, CheckCircle2 } from "lucide-react";
import { ProjectScreenshotGallery, ScreenshotItem } from "./ProjectScreenshotGallery";

export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  oneLiner: string;
  description: string;
  features: string[];
  technologies: string[];
  tools?: string[];
  screenshots: ScreenshotItem[];
  liveUrl: string;
  githubUrl: string;
}

interface ProjectCardProps {
  project: ProjectData;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article className="rounded-2xl bg-[var(--card)] border border-[var(--line)] p-6 sm:p-8 space-y-8 transition-colors">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Project Info Column (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-semibold text-[var(--accent)] bg-[var(--accentSoft)] px-2.5 py-0.5 rounded-full">
                0{index + 1}
              </span>
              <h3 className="font-serif text-2xl font-normal tracking-tight text-[var(--ink)]">
                {project.title}
              </h3>
            </div>
            <p className="text-sm font-medium text-[var(--mute)] leading-snug">
              {project.subtitle}
            </p>
          </div>

          <p className="text-xs sm:text-sm text-[var(--mute)] leading-relaxed font-sans">
            {project.description}
          </p>

          {/* Key Features */}
          <div className="space-y-2">
            <h4 className="text-xs font-sans font-semibold uppercase tracking-wider text-[var(--mute)]">
              Key features
            </h4>
            <ul className="space-y-1.5 text-xs text-[var(--ink)]">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent)] shrink-0 mt-0.5" strokeWidth={1.75} aria-hidden="true" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Badges */}
          <div className="space-y-2">
            <h4 className="text-xs font-sans font-semibold uppercase tracking-wider text-[var(--mute)]">
              Technologies &amp; libraries
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-[var(--accentSoft)] text-[var(--accent)]"
                >
                  {tech}
                </span>
              ))}
              {project.tools?.map((tool) => (
                <span
                  key={tool}
                  className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-[var(--bg)] border border-[var(--line)] text-[var(--mute)]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open Live Demo for ${project.title}`}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[var(--accent)] text-white text-xs font-medium hover:opacity-90 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            >
              <span>Live Demo</span>
              <ExternalLink className="w-3.5 h-3.5" strokeWidth={1.75} aria-hidden="true" />
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View GitHub repository for ${project.title}`}
              className="inline-flex items-center gap-1.5 px-2 py-1 text-xs font-medium text-[var(--ink)] hover:underline decoration-[var(--accent)] underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded"
            >
              <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Gallery Column (7 cols) */}
        <div className="lg:col-span-7">
          <ProjectScreenshotGallery
            projectName={project.title}
            screenshots={project.screenshots}
          />
        </div>
      </div>
    </article>
  );
}
