import type { Dict } from "../types";

export const zh: Dict = {
  nav: {
    pricing: "套餐",
    cards: "名片",
    contact: "联系",
    top: "顶部",
    services: "服务",
  },
  hero: {
    title2: "数字",
    tagline: "连接中国制造商与全球买家的数字桥梁",
    description: "连接中国制造商与全球买家——为每一次展会带来数字化升级。",
    cta: "联系",
    getQuote: "获取报价",
    talkToUs: "联系我们",
    wechat: "微信",
    chips: {
      cards: "数字名片",
      profiles: "公司主页",
      catalogues: "产品目录",
      booth: "展位展示",
    },
  },
  numbers: {
    scans: "买家扫描激活量",
    countries: "覆盖国家数",
    days: "首次成效天数",
    lines: "核心产品线",
  },
  sections: {
    services: {
      eyebrow: "02 — 服务",
      title: "我们的产品",
      sub: "三款产品,一套体系。为走向全球的中国出口商而打造。",
    },
    analytics: {
      eyebrow: "03 — 数据与分析",
      title: "买家洞察",
      sub: "实时扫描、地区、产品。轻量级 CRM 内置。",
      body: "追踪每一次扫描、停留时间和地区。STEEZ 仪表板精准显示谁打开了您的名片,停留多久,身处何地——让您清楚知道哪些市场正在升温,哪些值得加倍投入。",
    },
    booth: {
      eyebrow: "03 — 展位展示",
      title: "您的二维码,处处可见",
      sub: "两种方式,让 STEEZ 在每场展会都触手可及。",
    },
    pricing: {
      eyebrow: "05 — 套餐",
      title: "套餐",
      sub: "一套全能包。灵活的增值服务。为走向全球的中国出口商而打造。",
    },
    contact: {
      eyebrow: "06 — 联系",
      title: "与我们对话",
      sub: "告诉我们您的工厂。我们将在 24 小时内回复。",
    },
    numbers: {
      eyebrow: "01 — 数据",
      title: "制造商的信赖之选",
    },
  },
  servicesItems: {
    catalogues: {
      eyebrow: "01 · 展示",
      title: "产品目录与公司简介",
      about: "将互动式产品目录和独立的公司简介整合在同一个数字体验中。支持高达 30 个 2D 产品和 10 个 3D 模型，并在多语言精美网站中展示工厂照片和资质。完全取代静态 PDF 和传统宣传册。",
    },
    social: {
      eyebrow: "02 · 社交媒体",
      title: "国际社交媒体",
      about: "专业的 Instagram 和 Facebook 商业主页搭建。根据您的品牌设计双语内容。提供可复用的内容日历模板及针对国际影响力的行业专属标签策略。帖子直接链接至产品页面。",
    },
    cards: {
      eyebrow: "03 · 身份与展会",
      title: "数字名片与展位展示",
      about: "将数字名片与展会二维码展示套件（挂绳、桌面展架）完美结合。买家扫描您的展位或员工，即可立刻获取联系方式、地图定位及微信/WhatsApp链接，彻底取代纸质名片与零散的展会资料。",
    },
  },
  analyticsBlock: {
    metrics: {
      totalScans: "总扫描数",
      countries: "国家",
      avgSession: "平均时长",
    },
    regions: {
      me: "中东",
      ru: "俄罗斯",
      eu: "欧洲",
      na: "北美",
      sa: "南美",
    },
    features: {
      realtime: {
        title: "实时扫描",
        desc: "几秒内查看每一次二维码打开,带设备和地域识别。",
      },
      heatmap: {
        title: "地区热力图",
        desc: "深入到城市级别需求,提前发现新兴买家聚集地。",
      },
      funnel: {
        title: "漏斗数据导出",
        desc: "通过 webhook 将扫描 → 表单 → 回复数据直接推送到您的 CRM。",
      },
    },
  },
  boothProducts: {
    lanyard: {
      name: "胸卡挂绳",
      scanTo: "数字名片",
      body: "由您的展位团队佩戴。每位员工都成为可扫描的接触点——访客拿起手机扫一扫,即可进入对应员工的数字名片,当场开启对话。",
    },
    stand: {
      name: "桌面展架",
      scanTo: "产品目录",
      body: "放置在展位桌面。扫描二维码即可打开完整的互动产品目录,支持 3D / AR 查看——无需安装应用,以买家的语言即扫即看。",
    },
    scanLabel: "扫码进入",
  },
  pricingBlock: {
    annually: "按年",
    packages: [
      {
        name: "基础套餐 (Essential)",
        desc: "高级数字化展会展示所需的一切。",
        price: "7,000",
        yearly: "次年 ¥3,500/年",
        button: "选择基础套餐",
        features: [
          "数字产品目录与公司简介",
          "国际社交媒体页面搭建",
          "包含 30 个 2D + 10 个 3D 产品位",
          "5 张个人数字名片",
          "基础二维码展示套装 (挂绳 + 展架)",
          "包含无限多语言支持"
        ]
      },
      {
        name: "增长套餐 (Growth)",
        desc: "扩展社交媒体影响力，深度触达目标市场。",
        price: "12,000",
        yearly: "次年 ¥3,500/年",
        button: "选择增长套餐",
        featured: true,
        features: [
          "包含基础套餐的所有功能",
          "领英 (LinkedIn) 公司主页搭建",
          "额外 25 篇社媒内容",
          "Canva 品牌模板套件",
          "定制化内容发布策略",
          "社媒与目录深度集成"
        ]
      },
      {
        name: "活跃套餐 (Active)",
        desc: "我们为您全面代管日常数字化运营。",
        price: "16,000",
        yearly: "次年 ¥7,500/年",
        button: "选择活跃套餐",
        features: [
          "包含增长套餐的所有功能",
          "季度内容更新包",
          "每季度 12 篇全新内容",
          "日常评论与私信管理",
          "持续主页优化",
          "月度数据分析报告"
        ]
      }
    ]
  },
  contactBlock: {
    info: {
      phone: "电话",
      email: "邮箱",
      hq: "总部",
      hours: "营业时间",
    },
    values: {
      phone: "+86 19818401505",
      email: "steez.workspace@gmail.com",
      hq: "浙江省杭州市上城区赞成中心西楼1005室-01",
      hours: "周一至周六 09:00–19:00 北京时间",
    },
    form: {
      name: "姓名",
      email: "邮箱",
      message: "告诉我们您的业务——产品、目标市场、您的需求。",
      send: "发送消息",
      sending: "发送中...",
      sentTitle: "消息已发送",
      sentSub: "我们将在 24 小时内联系您。",
      errName: "请填写姓名",
      errEmail: "请填写邮箱",
      errEmailInvalid: "邮箱格式不正确",
      errMessage: "请留下简短的留言",
    },
    wechat: {
      title: "微信添加我们",
      sub: "打开微信,扫一扫,几秒内即可与我们的团队开启对话。",
      handle: "STEEZ-CN",
      scanLabel: "使用微信扫一扫",
    },
    trust: {
      response: {
        k: "响应",
        v: "24 小时内",
        d: "每一次咨询都由真实的客户经理处理——无自动回复,无机器人。",
      },
      onboarding: {
        k: "上线",
        v: "平均 7 天",
        d: "从签订需求书到您的买家手中拿到首张可扫描名片。",
      },
      languages: {
        k: "语言",
        v: "EN · 中 · РУ · العربية",
        d: "每个套餐都包含原生本地化——文案由本地编辑审校。",
      },
    },
  },
  footer: {
    brandTagline: "连接中国制造商与全球买家的数字桥梁。",
    locations: "办事处",
    reachUs: "联系我们",
    index: "目录",
    bottomLeft: "© 2026 STEEZ · 设计于杭州",
    bottomRight: "为中国制造商而生",
    locationItems: {
      hangzhou: "杭州",
      yiwu: "义乌",
      foshan: "佛山",
      guangzhou: "广州",
    },
  },
  lang: {
    label: "语言",
    selectLanguage: "选择语言",
  },
};
