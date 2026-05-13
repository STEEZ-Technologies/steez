import { useI18n } from "@/lib/i18n";

export function Nav() {
  const { t, lang, setLang } = useI18n();
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 md:px-8 py-3.5 bg-canvas/80 backdrop-blur-xl border-b border-stone/40">
      <div className="flex items-center gap-2.5">
        <div className="size-8 bg-charcoal text-canvas rounded-full flex items-center justify-center text-[10px] font-bold tracking-tighter font-serif italic">A</div>
        <span className="font-serif italic text-base md:text-lg tracking-tight">{t("brand")}</span>
      </div>
      <div className="flex items-center gap-4 md:gap-6">
        <div className="hidden md:flex gap-7 text-[10.5px] uppercase tracking-[0.22em] font-medium text-charcoal/60">
          <a href="#categories" className="hover:text-brand transition-colors">{t("navCollections")}</a>
          <a href="#why" className="hover:text-brand transition-colors">{t("navFactory")}</a>
          <a href="#contact" className="hover:text-brand transition-colors">{t("navContact")}</a>
        </div>
        <div className="flex bg-stone/50 rounded-full p-0.5 text-[10px] font-semibold uppercase tracking-widest">
          <button
            onClick={() => setLang("en")}
            className={`px-2.5 py-1.5 rounded-full transition-all ${lang === "en" ? "bg-charcoal text-canvas shadow-sm" : "text-charcoal/50"}`}
          >EN</button>
          <button
            onClick={() => setLang("zh")}
            className={`px-2.5 py-1.5 rounded-full transition-all ${lang === "zh" ? "bg-charcoal text-canvas shadow-sm" : "text-charcoal/50"}`}
          >中文</button>
        </div>
      </div>
    </nav>
  );
}
