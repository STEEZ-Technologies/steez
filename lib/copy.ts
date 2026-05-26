export const COPY = {
  nav: [
    { en: "Pricing", cn: "定价", href: "#pricing" },
    { en: "Cards", cn: "名片", href: "#services" },
    { en: "Contact", cn: "联系", href: "#contact" },
  ],

  hero: {
    title: "STEEZ",
    subtitle: "思智 · 连接全球买家",
    tagline:
      "the digital bridge between chinese makers and the buyers searching for them",
    cta: { en: "Contact", cn: "联系" },
  },

  services: {
    headingEn: "Services",
    headingCn: "服务",
    items: [
      {
        n: "01",
        en: "Personal Digital Business Cards",
        cn: "个人数字名片",
        body: "Premium tactile cards in light or dark forest-green finish. Each carries an embedded QR that activates your full personal digital storefront in under three seconds. Designed in Hangzhou, printed on heavyweight uncoated stock, debossed wordmark.",
      },
      {
        n: "02",
        en: "Digital Showroom",
        cn: "数字展厅",
        body: "A curated landing page for every maker — your products, certifications, MOQs, lead times, and factory story, presented to buyers exactly the way you'd want them to see it. Mobile-first, lightning-fast, multilingual.",
      },
      {
        n: "03",
        en: "WeChat-First Activation",
        cn: "微信优先激活",
        body: "A four-screen onboarding flow that guides international buyers from scan → showroom → product inquiry → direct WeChat or WhatsApp thread. Built for the way Chinese suppliers actually close deals.",
      },
      {
        n: "04",
        en: "Multilingual Translation",
        cn: "多语言翻译",
        body: "Your catalog auto-translated into English, Spanish, Arabic, Russian, and Portuguese — reviewed by native B2B copywriters so it reads like a real export team wrote it, not a machine.",
      },
      {
        n: "05",
        en: "Analytics & Buyer CRM",
        cn: "数据与买家管理",
        body: "See every scan, every region, every product view. Lightweight buyer CRM that captures leads from your card and routes them straight into your sales workflow.",
      },
    ],
  },

  projects: {
    headingEn: "Case Studies",
    headingCn: "案例",
    items: [
      {
        n: "01",
        cat: "ELECTRONICS",
        catCn: "电子制造",
        en: "Shenzhen Precision",
        cn: "深圳精密",
        op: "Wei Chen, Sales Director",
        body: "PCB assembly + injection molding. STEEZ activated 1,247 buyer scans across 38 countries in the first 90 days; buyer-side dashboard routes every scan into the sales pipeline.",
      },
      {
        n: "02",
        cat: "TEXTILES",
        catCn: "纺织",
        en: "Yiwu Knit Co.",
        cn: "义乌针织",
        op: "Mei Lin, Export Manager",
        body: "Knitwear at 220 GSM, 200-cycle wash tested. Catalog auto-translated to ES, AR, PT — Mei Lin closed her first European wholesale account three weeks after the rollout.",
      },
      {
        n: "03",
        cat: "INDUSTRIAL",
        catCn: "工业",
        en: "Foshan Hardware Group",
        cn: "佛山五金",
        op: "Liu Jian, Founder",
        body: "5-axis CNC parts to ±0.005mm. WeChat-first activation flow — a buyer in Riyadh went from card scan to a live thread with Liu Jian in 47 seconds.",
      },
    ],
  },

  portfolio: {
    headingEn: "3D Catalogue",
    headingCn: "三维产品目录",
    subtitle:
      "Your product in 3D — every buyer in the world, in their own language, in under three seconds.",
    product: {
      cat: "Industrial",
      client: "Jiangsu AquaTech",
      name: "GX-2000 Centrifugal Pump",
      spec: "Flow: 2,000 m³/h · Head: 120 m · Power: 185 kW",
    },
    stats: [
      { value: "3s", label: "scan to showroom" },
      { value: "38+", label: "buyer countries" },
      { value: "6×", label: "inquiry rate lift" },
    ],
  },

  footer: {
    brandTagline:
      "The digital bridge between Chinese makers and the buyers searching for them.",
    locations: {
      heading: { en: "Locations", cn: "办事处" },
      items: [
        { en: "Hangzhou", cn: "杭州" },
        { en: "Yiwu", cn: "义乌" },
        { en: "Foshan", cn: "佛山" },
        { en: "Guangzhou", cn: "广州" },
      ],
    },
    contact: {
      heading: { en: "Reach us", cn: "联系我们" },
      items: [
        "hello@steez.digital",
        "WeChat: STEEZ-CN",
        "WhatsApp: +86 138 0001 2345",
        "Mon–Sat · 09:00–21:00 CST",
      ],
    },
    index: {
      heading: { en: "Index", cn: "目录" },
      items: [
        { en: "Pricing", cn: "定价", href: "#pricing" },
        { en: "Cards", cn: "名片", href: "#services" },
        { en: "Contact", cn: "联系", href: "#contact" },
      ],
    },
    bottomLeft: "© 2026 STEEZ · 思智 · Designed in Hangzhou",
    bottomRight: "BUILT FOR CHINESE MAKERS · 为中国制造商而生",
  },
} as const;
