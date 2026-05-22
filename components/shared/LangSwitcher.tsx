"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import { Globe, Check } from "lucide-react";
import { useI18n } from "@/lib/i18n/useI18n";
import { LANGS, LANG_META } from "@/lib/i18n/types";
import { useHaptic } from "@/lib/useHaptic";

type Props = {
  variant?: "compact" | "stacked";
  onOpenChange?: (open: boolean) => void;
};

export function LangSwitcher({ variant = "compact", onOpenChange }: Props) {
  const { lang, setLang, dict } = useI18n();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    onOpenChange?.(open);
  }, [open, onOpenChange]);
  const [coords, setCoords] = useState<{ top: number; right: number } | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const popRef = useRef<HTMLUListElement>(null);
  const haptic = useHaptic();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    function updateCoords() {
      const r = btnRef.current?.getBoundingClientRect();
      if (!r) return;
      setCoords({ top: r.bottom + 8, right: window.innerWidth - r.right });
    }
    updateCoords();
    function onDocClick(e: MouseEvent) {
      const target = e.target as Node;
      if (wrapRef.current?.contains(target)) return;
      if (popRef.current?.contains(target)) return;
      setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("resize", updateCoords);
    window.addEventListener("scroll", updateCoords, true);
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("resize", updateCoords);
      window.removeEventListener("scroll", updateCoords, true);
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (variant === "stacked") {
    return (
      <div
        role="radiogroup"
        aria-label={dict.lang.selectLanguage}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
          width: "100%",
          maxWidth: 280,
        }}
      >
        <div
          style={{
            fontSize: "0.7rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            opacity: 0.6,
            textAlign: "center",
            marginBottom: 4,
          }}
        >
          {dict.lang.label}
        </div>
        {LANGS.map((l) => {
          const meta = LANG_META[l];
          const active = l === lang;
          return (
            <button
              key={l}
              role="radio"
              aria-checked={active}
              onClick={() => {
                haptic(8);
                setLang(l);
              }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 12,
                minHeight: 48,
                padding: "10px 18px",
                borderRadius: 999,
                border: `1px solid ${active ? "#E0A93A" : "var(--hairline)"}`,
                background: active ? "rgba(224,169,58,0.12)" : "transparent",
                color: "var(--fg)",
                fontFamily: "inherit",
                fontWeight: 600,
                fontSize: "0.95rem",
                cursor: "pointer",
                transition: "background 0.2s ease, border-color 0.2s ease",
              }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span
                  aria-hidden
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 28,
                    height: 28,
                    borderRadius: 999,
                    background: active ? "#E0A93A" : "var(--hairline)",
                    color: active ? "#1A1A1A" : "var(--fg)",
                    fontWeight: 700,
                    fontSize: "0.78rem",
                  }}
                >
                  {meta.flag}
                </span>
                <span>{meta.native}</span>
              </span>
              {active && <Check size={16} color="#E0A93A" />}
            </button>
          );
        })}
      </div>
    );
  }

  const current = LANG_META[lang];

  return (
    <div ref={wrapRef} style={{ position: "relative" }}>
      <button
        ref={btnRef}
        type="button"
        aria-label={dict.lang.selectLanguage}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => {
          haptic(6);
          setOpen((v) => !v);
        }}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          height: 36,
          padding: "0 12px",
          borderRadius: 999,
          border: "1px solid var(--hairline)",
          background: "transparent",
          color: "var(--fg)",
          cursor: "pointer",
          fontFamily: "inherit",
          fontWeight: 600,
          fontSize: "0.8rem",
          letterSpacing: "0.04em",
          transition: "background 0.2s ease, border-color 0.2s ease",
        }}
      >
        <Globe size={15} strokeWidth={1.8} />
        <span style={{ fontWeight: 700 }}>{current.flag}</span>
      </button>

      {mounted && createPortal(
        <AnimatePresence>
          {open && coords && (
            <motion.ul
              ref={popRef}
              role="listbox"
              aria-label={dict.lang.selectLanguage}
              initial={{ opacity: 0, y: -6, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.96 }}
              transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: "fixed",
                top: coords.top,
                right: coords.right,
                listStyle: "none",
                margin: 0,
                padding: 6,
                minWidth: 180,
                background: "color-mix(in srgb, var(--bg) 96%, transparent)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                border: "1px solid var(--hairline-strong)",
                borderRadius: 14,
                boxShadow: "0 18px 40px -18px rgba(0,0,0,0.4)",
                zIndex: 9999,
              }}
            >
            {LANGS.map((l) => {
              const meta = LANG_META[l];
              const active = l === lang;
              return (
                <li key={l}>
                  <button
                    role="option"
                    aria-selected={active}
                    onClick={() => {
                      haptic(8);
                      setLang(l);
                      setOpen(false);
                    }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      gap: 12,
                      padding: "8px 12px",
                      minHeight: 38,
                      borderRadius: 10,
                      border: "none",
                      background: active ? "rgba(224,169,58,0.14)" : "transparent",
                      color: "var(--fg)",
                      cursor: "pointer",
                      fontFamily: "inherit",
                      fontWeight: 600,
                      fontSize: "0.85rem",
                      textAlign: "start",
                      transition: "background 0.15s ease",
                    }}
                    onMouseEnter={(e) => {
                      if (!active) e.currentTarget.style.background = "rgba(127,127,127,0.08)";
                    }}
                    onMouseLeave={(e) => {
                      if (!active) e.currentTarget.style.background = "transparent";
                    }}
                  >
                    <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span
                        aria-hidden
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: 22,
                          height: 22,
                          borderRadius: 999,
                          background: active ? "#E0A93A" : "var(--hairline)",
                          color: active ? "#1A1A1A" : "var(--fg)",
                          fontWeight: 700,
                          fontSize: "0.72rem",
                        }}
                      >
                        {meta.flag}
                      </span>
                      <span>{meta.native}</span>
                    </span>
                    {active && <Check size={14} color="#E0A93A" />}
                  </button>
                </li>
              );
            })}
          </motion.ul>
        )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
}
