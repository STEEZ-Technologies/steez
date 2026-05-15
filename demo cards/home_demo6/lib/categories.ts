export interface Category {
  id: string;
  nameEn: string;
  nameZh: string;
  descEn: string;
  descZh: string;
  tags: string[];
  tagsZh: string[];
  // Replace with actual factory category hero images
  imageUrl: string;
  productCount: number;
}

export const categories: Category[] = [
  {
    id: "cooking",
    nameEn: "Cooking Utensils",
    nameZh: "厨房用具",
    descEn:
      "Premium pans, knives, cups, kettles, and cooking tools for professional and home kitchens worldwide.",
    descZh: "优质平底锅、刀具、杯具、水壶和烹饪工具，适用于全球专业及家庭厨房。",
    tags: ["Pans", "Knives", "Cups", "Kettles", "Tableware"],
    tagsZh: ["平底锅", "刀具", "杯子", "水壶", "餐具"],
    imageUrl: "https://picsum.photos/seed/cookingcat/600/400",
    productCount: 5,
  },
  {
    id: "ceramics",
    nameEn: "Domestic Ceramics",
    nameZh: "日用陶瓷",
    descEn:
      "Fine porcelain tableware, bone china, color glaze, and hotel ceramics crafted to international standards.",
    descZh: "精细瓷器餐具、骨瓷、色釉陶瓷和酒店陶瓷，按国际标准制造。",
    tags: ["White Porcelain", "Bone China", "Color Glaze", "Hotel Grade"],
    tagsZh: ["白瓷", "骨瓷", "色釉", "酒店级"],
    imageUrl: "https://picsum.photos/seed/ceramicscat/600/400",
    productCount: 5,
  },
  {
    id: "glass",
    nameEn: "Domestic Glass Products",
    nameZh: "日用玻璃制品",
    descEn:
      "Crystal-clear glass utensils, storage jars, and decorative ornaments for home and commercial use.",
    descZh: "晶莹剔透的玻璃器皿、储物罐和装饰品，适用于家庭和商业用途。",
    tags: ["Glassware", "Storage", "Decorative", "Crystal Clear"],
    tagsZh: ["玻璃器皿", "储物", "装饰", "水晶透明"],
    imageUrl: "https://picsum.photos/seed/glasscat/600/400",
    productCount: 4,
  },
  {
    id: "bathroom",
    nameEn: "Bathroom Supplies",
    nameZh: "浴室用品",
    descEn:
      "Mirrors, scented bath sets, paper goods, and disposable amenities for hotels and residential buyers.",
    descZh: "镜子、香氛沐浴套装、纸制品和一次性用品，适用于酒店和住宅采购。",
    tags: ["Mirrors", "Bath Sets", "Paper Goods", "Disposables"],
    tagsZh: ["镜子", "浴室套装", "纸制品", "一次性用品"],
    imageUrl: "https://picsum.photos/seed/bathroomcat/600/400",
    productCount: 4,
  },
  {
    id: "homeDecor",
    nameEn: "Home Decoration",
    nameZh: "家居装饰",
    descEn:
      "Curated home ornaments and decorative art prints blending Eastern craftsmanship with global aesthetics.",
    descZh: "精选家居摆件和装饰艺术印刷品，融合东方工艺与全球美学。",
    tags: ["Ornaments", "Wall Art", "Ceramic", "Handcrafted"],
    tagsZh: ["摆件", "墙面艺术", "陶瓷", "手工"],
    imageUrl: "https://picsum.photos/seed/homedecorcat/600/400",
    productCount: 2,
  },
];
