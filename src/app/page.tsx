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
