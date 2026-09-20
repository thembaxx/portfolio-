import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { ProjectSection } from "@/components/ProjectSection";
import { Approach } from "@/components/Approach";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#090a0f] text-slate-100 selection:bg-sky-500/30 selection:text-sky-200">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <ProjectSection />
        <Skills />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
