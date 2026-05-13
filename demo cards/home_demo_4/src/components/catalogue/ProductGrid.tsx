import { motion } from "framer-motion";
import { useState } from "react";
import { products, type Product } from "@/lib/products";
import { useI18n } from "@/lib/i18n";
import { useInquiry } from "@/lib/inquiry";
import { ProductDetail } from "./ProductDetail";
import { toast } from "sonner";

const cats = ["all", "kitchen", "storage", "lighting", "bathroom"] as const;

export function ProductGrid() {
  const { t, lang } = useI18n();
  const { add } = useInquiry();
  const [filter, setFilter] = useState<(typeof cats)[number]>("all");
  const [active, setActive] = useState<Product | null>(null);

  const filtered = products.filter((p) => filter === "all" || p.category === filter);

  const badgeMap = { new: "badgeNew", best: "badgeBest", oem: "badgeOEM", eco: "badgeEco" } as const;

  return (
    <section id="products" className="py-20 md:py-28 px-5 md:px-8 bg-canvas">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <div className="text-[10px] uppercase tracking-[0.3em] text-brand font-bold mb-3">— {t("catalogueGrid")}</div>
          <h2 className="font-serif text-3xl md:text-5xl tracking-tight leading-tight">{t("catalogueSub")}</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mb-10 md:mb-14">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-4 py-2 rounded-full text-[10.5px] font-semibold uppercase tracking-[0.18em] transition-all ${
                filter === c
                  ? "bg-charcoal text-canvas"
                  : "border border-stone text-charcoal/60 hover:border-brand hover:text-brand"
              }`}
            >
              {c === "all" ? (lang === "en" ? "All" : "全部") : t(`cat_${c}` as "cat_kitchen")}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {filtered.map((p, i) => (
            <motion.button
              key={p.id}
              onClick={() => setActive(p)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: (i % 6) * 0.06, duration: 0.6 }}
              className="group text-left"
            >
              <div className="relative w-full aspect-square bg-surface rounded-xl md:rounded-2xl overflow-hidden ring-1 ring-stone/40 mb-3">
                <img
                  src={p.image}
                  alt={p.name[lang]}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="size-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {p.badge && (
                  <span className="absolute top-3 left-3 px-2 py-1 bg-canvas/90 backdrop-blur text-[9px] font-bold uppercase tracking-[0.18em] rounded-full text-charcoal shadow-sm">
                    {t(badgeMap[p.badge])}
                  </span>
                )}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    add(p.id);
                    toast.success(t("inquiryAdded"));
                  }}
                  className="absolute bottom-3 right-3 size-9 rounded-full bg-charcoal/85 backdrop-blur text-canvas grid place-items-center opacity-0 group-hover:opacity-100 transition-all hover:bg-brand"
                  aria-label={t("addInquiry")}
                >
                  +
                </button>
              </div>
              <h3 className="text-sm font-semibold tracking-tight">{p.name[lang]}</h3>
              <p className="text-[11px] text-charcoal/55 mt-0.5 line-clamp-1">{p.desc[lang]}</p>
            </motion.button>
          ))}
        </div>
      </div>
      <ProductDetail product={active} onClose={() => setActive(null)} />
    </section>
  );
}
