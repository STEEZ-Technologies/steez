"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import type { Product } from "@/lib/products";

type FilterKey = "all" | Product["category"];

export default function ProductCollection() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");

  const filters: { key: FilterKey; label: string }[] = [
    { key: "all", label: t.products.filters.all },
    { key: "cooking", label: t.products.filters.cooking },
    { key: "ceramics", label: t.products.filters.ceramics },
    { key: "glass", label: t.products.filters.glass },
    { key: "bathroom", label: t.products.filters.bathroom },
    { key: "homeDecor", label: t.products.filters.homeDecor },
  ];

  const filtered =
    activeFilter === "all"
      ? products
      : products.filter((p) => p.category === activeFilter);

  return (
    <section className="py-28 px-6 bg-cream" id="products">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-sans font-semibold tracking-[0.32em] uppercase text-bronze mb-4"
          >
            {t.products.sectionEyebrow}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-black text-espresso mb-4"
          >
            {t.products.sectionTitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm font-sans text-espresso/55 max-w-md mx-auto"
          >
            {t.products.sectionSubtitle}
          </motion.p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`text-sm font-sans font-medium px-5 py-2.5 rounded-full transition-all duration-200 ${
                activeFilter === f.key
                  ? "bg-espresso text-cream shadow-md"
                  : "bg-white text-espresso/55 hover:text-espresso border border-espresso/12 hover:border-espresso/30"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {filtered.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
              layout
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
