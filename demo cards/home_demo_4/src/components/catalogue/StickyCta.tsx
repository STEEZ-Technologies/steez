import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { useInquiry } from "@/lib/inquiry";

export function StickyCta() {
  const { t } = useI18n();
  const { items } = useInquiry();
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;
  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-2rem)] max-w-md"
    >
      <div className="flex items-center justify-between gap-2 p-1.5 pl-5 bg-charcoal/95 backdrop-blur-xl text-canvas rounded-full shadow-2xl ring-1 ring-canvas/10">
        <div className="flex items-center gap-2 min-w-0">
          <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <span className="text-[10.5px] font-semibold uppercase tracking-[0.18em] truncate">
            {items.length > 0 ? `${items.length} · ${t("addInquiry")}` : t("quickQuote")}
          </span>
        </div>
        <a
          href="#contact"
          className="px-5 py-3 bg-brand text-canvas rounded-full text-[10.5px] font-bold uppercase tracking-[0.2em] hover:bg-canvas hover:text-charcoal transition-all whitespace-nowrap"
        >
          {t("cta2")}
        </a>
      </div>
    </motion.div>
  );
}
