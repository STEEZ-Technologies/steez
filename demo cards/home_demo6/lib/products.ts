export type ModelType =
  | "bowl"
  | "cup"
  | "kettle"
  | "mirror"
  | "vase"
  | "pan"
  | "plate"
  | "jar"
  | "bottle";

export interface Product {
  id: string;
  category: "cooking" | "ceramics" | "glass" | "bathroom" | "homeDecor";
  nameEn: string;
  nameZh: string;
  descEn: string;
  descZh: string;
  moq: number;
  material: string;
  materialZh: string;
  customizable: boolean;
  modelType: ModelType;
  // Replace these with real factory product photo URLs
  imageUrl: string;
}

export const products: Product[] = [
  // ── COOKING UTENSILS ─────────────────────────────────────────────────────────
  {
    id: "cook-001",
    category: "cooking",
    nameEn: "Non-Stick Frying Pan",
    nameZh: "不粘煎锅",
    descEn:
      "Granite-coated non-stick frying pan with heat-resistant handle. Safe for all stovetops including induction.",
    descZh: "花岗岩涂层不粘煎锅，耐热手柄。适用于所有炉灶，含电磁炉。",
    moq: 500,
    material: "Aluminum + Granite Coating",
    materialZh: "铝合金 + 花岗岩涂层",
    customizable: true,
    modelType: "pan",
    imageUrl: "https://picsum.photos/seed/nonstickpan/600/400",
  },
  {
    id: "cook-002",
    category: "cooking",
    nameEn: "Stainless Steel Kettle",
    nameZh: "不锈钢水壶",
    descEn:
      "Premium 304 stainless steel kettle, 1.8L capacity. Ergonomic grip, whistle function, anti-drip spout.",
    descZh: "优质304不锈钢水壶，容量1.8升。人体工学握柄，哨音功能，防滴嘴。",
    moq: 300,
    material: "304 Stainless Steel",
    materialZh: "304不锈钢",
    customizable: true,
    modelType: "kettle",
    imageUrl: "https://picsum.photos/seed/steelkettle/600/400",
  },
  {
    id: "cook-003",
    category: "cooking",
    nameEn: "Kitchen Knife Set",
    nameZh: "厨房刀具套装",
    descEn:
      "5-piece professional kitchen knife set with high-carbon stainless steel blades and pakkawood handles.",
    descZh: "5件专业厨房刀具套装，高碳不锈钢刀刃，巴克木手柄。",
    moq: 200,
    material: "High-Carbon Stainless Steel",
    materialZh: "高碳不锈钢",
    customizable: true,
    modelType: "plate",
    imageUrl: "https://picsum.photos/seed/knifeset/600/400",
  },
  {
    id: "cook-004",
    category: "cooking",
    nameEn: "Ceramic Mug",
    nameZh: "陶瓷杯",
    descEn:
      "11oz ceramic mug with food-safe glaze. Microwave and dishwasher safe. Suitable for coffee, tea, hot drinks.",
    descZh: "11盎司陶瓷杯，食品级釉面。可微波、可机洗。适合咖啡、茶和热饮。",
    moq: 1000,
    material: "Premium Ceramic",
    materialZh: "优质陶瓷",
    customizable: true,
    modelType: "cup",
    imageUrl: "https://picsum.photos/seed/ceramicmug/600/400",
  },
  {
    id: "cook-005",
    category: "cooking",
    nameEn: "Stainless Steel Cooking Spoon Set",
    nameZh: "不锈钢汤勺套装",
    descEn:
      "Set of 6 premium 201 stainless steel cooking spoons. Heat-resistant, rust-proof, dishwasher-safe.",
    descZh: "6件优质201不锈钢汤勺套装。耐热、防锈、可机洗。",
    moq: 500,
    material: "201 Stainless Steel",
    materialZh: "201不锈钢",
    customizable: false,
    modelType: "pan",
    imageUrl: "https://picsum.photos/seed/steelspoon/600/400",
  },

  // ── DOMESTIC CERAMICS ─────────────────────────────────────────────────────────
  {
    id: "cer-001",
    category: "ceramics",
    nameEn: "White Porcelain Dinner Set",
    nameZh: "白瓷餐具套装",
    descEn:
      "16-piece white porcelain dinner set. Elegant, chip-resistant, microwave-safe. Hotel and retail grade.",
    descZh: "16件白瓷餐具套装。优雅、耐碰磁、可微波加热。酒店及零售级别。",
    moq: 100,
    material: "High-Fire White Porcelain",
    materialZh: "高温白瓷",
    customizable: true,
    modelType: "plate",
    imageUrl: "https://picsum.photos/seed/whiteporcelain/600/400",
  },
  {
    id: "cer-002",
    category: "ceramics",
    nameEn: "Bone China Tea Cup",
    nameZh: "骨瓷茶杯",
    descEn:
      "Fine bone china tea cup with translucent body and delicate floral motif. Premium grade, gift-ready.",
    descZh: "精细骨瓷茶杯，透光杯身，精致花卉纹样。高端品级，适合礼品。",
    moq: 500,
    material: "Fine Bone China",
    materialZh: "精细骨瓷",
    customizable: true,
    modelType: "cup",
    imageUrl: "https://picsum.photos/seed/bonechina/600/400",
  },
  {
    id: "cer-003",
    category: "ceramics",
    nameEn: "Color Glaze Bowl",
    nameZh: "色釉碗",
    descEn:
      "Artisan color glaze rice bowl with rich gradient finish. Hand-dipped, unique per piece, food safe.",
    descZh: "匠心色釉饭碗，丰富渐变釉色。手工浸釉，每件独一无二，食品安全。",
    moq: 300,
    material: "Stoneware Ceramic",
    materialZh: "炻器陶瓷",
    customizable: true,
    modelType: "bowl",
    imageUrl: "https://picsum.photos/seed/glazebowl/600/400",
  },
  {
    id: "cer-004",
    category: "ceramics",
    nameEn: "Red Glaze Decorative Plate",
    nameZh: "红釉装饰盘",
    descEn:
      "Collector-grade red glaze decorative plate. High-fire kiln technique, vibrant oxblood red finish.",
    descZh: "收藏级红釉装饰盘。高温窑烧工艺，鲜艳牛血红釉色。",
    moq: 200,
    material: "High-Fire Porcelain",
    materialZh: "高温瓷器",
    customizable: true,
    modelType: "plate",
    imageUrl: "https://picsum.photos/seed/redglazeplate/600/400",
  },
  {
    id: "cer-005",
    category: "ceramics",
    nameEn: "Hotel Ceramic Tableware",
    nameZh: "酒店陶瓷餐具",
    descEn:
      "Vitrified hotel-grade ceramic tableware set. Chip-resistant, stackable, commercial-use certified.",
    descZh: "玻化酒店级陶瓷餐具套装。耐碰磁、可堆叠、商业用途认证。",
    moq: 500,
    material: "Vitrified Ceramic",
    materialZh: "玻化陶瓷",
    customizable: true,
    modelType: "bowl",
    imageUrl: "https://picsum.photos/seed/hoteltableware/600/400",
  },

  // ── DOMESTIC GLASS PRODUCTS ───────────────────────────────────────────────────
  {
    id: "gls-001",
    category: "glass",
    nameEn: "Clear Glass Cup Set",
    nameZh: "透明玻璃杯套装",
    descEn:
      "Set of 6 lead-free crystal-clear glass cups. Perfect for water, juice, and cocktails. Bar and home grade.",
    descZh: "6件无铅晶莹透明玻璃杯套装。适用于水、果汁和鸡尾酒。酒吧及家庭级别。",
    moq: 500,
    material: "Lead-free Glass",
    materialZh: "无铅玻璃",
    customizable: false,
    modelType: "cup",
    imageUrl: "https://picsum.photos/seed/glasscupset/600/400",
  },
  {
    id: "gls-002",
    category: "glass",
    nameEn: "Glass Storage Jar",
    nameZh: "玻璃储物罐",
    descEn:
      "Airtight glass storage jar with bamboo lid. Food-safe, BPA-free. Available in 500ml, 1L, and 1.5L.",
    descZh: "密封玻璃储物罐，竹木盖。食品级，无BPA。提供500ml、1L、1.5L三种规格。",
    moq: 300,
    material: "Borosilicate Glass + Bamboo",
    materialZh: "硼硅玻璃 + 竹木",
    customizable: true,
    modelType: "jar",
    imageUrl: "https://picsum.photos/seed/glassstorage/600/400",
  },
  {
    id: "gls-003",
    category: "glass",
    nameEn: "Glass Fruit Bowl",
    nameZh: "玻璃果盘",
    descEn:
      "Large decorative glass fruit bowl with frosted rim detail. Modern design, ideal table centrepiece.",
    descZh: "大型装饰玻璃果盘，磨砂边缘细节。现代设计，理想桌面中心摆件。",
    moq: 200,
    material: "Float Glass",
    materialZh: "浮法玻璃",
    customizable: false,
    modelType: "bowl",
    imageUrl: "https://picsum.photos/seed/glassfruitbowl/600/400",
  },
  {
    id: "gls-004",
    category: "glass",
    nameEn: "Decorative Glass Vase",
    nameZh: "玻璃花瓶",
    descEn:
      "Hand-blown glass vase with gradient color. Each piece unique. Height 30cm. Interior and hospitality use.",
    descZh: "手吹玻璃花瓶，渐变色彩。每件独一无二。高度30厘米。室内及酒店用途。",
    moq: 200,
    material: "Hand-blown Glass",
    materialZh: "手吹玻璃",
    customizable: true,
    modelType: "vase",
    imageUrl: "https://picsum.photos/seed/glassvase/600/400",
  },

  // ── BATHROOM SUPPLIES ─────────────────────────────────────────────────────────
  {
    id: "bath-001",
    category: "bathroom",
    nameEn: "Wall Bathroom Mirror",
    nameZh: "浴室镜",
    descEn:
      "HD silver wall bathroom mirror with solid walnut frame. 60×80cm, moisture-resistant, hotel-fitout grade.",
    descZh: "高清银镜壁挂浴室镜，实木胡桃木边框。60×80厘米，防潮，酒店装修级别。",
    moq: 100,
    material: "HD Silver Mirror + Solid Wood",
    materialZh: "高清银镜 + 实木",
    customizable: true,
    modelType: "mirror",
    imageUrl: "https://picsum.photos/seed/bathroommirror/600/400",
  },
  {
    id: "bath-002",
    category: "bathroom",
    nameEn: "Scented Bath Set",
    nameZh: "香氛沐浴套装",
    descEn:
      "5-piece luxury scented bath set: shower gel, shampoo, conditioner, body lotion, and soap bar.",
    descZh: "5件豪华香氛沐浴套装：沐浴露、洗发水、护发素、身体乳、香皂。",
    moq: 500,
    material: "Natural Botanical Formula",
    materialZh: "天然植物配方",
    customizable: true,
    modelType: "bottle",
    imageUrl: "https://picsum.photos/seed/scentbathset/600/400",
  },
  {
    id: "bath-003",
    category: "bathroom",
    nameEn: "Paper Towel Pack",
    nameZh: "纸巾套装",
    descEn:
      "Premium 3-ply facial tissue and paper towel combination pack. Soft, strong, individually wrapped.",
    descZh: "优质3层面巾纸和纸巾组合装。柔软、结实、独立包装。",
    moq: 5000,
    material: "Virgin Wood Pulp",
    materialZh: "原生木浆",
    customizable: true,
    modelType: "jar",
    imageUrl: "https://picsum.photos/seed/papertowelpack/600/400",
  },
  {
    id: "bath-004",
    category: "bathroom",
    nameEn: "Disposable Bathroom Amenities",
    nameZh: "一次性浴室用品",
    descEn:
      "Hotel-grade disposable bathroom amenity kit: toothbrush, comb, slipper, soap. Per-room packaging.",
    descZh: "酒店级一次性浴室用品套装：牙刷、梳子、拖鞋、香皂。按房间配套包装。",
    moq: 1000,
    material: "Mixed / Hotel-grade",
    materialZh: "混合 / 酒店级",
    customizable: true,
    modelType: "cup",
    imageUrl: "https://picsum.photos/seed/disposablekit/600/400",
  },

  // ── HOME DECORATION ───────────────────────────────────────────────────────────
  {
    id: "dec-001",
    category: "homeDecor",
    nameEn: "Ceramic Home Ornament",
    nameZh: "陶瓷家居摆件",
    descEn:
      "Handcrafted ceramic ornament set — rabbit, mushroom, and cloud forms. Matte finish, gift-ready packaging.",
    descZh: "手工陶瓷摆件套装——兔子、蘑菇和云朵造型。哑光釉面，适合礼品包装。",
    moq: 200,
    material: "High-Fire Ceramic",
    materialZh: "高温陶瓷",
    customizable: true,
    modelType: "vase",
    imageUrl: "https://picsum.photos/seed/ceramicornament/600/400",
  },
  {
    id: "dec-002",
    category: "homeDecor",
    nameEn: "Decorative Wall Painting",
    nameZh: "装饰画",
    descEn:
      "Abstract silk-screen print on heavyweight 300gsm art paper. Ready-to-frame. 50×70cm limited edition.",
    descZh: "厚克300克美术纸丝网印刷抽象画。可直接装裱。50×70厘米限量版。",
    moq: 300,
    material: "Art Paper + Silk Screen",
    materialZh: "美术纸 + 丝网印刷",
    customizable: true,
    modelType: "mirror",
    imageUrl: "https://picsum.photos/seed/decorativepainting/600/400",
  },
];
