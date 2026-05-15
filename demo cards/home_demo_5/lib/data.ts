export interface Product {
  id: string;
  category: string;
  name: { en: string; zh: string };
  material: { en: string; zh: string };
  dimensions: string;
  moq: number;
  image: string;
  price?: string;
}

export const products: Product[] = [
  {
    id: "k-01",
    category: "1.1",
    name: { en: "Minimalist Copper Kettle", zh: "极简纯铜水壶" },
    material: { en: "Hand-hammered Copper", zh: "纯手工锻打铜" },
    dimensions: "18cm x 22cm",
    moq: 50,
    image: "https://images.unsplash.com/photo-1577935703932-d28479e0811b?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "c-01",
    category: "1.2",
    name: { en: "Bone China Tea Set", zh: "骨瓷茶具套装" },
    material: { en: "Fine Bone China", zh: "高级骨瓷" },
    dimensions: "Various",
    moq: 100,
    image: "https://images.unsplash.com/photo-1544725121-be3b5d0c0bc6?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "g-01",
    category: "1.3",
    name: { en: "Hammered Glass Carafe", zh: "锤纹玻璃醒酒器" },
    material: { en: "Lead-free Crystal", zh: "无铅水晶玻璃" },
    dimensions: "12cm x 28cm",
    moq: 200,
    image: "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "s-01",
    category: "1.4",
    name: { en: "Stone Aromatherapy Diffuser", zh: "石材香薰机" },
    material: { en: "Natural Travertine", zh: "天然洞石" },
    dimensions: "10cm x 15cm",
    moq: 50,
    image: "https://images.unsplash.com/photo-1602928321679-560bb453f190?q=80&w=800&auto=format&fit=crop",
  },
];
