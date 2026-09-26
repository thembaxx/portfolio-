import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProjectSection } from "@/components/ProjectSection";
import { Skills } from "@/components/Skills";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--ink)] transition-colors selection:bg-[var(--accentSoft)] selection:text-[var(--accent)]">
      <Navbar />
      <main id="main-content" className="flex-1">
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
