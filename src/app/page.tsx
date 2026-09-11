import { AboutSection } from "@/components/AboutSection";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Impact } from "@/components/Impact";
import { PortfolioShell } from "@/components/PortfolioShell";
import { Projects } from "@/components/Projects";
import { SkillSet } from "@/components/SkillSet";

export default function Home() {
  return (
    <PortfolioShell>
      <main>
        <Hero />
        <AboutSection />
        <SkillSet />
        <Impact />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </PortfolioShell>
  );
}
