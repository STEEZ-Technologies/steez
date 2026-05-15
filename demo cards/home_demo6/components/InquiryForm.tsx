"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const CATEGORIES_EN = [
  "Cooking Utensils",
  "Ceramics",
  "Glass Products",
  "Bathroom Supplies",
  "Home Decoration",
];
const CATEGORIES_ZH = ["厨房用具", "陶瓷", "玻璃制品", "浴室用品", "家居装饰"];

export default function InquiryForm() {
  const { lang, t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", company: "", email: "", whatsapp: "",
    category: "", quantity: "", country: "", requirements: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const input =
    "w-full bg-cream border border-espresso/15 rounded-xl px-4 py-3 text-sm font-sans text-espresso placeholder:text-espresso/30 focus:outline-none focus:border-bronze transition-colors duration-200";
  const label =
    "block text-xs font-sans font-semibold text-espresso/65 tracking-wide mb-2";

  return (
    <section className="py-28 px-6 bg-cream" id="inquiry">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-sans font-semibold tracking-[0.32em] uppercase text-bronze mb-4"
          >
            {t.inquiry.sectionEyebrow}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-black text-espresso mb-4"
          >
            {t.inquiry.sectionTitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm font-sans text-espresso/55 max-w-md mx-auto"
          >
            {t.inquiry.sectionSubtitle}
          </motion.p>
        </div>

        {/* Form card */}
        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            {/* Name */}
            <div>
              <label className={label}>{t.inquiry.fields.name}</label>
              <input
                name="name" type="text" required value={form.name}
                onChange={handleChange} placeholder={t.inquiry.placeholders.name}
                className={input}
              />
            </div>
            {/* Company */}
            <div>
              <label className={label}>{t.inquiry.fields.company}</label>
              <input
                name="company" type="text" required value={form.company}
                onChange={handleChange} placeholder={t.inquiry.placeholders.company}
                className={input}
              />
            </div>
            {/* Email */}
            <div>
              <label className={label}>{t.inquiry.fields.email}</label>
              <input
                name="email" type="email" required value={form.email}
                onChange={handleChange} placeholder={t.inquiry.placeholders.email}
                className={input}
              />
            </div>
            {/* WhatsApp */}
            <div>
              <label className={label}>{t.inquiry.fields.whatsapp}</label>
              <input
                name="whatsapp" type="text" value={form.whatsapp}
                onChange={handleChange} placeholder={t.inquiry.placeholders.whatsapp}
                className={input}
              />
            </div>
            {/* Category */}
            <div>
              <label className={label}>{t.inquiry.fields.category}</label>
              <select
                name="category" value={form.category}
                onChange={handleChange} className={input}
              >
                <option value="">{t.inquiry.placeholders.category}</option>
                {(lang === "en" ? CATEGORIES_EN : CATEGORIES_ZH).map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            {/* Quantity */}
            <div>
              <label className={label}>{t.inquiry.fields.quantity}</label>
              <input
                name="quantity" type="text" value={form.quantity}
                onChange={handleChange} placeholder={t.inquiry.placeholders.quantity}
                className={input}
              />
            </div>
            {/* Country */}
            <div className="md:col-span-2">
              <label className={label}>{t.inquiry.fields.country}</label>
              <input
                name="country" type="text" value={form.country}
                onChange={handleChange} placeholder={t.inquiry.placeholders.country}
                className={input}
              />
            </div>
            {/* Requirements */}
            <div className="md:col-span-2">
              <label className={label}>{t.inquiry.fields.requirements}</label>
              <textarea
                name="requirements" rows={4} value={form.requirements}
                onChange={handleChange} placeholder={t.inquiry.placeholders.requirements}
                className={`${input} resize-none`}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-espresso text-cream text-sm font-sans font-semibold py-4 rounded-xl hover:bg-bronze transition-colors duration-300 tracking-wide mt-1"
          >
            {t.inquiry.submit}
          </button>
        </motion.form>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-espresso/60 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setSubmitted(false)}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-12 max-w-sm w-full text-center shadow-2xl"
            >
              <div className="w-16 h-16 bg-bronze/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={30} className="text-bronze" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-espresso mb-3">
                {t.inquiry.successTitle}
              </h3>
              <p className="text-sm font-sans text-espresso/55 mb-9 leading-relaxed">
                {t.inquiry.successMessage}
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="bg-espresso text-cream text-sm font-sans font-semibold px-10 py-3 rounded-xl hover:bg-bronze transition-colors duration-300"
              >
                {t.inquiry.close}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
