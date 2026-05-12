import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import type { Product } from "@/lib/products";
import { useI18n } from "@/lib/i18n";
import { useInquiry } from "@/lib/inquiry";
import { toast } from "sonner";
import { Product3D } from "./Product3D";

export function ProductDetail({ product, onClose }: { product: Product | null; onClose: () => void }) {
  const { t, lang } = useI18n();
  const { add } = useInquiry();

  useEffect(() => {
    if (product) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [product]);

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] bg-charcoal/40 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }}
            transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
            className="absolute bottom-0 inset-x-0 md:inset-4 md:bottom-4 md:top-12 bg-canvas rounded-t-3xl md:rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 md:px-8 py-3.5 border-b border-stone/40">
              <button
                onClick={onClose}
                className="flex items-center gap-2 px-3 py-1.5 -ml-2 rounded-full text-charcoal/80 hover:text-charcoal hover:bg-stone/40 transition-all"
                aria-label={lang === "en" ? "Back to catalogue" : "返回目录"}
              >
                <ArrowLeft className="size-4" />
                <span className="text-[10px] uppercase tracking-[0.22em] font-semibold">
                  {lang === "en" ? "Back" : "返回"}
                </span>
              </button>
              <div className="text-[10px] uppercase tracking-[0.25em] text-brand font-bold">
                {t(`cat_${product.category}` as "cat_kitchen")}
              </div>
              <button onClick={onClose} className="size-9 rounded-full bg-stone/40 grid place-items-center text-charcoal hover:bg-charcoal hover:text-canvas transition-all" aria-label="Close">
                ✕
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative bg-surface aspect-square md:aspect-auto md:min-h-[60vh]">
                  <div className="absolute inset-0">
                    <Product3D id={product.id} category={product.category} />
                  </div>
                  <div className="pointer-events-none absolute bottom-4 left-4 px-3 py-1.5 bg-canvas/90 backdrop-blur rounded-full text-[9px] font-bold uppercase tracking-[0.25em]">
                    Drag · Rotate · 360°
                  </div>
                </div>
                <div className="p-6 md:p-10">
                  <motion.h2
                    initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="font-serif text-3xl md:text-4xl tracking-tight"
                  >
                    {product.name[lang]}
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                    className="mt-4 text-charcoal/70 text-base leading-relaxed"
                  >
                    {product.long[lang]}
                  </motion.p>
                  <div className="mt-8">
                    <div className="text-[10px] uppercase tracking-[0.25em] text-brand font-bold mb-3">{t("detailSpecs")}</div>
                    <dl className="divide-y divide-stone/60 border-y border-stone/60">
                      {([
                        ["spec_material", product.specs.material[lang]],
                        ["spec_dim", product.specs.dim[lang]],
                        ["spec_color", product.specs.color[lang]],
                        ["spec_pkg", product.specs.pkg[lang]],
                      ] as const).map(([k, v]) => (
                        <div key={k} className="flex justify-between py-3 text-sm">
                          <dt className="text-charcoal/50 uppercase tracking-wider text-[11px] font-medium">{t(k)}</dt>
                          <dd className="text-charcoal font-medium text-right">{v}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                  <div className="mt-8 flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => { add(product.id); toast.success(t("inquiryAdded")); }}
                      className="flex-1 px-6 py-4 bg-charcoal text-canvas rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-brand transition-all"
                    >
                      {t("inquireNow")}
                    </button>
                    <button className="flex-1 px-6 py-4 bg-surface border border-stone rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:border-brand transition-all">
                      {t("requestQuote")}
                    </button>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <button className="px-4 py-3 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-charcoal/70 rounded-full border border-stone hover:border-brand hover:text-brand transition-all">
                      {t("whatsapp")}
                    </button>
                    <button className="px-4 py-3 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-charcoal/70 rounded-full border border-stone hover:border-brand hover:text-brand transition-all">
                      {t("wechat")}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
