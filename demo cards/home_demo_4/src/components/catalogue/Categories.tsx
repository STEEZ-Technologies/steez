import { motion } from "framer-motion";
import catKitchen from "@/assets/cat-kitchen.jpg";
import catStorage from "@/assets/cat-storage.jpg";
import catLighting from "@/assets/cat-lighting.jpg";
import catBathroom from "@/assets/cat-bathroom.jpg";
import { useI18n } from "@/lib/i18n";

export function Categories() {
  const { t } = useI18n();
  const cats = [
    { img: catKitchen, key: "cat_kitchen", count: 120 },
    { img: catStorage, key: "cat_storage", count: 85 },
    { img: catLighting, key: "cat_lighting", count: 42 },
    { img: catBathroom, key: "cat_bathroom", count: 56 },
  ] as const;

  return (
    <section id="categories" className="py-20 md:py-28 px-5 md:px-8 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-4">
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-brand font-bold mb-3">— {t("catTitle")}</div>
            <h2 className="font-serif text-3xl md:text-5xl tracking-tight leading-tight max-w-md">{t("catSub")}</h2>
          </div>
          <a href="#products" className="text-[10px] uppercase tracking-[0.22em] font-bold text-charcoal border-b border-charcoal pb-1 hover:text-brand hover:border-brand transition-all">
            {t("fullCatalogue")} →
          </a>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {cats.map((c, i) => (
            <motion.a
              key={c.key}
              href="#products"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
              className={`group cursor-pointer ${i % 2 === 1 ? "lg:translate-y-8" : ""}`}
            >
              <div className="w-full aspect-[3/4] bg-canvas rounded-xl md:rounded-2xl overflow-hidden mb-3 ring-1 ring-stone/40">
                <img src={c.img} alt={t(c.key)} loading="lazy" width={800} height={1000} className="size-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <h3 className="text-xs md:text-sm font-semibold uppercase tracking-[0.15em] group-hover:text-brand transition-colors">{t(c.key)}</h3>
              <span className="text-[10px] text-charcoal/40 tracking-wider">{c.count} {t("items")}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
