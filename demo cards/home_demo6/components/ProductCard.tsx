"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Box } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import type { Product } from "@/lib/products";
import ThreeDModal from "./ThreeDModal";

interface ProductCardProps {
  product: Product;
  index: number;
  total: number;
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

export default function ProductCard({ product, index, total }: ProductCardProps) {
  const { lang, t } = useLanguage();
  const [show3D, setShow3D] = useState(false);

  return (
    <>
      {/* Full-bleed card: image fills entire viewport, info overlaid at bottom */}
      <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden", background: "#1a1407" }}>
        {/* Full-bleed image */}
        <motion.img
          key={product.id}
          initial={{ scale: 1.06, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          src={product.imageUrl}
          alt={product.nameEn}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />

        {/* Gradient overlay — bottom */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(26,20,7,0.92) 0%, rgba(26,20,7,0.45) 40%, rgba(26,20,7,0.0) 70%)",
          }}
        />

        {/* Badges — top left / right */}
        <div style={{ position: "absolute", top: 72, left: 24, zIndex: 5 }}>
          <span className={`text-[11px] font-sans font-semibold rounded-full px-3 py-1 ${BADGE_COLORS[product.category]}`}>
            {lang === "en" ? CATEGORY_LABEL_EN[product.category] : CATEGORY_LABEL_ZH[product.category]}
          </span>
        </div>
        {product.customizable && (
          <div style={{ position: "absolute", top: 72, right: 40, zIndex: 5 }}>
            <span className="text-[11px] font-sans font-semibold text-bronze bg-cream/90 rounded-full px-3 py-1 shadow-sm">
              {t.products.customizable}
            </span>
          </div>
        )}

        {/* Info panel — bottom overlay */}
        <motion.div
          key={product.id + "-info"}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 5,
            padding: "clamp(24px, 4vw, 56px) clamp(24px, 5vw, 80px)",
            display: "flex",
            flexDirection: "column",
            gap: 0,
          }}
        >
          {/* Two-column: left = text, right = specs + buttons */}
          <div style={{ display: "flex", alignItems: "flex-end", gap: "clamp(24px, 4vw, 64px)", flexWrap: "wrap" }}>
            {/* Left: name + desc */}
            <div style={{ flex: "1 1 280px" }}>
              {/* Eyebrow row: category + counter */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                <p
                  className="font-sans font-semibold tracking-[0.28em] uppercase"
                  style={{ color: "#C9A052", fontSize: "0.68rem" }}
                >
                  {lang === "en" ? CATEGORY_LABEL_EN[product.category] : CATEGORY_LABEL_ZH[product.category]}
                </p>
                <span style={{ color: "rgba(245,242,235,0.35)", fontSize: "0.65rem", letterSpacing: "0.22em", fontWeight: 600 }}>
                  {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                </span>
              </div>
              <h2
                className="font-serif font-black leading-[1.02] tracking-[-0.02em]"
                style={{ fontSize: "clamp(1.8rem, 4.5vw, 3.8rem)", color: "#f5f2eb", marginBottom: 8 }}
              >
                {lang === "en" ? product.nameEn : product.nameZh}
              </h2>
              <p
                className="font-sans tracking-wide"
                style={{ fontSize: "clamp(0.85rem, 1.2vw, 1rem)", color: "rgba(245,242,235,0.4)", marginBottom: 14 }}
              >
                {lang === "en" ? product.nameZh : product.nameEn}
              </p>
              <p
                className="font-sans leading-relaxed"
                style={{ fontSize: "clamp(0.8rem, 1vw, 0.95rem)", color: "rgba(245,242,235,0.55)", maxWidth: 480 }}
              >
                {lang === "en" ? product.descEn : product.descZh}
              </p>
            </div>

            {/* Right: specs + buttons */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20, flexShrink: 0 }}>
              <div style={{ display: "flex", gap: 32 }}>
                <div>
                  <div
                    className="font-sans font-semibold tracking-[0.2em] uppercase"
                    style={{ fontSize: "0.62rem", color: "rgba(245,242,235,0.35)", marginBottom: 4 }}
                  >
                    {t.products.moqLabel}
                  </div>
                  <div className="font-sans font-bold" style={{ fontSize: "1.1rem", color: "#f5f2eb" }}>
                    {product.moq.toLocaleString()}
                  </div>
                </div>
                <div>
                  <div
                    className="font-sans font-semibold tracking-[0.2em] uppercase"
                    style={{ fontSize: "0.62rem", color: "rgba(245,242,235,0.35)", marginBottom: 4 }}
                  >
                    Material
                  </div>
                  <div className="font-sans font-bold" style={{ fontSize: "0.95rem", color: "#f5f2eb", maxWidth: 180 }}>
                    {lang === "en" ? product.material : product.materialZh}
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", gap: 12 }}>
                <button
                  className="flex items-center gap-2 font-sans font-semibold text-sm rounded-xl hover:opacity-90 transition-opacity duration-200"
                  style={{ background: "#C9A052", color: "#1a1407", padding: "10px 22px" }}
                >
                  <ShoppingBag size={13} />
                  {t.products.addToInquiry}
                </button>
                <button
                  onClick={() => setShow3D(true)}
                  className="flex items-center gap-2 font-sans font-semibold text-sm rounded-xl transition-colors duration-200"
                  style={{ border: "1px solid rgba(245,242,235,0.25)", color: "rgba(245,242,235,0.6)", padding: "10px 18px", background: "transparent" }}
                >
                  <Box size={13} />
                  {t.products.view3d}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <ThreeDModal product={product} open={show3D} onClose={() => setShow3D(false)} />
    </>
  );
}
