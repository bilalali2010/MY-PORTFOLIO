import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import SkillsAndProcess from "@/components/SkillsAndProcess";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <main className="pt-[52px]">
        <Hero />
        <Services />
        <SkillsAndProcess />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}
