"use client";

import { useState } from "react";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "motion/react";
import { COPY } from "@/lib/copy";
import { NavLabel } from "@/components/shared/NavLabel";
import { STEEZWordmark } from "@/components/shared/STEEZWordmark";
import { AnimatedThemeToggler } from "@/components/shared/AnimatedThemeToggler";
import { cn } from "@/lib/cn";

const SPRING = { type: "spring" as const, stiffness: 260, damping: 30 };

export function Nav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  const collapsed = scrolled && !hovered;
  const expanded = !collapsed;

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
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
        style={{
          paddingLeft: collapsed ? "1.25rem" : "2rem",
          paddingRight: collapsed ? "1.25rem" : "2rem",
          borderRadius: "var(--radius-navigation)",
        }}
        className={cn(
          "flex h-auto min-h-[56px] items-center",
          collapsed && "w-auto border border-[var(--hairline)] bg-[var(--bg)]/80 py-2 shadow-xl backdrop-blur-md justify-center",
          expanded && scrolled && "max-w-4xl w-full justify-between border border-[var(--hairline)] bg-[var(--bg)]/80 py-3 shadow-xl backdrop-blur-md min-h-[72px]",
          expanded && !scrolled && "max-w-7xl w-full justify-between border border-transparent bg-transparent py-6 shadow-none min-h-[72px]"
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

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              key="nav-actions"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-6 sm:gap-12 overflow-hidden"
            >
              <ul className="hidden list-none items-center gap-6 p-0 text-[13px] font-medium uppercase tracking-widest md:flex sm:gap-10 whitespace-nowrap">
                {COPY.nav.map((l) => (
                  <li key={l.en} className="flex">
                    <a
                      href={l.href}
                      className="rounded-sm transition-opacity duration-200 hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mint"
                    >
                      <NavLabel en={l.en} cn={l.cn} />
                    </a>
                  </li>
                ))}
              </ul>
              <div className="flex-shrink-0">
                <AnimatedThemeToggler />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </motion.header>
  );
}
