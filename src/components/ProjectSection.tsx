import { flagshipProjects, otherProjects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { SectionLabel } from "./SectionLabel";
import { ProjectCarousel } from "./ProjectCarousel";

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
        <ProjectCarousel projects={otherProjects} />
      </div>
    </section>
  );
}
