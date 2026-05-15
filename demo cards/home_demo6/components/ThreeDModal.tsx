"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Package } from "lucide-react";
import dynamic from "next/dynamic";
import { useLanguage } from "@/hooks/useLanguage";
import type { Product } from "@/lib/products";

const ModelViewer = dynamic(() => import("@/components/ModelViewer"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-[#1a1008]">
      <span className="text-[#f5f0eb]/30 text-sm font-sans">Loading 3D…</span>
    </div>
  ),
});

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

interface ThreeDModalProps {
  product: Product;
  open: boolean;
  onClose: () => void;
}

function ModalContent({ product, onClose }: Omit<ThreeDModalProps, "open">) {
  const { lang, t } = useLanguage();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.72)", backdropFilter: "blur(6px)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.93, y: 28 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.93, y: 20 }}
        transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
        className="bg-[#faf9f5] rounded-3xl overflow-hidden w-full max-w-2xl shadow-2xl"
        style={{ maxHeight: "90vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="flex items-start justify-between px-6 pt-5 pb-4"
          style={{ borderBottom: "1px solid rgba(4,52,44,0.08)" }}
        >
          <div>
            <p
              className="text-[11px] font-sans font-semibold tracking-[0.18em] uppercase mb-1"
              style={{ color: "#E0A93A" }}
            >
              {lang === "en"
                ? CATEGORY_LABEL_EN[product.category]
                : CATEGORY_LABEL_ZH[product.category]}
            </p>
            <h2 className="font-serif text-xl font-bold" style={{ color: "#04342C" }}>
              {lang === "en" ? product.nameEn : product.nameZh}
            </h2>
            <p className="text-xs font-sans mt-0.5" style={{ color: "rgba(4,52,44,0.45)" }}>
              {lang === "en" ? product.nameZh : product.nameEn}
            </p>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-2 transition-colors duration-200 shrink-0 ml-4 mt-0.5"
            style={{ color: "rgba(4,52,44,0.35)", background: "rgba(4,52,44,0.06)" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "rgba(4,52,44,0.12)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "rgba(4,52,44,0.06)";
            }}
          >
            <X size={16} />
          </button>
        </div>

        {/* Body */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* 3D canvas */}
          <div
            className="h-64 md:h-72"
            style={{ background: "#1a1008" }}
          >
            <ModelViewer modelType={product.modelType} />
          </div>

          {/* Info */}
          <div className="p-6 flex flex-col gap-4 overflow-y-auto" style={{ maxHeight: "320px" }}>
            <p
              className="text-sm font-sans leading-relaxed"
              style={{ color: "rgba(4,52,44,0.6)" }}
            >
              {lang === "en" ? product.descEn : product.descZh}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              <span
                className="text-[11px] font-sans rounded-full px-3 py-1"
                style={{
                  color: "rgba(4,52,44,0.5)",
                  background: "rgba(4,52,44,0.06)",
                }}
              >
                {t.products.moqLabel}: {product.moq.toLocaleString()}
              </span>
              <span
                className="text-[11px] font-sans rounded-full px-3 py-1 truncate max-w-[180px]"
                style={{
                  color: "rgba(4,52,44,0.5)",
                  background: "rgba(4,52,44,0.06)",
                }}
              >
                {lang === "en" ? product.material : product.materialZh}
              </span>
              {product.customizable && (
                <span
                  className="text-[11px] font-sans rounded-full px-3 py-1"
                  style={{ color: "#E0A93A", background: "rgba(224,169,58,0.12)" }}
                >
                  {t.products.customizable}
                </span>
              )}
            </div>

            {/* Hint */}
            <p
              className="text-[11px] font-sans flex items-center gap-1.5 mt-auto"
              style={{ color: "rgba(4,52,44,0.35)" }}
            >
              <Package size={11} />
              {lang === "en" ? "Drag to rotate · Scroll to zoom" : "拖动旋转 · 滚动缩放"}
            </p>

            {/* CTA */}
            <button
              className="w-full text-sm font-sans font-semibold py-3 rounded-xl transition-colors duration-300"
              style={{ background: "#04342C", color: "#FAF9F5" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "#E0A93A";
                (e.currentTarget as HTMLButtonElement).style.color = "#04342C";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "#04342C";
                (e.currentTarget as HTMLButtonElement).style.color = "#FAF9F5";
              }}
            >
              {t.products.addToInquiry}
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ThreeDModal({ product, open, onClose }: ThreeDModalProps) {
  const [mounted, setMounted] = useState(false);
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && <ModalContent product={product} onClose={onClose} />}
    </AnimatePresence>,
    document.body
  );
}
