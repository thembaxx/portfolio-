import Link from "next/link";
import { flagshipProjects, otherProjects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { SectionLabel } from "./SectionLabel";
import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr";

export function ProjectSection() {
  return (
    <section id="work" className="portfolio-section" aria-labelledby="work-heading">
      <span id="projects" className="legacy-anchor" aria-hidden="true" />
      <div className="portfolio-wrap">
        <SectionLabel title="01 — Selected work" note="3 flagship case studies" />
        <h2 id="work-heading" className="section-heading">
          Thoughtfully built. <em>Ready to explore.</em>
        </h2>
        <div className="project-list">
          {flagshipProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        <details className="more-projects">
          <summary className="mono">
            More projects &amp; experiments ({otherProjects.length})
          </summary>
          <p>
            Explore the wider collection, with each project’s scope and evidence on its own page.
          </p>
          <ul className="project-index">
            {otherProjects.map((project) => (
              <li key={project.id}>
                <Link href={`/projects/${project.id}`}>
                  <span className="project-index-title">{project.title}</span>
                  <span className="project-index-description">{project.subtitle}</span>
                  <ArrowUpRightIcon size={16} aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </details>
      </div>
    </section>
  );
}
