import { create } from 'zustand';

type Language = 'en' | 'zh';

interface I18nState {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    'hero.title': 'Where Style Meets Craft',
    'hero.subtitle': '2026 Collection',
    'hero.tag': 'Zenith Home',
    'nav.home': 'Home',
    'nav.categories': 'Categories',
    'nav.inquiry': 'Inquiry',
    'nav.language': 'Language',
    'footer.steez': 'Designed by steez digital',
    'category.1.1': 'Kitchen & Dining',
    'category.1.2': 'Fine Ceramics',
    'category.1.3': 'Glassware',
    'category.1.4': 'Sanitary & Wellness',
    'category.1.5': 'Home Decor',
    'product.add': 'Add to Inquiry',
    'product.material': 'Material',
    'product.dimensions': 'Dimensions',
    'product.moq': 'MOQ',
    'cart.title': 'Inquiry List',
    'cart.empty': 'Your list is empty',
    'cart.submit': 'Submit Inquiry',
    'form.name': 'Name',
    'form.email': 'Email',
    'form.wechat': 'WeChat / WhatsApp',
    'form.company': 'Company',
  },
  zh: {
    'hero.title': '雅致而智能，家的必需。',
    'hero.subtitle': '2026 签名系列',
    'hero.tag': 'Zenith Home',
    'nav.home': '首页',
    'nav.categories': '分类',
    'nav.inquiry': '询盘',
    'nav.language': '语言',
    'footer.steez': '由 steez digital 设计',
    'category.1.1': '餐厨用品',
    'category.1.2': '日用陶瓷',
    'category.1.3': '家用玻璃制品',
    'category.1.4': '卫浴用品',
    'category.1.5': '家庭装饰',
    'product.add': '加入询盘',
    'product.material': '材质',
    'product.dimensions': '尺寸',
    'product.moq': '最小订货量',
    'cart.title': '询盘清单',
    'cart.empty': '清单为空',
    'cart.submit': '提交询盘',
    'form.name': '姓名',
    'form.email': '邮箱',
    'form.wechat': '微信 / WhatsApp',
    'form.company': '公司',
  }
};

export const useI18n = create<I18nState>((set, get) => ({
  language: 'en',
  setLanguage: (lang) => set({ language: lang }),
  t: (key) => {
    const { language } = get();
    return translations[language][key as keyof typeof translations['en']] || key;
  }
}));
