# STEEZ. — Digital Business Card Build Prompt
## Complete specification for 4 individual team member cards

---

## OBJECTIVE

Build **4 separate, self-contained HTML files** — one per team member — that function as mobile-first digital business cards for STEEZ. Each card is a single `.html` file with all CSS and JavaScript inline (no external dependencies except Google Fonts and the QR library). Customers scan a QR code and land on the card, where they can view all contact details and reach out directly.

---

## HOW TO USE THIS PROMPT

2. **Replace profile photo URLs** — use a direct image URL (Unsplash, hosted CDN, etc.) or base64-encode the photo.
3. **Run the prompt once per person**, swapping in that person's data block.
4. Each output is a single `.html` file named `[firstname_lastname].html`.

---

## BRAND SYSTEM

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--bg-dark` | `#04342C` | Page background dark, hero overlay |
| `--brand` | `#0F6E56` | Primary accent, active states, borders |
| `--mint` | `#5DCAA5` | Highlight, hover glow, online dot |
| `--cream` | `#FAF9F5` | Primary text on dark backgrounds |
| `--white` | `#FFFFFF` | QR code frame background, card surfaces |
| `--card` | `rgba(255,255,255,0.05)` | Glass card background |
| `--bdr` | `rgba(255,255,255,0.09)` | Default border |
| `--bdr2` | `rgba(255,255,255,0.16)` | Stronger border |
| `--txt-m` | `rgba(250,249,245,0.58)` | Muted text |
| `--txt-d` | `rgba(250,249,245,0.30)` | Dimmed labels |
| `--green-d` | `rgba(93,202,165,0.13)` | Mint-tinted card bg |
| `--brand-d` | `rgba(15,110,86,0.15)` | Brand-tinted card bg |

### Logo / Wordmark

```
STEEZ.
```
- Font: `Helvetica Neue`, Arial, sans-serif — weight **900**
- "STEEZ" in `#04342C` (on light) or `#FAF9F5` (on dark)
- The period "." is always in `#0F6E56` (brand teal) or `#5DCAA5` (on dark)
- The wordmark appears in the loader screen and the footer

### Typography

- **Display / headings:** `Cormorant Garamond` (Google Fonts) — weights 500, 600, 700
- **Body / UI:** `DM Sans` (Google Fonts) — opsz 9..40, weights 300, 400, 500, 600
- **Chinese text:** `Noto Sans SC` (Google Fonts) — weights 300, 400, 500, 600
- Apply `html.zh body { font-family: var(--font-cn) }` for Chinese mode

---

## REQUIRED FEATURES (ALL 4 CARDS)

Every card must include **all** of the following sections and behaviors, in this order:

### 1. Loader Screen
- Full-screen overlay (`position: fixed; inset: 0; z-index: 9999`) on `--bg-dark` background
- STEEZ. wordmark centered (see brand system above)
- Animated progress bar beneath: gradient from `--brand` → `--mint`, 1s fill animation
- Fades out (`opacity: 0; visibility: hidden`) ~900ms after `window load`

### 2. Language Toggle Bar (sticky top)
- Sticky to the top (`position: sticky; top: 0; z-index: 100`)
- `backdrop-filter: blur(20px)` + `background: rgba(4,52,44,0.88)` + bottom border `--bdr`
- Pill-shaped toggle: **EN** | **中文**
- Active button: background `--brand`, color white
- Inactive: color `--txt-m`
- All bilingual strings switch instantly on toggle via `html.zh` class on `<html>`

### 3. Hero Section
- Centered layout, `padding: 48px 24px 40px`
- **Avatar ring:** 110×110px circle, `padding: 2.5px`, gradient border `linear-gradient(135deg, --brand, --mint, --brand)`, pulsing glow animation alternating between brand and mint shadows
- **Profile photo:** `<img>` inside the ring with `onerror` fallback to SVG silhouette
- **Online dot:** 18×18px circle, color `--mint`, bottom-right of avatar, glowing box-shadow
- **Name:** `Cormorant Garamond` 700, ~38px, fade-up animation 0.9s
- **Chinese name:** smaller block beneath, color `--mint`, only visible in ZH mode
- **Job title:** uppercase, letter-spaced, color `--brand` (teal), 0.18s delay animation
- **Company:** `steez.digital`, color `--txt-m`
- **Tagline:** 13.5px, weight 300, line-height 1.7, bilingual, 0.30s delay animation
- Thin horizontal divider line at bottom of hero (gradient left-transparent-right)

### 4. Quick Connect Grid
- Section label: "Quick Connect" / "快速联系" in gold-style accent color (`--mint`) uppercased
- 2-column button grid (`grid-template-columns: 1fr 1fr; gap: 8px`)
- **Save Contact** button — full width, primary style (gradient bg `--brand` → darker), saves `.vcf` vCard
- **Call** — phone link (`tel:`)
- **Email** — mailto link
- **WeChat** — opens bottom-sheet modal with QR code
- **WhatsApp** — `wa.me` link (if applicable, else omit)
- **LinkedIn** — external link
- **Instagram** — external link
- **Location** — maps link
- Button active state: `transform: scale(.95)`, slight bg brighten
- Primary button has `box-shadow: 0 4px 22px rgba(15,110,86,0.30)`

### 5. About Me
- Section label: "About Me" / "个人简介"
- Glass card (`background: var(--card); border: 1px solid var(--bdr); border-radius: 18px; backdrop-filter: blur(10px)`)
- 14px body text, weight 300, line-height 1.75, color `--txt-m`
- Bilingual (EN + ZH paragraphs)
- Scroll-triggered fade-up animation via `IntersectionObserver`

### 6. Skills / Expertise Chips
- Section label: "Skills" / "专业技能"
- Flex-wrapped pill chips (`border-radius: 999px; padding: 6px 14px`)
- Background `--card`, border `--bdr`, text `--txt-m`
- **Stagger animation:** each chip fades in 55ms after the previous one, triggered by scroll intersection
- Separate EN and ZH chip sets (toggle visibility with `html.zh`)

### 7. Languages
- Section label: "Languages" / "语言能力"
- Glass card containing a list of languages
- Each row: flag emoji | language name + level | 5-dot proficiency indicator
- Active dots: `--brand` teal color; inactive: `--bdr2`; half-filled dots supported
- Bilingual labels

### 8. WeChat Section (inline)
- Section label: "WeChat · 微信"
- Glass card, text-centered
- QR code rendered on a `<canvas>` element (use the `drawQR()` placeholder function from the demo or integrate `qrcode.js` via CDN: `https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js`)
- **The QR code must encode the WeChat deep link:** `weixin://dl/chat?[WECHAT_ID]` or the profile URL if available
- White `#ffffff` QR frame with rounded corners, animated gradient glow border
- WeChat ID displayed below QR in 17px bold
- "Copy WeChat ID" button
- **WeChat Bottom-Sheet Modal:** triggered from Quick Connect and sticky bar; same QR + copy button inside a bottom-sheet that slides up (`transform: translateY(100%)` → `none`), dark overlay backdrop with blur

### 9. Contact Details List
- In the CTA section (see §11), render all contacts as tappable rows:
  - Icon block (36×36px rounded square) + label (10px uppercase) + value + "Copy" pill button
  - Phone row: copy pill copies raw number
  - Email row: tappable → mailto, copy pill copies address
  - WeChat row: tappable → opens modal, copy pill copies WeChat ID
  - LinkedIn row: tappable → opens profile
  - Instagram row: tappable → opens profile
  - Website row: tappable → opens steez.digital
- Icon colors: blue-tinted for phone/LinkedIn/website (`--brand-d` bg, `--brand` icon), green-tinted for WeChat/WhatsApp/Instagram (`--green-d` bg, `--mint` icon)

### 10. Office Location
- Section label: "Office Location" / "办公位置"
- Glass card with location icon (44×44px, `--brand-d` bg)
- City + country, address line
- "Open in Maps" link (Google Maps)

### 11. CTA Section ("Let's Connect")
- `Cormorant Garamond` headline 700 ~32px
- Subtext paragraph, bilingual
- Contact details list (see §9)
- "Save Contact" primary button (full width)
- "Visit our Website" gold-style secondary button → `https://steez.digital`

### 12. Footer
- Name · Chinese Name
- `steez.digital`
- "Digital business card by steez.digital" (EN) / "数字名片由 steez.digital 打造" (ZH)

### 13. Sticky Bottom Navigation Bar
- `position: fixed; bottom: 0`, max-width 430px, centered
- `backdrop-filter: blur(24px)`, `background: rgba(4,52,44,0.92)`, top border `--bdr`
- `padding-bottom: calc(8px + env(safe-area-inset-bottom))` for iPhone notch
- 4 equal columns: **Save** | **Call** | **WeChat** | **Email**
- Each: icon + label, tap scales to 0.88 and colors to `--mint`
- 90px spacer `div.page-end` before footer so content isn't hidden behind bar

### 14. Toast Notification
- Fixed pill, centered, `bottom: 100px`, `backdrop-filter: blur(12px)`
- Appears on copy actions: "Copied!" / "已复制！"
- Auto-hides after 2.2 seconds

### 15. Scroll Animations
- `IntersectionObserver` at threshold 0.1, rootMargin `0px 0px -40px 0px`
- All major sections have class `anim` → `opacity: 0; transform: translateY(20px)` → `.in` class adds `opacity: 1; transform: none`
- Transition: `0.6s cubic-bezier(.16,1,.3,1)`
- Stagger delay classes: `d1` (+0.06s), `d2` (+0.12s)

### 16. vCard / Save Contact
- Triggers download of a `.vcf` file (VCard 3.0)
- Includes: FN, N, NICKNAME (Chinese name), ORG, TITLE, TEL, EMAIL, URL (LinkedIn), ADR, NOTE (WeChat + Instagram + Website)
- Toast fires after download

---

## LAYOUT & TECHNICAL SPECS

```
max-width: 430px   (mobile-optimized)
margin: 0 auto
background: linear-gradient(180deg, #04342C 0%, #052E26 50%, #04342C 100%)
```

**Page ambient glow (::before pseudo fixed):**
```css
background:
  radial-gradient(ellipse 70% 50% at 20% 10%, rgba(15,110,86,0.10) 0%, transparent 60%),
  radial-gradient(ellipse 60% 60% at 80% 85%, rgba(93,202,165,0.08) 0%, transparent 60%);
```

**Border radius tokens:**
- `--r-sm: 10px` · `--r-md: 14px` · `--r-lg: 18px` · `--r-xl: 22px` · `--r-pill: 999px`

**Meta tags required:**
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
<meta name="theme-color" content="#04342C">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
```

---

## TEAM MEMBER DATA BLOCKS

> ⚠️ Fill in every `[PLACEHOLDER]` before running. Repeat the prompt once per person.

---

### PERSON 1

```
FILE NAME:          Sabii_Tymofii.html
PAGE TITLE:         Tymothy Sabii · Digital Card

--- IDENTITY ---
Full Name (EN):     Tymothy Sabii
Full Name (ZH):     蒂穆飞
Job Title (EN):     CMO
Job Title (ZH):     行销长
Company:            STEEZ Digital
Company (ZH):       STEEZ Digital

--- BIO ---
Bio (EN):           I bridge Chinese manufacturers and European buyers with digital tools
                    that make communication seamless. I guide STEEZ clients through building
                    their international digital presence — from a QR-linked business card
                    to a full product catalogue — speaking the language of the Western buyer
                    from day one.

Bio (ZH):           我帮助中国制造商与欧洲买家建立顺畅的数字化沟通桥梁。
                    我引导 STEEZ 客户打造国际化数字形象——从二维码名片到完整产品目录，
                    从第一天起就以西方买家熟悉的方式进行沟通。

--- SKILLS ---
Skills EN:          European Market Development, International Trade Relations,
                    English-first Client Communication, LinkedIn Business Outreach,
                    Digital Solution Pitching, Product Positioning for Export,
                    Long-cycle Deal Management, Cross-border Account Growth

Skills ZH:          欧洲市场开发, 国际贸易关系, 英语客户沟通,
                    领英商务开发, 数字解决方案提案, 出口产品定位,
                    长周期谈判管理, 跨境客户增长

--- LANGUAGES ---
Language 1:         English - Professional - 5/5 dots
Language 2:         Chinese — Intermediate — 3/5 dots
Language 3:         Russian — Professional — 5/5 dots

--- CONTACT ---
Phone:              13115747950
Phone (display):    +86 131 1574 7950
Email:              steez.workspace@gmail.com
WeChat ID:          tim_sab
Website:            https://steez.digital

--- LOCATION ---
City (EN):          Hangzhou
City (ZH):          杭州
Address (EN):       浙江省杭州市上城区赞成中心西楼1005室-01
Address (ZH):       浙江省杭州市上城区赞成中心西楼1005室-01
https://m.amap.com/poi/detail?__p=B0FFKCY8QL%2C30.214084860534136%2C120.17840936779973%2C%E8%B5%9E%E6%88%90%E4%B8%AD%E5%BF%83%E8%B5%9E%E6%88%90%E4%B8%AD%E5%BF%83%E8%A5%BF%E6%A5%BC%2C%E4%B8%8A%E5%9F%8E%E5%8C%BA%E5%A4%8D%E5%B9%BF%E7%9B%B4%E8%A1%97%E4%B8%8E%E4%B9%8B%E6%B1%9F%E8%B7%AF%E4%BA%A4%E5%8F%89%E5%8F%A3%E5%8C%9780%E7%B1%B3&src=app_share&userRelationToken=4a71cd7255c811f1a44400163e33bd0f1&share_type=url&share_from=poi_poi&share_from_type=AJX&share_bizParams=%7B%22poiid%22%3A%22B0FFKCY8QL%22%2C%22trigger%22%3A%22click%22%2C%22is_rank%22%3A0%7D&share_lastClickSpm=amap.27854080.tipBar_RenderPOITipBar.shareBtn&share_bid=sgi91knjfcmpmfaa7j95fca6e4fgaaga34cb9be&poiid=B0FFKCY8QL

--- PHOTO ---
Photo URL:          '/Users/tunch/Documents/STEEZ/steez/digi_cards_personal/PICS/Screenshot 2026-05-22 at 6.11.02 PM.png'
Photo alt text:     Timothy Sabii

---

### PERSON 2

```
FILE NAME:          Mahdiar.html
PAGE TITLE:         Matthew Maghsoudi · Digital Card

--- IDENTITY ---
Full Name (EN):     Matthew Maghsoudi
Full Name (ZH):     马修
Job Title (EN):     CEO
Job Title (ZH):     总经理
Company:            STEEZ Digital
Company (ZH):       STEEZ Digital

--- BIO ---
Bio (EN):           I help Chinese manufacturers and exporters build a digital presence that
                    international buyers trust and remember. At STEEZ, I work with clients
                    to design their digital business cards, product catalogues, and QR display
                    packages — turning a single trade show scan into a lasting business relationship.

Bio (ZH):           我帮助中国制造商和出口商建立专业的数字形象，让国际买家留下深刻印象。
                    在 STEEZ，我与客户合作设计数字名片、产品目录和二维码展示套装，
                    将展会上的一次扫码转化为长期稳定的合作关系。

--- SKILLS ---
Skills EN:          Client Acquisition, Trade Show Outreach, Digital Solutions Consulting,
                    New Account Development, Product Demo & Pitch, Proposal Writing,
                    WeChat Business Development, Long-term Account Nurturing

Skills ZH:          客户开发, 展会推广, 数字解决方案咨询, 新客户拓展,
                    产品演示与提案, 商务方案撰写, 微信商务拓展, 长期客户维护

--- LANGUAGES ---
Language 1:         English - Native - 5/5 dots
Language 2:         Chinese — Intermediate — 3/5 dots
Language 3:         Russian — Professional — 5/5 dots
Language 4:         Farsi   - Native       - 5/5 dots
Language 4:         Turkish - Intermediate - 3/5 dots

--- CONTACT ---
Phone:              +86 19818401505
Email:              mahdiarmag@gmail.com
WeChat ID:          steezm
Website:            https://steez.digital

--- LOCATION ---
City (EN):          Hangzhou
City (ZH):          杭州
Address (EN):       浙江省杭州市上城区赞成中心西楼1005室-01
Address (ZH):       浙江省杭州市上城区赞成中心西楼1005室-01
https://m.amap.com/poi/detail?__p=B0FFKCY8QL%2C30.214084860534136%2C120.17840936779973%2C%E8%B5%9E%E6%88%90%E4%B8%AD%E5%BF%83%E8%B5%9E%E6%88%90%E4%B8%AD%E5%BF%83%E8%A5%BF%E6%A5%BC%2C%E4%B8%8A%E5%9F%8E%E5%8C%BA%E5%A4%8D%E5%B9%BF%E7%9B%B4%E8%A1%97%E4%B8%8E%E4%B9%8B%E6%B1%9F%E8%B7%AF%E4%BA%A4%E5%8F%89%E5%8F%A3%E5%8C%9780%E7%B1%B3&src=app_share&userRelationToken=4a71cd7255c811f1a44400163e33bd0f1&share_type=url&share_from=poi_poi&share_from_type=AJX&share_bizParams=%7B%22poiid%22%3A%22B0FFKCY8QL%22%2C%22trigger%22%3A%22click%22%2C%22is_rank%22%3A0%7D&share_lastClickSpm=amap.27854080.tipBar_RenderPOITipBar.shareBtn&share_bid=sgi91knjfcmpmfaa7j95fca6e4fgaaga34cb9be&poiid=B0FFKCY8QL

--- PHOTO ---
Photo URL:          '/Users/tunch/Documents/STEEZ/steez/digi_cards_personal/PICS/Weixin Image_20260522181432_726_48.png'
Photo alt text:     [Full Name]


### PERSON 3

```
FILE NAME:          Stas.html
PAGE TITLE:         Stas Digay · Digital Card

--- IDENTITY ---
Full Name (EN):     Stas Digay
Full Name (ZH):     斯坦
Job Title (EN):     COO
Job Title (ZH):     首席营运官
Company:            STEEZ Digital
Company (ZH):       STEEZ Digital

--- BIO ---
Bio (EN):           I focus on growing STEEZ's presence across Russian-speaking markets
                    and Southeast Asia — two regions where relationships and face-to-face
                    trust are everything. I help exporters localize their digital cards and
                    catalogues so every buyer feels spoken to directly, whether in Moscow,
                    Ho Chi Minh City, or Jakarta.

Bio (ZH):           我专注于拓展 STEEZ 在俄语区和东南亚市场的业务——这两个地区最看重
                    人际关系与面对面的信任。我帮助出口商将数字名片和产品目录本地化，
                    无论是在莫斯科、胡志明市还是雅加达，都能让每位买家感受到专属的沟通体验。

--- SKILLS ---
Skills EN:          Russia & CIS Market Development, Southeast Asia Business Relations,
                    Market Localization Strategy, Multilingual Sales Approach,
                    Trade Fair Networking & Follow-up, Regional Partnership Building,
                    Client Onboarding, Referral & Repeat Business Growth

Skills ZH:          俄语区市场开发, 东南亚商业关系, 市场本地化策略,
                    多语言销售方法, 展会社交与后续跟进, 区域合作伙伴建立,
                    客户入驻与培训, 转介绍及复购增长

--- LANGUAGES ---
Language 1:         English - Native - 5/5 dots
Language 2:         Chinese — Intermediate — 3/5 dots
Language 3:         Russian — Professional — 5/5 dots

--- CONTACT ---
Phone:              +86 197 3050 3328
Email:              digasts1@gmail.com
WeChat ID:          _bulochka
Website:            https://steez.digital

--- LOCATION ---
City (EN):          Hangzhou
City (ZH):          杭州
Address (EN):       浙江省杭州市上城区赞成中心西楼1005室-01
Address (ZH):       浙江省杭州市上城区赞成中心西楼1005室-01
https://m.amap.com/poi/detail?__p=B0FFKCY8QL%2C30.214084860534136%2C120.17840936779973%2C%E8%B5%9E%E6%88%90%E4%B8%AD%E5%BF%83%E8%B5%9E%E6%88%90%E4%B8%AD%E5%BF%83%E8%A5%BF%E6%A5%BC%2C%E4%B8%8A%E5%9F%8E%E5%8C%BA%E5%A4%8D%E5%B9%BF%E7%9B%B4%E8%A1%97%E4%B8%8E%E4%B9%8B%E6%B1%9F%E8%B7%AF%E4%BA%A4%E5%8F%89%E5%8F%A3%E5%8C%9780%E7%B1%B3&src=app_share&userRelationToken=4a71cd7255c811f1a44400163e33bd0f1&share_type=url&share_from=poi_poi&share_from_type=AJX&share_bizParams=%7B%22poiid%22%3A%22B0FFKCY8QL%22%2C%22trigger%22%3A%22click%22%2C%22is_rank%22%3A0%7D&share_lastClickSpm=amap.27854080.tipBar_RenderPOITipBar.shareBtn&share_bid=sgi91knjfcmpmfaa7j95fca6e4fgaaga34cb9be&poiid=B0FFKCY8QL

--- PHOTO ---
Photo URL:          '/Users/tunch/Documents/STEEZ/steez/digi_cards_personal/PICS/Screenshot 2026-05-22 at 6.11.07 PM.png'
Photo alt text:     [Full Name]

---

### PERSON 4

```
TITLE NAME:         Adam.html
PAGE TITLE:         Adam Baha · Digital Card

--- IDENTITY ---
Full Name (EN):     Adam Baha
Full Name (ZH):     许安
Job Title (EN):     CTO
Job Title (ZH):     首席技术官
Company:            STEEZ Digital
Company (ZH):       STEEZ Digital

--- BIO ---
Bio (EN):           I specialize in connecting STEEZ's digital solutions with businesses
                    across the Gulf, MENA, and African markets. With a deep understanding
                    of Arabic business culture, I help exporters create bilingual digital
                    touchpoints that open doors and build trust from the very first scan.

Bio (ZH):           我专注于将 STEEZ 数字解决方案推广至海湾、中东及非洲市场。
                    凭借对阿拉伯商业文化的深入理解，我帮助出口商打造双语数字名片，
                    从第一次扫码就开始建立信任与商机。

--- SKILLS ---
Skills EN:          MENA Market Development, Arabic Business Relations, B2B Trade Sales,
                    Cross-Cultural Negotiation, Bilingual Client Presentations,
                    Gulf Buyer Relations, Trade Show Strategy, Account Management

Skills ZH:          中东北非市场开发, 阿拉伯商业关系, B2B贸易销售,
                    跨文化商务谈判, 双语客户演示, 海湾买家关系,
                    展会策略, 客户账户管理


--- LANGUAGES ---
Language 1:         English - Native - 5/5 dots
Language 2:         Chinese — Intermediate — 3/5 dots
Language 3:         Arabic  — Native — 5/5 dots


--- CONTACT ---
Phone:              +86 197 3050 3328
Email:              digasts1@gmail.com
WeChat ID:          yxngsterx
Website:            https://steez.digital

--- LOCATION ---
City (EN):          Hangzhou
City (ZH):          杭州
Address (EN):       浙江省杭州市上城区赞成中心西楼1005室-01
Address (ZH):       浙江省杭州市上城区赞成中心西楼1005室-01
https://m.amap.com/poi/detail?__p=B0FFKCY8QL%2C30.214084860534136%2C120.17840936779973%2C%E8%B5%9E%E6%88%90%E4%B8%AD%E5%BF%83%E8%B5%9E%E6%88%90%E4%B8%AD%E5%BF%83%E8%A5%BF%E6%A5%BC%2C%E4%B8%8A%E5%9F%8E%E5%8C%BA%E5%A4%8D%E5%B9%BF%E7%9B%B4%E8%A1%97%E4%B8%8E%E4%B9%8B%E6%B1%9F%E8%B7%AF%E4%BA%A4%E5%8F%89%E5%8F%A3%E5%8C%9780%E7%B1%B3&src=app_share&userRelationToken=4a71cd7255c811f1a44400163e33bd0f1&share_type=url&share_from=poi_poi&share_from_type=AJX&share_bizParams=%7B%22poiid%22%3A%22B0FFKCY8QL%22%2C%22trigger%22%3A%22click%22%2C%22is_rank%22%3A0%7D&share_lastClickSpm=amap.27854080.tipBar_RenderPOITipBar.shareBtn&share_bid=sgi91knjfcmpmfaa7j95fca6e4fgaaga34cb9be&poiid=B0FFKCY8QL

--- PHOTO ---
Photo URL:          '/Users/tunch/Documents/STEEZ/steez/digi_cards_personal/PICS/Weixin Image_20260522183200_730_48.png'
Photo alt text:     [Full Name]

---

## QR CODE IMPLEMENTATION

Use **qrcode.js** from CDN:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>
```

Generate the WeChat QR on page load:

```js
new QRCode(document.getElementById("wechat-qr"), {
  text: "weixin://dl/chat?[WECHAT_ID]",
  width: 160,
  height: 160,
  colorDark: "#04342C",
  colorLight: "#ffffff",
  correctLevel: QRCode.CorrectLevel.H
});
```

Render the same QR into both the inline section and the bottom-sheet modal. If `weixin://` deep link doesn't work for your use case, encode the WeChat ID as plain text instead.

---

## ANIMATIONS REFERENCE

```css
/* Entrance */
@keyframes fd { from { opacity:0; transform:translateY(-16px) } to { opacity:1; transform:none } }
@keyframes fu { from { opacity:0; transform:translateY(16px)  } to { opacity:1; transform:none } }

/* Avatar ring glow */
@keyframes ringGlow {
  0%,100% { box-shadow: 0 0 18px rgba(15,110,86,.35), 0 0 36px rgba(15,110,86,.12); }
  50%      { box-shadow: 0 0 24px rgba(93,202,165,.40), 0 0 48px rgba(93,202,165,.15); }
}

/* QR border glow */
@keyframes qrGlow { 0%,100% { opacity:.5 } 50% { opacity:1 } }

/* Loading bar */
@keyframes barSlide { from { transform:scaleX(0) } to { transform:scaleX(1) } }
```

---

## FINAL OUTPUT CHECKLIST

Before delivering each HTML file, verify:

- [ ] Loads in < 1.5s on mobile (no external images except profile photo)
- [ ] All text switches correctly between EN and ZH
- [ ] WeChat modal opens and QR renders
- [ ] "Save Contact" downloads a valid `.vcf` file
- [ ] "Copy" pills show green checkmark and toast fires
- [ ] Sticky bar sits above iPhone safe area (env safe-area-inset-bottom)
- [ ] Avatar fallback SVG shows if photo URL fails
- [ ] All external links open in `target="_blank" rel="noopener"`
- [ ] Scroll animations trigger correctly on first viewport and as you scroll
- [ ] Chip stagger animation works on both EN and ZH tab switch
- [ ] Page max-width 430px, centered, works on both mobile and desktop browser

---

## EXAMPLE AI INSTRUCTION (copy-paste ready)

> **"Build a single self-contained HTML file (all CSS and JS inline) for a mobile digital business card（also should work on laptops) with the following spec. Do not use any external stylesheets or scripts except Google Fonts and qrcode.js from cdnjs. Follow every section in the STEEZ brand prompt exactly. Use the data for [PERSON NAME] from the data block below. Output only the complete HTML — no explanation."**
>
> [paste the Brand System section]
> [paste the Required Features list]
> [paste the filled-in data block for that person]

---

*Last updated: May 2026 · steez.digital*
