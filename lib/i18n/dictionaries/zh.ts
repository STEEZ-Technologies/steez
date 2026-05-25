import type { Dict } from "../types";

export const zh: Dict = {
  nav: {
    pricing: "定价",
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
      title: "定价",
      sub: "一个平台,三种方案。为走向全球的中国出口商而打造。",
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
    cards: {
      eyebrow: "01 · 名片",
      title: "数字名片",
      about: "可扫描的二维码链接个人主页,包含工厂照片、地图位置、联系方式、微信和 QQ、服务列表、关于页面以及国家覆盖信息图。双语 EN · 中 · РУ · العربية。深色/浅色模式。内置分享链接。",
    },
    profiles: {
      eyebrow: "02 · 公司简介",
      title: "公司简介页",
      about: "独立的微型网站,在一页精致的页面中展示您的工厂、服务、生产能力、位置和资质——定位为公司简介,而非宣传册。让买家访问的网站直接帮您促成交易。",
    },
    catalogues: {
      eyebrow: "03 · 产品目录",
      title: "产品目录",
      about: "互动式产品目录取代静态 PDF。按需提供 3D / AR 产品视图,让柏林、利雅得或圣保罗的买家在联系您之前,就能旋转、缩放和查看您的产品。",
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
    monthly: "按月",
    annually: "按年",
    perMonth: "/月",
    plans: {
      basic: {
        title: "基础版",
        desc: "快速上线。一张双语数字名片,带定制二维码。",
        button: "立即开始",
        features: [
          "1 张数字名片",
          "双语 EN + 中",
          "深色/浅色主题",
          "定制二维码",
          "分享链接",
          "社区支持",
        ],
      },
      standard: {
        title: "标准版",
        desc: "面向认真出口的客户。名片、表单、四种语言和季度分析。",
        button: "选择标准版",
        badge: "最受欢迎",
        features: [
          "1 张名片 + 5 个数字表单",
          "完整 4 语言支持",
          "深色/浅色主题",
          "季度分析",
          "优先支持",
          "定制二维码 + 分享链接",
        ],
      },
      premium: {
        title: "高级版",
        desc: "完整 STEEZ。无限表单、3D/AR 目录、专属客户经理。",
        button: "选择高级版",
        features: [
          "名片 + 无限表单",
          "3D / AR 目录",
          "全部 4 种语言",
          "月度分析评审",
          "访客地理追踪",
          "专属客户经理",
        ],
      },
    },
  },
  contactBlock: {
    info: {
      phone: "电话",
      email: "邮箱",
      hq: "总部",
      hours: "营业时间",
    },
    values: {
      phone: "+86 755 8888 0000",
      email: "hello@steez.cn",
      hq: "浙江杭州",
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
