"use client";

import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import type { Dict, Lang } from "./types";
import { LANG_META } from "./types";
import { en } from "./dictionaries/en";
import { zh } from "./dictionaries/zh";
import { ar } from "./dictionaries/ar";
import { ru } from "./dictionaries/ru";

const DICTS: Record<Lang, Dict> = { en, zh, ar, ru };
const STORAGE_KEY = "steez-lang";

export type I18nContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  dict: Dict;
  dir: "ltr" | "rtl";
};

export const I18nContext = createContext<I18nContextValue | null>(null);

function getInitialLang(): Lang {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
  if (stored && stored in DICTS) return stored;
  const browser = window.navigator.language.slice(0, 2).toLowerCase();
  if (browser === "zh") return "zh";
  if (browser === "ar") return "ar";
  if (browser === "ru") return "ru";
  return "en";
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    setLangState(getInitialLang());
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const meta = LANG_META[lang];
    document.documentElement.lang = lang;
    document.documentElement.dir = meta.dir;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {}
  }, []);

  const value = useMemo<I18nContextValue>(
    () => ({
      lang,
      setLang,
      dict: DICTS[lang],
      dir: LANG_META[lang].dir,
    }),
    [lang, setLang]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
