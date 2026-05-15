"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { categories } from "@/lib/categories";

export default function CategoryOverview() {
  const { lang, t } = useLanguage();

  return (
    <section className="py-28 px-6 bg-cream-dark" id="catalogue">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-sans font-semibold tracking-[0.32em] uppercase text-bronze mb-4"
          >
            {lang === "en" ? "Product Universe" : "产品全览"}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-black text-espresso mb-5"
          >
            {t.categories.sectionTitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm font-sans text-espresso/55 max-w-md mx-auto leading-relaxed"
          >
            {t.categories.sectionSubtitle}
          </motion.p>
        </div>

        {/* Category Cards — 2-col on md, 3-col on lg, first card wide on lg */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.09 }}
              whileHover={{ y: -8, transition: { duration: 0.28 } }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={cat.imageUrl}
                  alt={cat.nameEn}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-espresso/20 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs font-sans font-semibold text-bronze-light bg-espresso/80 backdrop-blur-sm rounded-full px-3 py-1">
                    {cat.productCount} {t.categories.productsSuffix}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-espresso mb-1 leading-tight">
                  {lang === "en" ? cat.nameEn : cat.nameZh}
                </h3>
                <p className="text-xs font-sans text-warm-brown mb-3 tracking-wider">
                  {lang === "en" ? cat.nameZh : cat.nameEn}
                </p>
                <p className="text-sm font-sans text-espresso/55 leading-relaxed mb-5">
                  {lang === "en" ? cat.descEn : cat.descZh}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {(lang === "en" ? cat.tags : cat.tagsZh).map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-sans text-bronze bg-bronze/10 rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
