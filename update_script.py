import re

with open('demo cards/toiletery demo/comai_catalogue.html', 'r', encoding='utf-8') as f:
    content = f.read()

new_script = """<script>
// ─── TRANSLATIONS ─────────────────────────────────────────────
const T = {
  en: {
    nav_products: "Products", nav_3d: "3D Viewer", nav_compare: "Compare", nav_tech: "Technology", nav_contact: "Contact", nav_cta: "Contact Us",
    mob_home: "Home", mob_products: "Products", mob_3d: "3D", mob_compare: "Compare", mob_contact: "Contact",
    hero_eyebrow: "Est. 2007 · Hangzhou · Smart Bathroom Technology", hero_brand_sys: "Smart Bathroom Systems",
    hero_sub: "Smart toilets, bidet seats, and precision hygiene technology for modern residential and hospitality bathrooms.",
    hero_btn_explore: "Explore Products", hero_btn_3d: "View S90 in 3D", hero_compare_link: "Compare Models →",
    hero_stat_1: "Established 2007", hero_stat_2: "6 Product Models", hero_stat_3: "3 System Categories", hero_stat_4: "3D Interactive",
    ds_eyebrow: "Design Philosophy", ds_title: "Design<br>Changes<br>Everything",
    ds_body: "Intelligent bathroom technology should feel effortless, quiet, and beautifully integrated into the space. Not a gadget bolted onto a room — a natural part of a better daily routine.",
    ds_btn: "Discover the Collection", ds_stat_1_lbl: "Established", ds_stat_2_lbl: "Product Systems", ds_stat_3_lbl: "Interactive",
    exp_eyebrow: "The COMAI Experience",
    exp_t0: "Elevated<br>Comfort", exp_b0: "Heated seat, warm water, and adjustable settings create a more comfortable daily routine — every morning, every time.",
    exp_t1: "Personalized<br>Hygiene", exp_b1: "Precision washing, nozzle movement, and temperature control help each user find their preferred clean.",
    exp_t2: "A Cleaner<br>Routine", exp_b2: "Self-cleaning nozzle and UV sterilization maintain a cleaner experience after every use, automatically.",
    exp_t3: "A Cleaner<br>Space", exp_b3: "Auto deodorization, touchless functions, and integrated lighting keep the bathroom fresh, calm, and composed.",
    feat_eyebrow: "Technology", feat_title: "Next-Level Features",
    feat_t1: "Automated Functionality", feat_d1: "Auto lid, auto flush, and touchless operation reduce contact and elevate the daily experience.",
    feat_t2: "Personalized Bidet", feat_d2: "Temperature, pressure, nozzle position, and spray mode — fully adjustable per user.",
    feat_t3: "Ultra-Hygienic", feat_d3: "UV sterilization and self-cleaning nozzle technology work automatically after every use.",
    feat_t4: "Remote & Side Control", feat_d4: "Wireless remote, side panel, and app control give full flexibility across all models.",
    feat_t5: "ECO Mode", feat_d5: "Energy-saving mode reduces power use during idle periods without affecting comfort.",
    feat_t6: "Night Light & Deodorizer", feat_d6: "LED night light and built-in deodorizer keep the bathroom functional and fresh at all hours.",
    prod_eyebrow: "Product Range", prod_title: "Discover Your Ideal COMAI System",
    prod_f_all: "All", prod_f_seats: "Smart Seats", prod_f_wall: "Wall-Mounted", prod_f_floor: "Floor-Mounted", prod_f_flag: "Flagship",
    v3d_eyebrow: "Interactive 3D", v3d_title: "Explore the Details<br>in 3D",
    v3d_desc: "Rotate, zoom, and inspect each model directly from the catalog. GLB model files load automatically when placed in the /models/ folder.",
    v3d_btn: "Open S90 in 3D", v3d_note: "GLB files in /models/ folder enable full interactive rotation",
    cmp_eyebrow: "Model Comparison", cmp_title: "Find the Right System", cmp_th_spec: "Specification",
    fac_eyebrow: "Craftsmanship", fac_title: "Engineered for<br>Project Delivery",
    fac_quote: "Every component engineered to perform quietly, reliably, and precisely — in residential, hospitality, and commercial environments.",
    fac_t1: "Quality Tested", fac_d1: "Every unit undergoes performance testing before shipment.",
    fac_t2: "ISO Standards", fac_d2: "Manufacturing meets international quality standards.",
    fac_t3: "Project Supply", fac_d3: "For residential developers, hotels, and show apartments.",
    fac_t4: "Hangzhou Based", fac_d4: "Headquarters and production in Zhejiang Province.",
    con_eyebrow: "Get in Touch", con_title: "Contact COMAI",
    con_l_name: "Name", con_l_comp: "Company", con_l_email: "Email", con_l_type: "Inquiry Type", con_l_msg: "Message",
    con_p_name: "Your name", con_p_comp: "Company name", con_p_email: "your@email.com", con_p_msg: "Describe your project or inquiry...",
    con_opt_0: "Select product or service", con_opt_1: "Smart Toilet Seats (W3 / W5)", con_opt_2: "Wall-Mounted Toilets (I6 / I7)", con_opt_3: "Floor-Mounted Toilets (S90 / P90)", con_opt_4: "Project / Bulk Order", con_opt_5: "Technical Support", con_opt_6: "General Inquiry",
    con_btn_send: "Send Inquiry", con_btn_sent: "Inquiry Sent",
    con_wc_t: "WeChat Business", con_wc_s: "Scan to Connect", con_wc_sub: "Reach the COMAI export team directly via WeChat for product inquiries and project quotes.",
    con_d_p: "Phone", con_d_e: "Email", con_d_l: "Location", con_d_loc: "Hangzhou, Zhejiang, China",
    footer_tag: "Smart bathroom systems for residential, hospitality, and project environments.",
    footer_c1: "Products", footer_c2: "Technology", footer_c3: "Contact",
    modal_specs: "Technical Specifications", modal_btn_3d: "Open 3D Model", modal_btn_con: "Contact COMAI",
    v_load: "Loading 3D Model", v_fall: "3D model preview — interactive model will load once the GLB file is added.", v_btn_ar: "Auto Rotate", v_btn_reset: "Reset View"
  },
  zh: {
    nav_products: "产品系列", nav_3d: "3D 展示", nav_compare: "产品对比", nav_tech: "核心技术", nav_contact: "联系我们", nav_cta: "联系我们",
    mob_home: "首页", mob_products: "产品", mob_3d: "3D", mob_compare: "对比", mob_contact: "联系",
    hero_eyebrow: "始于2007 · 杭州 · 智能卫浴科技", hero_brand_sys: "智能卫浴系统",
    hero_sub: "为现代家居与酒店提供智能马桶、智能便盖及精密卫浴科技。",
    hero_btn_explore: "探索产品", hero_btn_3d: "3D 体验 S90", hero_compare_link: "型号对比 →",
    hero_stat_1: "始于 2007", hero_stat_2: "6款核心产品", hero_stat_3: "3大系统分类", hero_stat_4: "3D 交互体验",
    ds_eyebrow: "设计理念", ds_title: "设计<br>改变<br>一切",
    ds_body: "智能卫浴科技应当是自然、安静且完美融入空间的。它不应是生硬的插件，而应是美好日常中自然而然的一部分。",
    ds_btn: "发现系列", ds_stat_1_lbl: "品牌创立", ds_stat_2_lbl: "产品系统", ds_stat_3_lbl: "交互展示",
    exp_eyebrow: "西马智能体验",
    exp_t0: "卓越<br>舒适", exp_b0: "座圈加热、温水洗护及多档调节，为每个清晨带来周全的舒适体验。",
    exp_t1: "私人定制<br>卫生", exp_b1: "精准洗护、喷嘴移动及水温控制，满足每位用户对洁净的细腻需求。",
    exp_t2: "更洁净的<br>日常", exp_b2: "喷嘴自洁与UV紫外线杀菌，在每次使用后自动维持洁净体验。",
    exp_t3: "清爽<br>卫浴空间", exp_b3: "自动除臭、非接触感应及集成夜灯，让卫浴空间时刻保持清新、静谧。",
    feat_eyebrow: "核心技术", feat_title: "前沿科技功能",
    feat_t1: "自动化功能", feat_d1: "自动开闭、自动冲水及非接触式操作，减少接触，提升日常体验。",
    feat_t2: "个性化清洗", feat_d2: "水温、水压、喷嘴位置及喷雾模式，完全根据用户需求调节。",
    feat_t3: "极致卫生", feat_d3: "紫外线杀菌与喷嘴自洁技术，在每次使用后自动运行。",
    feat_t4: "远程与侧边控制", feat_d4: "无线遥控、侧边面板及APP控制，为所有型号提供十足灵活性。",
    feat_t5: "节能模式", feat_d5: "节能模式在空闲期间降低能耗，且不影响使用舒适度。",
    feat_t6: "夜灯与除臭", feat_d6: "LED夜灯与内置除臭系统，让卫浴空间时刻保持功能完备与清新。",
    prod_eyebrow: "产品系列", prod_title: "探索您的理想西马系统",
    prod_f_all: "全部", prod_f_seats: "智能便盖", prod_f_wall: "壁挂式", prod_f_floor: "落地式", prod_f_flag: "旗舰款",
    v3d_eyebrow: "3D 交互展示", v3d_title: "在3D中探索<br>产品细节",
    v3d_desc: "直接从目录中旋转、缩放和检查每个型号。将GLB模型文件放入/models/文件夹后即可自动加载。",
    v3d_btn: "开启S90 3D体验", v3d_note: "在/models/文件夹中的GLB文件可启用完整的交互旋转",
    cmp_eyebrow: "型号对比", cmp_title: "寻找适合您的系统", cmp_th_spec: "技术规格",
    fac_eyebrow: "工匠精神", fac_title: "专为项目<br>交付而设计",
    fac_quote: "每个组件都经过精密设计，在住宅、酒店及商业环境中表现安静、可靠、精准。",
    fac_t1: "品质检测", fac_d1: "每台机器在出厂前都经过严格的性能测试。",
    fac_t2: "ISO 标准", fac_d2: "生产制造符合国际质量标准。",
    fac_t3: "工程供应", fac_d3: "为住宅开发商、酒店及样板房提供供应。",
    fac_t4: "杭州制造", fac_d4: "总部与生产基地位于中国浙江省。",
    con_eyebrow: "联系我们", con_title: "联系西马",
    con_l_name: "姓名", con_l_comp: "公司", con_l_email: "邮箱", con_l_type: "咨询类型", con_l_msg: "留言",
    con_p_name: "您的姓名", con_p_comp: "公司名称", con_p_email: "your@email.com", con_p_msg: "描述您的项目或咨询内容...",
    con_opt_0: "选择产品或服务", con_opt_1: "智能便盖 (W3 / W5)", con_opt_2: "壁挂式马桶 (I6 / I7)", con_opt_3: "落地式马桶 (S90 / P90)", con_opt_4: "项目 / 大宗采购", con_opt_5: "技术支持", con_opt_6: "常规咨询",
    con_btn_send: "发送咨询", con_btn_sent: "咨询已发送",
    con_wc_t: "微信商务", con_wc_s: "扫码联系", con_wc_sub: "通过微信直接联系西马外贸团队，获取产品咨询与项目报价。",
    con_d_p: "电话", con_d_e: "邮箱", con_d_l: "地址", con_d_loc: "中国 · 浙江 · 杭州",
    footer_tag: "适用于住宅、酒店及工程环境的智能卫浴系统。",
    footer_c1: "产品系列", footer_c2: "核心技术", footer_c3: "联系我们",
    modal_specs: "技术规格", modal_btn_3d: "开启3D模型", modal_btn_con: "联系西马",
    v_load: "正在加载3D模型", v_fall: "3D模型预览 — 添加GLB文件后将加载交互模型。", v_btn_ar: "自动旋转", v_btn_reset: "重置视角"
  }
};

// ─── DATA ──────────────────────────────────────────────────────
const P = {
  W3:  { model:'W3',  cat:{en:'Smart Toilet Seat', zh:'智能便盖'},               img:'pics/smart_toilet_seat.png',  desc:{en:'Compact intelligent seat system with heated comfort and precision washing.', zh:'紧凑型智能便盖系统，具备座圈加热与精准清洗功能。'},                      features:{en:['Rear Wash','Front Wash','Heated Seat','UV Sterilization','Night Light'], zh:['臀部清洗','女性清洗','座圈加热','UV紫外线杀菌','夜灯功能']},                  gallery:['pics/smart_toilet_seat.png','pics/smart_toilet_bidet.png','pics/smart_toilet_bidet2.png','pics/detailed_shot.png','pics/close-up.png'],       specs:{Category:{en:'Smart Toilet Seat',zh:'智能便盖'},Size:'490×380×155 mm',Voltage:'220V / 50Hz','Heated Seat':{en:'Yes',zh:'是'},'UV Sterilization':{en:'Yes',zh:'是'},Dryer:'—','Auto Open/Close':'—','Auto Deodorization':'—','Remote Control':{en:'Side Panel',zh:'侧边面板'},'ECO Mode':{en:'Yes',zh:'是'},'Night Light':{en:'Yes',zh:'是'},'3D Model':{en:'Ready',zh:'已就绪'}} },
  W5:  { model:'W5',  cat:{en:'Smart Bidet System', zh:'智能冲洗系统'},              img:'pics/smart_toilet_bidet.png', desc:{en:'Slim smart bidet seat with instant heating, ECO mode, and self-cleaning nozzle.', zh:'超薄智能便盖，具备即热技术、节能模式及喷嘴自洁功能。'},               features:{en:['Instant Heating','ECO Mode','Self-Cleaning Nozzle','Side Control','Night Light'], zh:['即热技术','节能模式','喷嘴自洁','侧边控制','夜灯功能']},         gallery:['pics/smart_toilet_bidet.png','pics/smart_toilet_bidet2.png','pics/smart_toilet_seat.png','pics/detailed_shot.png','pics/close-up.png'],      specs:{Category:{en:'Smart Bidet System',zh:'智能冲洗系统'},Size:'510×395×160 mm',Voltage:'220V / 50Hz','Heated Seat':{en:'Yes',zh:'是'},'UV Sterilization':'—',Dryer:{en:'Yes',zh:'是'},'Auto Open/Close':'—','Auto Deodorization':'—','Remote Control':{en:'Side Panel + Wireless',zh:'侧板 + 无线遥控'},'ECO Mode':{en:'Yes',zh:'是'},'Night Light':{en:'Yes',zh:'是'},'3D Model':{en:'Ready',zh:'已就绪'}} },
  I6:  { model:'I6',  cat:{en:'Wall-Mounted Intelligent Toilet', zh:'壁挂式智能马桶'}, img:'pics/wall_mounted.png',       desc:{en:'Space-saving intelligent toilet for modern architectural bathrooms.', zh:'节省空间的智能马桶，专为现代建筑感卫浴设计。'},                            features:{en:['Dryer','Heated Seat','Remote Control','ECO Mode','SPA Wash'], zh:['暖风烘干','座圈加热','无线遥控','节能模式','SPA按摩洗']},                             gallery:['pics/wall_mounted.png','pics/wall_mounted_seat.png','pics/bathroom1.png','pics/luxuty_hotel.png'],                                           specs:{Category:{en:'Wall-Mounted',zh:'壁挂式'},Size:'530×380×390 mm',Voltage:'220V / 50Hz','Heated Seat':{en:'Yes',zh:'是'},'UV Sterilization':'—',Dryer:{en:'Yes',zh:'是'},'Auto Open/Close':'—','Auto Deodorization':'—','Remote Control':{en:'Wireless',zh:'无线遥控'},'ECO Mode':{en:'Yes',zh:'是'},'Night Light':'—','3D Model':{en:'Ready',zh:'已就绪'}} },
  I7:  { model:'I7',  cat:{en:'Wall-Mounted Intelligent Toilet', zh:'壁挂式智能马桶'}, img:'pics/wall_mounted_seat.png',  desc:{en:'Wall-hung intelligent toilet with complete hygiene and comfort functions.', zh:'壁挂式智能马桶，具备完整的卫生与舒适功能。'},                      features:{en:['Rear Wash','Front Wash','Self-Cleaning Nozzle','Remote Control','ECO Mode'], zh:['臀部清洗','女性清洗','喷嘴自洁','无线遥控','节能模式']},              gallery:['pics/wall_mounted_seat.png','pics/wall_mounted.png','pics/bathroom1.png','pics/luxuty_hotel.png'],                                           specs:{Category:{en:'Wall-Mounted',zh:'壁挂式'},Size:'550×385×395 mm',Voltage:'220V / 50Hz','Heated Seat':{en:'Yes',zh:'是'},'UV Sterilization':'—',Dryer:{en:'Yes',zh:'是'},'Auto Open/Close':'—','Auto Deodorization':{en:'Yes',zh:'是'},'Remote Control':{en:'Wireless + App',zh:'无线遥控 + APP'},'ECO Mode':{en:'Yes',zh:'是'},'Night Light':{en:'Yes',zh:'是'},'3D Model':{en:'Ready',zh:'已就绪'}} },
  S90: { model:'S90', cat:{en:'Floor-Mounted Intelligent Toilet', zh:'落地式智能马桶'},img:'pics/floor_mounted.png',      desc:{en:'Flagship integrated smart toilet with automation, sterilization, and advanced comfort.', zh:'旗舰级一体化智能马桶，集自动化、杀菌与极致舒适于一体。'},        features:{en:['Auto Open / Close','UV Sterilization','Auto Deodorization','Night Light','Remote Control'], zh:['自动开闭','UV紫外线杀菌','自动除臭','夜灯功能','无线遥控']},gallery:['pics/floor_mounted.png','pics/toilet_closed.png','pics/close-up.png','pics/water_steam_detailed.png'],                                    specs:{Category:{en:'Floor-Mounted (Flagship)',zh:'落地式（旗舰款）'},Size:'720×390×460 mm',Voltage:'220V / 50Hz','Heated Seat':{en:'Yes',zh:'是'},'UV Sterilization':{en:'Yes',zh:'是'},Dryer:{en:'Yes',zh:'是'},'Auto Open/Close':{en:'Yes',zh:'是'},'Auto Deodorization':{en:'Yes',zh:'是'},'Remote Control':{en:'Wireless + App',zh:'无线遥控 + APP'},'ECO Mode':{en:'Yes',zh:'是'},'Night Light':{en:'Yes',zh:'是'},'3D Model':{en:'Ready',zh:'已就绪'}} },
  P90: { model:'P90', cat:{en:'Floor-Mounted Intelligent Toilet', zh:'落地式智能马桶'},img:'pics/toilet_closed.png',      desc:{en:'Integrated intelligent toilet with automatic lid, dryer, heated seat, and ECO mode.', zh:'一体化智能马桶，具备自动翻盖、烘干、座圈加热及节能模式。'},         features:{en:['Auto Open / Close','Heated Seat','Dryer','ECO Mode','Knob Control'], zh:['自动开闭','座圈加热','暖风烘干','节能模式','旋钮控制']},                      gallery:['pics/toilet_closed.png','pics/floor_mounted.png','pics/close-up.png','pics/water_steam_detailed.png'],                                       specs:{Category:{en:'Floor-Mounted',zh:'落地式'},Size:'700×385×455 mm',Voltage:'220V / 50Hz','Heated Seat':{en:'Yes',zh:'是'},'UV Sterilization':'—',Dryer:{en:'Yes',zh:'是'},'Auto Open/Close':{en:'Yes',zh:'是'},'Auto Deodorization':'—','Remote Control':{en:'Knob Panel',zh:'旋钮面板'},'ECO Mode':{en:'Yes',zh:'是'},'Night Light':'—','3D Model':{en:'Ready',zh:'已就绪'}} }
};
const SPEC_KEYS = {
  Category: {en:'Category', zh:'产品类别'},
  Size: {en:'Size', zh:'外形尺寸'},
  Voltage: {en:'Voltage', zh:'额定电压'},
  'Heated Seat': {en:'Heated Seat', zh:'座圈加热'},
  'UV Sterilization': {en:'UV Sterilization', zh:'UV 紫外线杀菌'},
  Dryer: {en:'Dryer', zh:'暖风烘干'},
  'Auto Open/Close': {en:'Auto Open/Close', zh:'自动开闭'},
  'Auto Deodorization': {en:'Auto Deodorization', zh:'自动除臭'},
  'Remote Control': {en:'Remote Control', zh:'操控方式'},
  'ECO Mode': {en:'ECO Mode', zh:'节能模式'},
  'Night Light': {en:'Night Light', zh:'夜灯功能'},
  '3D Model': {en:'3D Model', zh:'3D 模型'}
};

let curLang = localStorage.getItem('comai_lang') || 'en';

function setLang(lang) {
  curLang = lang;
  localStorage.setItem('comai_lang', lang);
  
  // Update static elements
  document.querySelectorAll('[data-t]').forEach(el => {
    const key = el.dataset.t;
    if (T[lang] && T[lang][key]) el.innerHTML = T[lang][key];
  });

  // Update placeholders
  document.querySelectorAll('[data-tp]').forEach(el => {
    const key = el.dataset.tp;
    if (T[lang] && T[lang][key]) el.placeholder = T[lang][key];
  });

  // Update language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('on', btn.getAttribute('onclick').includes(`'${lang}'`));
  });

  // Re-render comparison table if it exists
  renderCmp();
  
  // Update document title and lang
  document.documentElement.lang = lang;
}

// ─── HERO ANIMATION ────────────────────────────────────────────
(function initHero() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = window.innerWidth <= 768;
  const hasGSAP = typeof gsap !== 'undefined';

  function showAll() {
    const els = ['#nav','#heroEyebrow','#heroBrandCn','#heroComai','#heroBrandSys',
                 '#heroSub','#heroCtas','#heroLink','#heroBrandRow','#heroImgWrap','#heroLabel'];
    els.forEach(sel => {
      const el = document.querySelector(sel);
      if (!el) return;
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    const bg = document.getElementById('heroBgImg');
    if (bg) { bg.style.opacity = '1'; bg.style.transform = 'scale(1)'; }
  }

  if (prefersReduced || !hasGSAP) {
    showAll();
    return;
  }

  gsap.set('#heroBgImg',     { opacity:0, scale:1.08 });
  gsap.set('#nav',           { opacity:0, y:-18 });
  gsap.set('#heroEyebrow',   { opacity:0, y:14 });
  gsap.set('#heroBrandCn',   { opacity:0, y:10 });
  gsap.set('#heroComai',     { opacity:0, y:64, letterSpacing:'0.12em' });
  gsap.set('#heroBrandSys',  { opacity:0, y:14 });
  gsap.set('#heroSub',       { opacity:0, y:14 });
  gsap.set('#heroCtas',      { opacity:0, y:14 });
  gsap.set('#heroLink',      { opacity:0, y:10 });
  gsap.set('#heroBrandRow',  { opacity:0, y:10 });
  gsap.set('#heroImgWrap',   { opacity:0, y:44, scale:0.96, clipPath:'inset(14% 10% 10% 10% round 22px)' });
  gsap.set('#heroLabel',     { opacity:0, y:22, scale:0.95 });

  const tl = gsap.timeline({ delay: 0.08 });

  tl.to('#heroBgImg', { opacity: 1, scale: 1, duration: 2.0, ease: 'power2.out' }, 0);
  tl.to('#heroBgOverlay', { background: 'linear-gradient(105deg,rgba(10,8,6,.88) 0%,rgba(10,8,6,.66) 48%,rgba(10,8,6,.34) 100%),linear-gradient(to top,rgba(6,5,4,.68) 0%,transparent 40%)', duration: 1.8, ease: 'power1.inOut' }, 0.4);
  tl.to('#nav', { opacity: 1, y: 0, duration: 0.72, ease: 'power2.out' }, 0.3);
  tl.to('#heroEyebrow', { opacity: 1, y: 0, duration: 0.68, ease: 'power2.out' }, 0.5);
  tl.to('#heroBrandCn', { opacity: 1, y: 0, duration: 0.62, ease: 'power2.out' }, 0.65);
  tl.to('#heroComai', { opacity: 1, y: 0, letterSpacing: '0.07em', duration: 0.95, ease: 'power3.out' }, 0.8);
  tl.to('#heroBrandSys', { opacity: 1, y: 0, duration: 0.62, ease: 'power2.out' }, 1.05);
  tl.to('#heroSub', { opacity: 1, y: 0, duration: 0.62, ease: 'power2.out' }, 1.2);
  tl.to('#heroCtas', { opacity: 1, y: 0, duration: 0.55, ease: 'power2.out' }, 1.35);
  tl.to('#heroLink', { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, 1.5);
  tl.to('#heroBrandRow', { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, 1.58);
  tl.to('#heroImgWrap', { opacity: 1, y: 0, scale: 1, clipPath: 'inset(0% 0% 0% 0% round 0px)', duration: 1.15, ease: 'power3.out' }, 0.9);
  tl.fromTo('#heroImg', { scale: 1.06, opacity: 0.7 }, { scale: 1.0, opacity: 1, duration: 0.72, ease: 'power2.out' }, 1.35);
  tl.to('#heroLabel', { opacity: 1, y: 0, scale: 1, duration: 0.62, ease: 'power2.out' }, 1.58);

  tl.add(() => {
    gsap.to('#heroImgWrap', { y: -7, duration: 6.5, repeat: -1, yoyo: true, ease: 'sine.inOut' });
    gsap.to('#heroImg', { scale: 1.016, duration: 8, repeat: -1, yoyo: true, ease: 'sine.inOut' });
    gsap.to('#heroLabel', { y: -4, duration: 6.5, repeat: -1, yoyo: true, ease: 'sine.inOut' });
  }, '+=0.3');

  if (!isMobile) {
    let mx = 0, my = 0, cx = 0, cy = 0, rafP = null;
    document.addEventListener('mousemove', e => {
      mx = (e.clientX / window.innerWidth - 0.5) * 2;
      my = (e.clientY / window.innerHeight - 0.5) * 2;
    });
    function parallaxTick() {
      cx += (mx - cx) * 0.055; cy += (my - cy) * 0.055;
      const heroBg = document.getElementById('heroBgImg');
      const heroWrap = document.getElementById('heroImgWrap');
      const heroLeft = document.getElementById('heroLeft');
      if (heroBg) gsap.set(heroBg, { x: -cx * 6, y: -cy * 4 });
      if (heroWrap) gsap.set(heroWrap, { x: cx * 9 });
      if (heroLeft) gsap.set(heroLeft, { x: cx * 2, y: cy * 1.5 });
      rafP = requestAnimationFrame(parallaxTick);
    }
    parallaxTick();
  }
})();

window.addEventListener('scroll', () => {
  const sy = window.scrollY;
  const nav = document.getElementById('nav');
  if(nav) nav.classList.toggle('scrolled', sy > 60);

  if (typeof gsap === 'undefined') return;

  const hero = document.getElementById('hero');
  if (hero && sy < hero.offsetHeight) {
    const prog = sy / hero.offsetHeight;
    const bg = document.getElementById('heroBgImg');
    if (bg) gsap.set(bg, { yPercent: prog * 8 });
    const left = document.getElementById('heroLeft');
    if (left) gsap.set(left, { opacity: 1 - prog * 0.38 });
  }
}, {passive:true});

window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('loader').classList.add('out'), 480);
  setLang(curLang);
});

(function(){
  const box = document.getElementById('wcQrBox');
  const img = new Image();
  img.onload = () => { box.appendChild(img); };
  img.onerror = () => {
    box.innerHTML = `<div class="wc-qr-placeholder">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="3" y="3" width="14" height="14" rx="1" stroke="#B9A997" stroke-width="1.2"/>
        <rect x="6" y="6" width="8" height="8" fill="#B9A997" opacity=".4"/>
        <rect x="23" y="3" width="14" height="14" rx="1" stroke="#B9A997" stroke-width="1.2"/>
        <rect x="26" y="6" width="8" height="8" fill="#B9A997" opacity=".4"/>
        <rect x="3" y="23" width="14" height="14" rx="1" stroke="#B9A997" stroke-width="1.2"/>
        <rect x="6" y="26" width="8" height="8" fill="#B9A997" opacity=".4"/>
        <rect x="23" y="23" width="4" height="4" fill="#B9A997" opacity=".35"/>
        <rect x="29" y="23" width="4" height="4" fill="#B9A997" opacity=".35"/>
        <rect x="33" y="29" width="4" height="4" fill="#B9A997" opacity=".35"/>
        <rect x="23" y="33" width="4" height="4" fill="#B9A997" opacity=".35"/>
        <rect x="29" y="29" width="4" height="4" fill="#B9A997" opacity=".35"/>
      </svg>
      <span>WeChat QR Code</span>
      <span style="color:#A7A29A">Replace with official COMAI QR</span>
    </div>`;
  };
  img.src = 'pics/wechat_qr.png';
  img.alt = 'COMAI WeChat QR';
  img.style.cssText = 'width:90px;height:90px;object-fit:contain';
})();

const ro = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('on'); ro.unobserve(e.target) } });
}, {threshold:.09});
document.querySelectorAll('.rv,.rv-l,.rv-r').forEach(el => ro.observe(el));

let expCurrent = 0;
const expPanels = document.querySelectorAll('.exp-panel');
const expSlides = document.querySelectorAll('.exp-img-slide');
const expDotEls = document.querySelectorAll('.ep-dot');
const expNumEl  = document.getElementById('expNum');

function goExp(idx) {
  if (idx === expCurrent) return;
  expPanels[expCurrent].classList.remove('active');
  expSlides[expCurrent].classList.remove('active');
  expDotEls[expCurrent].classList.remove('on');
  expCurrent = idx;
  expPanels[expCurrent].classList.add('active');
  expSlides[expCurrent].classList.add('active');
  expDotEls[expCurrent].classList.add('on');
  if(expNumEl) expNumEl.textContent = String(idx + 1).padStart(2,'0');
}

if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined' && window.innerWidth > 768) {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.create({
    trigger: '#experience',
    start: 'top top',
    end: '+=300%',
    pin: true,
    pinSpacing: true,
    onUpdate: (self) => {
      const idx = Math.min(Math.floor(self.progress * 4), 3);
      if (idx !== expCurrent) goExp(idx);
    }
  });
} else {
  const expSection = document.getElementById('experience');
  if (expSection && window.innerWidth <= 768) {
    expPanels.forEach(p => { p.style.opacity = '1'; p.style.transform = 'none'; p.style.position = 'relative'; });
    expSlides.forEach(s => { s.style.position = 'relative'; s.style.height = '56vw'; s.style.opacity = '1'; });
    const expRight = document.getElementById('expRight');
    if(expRight) expRight.style.height = 'auto';
  }
}

function fp(cat, btn) {
  document.querySelectorAll('.fb').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');
  document.querySelectorAll('.prod-card').forEach(c => {
    c.style.display = (cat==='all' || c.dataset.cat.includes(cat)) ? '' : 'none';
  });
}

function openDetail(id) {
  const p = P[id]; if(!p) return;
  const thumbs = p.gallery.map((s,i) =>
    `<div class="m-thumb${i===0?' on':''}" onclick="swImg(this,'${s}')"><img src="${s}" loading="lazy"></div>`
  ).join('');
  const feats = p.features[curLang].map(f => `<span class="m-feat">${f}</span>`).join('');
  const specs = Object.entries(p.specs).map(([k,v]) => {
    const label = SPEC_KEYS[k] ? SPEC_KEYS[k][curLang] : k;
    const value = typeof v === 'object' ? v[curLang] : v;
    return `<div class="spec"><span class="sk">${label}</span><span class="sv">${value}</span></div>`;
  }).join('');
  
  document.getElementById('mGrid').innerHTML = `
    <div>
      <img id="mHero" class="m-img-main" src="${p.img}" alt="${p.model}">
      <div class="m-gallery">${thumbs}</div>
    </div>
    <div>
      <div class="m-model">${p.model}</div>
      <div class="m-cat">${p.cat[curLang]}</div>
      <p class="m-desc">${p.desc[curLang]}</p>
      <div class="m-feats">${feats}</div>
      <div class="m-specs"><h5>${T[curLang].modal_specs}</h5>${specs}</div>
      <div class="m-actions">
        <button class="btn btn-dark btn-sm" onclick="closeDetail();openViewer('${id}')">${T[curLang].modal_btn_3d}</button>
        <button class="btn btn-ghost-l btn-sm" onclick="closeDetail();document.getElementById('contact').scrollIntoView({behavior:'smooth'})">${T[curLang].modal_btn_con}</button>
      </div>
    </div>`;
  document.getElementById('mSticky').innerHTML =
    `<button class="btn btn-dark btn-sm" onclick="closeDetail();openViewer('${id}')">${curLang==='en'?'Open 3D':'开启3D'}</button>
     <button class="btn btn-ghost-l btn-sm" onclick="closeDetail();document.getElementById('contact').scrollIntoView({behavior:'smooth'})">${curLang==='en'?'Contact':'联系我们'}</button>`;
  const modal = document.getElementById('detail-modal'), sheet = document.getElementById('mSheet');
  modal.style.display = 'flex'; document.body.style.overflow = 'hidden';
  requestAnimationFrame(() => requestAnimationFrame(() => sheet.classList.add('open')));
}
function swImg(t, src) {
  document.querySelectorAll('.m-thumb').forEach(x => x.classList.remove('on'));
  t.classList.add('on');
  const hero = document.getElementById('mHero');
  if(hero) hero.src = src;
}
function closeDetail() {
  const s = document.getElementById('mSheet');
  if(s) s.classList.remove('open');
  setTimeout(() => { document.getElementById('detail-modal').style.display='none'; document.body.style.overflow='' }, 430);
}

let mvEl = null;
function openViewer(id) {
  const p = P[id]; if(!p) return;
  const modal    = document.getElementById('viewer-modal');
  const body     = document.getElementById('vBody');
  const loader   = document.getElementById('vLoader');
  const fallback = document.getElementById('vFallback');
  const hotspots = document.getElementById('vHotspots');
  document.getElementById('vTitle').textContent = `${p.model} · ${p.cat[curLang]}`;
  document.getElementById('vCat').textContent = p.cat[curLang];
  if(mvEl){ mvEl.remove(); mvEl = null; }
  loader.style.display   = 'flex'; loader.style.flexDirection = 'column';
  fallback.style.display = 'none';
  hotspots.style.display = 'none';
  modal.classList.add('open'); document.body.style.overflow = 'hidden';
  const mv = document.createElement('model-viewer');
  mv.setAttribute('src', `/models/${id.toLowerCase()}.glb`);
  mv.setAttribute('poster', p.img);
  mv.setAttribute('camera-controls','');
  mv.setAttribute('auto-rotate','');
  mv.setAttribute('shadow-intensity','1');
  mv.setAttribute('environment-image','neutral');
  mv.setAttribute('exposure','0.85');
  mv.setAttribute('alt', `${p.model} 3D model`);
  mv.style.cssText = 'width:100%;height:100%;background:var(--soft-black);--poster-color:transparent;display:none';
  mv.addEventListener('load', () => { loader.style.display='none'; mv.style.display='block'; showHotspots(); });
  mv.addEventListener('error', () => { loader.style.display='none'; mv.style.display='none'; document.getElementById('vFallImg').src=p.img; fallback.style.display='flex'; showHotspots(); });
  body.appendChild(mv); mvEl = mv;
  setTimeout(() => {
    if(loader.style.display !== 'none'){
      loader.style.display='none'; document.getElementById('vFallImg').src=p.img; fallback.style.display='flex'; showHotspots();
    }
  }, 3000);
}
function showHotspots() {
  const hs = document.getElementById('vHotspots');
  if(hs) {
    hs.style.display='flex';
    hs.querySelectorAll('.vh').forEach((el,i) => setTimeout(() => { el.style.opacity='1'; el.style.transition='opacity .4s'; }, i*80));
  }
}
function closeViewer() {
  const modal = document.getElementById('viewer-modal');
  if(modal) modal.classList.remove('open');
  document.body.style.overflow = '';
  if(mvEl){ mvEl.remove(); mvEl=null; }
}
function toggleAR(btn) {
  if(!mvEl) return;
  const on = mvEl.hasAttribute('auto-rotate');
  if(on){ mvEl.removeAttribute('auto-rotate'); btn.classList.remove('on'); }
  else { mvEl.setAttribute('auto-rotate',''); btn.classList.add('on'); }
}
function resetView() { if(mvEl && mvEl.resetTurntableRotation) mvEl.resetTurntableRotation(); }

let active = ['W3','I6','S90'];
function toggleCmp(btn) {
  const m = btn.dataset.m;
  if(btn.classList.contains('on')){
    if(active.length <= 2) return;
    active = active.filter(x => x !== m);
    btn.classList.remove('on');
  } else {
    if(active.length >= 3){ const r=active.shift(); const prev=document.querySelector(`[data-m="${r}"]`); if(prev) prev.classList.remove('on'); }
    active.push(m); btn.classList.add('on');
  }
  renderCmp();
}
function renderCmp() {
  const cols = active.map(id => P[id]);
  const ths = cols.map(p =>
    `<th><div class="cmp-hd"><img src="${p.img}" alt="${p.model}"><div class="m">${p.model}</div><div class="c">${p.cat[curLang].split(' ')[0]}</div></div></th>`
  ).join('');
  const rows = Object.keys(SPEC_KEYS).map(k => {
    const label = SPEC_KEYS[k][curLang];
    const cells = cols.map(p => {
      const v = p.specs[k]||'—';
      const value = typeof v === 'object' ? v[curLang] : v;
      const cls = (value==='Yes'||value==='是') ? 'cmp-yes' : (value==='—') ? 'cmp-no' : '';
      return `<td class="${cls}">${value}</td>`;
    }).join('');
    return `<tr><td>${label}</td>${cells}</tr>`;
  }).join('');
  const wrap = document.getElementById('cmpWrap');
  if(wrap) wrap.innerHTML = `<table class="cmp-tbl"><thead><tr><th>${T[curLang]?T[curLang].cmp_th_spec:'Specification'}</th>${ths}</tr></thead><tbody>${rows}</tbody></table>`;
}

function handleForm(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = T[curLang].con_btn_sent; btn.style.background='var(--sage)'; btn.style.color='white'; btn.disabled=true;
  setTimeout(() => { btn.textContent = T[curLang].con_btn_send; btn.style.background=''; btn.style.color=''; btn.disabled=false; e.target.reset(); }, 3500);
}

const nls = document.querySelectorAll('#mobnav a');
const nro = new IntersectionObserver(e => e.forEach(en => {
  if(en.isIntersecting) nls.forEach(a => a.classList.toggle('active', a.getAttribute('href')==='#'+en.target.id));
}), {threshold:.35});
['hero','products','viewer3d','comparison','contact'].forEach(id => { const el=document.getElementById(id); if(el) nro.observe(el); });

document.addEventListener('keydown', e => { if(e.key==='Escape'){ closeDetail(); closeViewer(); } });
</script>"""

new_content = re.sub(r'<script>\n// ─── DATA ───[\s\S]*?</script>', new_script, content)

with open('demo cards/toiletery demo/comai_catalogue.html', 'w', encoding='utf-8') as f:
    f.write(new_content)
