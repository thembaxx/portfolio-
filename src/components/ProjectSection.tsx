import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { SectionLabel } from "./SectionLabel";

export function ProjectSection() {
  return (
    <section id="work" className="portfolio-section" aria-labelledby="work-heading">
      <span id="projects" className="legacy-anchor" aria-hidden="true" />
      <div className="portfolio-wrap">
        <SectionLabel title="01 — Selected work" note={`${projects.length} projects`} />
        <h2 id="work-heading" className="section-heading">Built, shipped, <em>live.</em></h2>
        <div className="project-list">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
