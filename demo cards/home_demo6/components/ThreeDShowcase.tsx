"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import type { ModelType } from "@/components/ModelViewer";

// Avoid SSR for Three.js canvas
const ModelViewer = dynamic(() => import("@/components/ModelViewer"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-espresso-light">
      <span className="text-cream/30 text-sm font-sans">Loading 3D model…</span>
    </div>
  ),
});

const MODEL_TYPES: ModelType[] = ["bowl", "cup", "kettle", "mirror", "vase"];

export default function ThreeDShowcase() {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);
  const models = t.showcase3d.models;
  const current = models[active];

  return (
    <section className="py-28 px-6 bg-espresso" id="showcase">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-sans font-semibold tracking-[0.32em] uppercase text-bronze-light mb-4"
          >
            3D Interactive
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-black text-cream mb-5"
          >
            {t.showcase3d.sectionTitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm font-sans text-cream/45 max-w-lg mx-auto"
          >
            {t.showcase3d.sectionSubtitle}
          </motion.p>
        </div>

        {/* Main layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* 3D Canvas */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[380px] md:h-[480px] rounded-3xl overflow-hidden border border-cream/10 bg-espresso-light"
          >
            <ModelViewer modelType={MODEL_TYPES[active]} />
          </motion.div>

          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Model selector tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {models.map((m, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`text-xs font-sans font-semibold px-4 py-2 rounded-full transition-all duration-200 ${
                    active === i
                      ? "bg-bronze text-cream shadow-md"
                      : "bg-cream/8 text-cream/55 hover:bg-cream/15 hover:text-cream"
                  }`}
                >
                  {m.name}
                </button>
              ))}
            </div>

            {/* Animated model details */}
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-cream mb-4">
                {current.name}
              </h3>
              <p className="text-sm font-sans text-cream/55 leading-relaxed mb-7">
                {current.desc}
              </p>

              {/* Materials */}
              <div className="mb-5">
                <p className="text-[11px] font-sans font-semibold text-bronze tracking-[0.2em] uppercase mb-2.5">
                  {t.showcase3d.materialsLabel}
                </p>
                <div className="flex flex-wrap gap-2">
                  {current.materials.map((m) => (
                    <span
                      key={m}
                      className="text-xs font-sans bg-cream/10 text-cream/65 rounded-full px-3 py-1"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              {/* Options */}
              <div className="mb-9">
                <p className="text-[11px] font-sans font-semibold text-bronze tracking-[0.2em] uppercase mb-2.5">
                  {t.showcase3d.optionsLabel}
                </p>
                <div className="flex flex-wrap gap-2">
                  {current.options.map((o) => (
                    <span
                      key={o}
                      className="text-xs font-sans bg-bronze/20 text-bronze-light rounded-full px-3 py-1"
                    >
                      {o}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="flex gap-3">
                <button className="flex-1 bg-bronze text-espresso text-sm font-sans font-semibold py-3.5 rounded-xl hover:bg-bronze-light transition-colors duration-300">
                  {t.showcase3d.requestSample}
                </button>
                <button className="flex-1 border border-cream/20 text-cream text-sm font-sans font-semibold py-3.5 rounded-xl hover:border-bronze hover:text-bronze transition-colors duration-300">
                  {t.showcase3d.getOEMQuote}
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
