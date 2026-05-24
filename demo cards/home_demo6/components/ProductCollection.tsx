"use client";
import { useState, useRef, useCallback } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import type { Product } from "@/lib/products";

type FilterKey = "all" | Product["category"];

export default function ProductCollection() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");
  const [activeIdx, setActiveIdx] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const filters: { key: FilterKey; label: string }[] = [
    { key: "all", label: t.products.filters.all },
    { key: "cooking", label: t.products.filters.cooking },
    { key: "ceramics", label: t.products.filters.ceramics },
    { key: "glass", label: t.products.filters.glass },
    { key: "bathroom", label: t.products.filters.bathroom },
    { key: "homeDecor", label: t.products.filters.homeDecor },
  ];

  const filtered =
    activeFilter === "all"
      ? products
      : products.filter((p) => p.category === activeFilter);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setActiveIdx(Math.round(el.scrollTop / el.clientHeight));
  }, []);

  const scrollTo = useCallback((i: number) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ top: i * el.clientHeight, behavior: "smooth" });
    setActiveIdx(i);
  }, []);

  const changeFilter = (key: FilterKey) => {
    setActiveFilter(key);
    setActiveIdx(0);
    requestAnimationFrame(() => {
      scrollRef.current?.scrollTo({ top: 0, behavior: "instant" });
    });
  };

  return (
    <section
      id="products"
      style={{ position: "relative", height: "100vh", overflow: "hidden" }}
    >
      {/* Full-viewport scroll-snap container */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        style={{
          position: "absolute",
          inset: 0,
          overflowY: "scroll",
          scrollSnapType: "y mandatory",
        }}
      >
        {filtered.map((product, i) => (
          <div
            key={product.id}
            style={{
              height: "100vh",
              width: "100%",
              scrollSnapAlign: "start",
              scrollSnapStop: "always",
            }}
          >
            <ProductCard product={product} index={i} total={filtered.length} />
          </div>
        ))}
      </div>

      {/* Filter overlay — top bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 20,
          padding: "16px 24px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: 8,
          background: "rgba(245,242,235,0.82)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          borderBottom: "1px solid rgba(26,20,7,0.08)",
        }}
      >
        <span
          style={{
            fontSize: "0.65rem",
            fontWeight: 700,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "rgba(26,20,7,0.35)",
            marginRight: 8,
            whiteSpace: "nowrap",
          }}
        >
          {t.products.sectionEyebrow}
        </span>
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => changeFilter(f.key)}
            style={{
              fontSize: "0.75rem",
              fontWeight: 500,
              padding: "6px 16px",
              borderRadius: 999,
              border: activeFilter === f.key ? "none" : "1px solid rgba(26,20,7,0.12)",
              background: activeFilter === f.key ? "#1a1407" : "transparent",
              color: activeFilter === f.key ? "#f5f2eb" : "rgba(26,20,7,0.5)",
              cursor: "pointer",
              transition: "all 0.2s ease",
              whiteSpace: "nowrap",
            }}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Navigation dots — right */}
      <div
        style={{
          position: "absolute",
          right: 20,
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          zIndex: 20,
        }}
      >
        {filtered.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Go to product ${i + 1}`}
            style={{
              width: i === activeIdx ? 8 : 6,
              height: i === activeIdx ? 8 : 6,
              borderRadius: "50%",
              background: i === activeIdx ? "#1a1407" : "rgba(26,20,7,0.22)",
              border: "none",
              cursor: "pointer",
              transition: "all 0.25s ease",
              padding: 0,
            }}
          />
        ))}
      </div>
    </section>
  );
}
