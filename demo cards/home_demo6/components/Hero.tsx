"use client";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const floatingShapes = [
  { color: "#C9A052", size: 72, opacity: 0.18, top: "18%", left: "6%", delay: 0, duration: 4.2 },
  { color: "#B8860B", size: 48, opacity: 0.14, top: "62%", left: "4%", delay: 0.7, duration: 3.8 },
  { color: "#8B5E3C", size: 56, opacity: 0.16, top: "28%", right: "5%", delay: 0.3, duration: 4.6 },
  { color: "#C9A052", size: 40, opacity: 0.12, top: "72%", right: "7%", delay: 1.1, duration: 3.5 },
  { color: "#B8860B", size: 32, opacity: 0.10, top: "12%", right: "18%", delay: 0.2, duration: 5.0 },
  { color: "#8B5E3C", size: 44, opacity: 0.15, bottom: "22%", left: "14%", delay: 0.9, duration: 4.0 },
  { color: "#C9A052", size: 28, opacity: 0.12, top: "45%", left: "2%", delay: 0.5, duration: 3.6 },
];

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-cream pt-16">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-grid-pattern" />

      {/* Warm radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(184,134,11,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Floating shapes */}
      {floatingShapes.map((s, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: s.size,
            height: s.size,
            backgroundColor: s.color,
            opacity: s.opacity,
            top: s.top,
            left: s.left,
            right: (s as { right?: string }).right,
            bottom: (s as { bottom?: string }).bottom,
          }}
          animate={{ y: [0, -18, 0] }}
          transition={{
            duration: s.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: s.delay,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-28 text-center">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs font-sans font-semibold tracking-[0.32em] uppercase text-bronze mb-7"
        >
          {t.hero.eyebrow}
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-serif text-[clamp(2.6rem,7vw,5.5rem)] font-black text-espresso leading-[0.95] tracking-tight mb-8 text-balance"
        >
          {t.hero.headline}
        </motion.h1>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="w-20 h-[2px] bg-bronze mx-auto mb-8 origin-left"
        />

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-base md:text-lg font-sans text-espresso/55 max-w-2xl mx-auto leading-relaxed mb-12"
        >
          {t.hero.subheadline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
        >
          <a
            href="#catalogue"
            className="inline-flex items-center justify-center bg-espresso text-cream text-sm font-sans font-semibold px-9 py-4 rounded-full hover:bg-espresso-light transition-all duration-300 hover:scale-105 shadow-lg shadow-espresso/25"
          >
            {t.hero.cta1}
          </a>
          <a
            href="#showcase"
            className="inline-flex items-center justify-center border-2 border-espresso/25 text-espresso text-sm font-sans font-semibold px-9 py-4 rounded-full hover:border-bronze hover:text-bronze transition-all duration-300"
          >
            {t.hero.cta2}
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl mx-auto"
        >
          {t.hero.stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white/70 backdrop-blur-sm border border-espresso/10 rounded-2xl py-5 px-4 text-center shadow-sm"
            >
              <div className="font-serif text-2xl md:text-3xl font-bold text-bronze leading-none mb-1.5">
                {stat.value}
              </div>
              <div className="text-[11px] font-sans text-espresso/55 tracking-wide leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.35, y: [0, 8, 0] }}
          transition={{ duration: 2, delay: 1.2, repeat: Infinity, ease: "easeInOut" }}
          className="mt-16 flex justify-center text-espresso"
        >
          <ChevronDown size={22} />
        </motion.div>
      </div>
    </section>
  );
}
