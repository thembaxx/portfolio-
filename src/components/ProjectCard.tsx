import Image from "next/image";
import Link from "next/link";
import type { ProjectData } from "@/data/projects";

interface ProjectCardProps {
  project: ProjectData;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const screenshot = project.screenshots[0];

  return (
    <article className="editorial-project">
      <span className="project-number mono">{String(index + 1).padStart(2, "0")}</span>
      <h3>{project.title}</h3>
      {screenshot && (
        <Link className="project-preview" href={`/projects/${project.id}`}
          aria-label={`Explore ${project.title}`}>
          <Image src={screenshot.src} alt={screenshot.alt}
            width={screenshot.width ?? 1280} height={screenshot.height ?? 668}
            sizes="(min-width: 1280px) 1062px, (min-width: 760px) calc(100vw - 218px), calc(100vw - 40px)" />
        </Link>
      )}
      <div className="project-description">
        <p className="project-subtitle">{project.subtitle}</p>
        <p>{project.description}</p>
        <p className="project-stack mono">{project.technologies.join(" / ")}</p>
      </div>
      <div className="project-details">
        {project.features.length > 0 && <ul>{project.features.map(feature => <li key={feature}>{feature}</li>)}</ul>}
        <div className="action-row mono">
          {project.liveUrl && <a className="text-link" href={project.liveUrl} target="_blank" rel="noopener noreferrer"
            aria-label={`Open live demo for ${project.title} (opens in a new tab)`}>Live demo ↗</a>}
          <a className="text-link" href={project.githubUrl} target="_blank" rel="noopener noreferrer"
            aria-label={`View GitHub repository for ${project.title} (opens in a new tab)`}>GitHub ↗</a>
          <Link className="text-link" href={`/projects/${project.id}`} aria-label={`Read ${project.title} ${screenshot ? "case study" : "project details"}`}>{screenshot ? "Case study" : "Project details"} →</Link>
        </div>
      </div>
    </article>
  );
}
