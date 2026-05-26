"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "motion/react";
import { Menu, X } from "lucide-react";
import { COPY } from "@/lib/copy";
import { NavLabel } from "@/components/shared/NavLabel";
import { STEEZWordmark } from "@/components/shared/STEEZWordmark";
import { AnimatedThemeToggler } from "@/components/shared/AnimatedThemeToggler";
import { LangSwitcher } from "@/components/shared/LangSwitcher";
import { cn } from "@/lib/cn";
import { useIsMobile } from "@/lib/useIsMobile";
import { useI18n } from "@/lib/i18n/useI18n";

const NAV_KEY_BY_HREF: Record<string, "pricing" | "cards" | "contact"> = {
  "#pricing": "pricing",
  "#services": "cards",
  "#contact": "contact",
};

const SPRING = { type: "spring" as const, stiffness: 180, damping: 26, mass: 0.9 };
const SOFT_EASE = [0.22, 1, 0.36, 1] as const;

export function Nav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [mobileScrollHidden, setMobileScrollHidden] = useState(false);
  const lastScrollRef = useRef(0);
  const isMobile = useIsMobile();
  const { dict } = useI18n();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
    const prev = lastScrollRef.current;
    const delta = latest - prev;
    if (Math.abs(delta) < 6) return;
    if (latest < 30) {
      setMobileScrollHidden(false);
    } else if (delta > 0) {
      setMobileScrollHidden(true);
    } else {
      setMobileScrollHidden(false);
    }
    lastScrollRef.current = latest;
  });

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const collapsed = !isMobile && scrolled && !hovered && !isOpen && !langOpen;
  const expanded = !collapsed;
  const mobileHidden = isMobile && mobileScrollHidden && !isOpen;

  return (
    <>
      <motion.header
        layout
        transition={SPRING}
        animate={{
          y: mobileHidden ? -120 : 0,
          opacity: mobileHidden ? 0 : 1,
        }}
        style={{ pointerEvents: mobileHidden ? "none" : "auto" }}
        className={cn(
          "fixed inset-x-0 z-[100] flex h-auto justify-center",
          isMobile
            ? isOpen
              ? "top-0 px-0"
              : scrolled
              ? "top-3 px-12"
              : "top-0 px-0"
            : scrolled
            ? "top-6 px-6 md:px-10"
            : "top-0 px-0"
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
            paddingLeft: isMobile ? "1.75rem" : collapsed ? "1.25rem" : "2rem",
            paddingRight: isMobile ? "1.75rem" : collapsed ? "1.25rem" : "2rem",
            borderRadius: isMobile && isOpen ? 0 : isMobile ? (scrolled ? 999 : 0) : "var(--radius-navigation)",
            transition: isMobile
              ? "none"
              : "padding 0.45s cubic-bezier(0.22, 1, 0.36, 1), border-radius 0.4s ease, background-color 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease",
            willChange: "transform, padding, border-radius",
          }}
          className={cn(
            "flex h-auto min-h-[56px] items-center",
            isMobile && !scrolled && !isOpen && "w-full justify-between py-3 min-h-[60px]",
            isMobile && scrolled && !isOpen && "w-auto justify-between gap-3 bg-[var(--bg)] border border-[var(--hairline)] py-2 min-h-[52px] shadow-xl",
            isMobile && isOpen && "w-full justify-between py-3 min-h-[60px] bg-transparent border-transparent shadow-none",
            collapsed && "w-auto border border-[var(--hairline)] bg-[var(--bg)]/80 py-2 shadow-xl backdrop-blur-md justify-center",
            expanded && !isMobile && scrolled && "w-full max-w-[min(90%,1440px)] justify-between border border-[var(--hairline)] bg-[var(--bg)]/80 py-3 shadow-xl backdrop-blur-md min-h-[72px]",
            expanded && !isMobile && !scrolled && "w-full max-w-[min(90%,1440px)] justify-between border border-transparent bg-transparent py-6 shadow-none min-h-[72px]",
            !isMobile && isOpen && "border-transparent bg-transparent shadow-none backdrop-blur-none"
          )}
        >
          <motion.div layout="position" className="flex-shrink-0 z-[110]">
            <a
              href="#top"
              aria-label="STEEZ home"
              onClick={() => setIsOpen(false)}
              className="rounded-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mint"
            >
              <STEEZWordmark size={22} />
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <AnimatePresence initial={false}>
            {expanded && !isOpen && (
              <motion.div
                key="nav-actions-desktop"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                transition={{
                  width: { duration: 0.45, ease: SOFT_EASE },
                  opacity: { duration: 0.3, ease: SOFT_EASE, delay: 0.05 },
                }}
                style={{ overflowX: "hidden", overflowY: "visible" }}
                className="hidden md:flex items-center gap-6 sm:gap-12"
              >
                <ul className="list-none flex items-center gap-6 p-0 text-[13px] font-medium uppercase tracking-widest sm:gap-10 whitespace-nowrap">
                  {COPY.nav.map((l) => {
                    const k = NAV_KEY_BY_HREF[l.href];
                    const primary = k ? dict.nav[k] : l.en;
                    const secondary = null;
                    return (
                      <li key={l.href} className="flex">
                        <a
                          href={l.href}
                          className="rounded-sm transition-opacity duration-200 hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mint"
                        >
                          {secondary ? (
                            <NavLabel en={primary} cn={secondary} />
                          ) : (
                            <span style={{ textTransform: "uppercase", letterSpacing: "0.08em" }}>
                              {primary}
                            </span>
                          )}
                        </a>
                      </li>
                    );
                  })}
                </ul>
                <div className="flex-shrink-0 flex items-center gap-3">
                  <LangSwitcher variant="compact" onOpenChange={setLangOpen} />
                  <AnimatedThemeToggler />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mobile Toggles */}
          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                key="nav-actions-mobile"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.22 }}
                className="flex md:hidden items-center gap-4 z-[110]"
              >
                {!isOpen && <AnimatedThemeToggler />}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  aria-label="Toggle menu"
                  className="p-2 rounded-full text-[var(--fg)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-mint"
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-[90] flex flex-col items-center justify-center bg-[var(--bg)]/95 backdrop-blur-lg px-6"
          >
            <ul className="list-none flex flex-col items-center gap-8 p-0 text-xl font-medium uppercase tracking-widest w-full">
              {COPY.nav.map((l) => {
                const k = NAV_KEY_BY_HREF[l.href];
                const primary = k ? dict.nav[k] : l.en;
                const secondary = null;
                return (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex w-full justify-center"
                  >
                    <a
                      href={l.href}
                      onClick={() => setIsOpen(false)}
                      className="flex flex-col items-center gap-1 rounded-sm py-2 transition-opacity duration-200 hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mint"
                    >
                      <span className="text-2xl">{primary}</span>
                      {secondary && (
                        <span className="cn-text text-sm opacity-50" lang="zh">{secondary}</span>
                      )}
                    </a>
                  </motion.li>
                );
              })}
              <motion.li
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mt-4"
              >
                  <AnimatedThemeToggler />
              </motion.li>
              <motion.li
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="mt-2 w-full flex justify-center"
              >
                  <LangSwitcher variant="stacked" />
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

