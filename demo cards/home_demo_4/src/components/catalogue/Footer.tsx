import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="px-5 md:px-8 py-10 bg-charcoal text-canvas/70">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-5">
        <div className="text-[10px] uppercase tracking-[0.22em] font-medium">
          © 2025 {t("brand")}. {t("footerRights")}
        </div>
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] font-bold">
          <span className="opacity-60">{t("poweredBy").split(" ")[0]}</span>
          <span className="text-canvas">steez.digital</span>
        </div>
      </div>
    </footer>
  );
}
