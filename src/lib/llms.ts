import { flagshipProjects, otherProjects, projects } from "@/data/projects";
import { brand } from "./brand";
import { absoluteUrl, siteUrl } from "./site";

export function llmsDocument(full = false) {
  const sections = [
    `# ${brand.name}\n\n> ${brand.role} based in ${brand.location}. ${brand.tagline}`,
    `Personal portfolio of ${brand.name}, a frontend developer with a design background and about four years of experience building React products. The work focuses on accessible interfaces, responsive layouts and resilient state. Open to remote roles.`,
    `## Portfolio\n\n- [Homepage](${siteUrl}): Introduction, selected projects, toolkit, background and contact.\n- [About](${absoluteUrl("/#about")}): Design and engineering background.\n- [Contact](${absoluteUrl("/#contact")}): Role and project enquiries.`,
    `## Flagship case studies\n\n${flagshipProjects.map((project) => `- [${project.title}](${absoluteUrl(`/projects/${project.id}`)}): ${project.subtitle}. ${project.description}`).join("\n")}`,
    `## More projects and experiments\n\n${otherProjects.map((project) => `- [${project.title}](${absoluteUrl(`/projects/${project.id}`)}): ${project.subtitle}.`).join("\n")}`,
  ];
  if (full) {
    sections.push(
      `## Project details\n\n${projects
        .map((project) =>
          [
            `### ${project.title}\n\n${project.description}`,
            `${project.liveUrl ? `- Live app: ${project.liveUrl}\n` : ""}${project.githubUrl ? `- Source: ${project.githubUrl}\n` : ""}- Case study: ${absoluteUrl(`/projects/${project.id}`)}\n- Technologies: ${project.technologies.join(", ")}`,
            ...(project.features.length
              ? [`Features:\n${project.features.map((feature) => `- ${feature}`).join("\n")}`]
              : []),
          ].join("\n\n"),
        )
        .join("\n\n")}`,
    );
    sections.push(
      "## Toolkit\n\nReact, Next.js, TypeScript, JavaScript, Tailwind CSS, HTML5 and CSS3. Component architecture, state management, REST APIs, responsive design and Git. Vitest, Playwright, accessibility and frontend testing. AI-assisted research and test writing with ownership of architecture, reliability and security.",
    );
  }
  sections.push(
    `## Contact\n\n- [Email](mailto:${brand.email}): ${brand.email}\n- [GitHub](${brand.github}): Project source repositories.\n- [LinkedIn](${brand.linkedin}): Professional profile.`,
  );
  if (!full)
    sections.push(
      `## Optional\n\n- [Detailed portfolio profile](${absoluteUrl("/llms-full.txt")}): Full project features, technologies, demos and source links.\n- [Sitemap](${absoluteUrl("/sitemap.xml")}): Public HTML pages.`,
    );
  return `${sections.join("\n\n")}\n`;
}

export function llmsResponse(full = false) {
  return new Response(llmsDocument(full), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      Link: `<${absoluteUrl(full ? "/llms-full.txt" : "/llms.txt")}>; rel="canonical"`,
    },
  });
}
