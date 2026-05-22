"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "motion/react";
import { Menu, X, Home, LayoutGrid, Tag, Mail } from "lucide-react";
import { COPY } from "@/lib/copy";
import { NavLabel } from "@/components/shared/NavLabel";
import { STEEZWordmark } from "@/components/shared/STEEZWordmark";
import { AnimatedThemeToggler } from "@/components/shared/AnimatedThemeToggler";
import { cn } from "@/lib/cn";
import { useIsMobile } from "@/lib/useIsMobile";
import { useHaptic } from "@/lib/useHaptic";

const SPRING = { type: "spring" as const, stiffness: 260, damping: 30 };

export function Nav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
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

  const collapsed = scrolled && !hovered && !isOpen;
  const expanded = !collapsed;
  const mobileHidden = isMobile && scrolled && !isOpen;

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
            "flex h-auto min-h-[56px] items-center transition-colors duration-300",
            collapsed && "w-auto border border-[var(--hairline)] bg-[var(--bg)]/80 py-2 shadow-xl backdrop-blur-md justify-center",
            expanded && scrolled && "max-w-4xl w-full justify-between border border-[var(--hairline)] bg-[var(--bg)]/80 py-3 shadow-xl backdrop-blur-md min-h-[72px]",
            expanded && !scrolled && "max-w-7xl w-full justify-between border border-transparent bg-transparent py-6 shadow-none min-h-[72px]",
            isOpen && "border-transparent bg-transparent shadow-none backdrop-blur-none" // Clear background when menu is open
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
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                className="hidden md:flex items-center gap-6 sm:gap-12 overflow-hidden"
              >
                <ul className="list-none flex items-center gap-6 p-0 text-[13px] font-medium uppercase tracking-widest sm:gap-10 whitespace-nowrap">
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

      {/* Mobile Bottom Dock */}
      {isMobile && <BottomDock onAnyTap={() => setIsOpen(false)} />}

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
              {COPY.nav.map((l) => (
                <motion.li
                  key={l.en}
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
                    <span className="text-2xl">{l.en}</span>
                    <span className="cn-text text-sm opacity-50" lang="zh">{l.cn}</span>
                  </a>
                </motion.li>
              ))}
              <motion.li
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mt-4"
              >
                  <AnimatedThemeToggler />
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

const DOCK_ITEMS = [
  { href: "#top", label: "Top", icon: Home },
  { href: "#services", label: "Services", icon: LayoutGrid },
  { href: "#pricing", label: "Pricing", icon: Tag },
  { href: "#contact", label: "Contact", icon: Mail },
];

function BottomDock({ onAnyTap }: { onAnyTap: () => void }) {
  const haptic = useHaptic();
  const [active, setActive] = useState<string>("#top");

  useEffect(() => {
    const sections = DOCK_ITEMS.map((d) => document.querySelector(d.href)).filter(Boolean) as Element[];
    if (!sections.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const id = "#" + visible.target.id;
          if (DOCK_ITEMS.some((d) => d.href === id)) setActive(id);
        }
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      style={{
        position: "fixed",
        left: "50%",
        transform: "translateX(-50%)",
        bottom: "max(10px, env(safe-area-inset-bottom))",
        zIndex: 99,
        display: "flex",
        gap: 4,
        padding: 6,
        background: "color-mix(in srgb, var(--bg) 88%, transparent)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        border: "1px solid var(--hairline-strong)",
        borderRadius: 999,
        boxShadow: "0 18px 40px -18px rgba(0,0,0,0.4)",
      }}
    >
      {DOCK_ITEMS.map((d) => {
        const Icon = d.icon;
        const isActive = active === d.href;
        return (
          <a
            key={d.href}
            href={d.href}
            aria-label={d.label}
            aria-current={isActive ? "page" : undefined}
            onClick={() => {
              haptic(6);
              onAnyTap();
            }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
              width: 56,
              height: 44,
              borderRadius: 999,
              background: isActive ? "#E0A93A" : "transparent",
              color: isActive ? "#1A1A1A" : "var(--fg)",
              textDecoration: "none",
              transition: "background 0.2s ease, color 0.2s ease",
            }}
          >
            <Icon size={18} strokeWidth={isActive ? 2.4 : 1.8} />
          </a>
        );
      })}
    </nav>
  );
}
