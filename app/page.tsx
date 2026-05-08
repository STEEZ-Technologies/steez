import { Analytics } from "@/components/analytics/Analytics";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/footer/Footer";
import { Hero } from "@/components/hero/Hero";
import { Marquee } from "@/components/marquee/Marquee";
import { Numbers } from "@/components/numbers/Numbers";
import { Portfolio } from "@/components/portfolio/Portfolio";
import { Pricing } from "@/components/pricing/Pricing";
import { Projects } from "@/components/projects/Projects";
import { Services } from "@/components/services/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Services />
      <Numbers />
      <Projects />
      <Portfolio />
      <Analytics />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
