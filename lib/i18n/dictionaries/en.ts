import type { Dict } from "../types";

export const en: Dict = {
  nav: {
    pricing: "Pricing",
    cards: "Cards",
    contact: "Contact",
    top: "Top",
    services: "Services",
  },
  hero: {
    title2: "Digital",
    tagline: "The digital bridge between Chinese makers and the buyers searching for them",
    description: "Bridging Chinese makers to global buyers — a digital upgrade for every exhibition.",
    cta: "Contact",
    getQuote: "Get a quote",
    talkToUs: "Talk to us",
    wechat: "WeChat",
  },
  numbers: {
    scans: "Buyer scans activated",
    countries: "Countries reached",
    days: "Days to first results",
    lines: "Core product lines",
  },
  sections: {
    services: {
      eyebrow: "02 — Services",
      title: "What We Build",
      sub: "Three products. One stack. Built for Chinese exporters going global.",
    },
    analytics: {
      eyebrow: "03 — Data & Analytics",
      title: "Buyer Intelligence",
      sub: "Real-time scans, regions, products. Lightweight CRM built in.",
      body: "Every scan, dwell-time, and region tracked. Your STEEZ dashboard shows exactly who opened your card, how long they spent, and where in the world they are — so you know which markets are heating up and which to double down on.",
    },
    booth: {
      eyebrow: "03 — Booth Display",
      title: "Your QR, Everywhere They Look",
      sub: "Two ways to put STEEZ in your buyers' hands at every trade show.",
    },
    pricing: {
      eyebrow: "05 — Packages",
      title: "Pricing",
      sub: "One platform. Three plans. Built for Chinese exporters going global.",
    },
    contact: {
      eyebrow: "06 — Contact",
      title: "Let's Talk",
      sub: "Tell us about your factory. We reply within 24 hours.",
    },
    numbers: {
      eyebrow: "01 — Numbers",
      title: "Trusted by Makers",
    },
  },
  servicesItems: {
    cards: {
      eyebrow: "01 · Cards",
      title: "Digital Cards",
      about: "Scannable QR-linked profile pages with factory photos, map location, contact info, WeChat & QQ links, service list, about section, and a country-reach infographic. Bilingual EN · 中 · РУ · العربية. Dark / light mode. Share links built in.",
    },
    profiles: {
      eyebrow: "02 · Profiles",
      title: "Company Profiles",
      about: "Standalone microsites that present your factory, services, production capabilities, location and credentials in one polished page — branded as a profile, not a brochure. Buyers land on a site that closes the deal for you.",
    },
    catalogues: {
      eyebrow: "03 · Catalogues",
      title: "Product Catalogues",
      about: "Interactive product catalogues replacing static PDFs. Optional 3D / AR product views on request, so buyers in Berlin, Riyadh or São Paulo can rotate, scale and inspect your products before they reach out.",
    },
  },
  analyticsBlock: {
    metrics: {
      totalScans: "Total Scans",
      countries: "Countries",
      avgSession: "Avg. Session",
    },
    regions: {
      me: "Middle East",
      ru: "Russia",
      eu: "Europe",
      na: "North America",
      sa: "South America",
    },
    features: {
      realtime: {
        title: "Real-time scans",
        desc: "See every QR open within seconds, with device & locale fingerprinting.",
      },
      heatmap: {
        title: "Heat-map regions",
        desc: "Drill into city-level demand and spot emerging buyer hubs early.",
      },
      funnel: {
        title: "Funnel exports",
        desc: "Push scan → form → reply data straight to your CRM via webhook.",
      },
    },
  },
  boothProducts: {
    lanyard: {
      name: "Lanyards",
      scanTo: "Digital Business Card",
      body: "Worn by your booth team. Every staff member becomes a scannable touchpoint — visitors point their phone, land on that team member's digital card, and start a conversation on the spot.",
    },
    stand: {
      name: "Table Stands",
      scanTo: "Product Catalogue",
      body: "Sits on your booth tables. Scan the QR to open your full interactive catalogue with 3D / AR product views — no app install, instant access, in the buyer's language.",
    },
    scanLabel: "Scan to",
  },
  pricingBlock: {
    monthly: "Monthly",
    annually: "Annually",
    perMonth: "/mo",
    plans: {
      basic: {
        title: "Basic",
        desc: "Get online fast. One digital business card, bilingual, with a custom QR code.",
        button: "Get Started",
        features: [
          "1 digital business card",
          "Bilingual EN + 中",
          "Dark / light theme",
          "Custom QR code",
          "Share link",
          "Community support",
        ],
      },
      standard: {
        title: "Standard",
        desc: "For serious exporters. Card, forms, four languages, and quarterly analytics.",
        button: "Get Standard",
        badge: "Most Popular",
        features: [
          "1 card + 5 digital forms",
          "Full 4-language support",
          "Dark / light theme",
          "Quarterly analytics",
          "Priority support",
          "Custom QR + share link",
        ],
      },
      premium: {
        title: "Premium",
        desc: "The full STEEZ. Unlimited forms, 3D/AR catalogue, dedicated account manager.",
        button: "Get Premium",
        features: [
          "Card + unlimited forms",
          "3D / AR catalogue",
          "All 4 languages",
          "Monthly analytics review",
          "Visitor geo-tracking",
          "Dedicated account manager",
        ],
      },
    },
  },
  contactBlock: {
    info: {
      phone: "Phone",
      email: "Email",
      hq: "HQ",
      hours: "Hours",
    },
    values: {
      phone: "+86 755 8888 0000",
      email: "hello@steez.digital",
      hq: "Hangzhou, Zhejiang",
      hours: "Mon–Sat 09:00–19:00 CST",
    },
    form: {
      name: "Name",
      email: "Email",
      message: "Tell us about your business — products, target markets, what you need.",
      send: "Send Message",
      sending: "Sending...",
      sentTitle: "Message sent",
      sentSub: "We'll be in touch within 24 hours.",
      errName: "Name is required",
      errEmail: "Email is required",
      errEmailInvalid: "Invalid email address",
      errMessage: "Please leave a short message",
    },
    wechat: {
      title: "Add us on WeChat",
      sub: "Open WeChat, scan the code, and start a conversation with our team in seconds.",
      handle: "STEEZ-CN",
      scanLabel: "Scan with WeChat",
    },
    trust: {
      response: {
        k: "Response",
        v: "Within 24 hrs",
        d: "Every inquiry routed to a real account manager — no auto-replies, no bots.",
      },
      onboarding: {
        k: "Onboarding",
        v: "7 days avg.",
        d: "From signed brief to first scannable card in your buyer's hands.",
      },
      languages: {
        k: "Languages",
        v: "EN · 中 · РУ · العربية",
        d: "Native localization on every plan — copy reviewed by in-region editors.",
      },
    },
  },
  footer: {
    brandTagline: "The digital bridge between Chinese makers and the buyers searching for them.",
    locations: "Locations",
    reachUs: "Reach us",
    index: "Index",
    bottomLeft: "© 2026 STEEZ · Designed in Hangzhou",
    bottomRight: "BUILT FOR CHINESE MAKERS",
    locationItems: {
      hangzhou: "Hangzhou",
      yiwu: "Yiwu",
      foshan: "Foshan",
      guangzhou: "Guangzhou",
    },
  },
  lang: {
    label: "Language",
    selectLanguage: "Select language",
  },
};
