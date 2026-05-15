import { createContext, useContext, useState, type ReactNode } from "react";

export type Lang = "en" | "zh";

type Dict = Record<string, { en: string; zh: string }>;

export const dict = {
  brand: { en: "Archi & Studio", zh: "雅居工坊" },
  navCollections: { en: "Collections", zh: "系列" },
  navFactory: { en: "Our Factory", zh: "工厂" },
  navContact: { en: "Contact", zh: "联系" },
  introTag: { en: "Modern Home Products for Everyday Living", zh: "现代家居 · 日常之美" },
  poweredBy: { en: "Powered by steez.digital", zh: "由 steez.digital 呈现" },
  interactiveBy: { en: "Interactive Catalogue by steez.digital", zh: "互动型电子样册 · steez.digital" },
  heroBadge: { en: "Interactive 3D Showroom", zh: "互动 3D 展厅" },
  heroTitle1: { en: "Smart, Stylish", zh: "雅致而智能" },
  heroTitle2: { en: "Home Essentials.", zh: "家的必需。" },
  heroSub: {
    en: "Discover elegant, functional, and export-ready home products designed for international markets.",
    zh: "为全球市场设计的优雅、实用、可出口的家居产品。",
  },
  cta1: { en: "View Products", zh: "查看产品" },
  cta2: { en: "Get Quote", zh: "获取报价" },
  cta3: { en: "Explore Categories", zh: "浏览分类" },
  yearsExp: { en: "Years Experience", zh: "年经验" },
  exportCountries: { en: "Export Countries", zh: "出口国家" },
  productSkus: { en: "Product SKUs", zh: "产品种类" },
  catTitle: { en: "Product Categories", zh: "产品分类" },
  catSub: { en: "Curated ranges for every space in the modern home.", zh: "精选品类，满足您的每一种空间需求。" },
  fullCatalogue: { en: "Full Catalogue", zh: "完整目录" },
  cat_kitchen: { en: "Kitchen & Dining", zh: "厨房餐具" },
  cat_storage: { en: "Storage Solution", zh: "收纳整理" },
  cat_lighting: { en: "Atmospheric Light", zh: "氛围灯具" },
  cat_bathroom: { en: "Bathroom Series", zh: "卫浴系列" },
  items: { en: "Items", zh: "件" },
  featuredEyebrow: { en: "Featured Release", zh: "重点新品" },
  featuredTitle: { en: "The Zenith Modular Storage System", zh: "Zenith 模组化收纳系统" },
  featuredSub: {
    en: "Architecturally designed shelving that adapts to any space. Aviation-grade aluminum, premium matte finishes.",
    zh: "建筑式美学，适配每一处空间。航空级铝材，高级哑光工艺。",
  },
  feat_1: { en: "Fully customizable dimensions", zh: "尺寸完全可定制" },
  feat_2: { en: "SGS certified sustainable materials", zh: "SGS 认证 · 环保材料" },
  feat_3: { en: "OEM / ODM custom colors available", zh: "支持 OEM / ODM 定制" },
  downloadSpecs: { en: "Download Specs", zh: "下载规格书" },
  catalogueGrid: { en: "Catalogue", zh: "产品样册" },
  catalogueSub: { en: "Tap any product to open the digital showroom.", zh: "点击任意产品进入数字展厅。" },
  badgeNew: { en: "New", zh: "新品" },
  badgeBest: { en: "Best Seller", zh: "热销" },
  badgeOEM: { en: "OEM Ready", zh: "可定制" },
  badgeEco: { en: "Eco", zh: "环保" },
  viewDetail: { en: "View Detail", zh: "查看详情" },
  view3d: { en: "View 3D", zh: "查看 3D" },
  addInquiry: { en: "Add to Inquiry", zh: "加入询价" },
  whyTitle: { en: "Why Choose Us", zh: "选择我们的理由" },
  whySub: { en: "A trusted manufacturing partner for global retailers and brands.", zh: "全球零售与品牌客户信赖的制造伙伴。" },
  why_1: { en: "Reliable Manufacturing", zh: "稳定制造" },
  why_1d: { en: "85,000 sqm facility, 1.2M units monthly capacity.", zh: "85,000 平方米厂房，月产能 120 万件。" },
  why_2: { en: "Export Experience", zh: "出口经验" },
  why_2d: { en: "Trusted by buyers across 40+ countries since 2008.", zh: "自 2008 年起，服务 40+ 国家买家。" },
  why_3: { en: "Custom Solutions", zh: "定制方案" },
  why_3d: { en: "In-house R&D, OEM & ODM with 12 designers.", zh: "自有研发，12 位设计师提供 OEM / ODM。" },
  why_4: { en: "Quality Assurance", zh: "品质保障" },
  why_4d: { en: "AQL 1.5 inspection, SGS & BSCI certified.", zh: "AQL 1.5 检验，SGS 与 BSCI 认证。" },
  storyEyebrow: { en: "Designed for Living", zh: "为生活而设计" },
  storyTitle: { en: "Order, comfort, and style for the modern home.", zh: "为现代家庭带来秩序、舒适与格调。" },
  storyBody: {
    en: "Our products are crafted to feel inevitable in the spaces they inhabit. Quiet materials. Precise lines. Made to last.",
    zh: "我们的作品旨在与空间自然融合。安静的材质，精准的线条，经久耐用。",
  },
  contactEyebrow: { en: "Contact", zh: "联系我们" },
  contactTitle: { en: "Let's build your next best-selling home collection.", zh: "携手打造下一个畅销家居系列。" },
  contactSub: { en: "Pricing, samples, and full catalogue on request — typical reply within 12 hours.", zh: "报价、样品、完整目录 · 通常 12 小时内回复。" },
  name: { en: "Full Name", zh: "姓名" },
  email: { en: "Business Email", zh: "商务邮箱" },
  message: { en: "Quantity, specs, requirements…", zh: "数量、规格、需求…" },
  send: { en: "Send Inquiry", zh: "发送询盘" },
  whatsapp: { en: "WhatsApp", zh: "WhatsApp" },
  wechat: { en: "WeChat", zh: "微信" },
  bookMeeting: { en: "Book a Meeting", zh: "预约会议" },
  downloadPdf: { en: "Download Catalogue PDF", zh: "下载完整电子样册" },
  contactCreatedBy: { en: "This digital catalogue experience was created by steez.digital.", zh: "本互动式电子样册由 steez.digital 打造。" },
  footerRights: { en: "All rights reserved.", zh: "版权所有。" },
  quickQuote: { en: "Request Price List", zh: "索取价格表" },
  productOf: { en: "of", zh: "/" },
  spec_material: { en: "Material", zh: "材质" },
  spec_dim: { en: "Dimensions", zh: "尺寸" },
  spec_color: { en: "Finish", zh: "饰面" },
  spec_pkg: { en: "Packaging", zh: "包装" },
  detailDesc: { en: "Description", zh: "产品介绍" },
  detailSpecs: { en: "Specifications", zh: "规格参数" },
  inquireNow: { en: "Send Inquiry", zh: "立即询价" },
  requestQuote: { en: "Request Quote", zh: "申请报价" },
  close: { en: "Close", zh: "关闭" },
  inquiryAdded: { en: "Added to inquiry list", zh: "已加入询价清单" },
} satisfies Dict;

type Key = keyof typeof dict;

const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: (k: Key) => string }>({
  lang: "en",
  setLang: () => {},
  t: (k) => k,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const t = (k: Key) => dict[k][lang];
  return <Ctx.Provider value={{ lang, setLang, t }}>{children}</Ctx.Provider>;
}

export const useI18n = () => useContext(Ctx);
