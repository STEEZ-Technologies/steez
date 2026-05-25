"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { TextAnimate } from "@/components/ui/text-animate";
import { useI18n } from "@/lib/i18n/useI18n";
import { usePreloader } from "./PreloaderContext";

const HOLD_MS = 900;
const EXIT_MS = 350;

export function Preloader() {
  const [visible, setVisible] = useState(true);
  const { dict } = useI18n();
  const { setDone } = usePreloader();

  useEffect(() => {
    if (typeof document === "undefined") return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const t = window.setTimeout(() => setVisible(false), HOLD_MS);
    return () => {
      window.clearTimeout(t);
      document.body.style.overflow = prev;
    };
  }, []);

  useEffect(() => {
    if (visible) return;
    document.body.style.overflow = "";
    setDone();
  }, [visible, setDone]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: EXIT_MS / 1000, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 10000,
            background: "var(--bg)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "clamp(4px, 1vw, 12px)",
            padding: "0 clamp(16px, 4vw, 32px)",
          }}
        >
          <TextAnimate
            as="h1"
            animation="blurInUp"
            by="character"
            once
            delay={0}
            duration={0.35}
            className="font-bold"
            style={{
              fontSize: "clamp(4.5rem, 22vw, 18rem)",
              lineHeight: 0.88,
              letterSpacing: "-0.05em",
              color: "var(--fg)",
              fontFamily: "var(--font-stack-sans), sans-serif",
              margin: 0,
            }}
          >
            STEEZ
          </TextAnimate>
          <TextAnimate
            as="h2"
            animation="blurInUp"
            by="character"
            once
            delay={0.2}
            duration={0.35}
            className="font-light"
            style={{
              fontSize: "clamp(2rem, 8vw, 6rem)",
              lineHeight: 1,
              letterSpacing: "0.05em",
              color: "var(--fg)",
              opacity: 0.85,
              fontFamily: "var(--font-stack-sans), sans-serif",
              margin: 0,
            }}
          >
            {dict.hero.title2}
          </TextAnimate>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
