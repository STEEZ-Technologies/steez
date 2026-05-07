import { About } from "@/components/about/About";
import { Footer } from "@/components/footer/Footer";
import { Hero } from "@/components/hero/Hero";
import { Marquee } from "@/components/marquee/Marquee";
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
      <Footer />
    </main>
  );
}
