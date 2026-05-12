import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

export function Why() {
  const { t } = useI18n();
  const items = [
    { k: "why_1", d: "why_1d" },
    { k: "why_2", d: "why_2d" },
    { k: "why_3", d: "why_3d" },
    { k: "why_4", d: "why_4d" },
  ] as const;
  return (
    <section id="why" className="py-20 md:py-28 px-5 md:px-8 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <div className="text-[10px] uppercase tracking-[0.3em] text-brand font-bold mb-3">— {t("whyTitle")}</div>
          <h2 className="font-serif text-3xl md:text-5xl tracking-tight max-w-2xl mx-auto leading-tight">{t("whySub")}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {items.map((it, i) => (
            <motion.div
              key={it.k}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="p-6 md:p-7 rounded-2xl bg-canvas ring-1 ring-stone/50 hover:ring-brand/40 hover:-translate-y-1 transition-all duration-500"
            >
              <div className="size-9 rounded-full bg-brand/10 text-brand grid place-items-center font-serif italic font-bold text-sm mb-5">
                0{i + 1}
              </div>
              <h3 className="font-serif text-xl tracking-tight mb-2">{t(it.k)}</h3>
              <p className="text-sm text-charcoal/60 leading-relaxed">{t(it.d)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
