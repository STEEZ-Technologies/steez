"use client";

import { useRef } from "react";
import NumberFlow from "@number-flow/react";
import { motion, useInView } from "motion/react";
import { useI18n } from "@/lib/i18n/useI18n";

export function Numbers() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const { dict } = useI18n();

  const STATS = [
    { value: 1247, accent: "+", label: dict.numbers.scans },
    { value: 38, accent: "", label: dict.numbers.countries },
    { value: 90, accent: "", label: dict.numbers.days },
    { value: 3, accent: "", label: dict.numbers.lines },
  ];

  return (
    <div
      style={{
        width: "100%",
        maxWidth: 1200,
        marginLeft: "auto",
        marginRight: "auto",
        background: "transparent",
        borderTop: "1px solid var(--hairline)",
        borderBottom: "1px solid var(--hairline)",
        transition: "border-color 0.4s ease",
      }}
    >
      <div
        ref={ref}
        className="flex flex-wrap justify-center md:flex-nowrap md:justify-between w-full py-2 gap-4 md:gap-0"
      >
        {STATS.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center text-center gap-1 py-4 px-4 md:py-0 md:px-2 bg-[var(--card-bg)] md:bg-transparent border border-[var(--hairline)] md:border-none md:border-r md:last:border-r-0 rounded-2xl md:rounded-none"
            style={{
              flex: "1 1 calc(50% - 16px)",
              minWidth: "140px",
              padding: "clamp(12px, 2vw, 24px) clamp(10px, 1.5vw, 20px)",
              whiteSpace: "nowrap"
            }}
          >
            <div
              style={{
                fontWeight: 900,
                fontSize: "clamp(1.2rem, 2.5vw, 2rem)",
                lineHeight: 1,
                letterSpacing: "-0.02em",
                color: "var(--fg)",
                transition: "color 0.4s ease",
                display: "inline-flex",
                alignItems: "baseline",
              }}
            >
              <NumberFlow
                value={inView ? s.value : 0}
                format={{ useGrouping: true, maximumFractionDigits: 0 }}
                transformTiming={{ duration: 1400, easing: "cubic-bezier(0.22, 1, 0.36, 1)" }}
                spinTiming={{ duration: 1400, easing: "cubic-bezier(0.22, 1, 0.36, 1)" }}
              />
              {s.accent && (
                <span style={{ color: "#E0A93A", marginLeft: 2 }}>{s.accent}</span>
              )}
            </div>
            <div
              style={{
                fontWeight: 500,
                fontSize: "clamp(0.6rem, 0.8vw, 0.7rem)",
                color: "var(--fg)",
                opacity: 0.5,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                transition: "color 0.4s ease, opacity 0.4s ease",
              }}
            >
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
