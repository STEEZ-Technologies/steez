"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { COPY } from "@/lib/copy";
import { NavLabel } from "@/components/shared/NavLabel";
import { STEEZWordmark } from "@/components/shared/STEEZWordmark";
import { AnimatedThemeToggler } from "@/components/shared/AnimatedThemeToggler";
import { cn } from "@/lib/cn";

const SPRING = { type: "spring" as const, stiffness: 260, damping: 30 };

export function Nav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <motion.header
      layout
      transition={SPRING}
      className={cn(
        "fixed inset-x-0 z-[100] flex h-auto justify-center",
        scrolled ? "top-6 px-6 md:px-10" : "top-0 px-0"
      )}
    >
      <motion.nav
        layout
        transition={SPRING}
        style={{
          paddingLeft: "2rem",
          paddingRight: "2rem",
          borderRadius: "var(--radius-navigation)",
        }}
        className={cn(
          "flex h-auto min-h-[72px] w-full items-center justify-between",
          scrolled
            ? "max-w-4xl border border-[var(--hairline)] bg-[var(--bg)]/80 py-3 shadow-xl backdrop-blur-md"
            : "max-w-7xl border-transparent bg-transparent py-6 shadow-none"
        )}
      >
        <motion.div layout="position" className="flex-shrink-0">
          <a
            href="#top"
            aria-label="STEEZ home"
            className="rounded-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mint"
          >
            <STEEZWordmark size={22} />
          </a>
        </motion.div>

        <motion.div layout="position" className="flex items-center gap-6 sm:gap-12">
          <ul className="hidden list-none items-center gap-6 p-0 text-[13px] font-medium uppercase tracking-widest md:flex sm:gap-10">
            {COPY.nav.map((l) => (
              <motion.li layout="position" key={l.en} className="flex">
                <a
                  href={l.href}
                  className="rounded-sm transition-opacity duration-200 hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mint"
                >
                  <NavLabel en={l.en} cn={l.cn} />
                </a>
              </motion.li>
            ))}
          </ul>
          <motion.div layout="position" className="flex-shrink-0">
            <AnimatedThemeToggler />
          </motion.div>
        </motion.div>
      </motion.nav>
    </motion.header>
  );
}
