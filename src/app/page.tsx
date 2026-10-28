import { flagshipProjects } from "@/data/projects";
import { brand } from "@/lib/brand";
import { absoluteUrl, siteUrl } from "@/lib/site";
import { serializeSchema } from "@/lib/seo";
import { ParticleBackground } from "@/components/ParticleBackground";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProjectSection } from "@/components/ProjectSection";
import { Skills } from "@/components/Skills";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="portfolio-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeSchema({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "@id": absoluteUrl("/#portfolio"),
            url: siteUrl,
            name: `${brand.name} — Selected work`,
            about: { "@id": absoluteUrl("/#person") },
            mainEntity: {
              "@type": "ItemList",
              numberOfItems: flagshipProjects.length,
              itemListElement: flagshipProjects.map((project, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: project.title,
                url: absoluteUrl(`/projects/${project.id}`),
              })),
            },
          }),
        }}
      />
      <ParticleBackground />
      <Navbar />
      <main id="main-content" className="portfolio-main" tabIndex={-1}>
        <Hero />
        <ProjectSection />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
