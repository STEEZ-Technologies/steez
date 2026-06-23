export type Lang = "en" | "zh" | "ar" | "ru";

export type Dir = "ltr" | "rtl";

export const LANG_META: Record<Lang, { label: string; native: string; dir: Dir; flag: string }> = {
  en: { label: "English", native: "English", dir: "ltr", flag: "EN" },
  zh: { label: "Chinese", native: "中文", dir: "ltr", flag: "中" },
  ar: { label: "Arabic", native: "العربية", dir: "rtl", flag: "ع" },
  ru: { label: "Russian", native: "Русский", dir: "ltr", flag: "Ру" },
};

export const LANGS: Lang[] = ["en", "zh", "ar", "ru"];

export type Dict = {
  nav: {
    pricing: string;
    cards: string;
    contact: string;
    top: string;
    services: string;
  };
  hero: {
    title2: string;
    tagline: string;
    description: string;
    cta: string;
    getQuote: string;
    talkToUs: string;
    wechat: string;
    chips: {
      cards: string;
      profiles: string;
      catalogues: string;
      booth: string;
    };
  };
  numbers: {
    scans: string;
    countries: string;
    days: string;
    lines: string;
  };
  sections: {
    services: { eyebrow: string; title: string; sub: string };
    analytics: { eyebrow: string; title: string; sub: string; body: string };
    booth: { eyebrow: string; title: string; sub: string };
    pricing: { eyebrow: string; title: string; sub: string };
    contact: { eyebrow: string; title: string; sub: string };
    numbers: { eyebrow: string; title: string };
  };
  boothProducts: {
    lanyard: { name: string; scanTo: string; body: string };
    stand: { name: string; scanTo: string; body: string };
    scanLabel: string;
  };
  servicesItems: {
    cards: { eyebrow: string; title: string; about: string };
    profiles: { eyebrow: string; title: string; about: string };
    catalogues: { eyebrow: string; title: string; about: string };
  };
  analyticsBlock: {
    metrics: { totalScans: string; countries: string; avgSession: string };
    regions: { me: string; ru: string; eu: string; na: string; sa: string };
    features: {
      realtime: { title: string; desc: string };
      heatmap: { title: string; desc: string };
      funnel: { title: string; desc: string };
    };
  };
  pricingBlock: {
    annually: string;
    bundle: {
      title: string;
      desc: string;
      price: string;
      button: string;
      features: string[];
    };
    addonsTitle: string;
    addons: {
      name: string;
      price: string;
      info: string;
    }[];
  };
  contactBlock: {
    info: { phone: string; email: string; hq: string; hours: string };
    values: { phone: string; email: string; hq: string; hours: string };
    form: {
      name: string;
      email: string;
      message: string;
      send: string;
      sending: string;
      sentTitle: string;
      sentSub: string;
      errName: string;
      errEmail: string;
      errEmailInvalid: string;
      errMessage: string;
    };
    wechat: {
      title: string;
      sub: string;
      handle: string;
      scanLabel: string;
    };
    trust: {
      response: { k: string; v: string; d: string };
      onboarding: { k: string; v: string; d: string };
      languages: { k: string; v: string; d: string };
    };
  };
  footer: {
    brandTagline: string;
    locations: string;
    reachUs: string;
    index: string;
    bottomLeft: string;
    bottomRight: string;
    locationItems: { hangzhou: string; yiwu: string; foshan: string; guangzhou: string };
  };
  lang: {
    label: string;
    selectLanguage: string;
  };
};
