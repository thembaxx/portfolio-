import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { AnalyticsSection } from "@/components/AnalyticsSection";
import { ProjectSection } from "@/components/ProjectSection";
import { Skills } from "@/components/Skills";
import { Approach } from "@/components/Approach";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors selection:bg-blue-500/20 selection:text-blue-600 dark:selection:text-sky-300">
      <Navbar />
      <main id="main-content" className="flex-1">
        <Hero />
        <About />
        <AnalyticsSection />
        <ProjectSection />
        <Skills />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
