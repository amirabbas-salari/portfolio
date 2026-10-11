import Navbar from "@/components/layout/Navbar";
import SocialRail from "@/components/layout/SocialRail";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Skills from "@/components/home/Skills";
import Projects from "@/components/home/Projects";
import Certifications from "@/components/home/Certifications";
import Education from "@/components/home/Education";
import Strengths from "@/components/home/Strengths";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <SocialRail />

      <Hero />

      <Projects />

      <About />

      <Skills />

      <Education />

      <Certifications />

      <Strengths />

      <Contact />

      <Footer />
    </main>
  );
}