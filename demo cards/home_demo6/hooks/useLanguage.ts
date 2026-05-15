import { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export function useLanguage() {
  const { lang, setLang } = useContext(LanguageContext);
  const t = translations[lang];
  return { lang, setLang, t };
}
