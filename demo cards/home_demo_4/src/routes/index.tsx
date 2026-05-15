import { createFileRoute } from "@tanstack/react-router";
import { Intro } from "@/components/catalogue/Intro";
import { Nav } from "@/components/catalogue/Nav";
import { Hero } from "@/components/catalogue/Hero";
import { Categories } from "@/components/catalogue/Categories";
import { Featured } from "@/components/catalogue/Featured";
import { ProductGrid } from "@/components/catalogue/ProductGrid";
import { Why } from "@/components/catalogue/Why";
import { Lifestyle } from "@/components/catalogue/Lifestyle";
import { Contact } from "@/components/catalogue/Contact";
import { Footer } from "@/components/catalogue/Footer";
import { StickyCta } from "@/components/catalogue/StickyCta";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-canvas text-charcoal">
      <Intro />
      <Nav />
      <Hero />
      <Categories />
      <Featured />
      <ProductGrid />
      <Why />
      <Lifestyle />
      <Contact />
      <Footer />
      <StickyCta />
    </main>
  );
}
