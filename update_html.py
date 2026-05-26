import re

with open('demo cards/toiletery demo/comai_catalogue.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Add lang switcher to Nav
nav_replacement = """  <ul class="nav-links">
    <li><a href="#products" data-t="nav_products">Products</a></li>
    <li><a href="#viewer3d" data-t="nav_3d">3D Viewer</a></li>
    <li><a href="#comparison" data-t="nav_compare">Compare</a></li>
    <li><a href="#features" data-t="nav_tech">Technology</a></li>
    <li><a href="#contact" data-t="nav_contact">Contact</a></li>
  </ul>
  <div style="display:flex;align-items:center">
    <div class="lang-switch">
      <div class="lang-btn on" onclick="setLang('en')">EN</div>
      <div class="lang-btn" onclick="setLang('zh')">CN</div>
    </div>
    <a href="#contact" class="nav-cta" data-t="nav_cta">Contact Us</a>
  </div>"""

content = re.sub(r'  <ul class="nav-links">[\s\S]*?<a href="#contact" class="nav-cta">Contact Us</a>', nav_replacement, content)

# Mob Nav
mobnav_replacement = """  <ul>
    <li><a href="#hero" class="active">
      <svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg><span data-t="mob_home">Home</span></a></li>
    <li><a href="#products">
      <svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg><span data-t="mob_products">Products</span></a></li>
    <li><a href="#viewer3d">
      <svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg><span data-t="mob_3d">3D</span></a></li>
    <li><a href="#comparison">
      <svg viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg><span data-t="mob_compare">Compare</span></a></li>
    <li><a href="#contact">
      <svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg><span data-t="mob_contact">Contact</span></a></li>
  </ul>"""
content = re.sub(r'  <ul>\n    <li><a href="#hero" class="active">[\s\S]*?</ul>', mobnav_replacement, content)

# Hero
replacements = [
  ('<span class="eyebrow hero-eyebrow label-light" id="heroEyebrow">Est. 2007 · Hangzhou · Smart Bathroom Technology</span>', '<span class="eyebrow hero-eyebrow label-light" id="heroEyebrow" data-t="hero_eyebrow">Est. 2007 · Hangzhou · Smart Bathroom Technology</span>'),
  ('<span class="hero-brand-sys" id="heroBrandSys">Smart Bathroom Systems</span>', '<span class="hero-brand-sys" id="heroBrandSys" data-t="hero_brand_sys">Smart Bathroom Systems</span>'),
  ('<p class="hero-sub" id="heroSub">Smart toilets, bidet seats, and precision hygiene technology for modern residential and hospitality bathrooms.</p>', '<p class="hero-sub" id="heroSub" data-t="hero_sub">Smart toilets, bidet seats, and precision hygiene technology for modern residential and hospitality bathrooms.</p>'),
  ('<a href="#products" class="btn btn-primary">Explore Products</a>', '<a href="#products" class="btn btn-primary" data-t="hero_btn_explore">Explore Products</a>'),
  ('<button class="btn btn-outline" onclick="openViewer(\'S90\')">View S90 in 3D</button>', '<button class="btn btn-outline" onclick="openViewer(\'S90\')" data-t="hero_btn_3d">View S90 in 3D</button>'),
  ('<button class="hero-link" id="heroLink" onclick="document.getElementById(\'comparison\').scrollIntoView({behavior:\'smooth\'})">Compare Models →</button>', '<button class="hero-link" id="heroLink" onclick="document.getElementById(\'comparison\').scrollIntoView({behavior:\'smooth\'})" data-t="hero_compare_link">Compare Models →</button>'),
  ('<span class="hbr-item">Established 2007</span>', '<span class="hbr-item" data-t="hero_stat_1">Established 2007</span>'),
  ('<span class="hbr-item">6 Product Models</span>', '<span class="hbr-item" data-t="hero_stat_2">6 Product Models</span>'),
  ('<span class="hbr-item">3 System Categories</span>', '<span class="hbr-item" data-t="hero_stat_3">3 System Categories</span>'),
  ('<span class="hbr-item">3D Interactive</span>', '<span class="hbr-item" data-t="hero_stat_4">3D Interactive</span>'),
  
  # Design Story
  ('<span class="eyebrow">Design Philosophy</span>', '<span class="eyebrow" data-t="ds_eyebrow">Design Philosophy</span>'),
  ('<h2 class="ds-title">Design<br>Changes<br>Everything</h2>', '<h2 class="ds-title" data-t="ds_title">Design<br>Changes<br>Everything</h2>'),
  ('<p class="ds-body">Intelligent bathroom technology should feel effortless, quiet, and beautifully integrated into the space. Not a gadget bolted onto a room — a natural part of a better daily routine.</p>', '<p class="ds-body" data-t="ds_body">Intelligent bathroom technology should feel effortless, quiet, and beautifully integrated into the space. Not a gadget bolted onto a room — a natural part of a better daily routine.</p>'),
  ('<a href="#products" class="btn btn-dark">Discover the Collection</a>', '<a href="#products" class="btn btn-dark" data-t="ds_btn">Discover the Collection</a>'),
  ('<div class="ds-stat-lbl">Established</div>', '<div class="ds-stat-lbl" data-t="ds_stat_1_lbl">Established</div>'),
  ('<div class="ds-stat-lbl">Product Systems</div>', '<div class="ds-stat-lbl" data-t="ds_stat_2_lbl">Product Systems</div>'),
  ('<div class="ds-stat-lbl">Interactive</div>', '<div class="ds-stat-lbl" data-t="ds_stat_3_lbl">Interactive</div>'),
  
  # Experience
  ('<div class="exp-eyebrow">The COMAI Experience</div>', '<div class="exp-eyebrow" data-t="exp_eyebrow">The COMAI Experience</div>'),
  ('<h2 class="exp-title">Elevated<br>Comfort</h2>', '<h2 class="exp-title" data-t="exp_t0">Elevated<br>Comfort</h2>'),
  ('<p class="exp-body">Heated seat, warm water, and adjustable settings create a more comfortable daily routine — every morning, every time.</p>', '<p class="exp-body" data-t="exp_b0">Heated seat, warm water, and adjustable settings create a more comfortable daily routine — every morning, every time.</p>'),
  ('<h2 class="exp-title">Personalized<br>Hygiene</h2>', '<h2 class="exp-title" data-t="exp_t1">Personalized<br>Hygiene</h2>'),
  ('<p class="exp-body">Precision washing, nozzle movement, and temperature control help each user find their preferred clean.</p>', '<p class="exp-body" data-t="exp_b1">Precision washing, nozzle movement, and temperature control help each user find their preferred clean.</p>'),
  ('<h2 class="exp-title">A Cleaner<br>Routine</h2>', '<h2 class="exp-title" data-t="exp_t2">A Cleaner<br>Routine</h2>'),
  ('<p class="exp-body">Self-cleaning nozzle and UV sterilization maintain a cleaner experience after every use, automatically.</p>', '<p class="exp-body" data-t="exp_b2">Self-cleaning nozzle and UV sterilization maintain a cleaner experience after every use, automatically.</p>'),
  ('<h2 class="exp-title">A Cleaner<br>Space</h2>', '<h2 class="exp-title" data-t="exp_t3">A Cleaner<br>Space</h2>'),
  ('<p class="exp-body">Auto deodorization, touchless functions, and integrated lighting keep the bathroom fresh, calm, and composed.</p>', '<p class="exp-body" data-t="exp_b3">Auto deodorization, touchless functions, and integrated lighting keep the bathroom fresh, calm, and composed.</p>'),
  
  # Features
  ('<span class="eyebrow">Technology</span>', '<span class="eyebrow" data-t="feat_eyebrow">Technology</span>'),
  ('<h2 class="h2 h2-dark mt-3">Next-Level Features</h2>', '<h2 class="h2 h2-dark mt-3" data-t="feat_title">Next-Level Features</h2>'),
  ('<div class="feat-name">Automated Functionality</div>', '<div class="feat-name" data-t="feat_t1">Automated Functionality</div>'),
  ('<div class="feat-desc">Auto lid, auto flush, and touchless operation reduce contact and elevate the daily experience.</div>', '<div class="feat-desc" data-t="feat_d1">Auto lid, auto flush, and touchless operation reduce contact and elevate the daily experience.</div>'),
  ('<div class="feat-name">Personalized Bidet</div>', '<div class="feat-name" data-t="feat_t2">Personalized Bidet</div>'),
  ('<div class="feat-desc">Temperature, pressure, nozzle position, and spray mode — fully adjustable per user.</div>', '<div class="feat-desc" data-t="feat_d2">Temperature, pressure, nozzle position, and spray mode — fully adjustable per user.</div>'),
  ('<div class="feat-name">Ultra-Hygienic</div>', '<div class="feat-name" data-t="feat_t3">Ultra-Hygienic</div>'),
  ('<div class="feat-desc">UV sterilization and self-cleaning nozzle technology work automatically after every use.</div>', '<div class="feat-desc" data-t="feat_d3">UV sterilization and self-cleaning nozzle technology work automatically after every use.</div>'),
  ('<div class="feat-name">Remote &amp; Side Control</div>', '<div class="feat-name" data-t="feat_t4">Remote &amp; Side Control</div>'),
  ('<div class="feat-desc">Wireless remote, side panel, and app control give full flexibility across all models.</div>', '<div class="feat-desc" data-t="feat_d4">Wireless remote, side panel, and app control give full flexibility across all models.</div>'),
  ('<div class="feat-name">ECO Mode</div>', '<div class="feat-name" data-t="feat_t5">ECO Mode</div>'),
  ('<div class="feat-desc">Energy-saving mode reduces power use during idle periods without affecting comfort.</div>', '<div class="feat-desc" data-t="feat_d5">Energy-saving mode reduces power use during idle periods without affecting comfort.</div>'),
  ('<div class="feat-name">Night Light &amp; Deodorizer</div>', '<div class="feat-name" data-t="feat_t6">Night Light &amp; Deodorizer</div>'),
  ('<div class="feat-desc">LED night light and built-in deodorizer keep the bathroom functional and fresh at all hours.</div>', '<div class="feat-desc" data-t="feat_d6">LED night light and built-in deodorizer keep the bathroom functional and fresh at all hours.</div>'),
  
  # Products
  ('<span class="eyebrow">Product Range</span>', '<span class="eyebrow" data-t="prod_eyebrow">Product Range</span>'),
  ('<h2 class="h2 h2-dark mt-3">Discover Your Ideal COMAI System</h2>', '<h2 class="h2 h2-dark mt-3" data-t="prod_title">Discover Your Ideal COMAI System</h2>'),
  ('<button class="fb on" onclick="fp(\'all\',this)">All</button>', '<button class="fb on" onclick="fp(\'all\',this)" data-t="prod_f_all">All</button>'),
  ('<button class="fb" onclick="fp(\'Smart Seats\',this)">Smart Seats</button>', '<button class="fb" onclick="fp(\'Smart Seats\',this)" data-t="prod_f_seats">Smart Seats</button>'),
  ('<button class="fb" onclick="fp(\'Wall-Mounted\',this)">Wall-Mounted</button>', '<button class="fb" onclick="fp(\'Wall-Mounted\',this)" data-t="prod_f_wall">Wall-Mounted</button>'),
  ('<button class="fb" onclick="fp(\'Floor-Mounted\',this)">Floor-Mounted</button>', '<button class="fb" onclick="fp(\'Floor-Mounted\',this)" data-t="prod_f_floor">Floor-Mounted</button>'),
  ('<button class="fb" onclick="fp(\'Flagship\',this)">Flagship</button>', '<button class="fb" onclick="fp(\'Flagship\',this)" data-t="prod_f_flag">Flagship</button>'),
  ('<span class="flagship-mark-txt">Flagship</span>', '<span class="flagship-mark-txt" data-t="prod_f_flag">Flagship</span>'),
  
  # 3D Viewer
  ('<span class="eyebrow">Interactive 3D</span>', '<span class="eyebrow" data-t="v3d_eyebrow">Interactive 3D</span>'),
  ('<h2 class="h2 h2-light mt-3">Explore the Details<br>in 3D</h2>', '<h2 class="h2 h2-light mt-3" data-t="v3d_title">Explore the Details<br>in 3D</h2>'),
  ('<p class="v3d-desc">Rotate, zoom, and inspect each model directly from the catalog. GLB model files load automatically when placed in the /models/ folder.</p>', '<p class="v3d-desc" data-t="v3d_desc">Rotate, zoom, and inspect each model directly from the catalog. GLB model files load automatically when placed in the /models/ folder.</p>'),
  ('<button class="btn btn-primary" onclick="openViewer(\'S90\')">Open S90 in 3D</button>', '<button class="btn btn-primary" onclick="openViewer(\'S90\')" data-t="v3d_btn">Open S90 in 3D</button>'),
  ('<a href="#comparison" class="btn btn-ghost-d">Compare Models</a>', '<a href="#comparison" class="btn btn-ghost-d" data-t="hero_compare_link">Compare Models →</a>'),
  ('<p class="v3d-note">GLB files in /models/ folder enable full interactive rotation</p>', '<p class="v3d-note" data-t="v3d_note">GLB files in /models/ folder enable full interactive rotation</p>'),
  
  # Comparison
  ('<span class="eyebrow">Model Comparison</span>', '<span class="eyebrow" data-t="cmp_eyebrow">Model Comparison</span>'),
  ('<h2 class="h2 h2-dark mt-3">Find the Right System</h2>', '<h2 class="h2 h2-dark mt-3" data-t="cmp_title">Find the Right System</h2>'),
  
  # Factory
  ('<span class="eyebrow">Craftsmanship</span>', '<span class="eyebrow" data-t="fac_eyebrow">Craftsmanship</span>'),
  ('<h2 class="h2 h2-light mt-3">Engineered for<br>Project Delivery</h2>', '<h2 class="h2 h2-light mt-3" data-t="fac_title">Engineered for<br>Project Delivery</h2>'),
  ('<p class="factory-quote">Every component engineered to perform quietly, reliably, and precisely — in residential, hospitality, and commercial environments.</p>', '<p class="factory-quote" data-t="fac_quote">Every component engineered to perform quietly, reliably, and precisely — in residential, hospitality, and commercial environments.</p>'),
  ('<h4>Quality Tested</h4>', '<h4 data-t="fac_t1">Quality Tested</h4>'),
  ('<p>Every unit undergoes performance testing before shipment.</p>', '<p data-t="fac_d1">Every unit undergoes performance testing before shipment.</p>'),
  ('<h4>ISO Standards</h4>', '<h4 data-t="fac_t2">ISO Standards</h4>'),
  ('<p>Manufacturing meets international quality standards.</p>', '<p data-t="fac_d2">Manufacturing meets international quality standards.</p>'),
  ('<h4>Project Supply</h4>', '<h4 data-t="fac_t3">Project Supply</h4>'),
  ('<p>For residential developers, hotels, and show apartments.</p>', '<p data-t="fac_d3">For residential developers, hotels, and show apartments.</p>'),
  ('<h4>Hangzhou Based</h4>', '<h4 data-t="fac_t4">Hangzhou Based</h4>'),
  ('<p>Headquarters and production in Zhejiang Province.</p>', '<p data-t="fac_d4">Headquarters and production in Zhejiang Province.</p>'),
  
  # Contact
  ('<span class="eyebrow">Get in Touch</span>', '<span class="eyebrow" data-t="con_eyebrow">Get in Touch</span>'),
  ('<h2 class="h2 h2-light mt-3">Contact COMAI</h2>', '<h2 class="h2 h2-light mt-3" data-t="con_title">Contact COMAI</h2>'),
  ('<label>Name</label>', '<label data-t="con_l_name">Name</label>'),
  ('<input type="text" placeholder="Your name" required>', '<input type="text" data-tp="con_p_name" placeholder="Your name" required>'),
  ('<label>Company</label>', '<label data-t="con_l_comp">Company</label>'),
  ('<input type="text" placeholder="Company name">', '<input type="text" data-tp="con_p_comp" placeholder="Company name">'),
  ('<label>Email</label>', '<label data-t="con_l_email">Email</label>'),
  ('<input type="email" placeholder="your@email.com" required>', '<input type="email" data-tp="con_p_email" placeholder="your@email.com" required>'),
  ('<label>Inquiry Type</label>', '<label data-t="con_l_type">Inquiry Type</label>'),
  ('<option value="">Select product or service</option>', '<option value="" data-t="con_opt_0">Select product or service</option>'),
  ('<option>Smart Toilet Seats (W3 / W5)</option>', '<option data-t="con_opt_1">Smart Toilet Seats (W3 / W5)</option>'),
  ('<option>Wall-Mounted Toilets (I6 / I7)</option>', '<option data-t="con_opt_2">Wall-Mounted Toilets (I6 / I7)</option>'),
  ('<option>Floor-Mounted Toilets (S90 / P90)</option>', '<option data-t="con_opt_3">Floor-Mounted Toilets (S90 / P90)</option>'),
  ('<option>Project / Bulk Order</option>', '<option data-t="con_opt_4">Project / Bulk Order</option>'),
  ('<option>Technical Support</option>', '<option data-t="con_opt_5">Technical Support</option>'),
  ('<option>General Inquiry</option>', '<option data-t="con_opt_6">General Inquiry</option>'),
  ('<label>Message</label>', '<label data-t="con_l_msg">Message</label>'),
  ('<textarea placeholder="Describe your project or inquiry..."></textarea>', '<textarea data-tp="con_p_msg" placeholder="Describe your project or inquiry..."></textarea>'),
  ('<button type="submit" class="btn btn-primary" style="width:100%;justify-content:center;border-radius:8px">Send Inquiry</button>', '<button type="submit" class="btn btn-primary" style="width:100%;justify-content:center;border-radius:8px" data-t="con_btn_send">Send Inquiry</button>'),
  
  ('<div class="wechat-card-title">WeChat Business</div>', '<div class="wechat-card-title" data-t="con_wc_t">WeChat Business</div>'),
  ('<div class="wc-caption mt-2">Scan to Connect</div>', '<div class="wc-caption mt-2" data-t="con_wc_s">Scan to Connect</div>'),
  ('<div class="wc-sub">Reach the COMAI export team directly via WeChat for product inquiries and project quotes.</div>', '<div class="wc-sub" data-t="con_wc_sub">Reach the COMAI export team directly via WeChat for product inquiries and project quotes.</div>'),
  
  ('<div class="cd-lbl">Phone</div>', '<div class="cd-lbl" data-t="con_d_p">Phone</div>'),
  ('<div class="cd-lbl">Email</div>', '<div class="cd-lbl" data-t="con_d_e">Email</div>'),
  ('<div class="cd-lbl">Location</div>', '<div class="cd-lbl" data-t="con_d_l">Location</div>'),
  ('<div class="cd-val">Hangzhou, Zhejiang, China</div>', '<div class="cd-val" data-t="con_d_loc">Hangzhou, Zhejiang, China</div>'),
  ('<div class="map-label">Hangzhou, Zhejiang, China</div>', '<div class="map-label" data-t="con_d_loc">Hangzhou, Zhejiang, China</div>'),
  
  # Footer
  ('<p class="footer-tagline">Smart bathroom systems for residential, hospitality, and project environments.</p>', '<p class="footer-tagline" data-t="footer_tag">Smart bathroom systems for residential, hospitality, and project environments.</p>'),
  ('<h5>Products</h5>', '<h5 data-t="footer_c1">Products</h5>'),
  ('<h5>Technology</h5>', '<h5 data-t="footer_c2">Technology</h5>'),
  ('<h5>Contact</h5>', '<h5 data-t="footer_c3">Contact</h5>'),
  
  # Modals
  ('<div class="v-loader-txt">Loading 3D Model</div>', '<div class="v-loader-txt" data-t="v_load">Loading 3D Model</div>'),
  ('<div class="v-fallback-note">3D model preview — interactive model will load once the GLB file is added.</div>', '<div class="v-fallback-note" data-t="v_fall">3D model preview — interactive model will load once the GLB file is added.</div>'),
  ('<button class="vc on" id="vcAR" onclick="toggleAR(this)">Auto Rotate</button>', '<button class="vc on" id="vcAR" onclick="toggleAR(this)" data-t="v_btn_ar">Auto Rotate</button>'),
  ('<button class="vc" onclick="resetView()">Reset View</button>', '<button class="vc" onclick="resetView()" data-t="v_btn_reset">Reset View</button>'),
  ('<a href="#contact" class="btn btn-stone btn-sm" onclick="closeViewer()">Contact COMAI</a>', '<a href="#contact" class="btn btn-stone btn-sm" onclick="closeViewer()" data-t="modal_btn_con">Contact COMAI</a>')
]

for old, new in replacements:
    content = content.replace(old, new)

# Products Grid static details and 3D buttons inside prod-actions
# Wait, product cards have dynamic content but also static buttons "Details" and "View in 3D"
content = re.sub(r'<button class="btn btn-ghost-l btn-sm" onclick="openDetail\(\'(.*?)\'\)">Details</button>', r'<button class="btn btn-ghost-l btn-sm" onclick="openDetail(\'\1\')" data-t="nav_products">Details</button>', content)
content = re.sub(r'<button class="btn btn-dark btn-sm" onclick="openViewer\(\'(.*?)\'\)">View in 3D</button>', r'<button class="btn btn-dark btn-sm" onclick="openViewer(\'\1\')" data-t="mob_3d">View in 3D</button>', content)
# I will use data-t="nav_products" for Details to reuse "Products" translation... no wait, I need specific translations for "Details" and "View in 3D"

with open('demo cards/toiletery demo/comai_catalogue.html', 'w', encoding='utf-8') as f:
    f.write(content)
