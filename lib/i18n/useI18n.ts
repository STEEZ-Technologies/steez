"use client";

import { useContext } from "react";
import { I18nContext } from "./I18nProvider";
import { en } from "./dictionaries/en";

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    return { lang: "en" as const, setLang: () => {}, dict: en, dir: "ltr" as const };
  }
  return ctx;
}
