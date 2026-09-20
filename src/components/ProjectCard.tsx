import { ExternalLink, CheckCircle2, Code2 } from "lucide-react";
import { ProjectScreenshotGallery, ScreenshotItem } from "./ProjectScreenshotGallery";

export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  oneLiner: string;
  demonstrates: string[];
  description: string;
  features: string[];
  technologies: string[];
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
    <article className="rounded-3xl bg-card border border-border p-6 sm:p-8 space-y-8 hover:border-primary/40 transition-colors shadow-2xs">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Project Info Column (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Header */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono tabular-nums font-semibold text-primary bg-accent border border-border px-2.5 py-0.5 rounded-md">
                0{index + 1}
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-foreground [text-wrap:balance]">
                {project.title}
              </h3>
            </div>
            <p className="text-sm font-semibold text-primary leading-snug [text-wrap:balance]">
              {project.subtitle}
            </p>
          </div>

          {/* One sentence summary */}
          <p className="text-sm text-foreground font-medium leading-relaxed [text-wrap:pretty]">
            {project.oneLiner}
          </p>

          {/* Demonstrated Skills Badges */}
          <div className="space-y-1.5">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-muted-foreground block">
              Demonstrates:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.demonstrates.map((item) => (
                <span
                  key={item}
                  className="px-2 py-0.5 text-xs font-medium rounded-md bg-accent text-primary border border-border"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* What I Built */}
          <div className="space-y-1.5">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-muted-foreground block">
              Engineering Implementation:
            </span>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed [text-wrap:pretty]">
              {project.description}
            </p>
          </div>

          {/* Key Features / Highlights */}
          <div className="space-y-2">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-muted-foreground block">
              Key Highlights
            </span>
            <ul className="space-y-1.5 text-xs text-foreground">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 [text-wrap:pretty]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" strokeWidth={1.75} aria-hidden="true" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Badges */}
          <div className="space-y-2">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-muted-foreground block">
              Technologies Used
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-secondary border border-border text-foreground whitespace-nowrap"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 pl-4 pr-3.5 py-2 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-xs active:scale-[0.97] transition-[color,background-color,border-color,transform] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <span>Live Application</span>
              <ExternalLink className="w-3.5 h-3.5" strokeWidth={1.75} aria-hidden="true" />
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 pl-3.5 pr-4 py-2 rounded-lg bg-card hover:bg-accent border border-border text-foreground text-xs font-medium active:scale-[0.97] transition-[color,background-color,border-color,transform] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Code2 className="w-3.5 h-3.5 text-muted-foreground" strokeWidth={1.75} aria-hidden="true" />
              <span>GitHub Code</span>
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
