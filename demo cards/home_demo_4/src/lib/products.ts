import pOrganizer from "@/assets/p-organizer.jpg";
import pCanister from "@/assets/p-canister.jpg";
import pLamp from "@/assets/p-lamp.jpg";
import pShelf from "@/assets/p-shelf.jpg";
import pSoap from "@/assets/p-soap.jpg";
import pBin from "@/assets/p-bin.jpg";

export type Badge = "new" | "best" | "oem" | "eco";
export type Product = {
  id: string;
  image: string;
  category: "kitchen" | "storage" | "lighting" | "bathroom";
  badge?: Badge;
  name: { en: string; zh: string };
  desc: { en: string; zh: string };
  long: { en: string; zh: string };
  specs: {
    material: { en: string; zh: string };
    dim: { en: string; zh: string };
    color: { en: string; zh: string };
    pkg: { en: string; zh: string };
  };
};

export const products: Product[] = [
  {
    id: "modular-organizer",
    image: pOrganizer,
    category: "kitchen",
    badge: "best",
    name: { en: "Bamboo Drawer Organizer", zh: "竹木抽屉收纳盒" },
    desc: { en: "Modular bamboo grid for drawer refinement.", zh: "模块化竹制抽屉收纳系统。" },
    long: {
      en: "FSC-certified bamboo modules that adapt to any drawer size. Smooth-sanded edges, food-safe finish, ready for retail packaging.",
      zh: "FSC 认证竹材，适配任意抽屉尺寸。倒角打磨，食品级涂层，零售包装即开即售。",
    },
    specs: {
      material: { en: "FSC Bamboo", zh: "FSC 竹材" },
      dim: { en: "Adjustable 30–55 cm", zh: "可调 30–55 厘米" },
      color: { en: "Natural / Charcoal", zh: "原木 / 炭灰" },
      pkg: { en: "Color box, 12 pcs/CTN", zh: "彩盒 · 12 件/箱" },
    },
  },
  {
    id: "ceramic-canister",
    image: pCanister,
    category: "kitchen",
    badge: "new",
    name: { en: "Stoneware Canister Set", zh: "陶土密封罐套装" },
    desc: { en: "Hand-glazed jars with bamboo lids.", zh: "手工釉面 · 竹盖密封罐。" },
    long: {
      en: "Three-piece set with airtight silicone seal. Suited for tea, coffee, and dry goods. Available in three matte glazes.",
      zh: "三件套，硅胶密封圈。适合茶叶、咖啡、干货收纳，提供三种哑光釉色。",
    },
    specs: {
      material: { en: "Stoneware + Bamboo", zh: "陶土 + 竹木" },
      dim: { en: "S/M/L 0.4 / 0.8 / 1.2 L", zh: "小/中/大 0.4/0.8/1.2升" },
      color: { en: "Bone / Sand / Clay", zh: "骨白 / 砂色 / 陶土" },
      pkg: { en: "Gift box, 6 sets/CTN", zh: "礼盒 · 6套/箱" },
    },
  },
  {
    id: "cordless-lamp",
    image: pLamp,
    category: "lighting",
    badge: "oem",
    name: { en: "Cordless Dome Lamp", zh: "无线穹顶台灯" },
    desc: { en: "Portable warm-glow ambient light.", zh: "便携暖光氛围灯。" },
    long: {
      en: "USB-C rechargeable with 18-hour runtime, three brightness modes, and brushed brass base. Touch-dim control.",
      zh: "USB-C 充电，续航 18 小时，三档亮度，拉丝铜底座，触控调光。",
    },
    specs: {
      material: { en: "Glass + Brass", zh: "玻璃 + 黄铜" },
      dim: { en: "Ø12 × 26 cm", zh: "Ø12 × 26 厘米" },
      color: { en: "Brass / Brushed Steel", zh: "黄铜 / 拉丝钢" },
      pkg: { en: "White box, 8 pcs/CTN", zh: "白盒 · 8件/箱" },
    },
  },
  {
    id: "floating-shelf",
    image: pShelf,
    category: "storage",
    badge: "eco",
    name: { en: "Axis Floating Shelf", zh: "Axis 隐形悬浮置物架" },
    desc: { en: "Solid oak with concealed mounting.", zh: "实木橡木 · 隐藏式安装。" },
    long: {
      en: "Single piece of solid oak, finished with hard-wax oil. Concealed steel rod mount holds 15 kg per shelf.",
      zh: "整块实木橡木，硬蜡油保护涂层。隐藏式钢杆安装，单层承重 15 公斤。",
    },
    specs: {
      material: { en: "Solid Oak", zh: "实木橡木" },
      dim: { en: "60 / 80 / 100 cm", zh: "60 / 80 / 100 厘米" },
      color: { en: "Natural / Smoked", zh: "原木 / 烟熏" },
      pkg: { en: "Carton, 4 pcs/CTN", zh: "纸箱 · 4件/箱" },
    },
  },
  {
    id: "stone-soap",
    image: pSoap,
    category: "bathroom",
    badge: "best",
    name: { en: "Stone Soap Dispenser", zh: "石质皂液器" },
    desc: { en: "Cast resin-stone with brass pump.", zh: "树脂石材 · 黄铜泵头。" },
    long: {
      en: "Weighted stone-effect base with leak-proof brass pump. Capacity 350 ml. Coordinates with the Noir bath collection.",
      zh: "稳重的仿石底座，配防漏黄铜泵头。350 毫升容量，可搭配 Noir 浴室系列。",
    },
    specs: {
      material: { en: "Resin Stone + Brass", zh: "树脂石材 + 黄铜" },
      dim: { en: "Ø8 × 18 cm", zh: "Ø8 × 18 厘米" },
      color: { en: "Stone / Charcoal", zh: "石灰 / 炭黑" },
      pkg: { en: "Color box, 12 pcs/CTN", zh: "彩盒 · 12件/箱" },
    },
  },
  {
    id: "sensor-bin",
    image: pBin,
    category: "bathroom",
    badge: "new",
    name: { en: "Sensor Core Bin", zh: "智能感应垃圾桶" },
    desc: { en: "Touchless lid with odor filter.", zh: "无接触感应 · 自带活性炭。" },
    long: {
      en: "12 L capacity with motion sensor lid, replaceable carbon filter, and matte ABS finish. Battery powered, 6-month life.",
      zh: "12 升容量，红外感应盖，可更换活性炭芯，哑光 ABS 外壳。电池供电续航 6 个月。",
    },
    specs: {
      material: { en: "ABS + Carbon Filter", zh: "ABS + 活性炭" },
      dim: { en: "25 × 18 × 38 cm", zh: "25 × 18 × 38 厘米" },
      color: { en: "Bone / Charcoal / Sand", zh: "骨白 / 炭灰 / 砂色" },
      pkg: { en: "Color box, 6 pcs/CTN", zh: "彩盒 · 6件/箱" },
    },
  },
];
