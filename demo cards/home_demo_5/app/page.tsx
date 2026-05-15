"use client";

import Hero from "@/components/hero/Hero";
import ProductCard from "@/components/products/ProductCard";
import { products } from "@/lib/data";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      
      <section className="px-6 py-12 space-y-12">
        <div className="space-y-2">
          <div className="w-8 h-[1px] bg-charcoal"></div>
          <h2 className="font-serif text-2xl lowercase italic">Curated Selection</h2>
        </div>

        <div className="grid grid-cols-1 gap-10">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="px-6 py-20 text-center border-t border-stone/10 mt-auto bg-white">
        <div className="space-y-4">
          <h3 className="font-serif text-xl">Zenith Home</h3>
          <p className="text-[10px] tracking-[0.3em] uppercase text-stone/60 max-w-[200px] mx-auto leading-relaxed">
            Excellence in Craftsmanship for Global Standards.
          </p>
          <div className="pt-8">
            <p className="text-[9px] tracking-widest uppercase text-stone/30">
              Powered by steez digital
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
