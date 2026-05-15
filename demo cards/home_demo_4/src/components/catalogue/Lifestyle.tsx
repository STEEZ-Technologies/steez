import { motion } from "framer-motion";
import lifestyleImg from "@/assets/lifestyle.jpg";
import { useI18n } from "@/lib/i18n";

export function Lifestyle() {
  const { t } = useI18n();
  return (
    <section className="relative h-[80vh] md:h-[90vh] overflow-hidden">
      <img src={lifestyleImg} alt="" loading="lazy" className="absolute inset-0 size-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent" />
      <div className="relative h-full flex items-end px-5 md:px-8 pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
          className="max-w-2xl text-canvas"
        >
          <div className="text-[10px] uppercase tracking-[0.3em] text-canvas/70 font-bold mb-4">— {t("storyEyebrow")}</div>
          <h2 className="font-serif italic text-3xl md:text-6xl leading-[1.1] mb-5 text-balance">{t("storyTitle")}</h2>
          <p className="text-canvas/85 text-base md:text-lg max-w-md leading-relaxed">{t("storyBody")}</p>
        </motion.div>
      </div>
    </section>
  );
}
