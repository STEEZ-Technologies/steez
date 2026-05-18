"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Box } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import type { Product } from "@/lib/products";
import ThreeDModal from "./ThreeDModal";

interface ProductCardProps {
  product: Product;
}

const BADGE_COLORS: Record<Product["category"], string> = {
  cooking: "bg-amber-100 text-amber-800",
  ceramics: "bg-rose-100 text-rose-800",
  glass: "bg-sky-100 text-sky-800",
  bathroom: "bg-teal-100 text-teal-800",
  homeDecor: "bg-violet-100 text-violet-800",
};

const CATEGORY_LABEL_EN: Record<Product["category"], string> = {
  cooking: "Cooking",
  ceramics: "Ceramics",
  glass: "Glass",
  bathroom: "Bathroom",
  homeDecor: "Home Decor",
};

const CATEGORY_LABEL_ZH: Record<Product["category"], string> = {
  cooking: "厨房",
  ceramics: "陶瓷",
  glass: "玻璃",
  bathroom: "浴室",
  homeDecor: "家居",
};

export default function ProductCard({ product }: ProductCardProps) {
  const { lang, t } = useLanguage();
  const [show3D, setShow3D] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ y: -6, transition: { duration: 0.28 } }}
        className="group bg-cream rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col"
      >
        {/* Image */}
        <div className="relative h-52 overflow-hidden bg-cream-dark shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.imageUrl}
            alt={product.nameEn}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Category badge */}
          <div className="absolute top-3 left-3">
            <span
              className={`text-[11px] font-sans font-semibold rounded-full px-2.5 py-1 ${
                BADGE_COLORS[product.category]
              }`}
            >
              {lang === "en"
                ? CATEGORY_LABEL_EN[product.category]
                : CATEGORY_LABEL_ZH[product.category]}
            </span>
          </div>

          {/* Customizable badge */}
          {product.customizable && (
            <div className="absolute top-3 right-3">
              <span className="text-[11px] font-sans font-semibold text-bronze bg-cream/90 rounded-full px-2.5 py-1 shadow-sm">
                {t.products.customizable}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <h3 className="font-serif text-lg font-bold text-espresso leading-tight mb-0.5">
            {lang === "en" ? product.nameEn : product.nameZh}
          </h3>
          <p className="text-xs font-sans text-warm-brown mb-3 tracking-wider">
            {lang === "en" ? product.nameZh : product.nameEn}
          </p>
          <p className="text-sm font-sans text-espresso/55 leading-relaxed mb-4 line-clamp-2 flex-1">
            {lang === "en" ? product.descEn : product.descZh}
          </p>

          {/* Info tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            <span className="text-[11px] font-sans text-espresso/50 bg-cream-dark rounded-full px-2.5 py-1">
              {t.products.moqLabel}: {product.moq.toLocaleString()}
            </span>
            <span className="text-[11px] font-sans text-espresso/50 bg-cream-dark rounded-full px-2.5 py-1 truncate max-w-[160px]">
              {lang === "en" ? product.material : product.materialZh}
            </span>
          </div>

          {/* Buttons */}
          <div className="flex gap-2">
            <button className="flex-1 flex items-center justify-center gap-1.5 bg-espresso text-cream text-xs font-sans font-semibold py-2.5 rounded-xl hover:bg-bronze transition-colors duration-300">
              <ShoppingBag size={11} />
              {t.products.addToInquiry}
            </button>
            <button
              onClick={() => setShow3D(true)}
              className="flex items-center justify-center gap-1.5 border border-espresso/15 text-espresso/55 text-xs font-sans font-semibold px-3 py-2.5 rounded-xl hover:border-bronze hover:text-bronze transition-colors duration-300"
            >
              <Box size={11} />
              {t.products.view3d}
            </button>
          </div>
        </div>
      </motion.div>

      <ThreeDModal product={product} open={show3D} onClose={() => setShow3D(false)} />
    </>
  );
}
