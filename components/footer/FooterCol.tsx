"use client";

import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useIsMobile } from "@/lib/useIsMobile";

type FooterColProps = {
  titleEn: string;
  titleCn?: string;
  children: ReactNode;
  collapsible?: boolean;
};

export function FooterCol({ titleEn, titleCn, children, collapsible = false }: FooterColProps) {
  const isMobile = useIsMobile();
  const useAccordion = collapsible && isMobile;
  const [open, setOpen] = useState(false);

  const title = (
    <>
      {titleEn}
      {titleCn && (
        <>
          {" "}·{" "}
          <span className="cn-text" lang="zh">
            {titleCn}
          </span>
        </>
      )}
    </>
  );

  const list = (
    <ul
      style={{
        listStyle: "none",
        padding: 0,
        marginTop: 16,
        display: "grid",
        gap: 8,
      }}
    >
      {children}
    </ul>
  );

  if (!useAccordion) {
    return (
      <div>
        <div
          style={{
            fontWeight: 600,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            fontSize: "0.78rem",
            opacity: 0.6,
          }}
        >
          {title}
        </div>
        {list}
      </div>
    );
  }

  return (
    <div style={{ borderTop: "1px solid var(--hairline-footer, rgba(250,249,245,0.12))" }}>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        style={{
          width: "100%",
          minHeight: 44,
          background: "transparent",
          border: "none",
          color: "inherit",
          fontFamily: "inherit",
          padding: "14px 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontWeight: 600,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          fontSize: "0.78rem",
          opacity: 0.85,
          cursor: "pointer",
        }}
      >
        <span>{title}</span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }} style={{ display: "inline-flex" }}>
          <ChevronDown size={16} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div style={{ paddingBottom: 16 }}>{list}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
