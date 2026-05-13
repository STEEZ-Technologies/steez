import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/lib/i18n";

export function Intro() {
  const { t } = useI18n();
  const [show, setShow] = useState(true);
  useEffect(() => {
    const id = setTimeout(() => setShow(false), 2200);
    return () => clearTimeout(id);
  }, []);

  const metrics = ["15+ years", "40+ countries", "500+ SKUs", "OEM / ODM"];

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          className="fixed inset-0 z-[100] bg-canvas flex flex-col items-center justify-center px-6"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -left-40 size-[40rem] rounded-full bg-brand/10 blur-3xl" />
            <div className="absolute -bottom-40 -right-40 size-[40rem] rounded-full bg-brand-muted/10 blur-3xl" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
            className="relative text-center"
          >
            <div className="text-[10px] uppercase tracking-[0.4em] text-brand mb-6 font-semibold">
              {t("brand")}
            </div>
            <h1 className="font-serif italic text-4xl md:text-6xl leading-[1.05] text-charcoal max-w-md">
              {t("introTag")}
            </h1>
            <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[10px] uppercase tracking-[0.25em] text-charcoal/50 font-medium">
              {metrics.map((m, i) => (
                <motion.span
                  key={m}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.12, duration: 0.5 }}
                >
                  {m}
                </motion.span>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-8 text-[9px] uppercase tracking-[0.4em] text-charcoal/30"
          >
            {t("poweredBy")}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
