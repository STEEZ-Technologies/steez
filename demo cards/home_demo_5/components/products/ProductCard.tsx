"use client";

import { Product } from "@/lib/data";
import { useI18n } from "@/hooks/useI18n";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { language, t } = useI18n();

  return (
    <motion.div
      whileTap={{ scale: 0.98 }}
      className="group relative bg-white border border-stone/10 overflow-hidden rounded-sm"
    >
      <div className="aspect-[4/5] overflow-hidden bg-stone/5">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: "circOut" }}
          src={product.image}
          alt={product.name[language]}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4 space-y-3">
        <div>
          <h3 className="font-serif text-lg text-charcoal leading-tight">
            {product.name[language]}
          </h3>
          <p className="text-[10px] uppercase tracking-widest text-stone mt-1">
            {t(`category.${product.category}`)}
          </p>
        </div>

        <div className="space-y-1 border-t border-stone/5 pt-3">
          <div className="flex justify-between text-[10px] uppercase tracking-tighter">
            <span className="text-stone/60">{t("product.material")}</span>
            <span className="text-charcoal font-medium">{product.material[language]}</span>
          </div>
          <div className="flex justify-between text-[10px] uppercase tracking-tighter">
            <span className="text-stone/60">{t("product.dimensions")}</span>
            <span className="text-charcoal font-medium">{product.dimensions}</span>
          </div>
          <div className="flex justify-between text-[10px] uppercase tracking-tighter">
            <span className="text-stone/60">{t("product.moq")}</span>
            <span className="text-charcoal font-medium">{product.moq} PCS</span>
          </div>
        </div>

        <button
          className="w-full py-3 bg-charcoal text-white text-[10px] uppercase tracking-[0.2em] font-bold flex items-center justify-center gap-2 active:bg-stone transition-colors"
        >
          <Plus className="w-3 h-3" />
          {t("product.add")}
        </button>
      </div>
    </motion.div>
  );
}
