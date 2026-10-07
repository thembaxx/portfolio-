import Link from "next/link";
import type { ScreenshotItem } from "./ProjectScreenshotGallery";

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
    <article className="editorial-project">
      <span className="project-number mono">{String(index + 1).padStart(2, "0")}</span>
      <h3>{project.title}</h3>
      <div className="project-description">
        <p className="project-subtitle">{project.subtitle}</p>
        <p>{project.description}</p>
        <p className="project-stack mono">{project.technologies.join(" / ")}</p>
      </div>
      <div className="project-details">
        <ul>{project.features.map(feature => <li key={feature}>{feature}</li>)}</ul>
        <div className="action-row mono">
          <a className="text-link" href={project.liveUrl} target="_blank" rel="noopener noreferrer"
            aria-label={`Open live demo for ${project.title} (opens in a new tab)`}>Live demo ↗</a>
          <a className="text-link" href={project.githubUrl} target="_blank" rel="noopener noreferrer"
            aria-label={`View GitHub repository for ${project.title} (opens in a new tab)`}>GitHub ↗</a>
          <Link className="text-link" href={`/projects/${project.id}`} aria-label={`Read ${project.title} case study`}>Case study →</Link>
        </div>
      </div>
    </article>
  );
}
