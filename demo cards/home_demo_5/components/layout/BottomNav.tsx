"use client";

import { Home, Grid, ShoppingBag, Languages } from "lucide-react";
import { useI18n } from "@/hooks/useI18n";
import { useEffect, useState } from "react";

export default function BottomNav() {
  const { language, setLanguage, t } = useI18n();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "zh" : "en");
  };

  const navItems = [
    { icon: Home, label: t("nav.home"), action: () => {} },
    { icon: Grid, label: t("nav.categories"), action: () => {} },
    { icon: ShoppingBag, label: t("nav.inquiry"), action: () => {} },
  ];

  if (!mounted) return null;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-stone/20 z-50 px-6 py-3 pb-8">
      <div className="flex items-center justify-between max-w-md mx-auto">
        {navItems.map((item, idx) => (
          <button
            key={idx}
            onClick={item.action}
            className="flex flex-col items-center gap-1 group"
          >
            <item.icon className="w-5 h-5 text-stone group-active:scale-90 transition-transform" />
            <span className="text-[10px] uppercase tracking-widest text-stone/80 font-medium">
              {item.label}
            </span>
          </button>
        ))}
        <button
          onClick={toggleLanguage}
          className="flex flex-col items-center gap-1 group"
        >
          <Languages className="w-5 h-5 text-charcoal group-active:scale-90 transition-transform" />
          <span className="text-[10px] uppercase tracking-widest text-charcoal font-bold">
            {language === "en" ? "ZH" : "EN"}
          </span>
        </button>
      </div>
    </nav>
  );
}
