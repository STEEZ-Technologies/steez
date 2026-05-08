import { Analytics } from "@/components/analytics/Analytics";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/footer/Footer";
import { Hero } from "@/components/hero/Hero";
import { Numbers } from "@/components/numbers/Numbers";
import { Pricing } from "@/components/pricing/Pricing";
import { Services } from "@/components/services/Services";

export default function Home() {
  return (
    <main>
      <div className="wrapper">
        <Hero />
        <Numbers />
        <Services />
        <Analytics />
        <Pricing />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
