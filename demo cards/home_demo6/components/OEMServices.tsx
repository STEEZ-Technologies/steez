"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { Package, Layers, Settings, Building2, ShieldCheck, FileText } from "lucide-react";

const SERVICE_ICONS = [Package, Layers, Settings, Building2, ShieldCheck, FileText];

export default function OEMServices() {
  const { t } = useLanguage();

  return (
    <section className="py-28 px-6 bg-cream-dark" id="oem">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-sans font-semibold tracking-[0.32em] uppercase text-bronze mb-4"
          >
            {t.oem.sectionEyebrow}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-black text-espresso mb-5"
          >
            {t.oem.sectionTitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm font-sans text-espresso/55 max-w-lg mx-auto leading-relaxed"
          >
            {t.oem.sectionSubtitle}
          </motion.p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {t.oem.services.map((service, i) => {
            const Icon = SERVICE_ICONS[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -5, transition: { duration: 0.25 } }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-11 h-11 bg-bronze/10 rounded-xl flex items-center justify-center mb-5">
                  <Icon size={20} className="text-bronze" />
                </div>
                <h3 className="font-serif text-lg font-bold text-espresso mb-2.5 leading-tight">
                  {service.title}
                </h3>
                <p className="text-sm font-sans text-espresso/55 leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Process Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-espresso rounded-3xl p-8 md:p-14"
        >
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-cream text-center mb-12">
            {t.oem.processTitle}
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative">
            {/* Connector line — desktop only */}
            <div className="hidden lg:block absolute top-5 left-0 right-0 h-px bg-bronze/25 mx-[8.33%]" />

            {t.oem.steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex flex-col items-center text-center relative z-10"
              >
                <div className="w-10 h-10 bg-bronze rounded-full flex items-center justify-center text-espresso font-sans font-bold text-sm mb-3 shadow-lg shadow-bronze/30">
                  {i + 1}
                </div>
                <p className="text-xs font-sans text-cream/65 leading-snug">{step}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
