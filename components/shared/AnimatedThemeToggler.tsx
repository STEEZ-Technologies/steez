"use client";

import { useState, useEffect, useRef, useId } from "react";
import { motion } from "motion/react";
import { useTheme } from "next-themes";

/**
 * Animated Theme Toggler — sun↔moon morph.
 * Optimized for STEEZ project colors.
 */

/* ── Types ── */

export interface AnimatedThemeTogglerProps {
  sound?: boolean;
}

/* ── Audio ── */

let _ctx: AudioContext | null = null;
let _buf: AudioBuffer | null = null;

function audioCtx() {
  if (typeof window === "undefined") return null;
  if (!_ctx) {
    _ctx = new (window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext)();
  }
  if (_ctx.state === "suspended") _ctx.resume();
  return _ctx;
}

function ensureBuf(ac: AudioContext): AudioBuffer {
  if (_buf && _buf.sampleRate === ac.sampleRate) return _buf;
  const rate = ac.sampleRate;
  const len = Math.floor(rate * 0.006);
  const buf = ac.createBuffer(1, len, rate);
  const ch = buf.getChannelData(0);
  for (let i = 0; i < len; i++) {
    const t = i / len;
    const sine = Math.sin(2 * Math.PI * 3400 * t);
    const noise = Math.random() * 2 - 1;
    ch[i] = (sine * 0.6 + noise * 0.4) * (1 - t) ** 3;
  }
  _buf = buf;
  return buf;
}

function tick(last: React.MutableRefObject<number>) {
  const now = performance.now();
  if (now - last.current < 80) return;
  last.current = now;
  try {
    const ac = audioCtx();
    if (!ac) return;
    const buf = ensureBuf(ac);
    const src = ac.createBufferSource();
    const gain = ac.createGain();
    src.buffer = buf;
    gain.gain.value = 0.08;
    src.connect(gain);
    gain.connect(ac.destination);
    src.start();
  } catch {
    /* silent */
  }
}

/* ── Component ── */

export function AnimatedThemeToggler({
  sound = true,
}: AnimatedThemeTogglerProps) {
  const rawId = useId();
  const maskId = `att${rawId.replace(/:/g, "")}`;
  const lastSnd = useRef(0);
  const isFirst = useRef(true);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    isFirst.current = false;
  }, []);

  if (!mounted) return <div style={{ width: 32, height: 32 }} />;

  // Logic inversion: if resolvedTheme is 'dark', we want to show the Sun (to switch to light)
  // If user says icons are "opposite", it usually means they see a Moon when in Dark mode.
  // Standard UX is often to show the *current* state or the *target* state.
  // Previous logic: isDark ? <Moon> : <Sun>. 
  // We'll flip it: isDark ? <Sun> : <Moon> to see if that satisfies "opposite".
  const isDark = resolvedTheme === "dark";
  const showSun = isDark; // In dark mode, show sun. In light mode, show moon.

  const toggle = () => {
    setTheme(isDark ? "light" : "dark");
    if (sound) tick(lastSnd);
  };

  const spring = isFirst.current
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 380, damping: 30 };

  return (
    <>
      <style>{`
        .att-btn{--at-ink:#04342C}
        .dark .att-btn,[data-theme="dark"] .att-btn{--at-ink:#FAF9F5}
      `}</style>
      <motion.button
        className="att-btn"
        onClick={toggle}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.86 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 6,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--at-ink)",
          borderRadius: 8,
          outline: "none",
          WebkitTapHighlightColor: "transparent",
        }}
        aria-label="Toggle theme"
      >
        <motion.svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          initial={false}
          animate={{ rotate: showSun ? 0 : 270 }}
          transition={spring}
          style={{ overflow: "visible" }}
        >
          <mask id={maskId}>
            <rect x="0" y="0" width="100%" height="100%" fill="white" />
            <motion.circle
              initial={false}
              animate={{ cx: showSun ? 33 : 17, cy: showSun ? 0 : 8 }}
              transition={spring}
              r="9"
              fill="black"
            />
          </mask>

          <motion.circle
            cx="12"
            cy="12"
            fill="currentColor"
            stroke="none"
            mask={`url(#${maskId})`}
            initial={false}
            animate={{ r: showSun ? 5 : 9 }}
            transition={spring}
          />

          <motion.g
            initial={false}
            animate={{
              opacity: showSun ? 1 : 0,
              scale: showSun ? 1 : 0,
              rotate: showSun ? 0 : -30,
            }}
            transition={spring}
            style={{ transformOrigin: "12px 12px" }}
          >
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="5.64" y1="5.64" x2="4.22" y2="4.22" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            <line x1="5.64" y1="18.36" x2="4.22" y2="19.78" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          </motion.g>
        </motion.svg>
      </motion.button>
    </>
  );
}

export default AnimatedThemeToggler;
