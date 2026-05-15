"use client";
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import type { Lang } from "@/lib/translations";

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 1]);

  const navLinks = [
    { label: t.nav.home, href: "#" },
    { label: t.nav.catalogue, href: "#catalogue" },
    { label: t.nav.showcase3d, href: "#showcase" },
    { label: t.nav.oem, href: "#oem" },
    { label: t.nav.inquiry, href: "#inquiry" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <motion.div
        className="absolute inset-0 bg-cream/95 backdrop-blur-md border-b border-espresso/10"
        style={{ opacity: bgOpacity }}
      />

      <div className="relative max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex flex-col leading-none">
          <span className="font-serif text-sm font-bold tracking-[0.12em] text-espresso uppercase">
            {t.nav.brand}
          </span>
          <span className="text-[10px] font-sans text-warm-brown tracking-[0.2em] opacity-60">
            {t.nav.brandSub}
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-sans text-espresso/60 hover:text-espresso transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Language Toggle */}
          <div className="flex items-center bg-cream-dark rounded-full p-1">
            {(["en", "zh"] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`text-xs font-sans font-semibold px-3 py-1 rounded-full transition-all duration-200 ${
                  lang === l
                    ? "bg-espresso text-cream shadow-sm"
                    : "text-espresso/50 hover:text-espresso"
                }`}
              >
                {l === "en" ? "EN" : "中文"}
              </button>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#inquiry"
            className="hidden md:inline-flex items-center bg-bronze text-white text-xs font-sans font-semibold px-5 py-2.5 rounded-full hover:bg-bronze-light transition-colors duration-200 tracking-wide whitespace-nowrap"
          >
            {t.nav.cta}
          </a>

          {/* Hamburger */}
          <button
            className="lg:hidden p-1.5 text-espresso"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="lg:hidden bg-cream/98 backdrop-blur-md border-b border-espresso/10 px-6 pb-6 pt-2"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-3 text-sm font-sans text-espresso/70 hover:text-espresso border-b border-espresso/8 last:border-0 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#inquiry"
            className="mt-5 block text-center bg-bronze text-white text-sm font-sans font-semibold px-4 py-3 rounded-full"
            onClick={() => setMenuOpen(false)}
          >
            {t.nav.cta}
          </a>
        </motion.div>
      )}
    </header>
  );
}
