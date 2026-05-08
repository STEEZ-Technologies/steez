import { About } from "@/components/about/About";
import { Footer } from "@/components/footer/Footer";
import { Hero } from "@/components/hero/Hero";
import { Marquee } from "@/components/marquee/Marquee";
import { Portfolio } from "@/components/portfolio/Portfolio";
import { Projects } from "@/components/projects/Projects";
import { Services } from "@/components/services/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Projects />
      <Portfolio />
      <Footer />
    </main>
  );
}
