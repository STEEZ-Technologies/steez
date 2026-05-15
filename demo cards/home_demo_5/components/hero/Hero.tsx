"use client";

import { useI18n } from "@/hooks/useI18n";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const HeroScene = dynamic(() => import("@/components/3d/HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[50vh] flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-stone/20 border-t-stone animate-spin rounded-full" />
    </div>
  ),
});

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative pt-10 overflow-hidden">
      <div className="px-6 text-center space-y-2 mb-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-stone text-[10px] tracking-[0.3em] uppercase font-medium"
        >
          {t("hero.tag")}
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-serif leading-tight text-balance"
        >
          {t("hero.title")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-stone/60 text-xs tracking-widest uppercase italic"
        >
          {t("hero.subtitle")}
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.3, ease: "circOut" }}
      >
        <HeroScene />
      </motion.div>
    </section>
  );
}
