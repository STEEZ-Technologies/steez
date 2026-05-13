import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { useInquiry } from "@/lib/inquiry";
import { toast } from "sonner";

export function Contact() {
  const { t } = useI18n();
  const { items, clear } = useInquiry();
  return (
    <section id="contact" className="py-20 md:py-28 px-5 md:px-8 bg-canvas border-t border-stone/60">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <div className="text-[10px] uppercase tracking-[0.3em] text-brand font-bold mb-4">— {t("contactEyebrow")}</div>
            <h2 className="font-serif text-3xl md:text-5xl leading-[1.1] mb-6 tracking-tight max-w-xl">{t("contactTitle")}</h2>
            <p className="text-charcoal/65 text-base md:text-lg max-w-md mb-10">{t("contactSub")}</p>
            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              <a href="#" className="flex items-center gap-3 px-5 py-4 bg-brand rounded-2xl text-canvas hover:scale-[1.02] transition-transform">
                <div className="size-8 bg-canvas/20 rounded-full grid place-items-center font-bold">W</div>
                <div>
                  <div className="text-[9.5px] uppercase font-bold tracking-[0.22em] opacity-80">{t("whatsapp")}</div>
                  <div className="text-sm font-semibold">+86 138 0000 0000</div>
                </div>
              </a>
              <a href="#" className="flex items-center gap-3 px-5 py-4 bg-charcoal rounded-2xl text-canvas hover:scale-[1.02] transition-transform">
                <div className="size-8 bg-canvas/20 rounded-full grid place-items-center font-bold">微</div>
                <div>
                  <div className="text-[9.5px] uppercase font-bold tracking-[0.22em] opacity-80">{t("wechat")}</div>
                  <div className="text-sm font-semibold">archi_studio_cn</div>
                </div>
              </a>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="px-5 py-3 text-[10.5px] font-semibold uppercase tracking-[0.18em] rounded-full border border-stone hover:border-brand hover:text-brand transition-all">
                {t("bookMeeting")}
              </button>
              <button className="px-5 py-3 text-[10.5px] font-semibold uppercase tracking-[0.18em] rounded-full border border-stone hover:border-brand hover:text-brand transition-all">
                {t("downloadPdf")}
              </button>
            </div>
          </motion.div>
          <motion.form
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
            onSubmit={(e) => {
              e.preventDefault();
              toast.success(t("inquiryAdded"));
              clear();
              (e.target as HTMLFormElement).reset();
            }}
            className="lg:col-span-2 bg-surface p-6 md:p-8 rounded-3xl ring-1 ring-stone/60 shadow-sm h-fit"
          >
            <h3 className="text-sm font-bold uppercase tracking-[0.22em] mb-6">{t("inquireNow")}</h3>
            {items.length > 0 && (
              <div className="mb-4 px-3 py-2 rounded-lg bg-brand/10 text-brand text-[11px] font-semibold uppercase tracking-wider">
                {items.length} item{items.length > 1 ? "s" : ""}
              </div>
            )}
            <div className="space-y-3">
              <input required placeholder={t("name")} className="w-full px-4 py-3 bg-canvas border border-stone rounded-lg text-sm outline-none focus:border-brand transition-colors" />
              <input required type="email" placeholder={t("email")} className="w-full px-4 py-3 bg-canvas border border-stone rounded-lg text-sm outline-none focus:border-brand transition-colors" />
              <textarea required placeholder={t("message")} rows={3} className="w-full px-4 py-3 bg-canvas border border-stone rounded-lg text-sm outline-none focus:border-brand transition-colors resize-none" />
              <button type="submit" className="w-full py-4 bg-charcoal text-canvas text-[11px] font-bold uppercase tracking-[0.22em] rounded-lg hover:bg-brand transition-colors">
                {t("send")}
              </button>
            </div>
          </motion.form>
        </div>
        <div className="text-center text-[10.5px] uppercase tracking-[0.25em] text-charcoal/40 italic">
          {t("contactCreatedBy")}
        </div>
      </div>
    </section>
  );
}
