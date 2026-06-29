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
    chips: {
      cards: "Digital cards",
      profiles: "Company profiles",
      catalogues: "Product catalogues",
      booth: "Booth display",
    },
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
      sub: "One premium bundle. Flexible add-ons. Built for Chinese exporters going global.",
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
    catalogues: {
      eyebrow: "01 · Showcase",
      title: "Catalogues & Profiles",
      about: "Interactive product catalogs and standalone company profiles in one integrated experience. Up to 30 2D products, 10 3D models, factory photos, and credentials in a polished multi-language site. Replaces static PDFs and brochures.",
    },
    social: {
      eyebrow: "02 · Social Media",
      title: "International Social Media",
      about: "Professional Instagram and Facebook business page setup. Designed in your brand with bilingual captions. Reusable content calendar and industry-specific hashtag strategy for international reach. Posts link directly to product pages.",
    },
    cards: {
      eyebrow: "03 · Identity & Expo",
      title: "Digital Cards & Booth",
      about: "Digital business cards combined with an expo QR display kit (lanyards, desk stands). Buyers scan your booth or staff to instantly access contact info, location maps, and WeChat/WhatsApp links. Replaces paper cards and scattered booth materials.",
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
    annually: "Yearly",
    packages: [
      {
        name: "Essential",
        desc: "Everything you need for a premium digital exhibition presence.",
        price: "7,000",
        yearly: "3,500/yr after",
        button: "Get Essential",
        features: [
          "Digital Product Catalog & Profile",
          "International Social Media Setup",
          "30 2D + 10 3D product slots",
          "5 Digital Business Cards",
          "Base QR Display Kit (Lanyards + Stand)",
          "Unlimited languages included"
        ]
      },
      {
        name: "Growth",
        desc: "Expanded social presence and deeper market reach.",
        price: "12,000",
        yearly: "3,500/yr after",
        button: "Get Growth",
        featured: true,
        features: [
          "Everything in Essential",
          "LinkedIn Company Page Setup",
          "25 Additional Content Pieces",
          "Canva Brand Template Kit",
          "Custom Content Strategy",
          "Deep Social-Catalog Integration"
        ]
      },
      {
        name: "Active",
        desc: "We handle your ongoing digital presence.",
        price: "16,000",
        yearly: "7,500/yr after",
        button: "Get Active",
        features: [
          "Everything in Growth",
          "Quarterly Content Batches",
          "12 New Pieces per Quarter",
          "Daily Comment & DM Management",
          "Ongoing Page Optimization",
          "Monthly Analytics Report"
        ]
      }
    ]
  },
  contactBlock: {
    info: {
      phone: "Phone",
      email: "Email",
      hq: "HQ",
      hours: "Hours",
    },
    values: {
      phone: "+86 19818401505",
      email: "steez.workspace@gmail.com",
      hq: "Room 1005-01, West Tower, Zancheng Center, Shangcheng District, Hangzhou, Zhejiang",
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
