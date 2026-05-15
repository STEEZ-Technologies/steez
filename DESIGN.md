---
name: STEEZ (思智)
description: Marketing landing page for a Hangzhou-based digital services agency targeting Chinese manufacturers at international trade shows.

colors:
  # Core palette
  forest: "#04342C"
  off-white: "#FAF9F5"
  gold: "#E0A93A"
  mint: "#1D9E75"
  forest-mid: "#0F6E56"
  charcoal-deep: "#1A1A1A"
  white: "#FFFFFF"
  bg-dim: "#F0EEE8"

  # Semantic surface colors — dark sections (forest bg)
  dark-surface-card: "rgba(250, 249, 245, 0.05)"
  dark-surface-card-elevated: "rgba(250, 249, 245, 0.07)"
  dark-border: "rgba(250, 249, 245, 0.12)"
  dark-border-strong: "rgba(250, 249, 245, 0.15)"
  dark-divider: "rgba(250, 249, 245, 0.10)"
  dark-text-primary: "#FAF9F5"
  dark-text-secondary: "rgba(250, 249, 245, 0.70)"
  dark-text-muted: "rgba(250, 249, 245, 0.50)"
  dark-text-faint: "rgba(250, 249, 245, 0.45)"

  # Semantic surface colors — light sections (off-white bg)
  light-surface-card: "#FFFFFF"
  light-border: "rgba(4, 52, 44, 0.12)"
  light-border-strong: "rgba(4, 52, 44, 0.15)"
  light-divider: "rgba(4, 52, 44, 0.10)"
  light-text-primary: "#04342C"
  light-text-secondary: "rgba(4, 52, 44, 0.70)"
  light-text-muted: "rgba(4, 52, 44, 0.65)"
  light-text-faint: "rgba(4, 52, 44, 0.50)"

  # Featured / accent states
  featured-surface: "rgba(224, 169, 58, 0.07)"
  featured-border: "#E0A93A"
  featured-glow: "rgba(224, 169, 58, 0.18)"

  # Scrollbar
  scrollbar-track: "#F0EEE8"
  scrollbar-thumb: "rgba(15, 110, 86, 0.25)"
  scrollbar-thumb-hover: "rgba(15, 110, 86, 0.45)"

  # Selection
  selection-bg: "#1D9E75"
  selection-text: "#FAF9F5"

typography:
  # Hero display — viewport-spanning wordmark
  display:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 460px
    fontSizeClamp: "clamp(180px, 22vw, 460px)"
    fontWeight: "900"
    lineHeight: 0.85
    letterSpacing: "-0.04em"
    textTransform: uppercase

  # Section headings — all-caps above-the-fold titles
  heading-xl:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 112px
    fontSizeClamp: "clamp(2.8rem, 8vw, 7rem)"
    fontWeight: "900"
    lineHeight: 1
    letterSpacing: "-0.03em"
    textTransform: uppercase

  # Secondary section headings (Analytics, Numbers)
  heading-lg:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 80px
    fontSizeClamp: "clamp(2.5rem, 6vw, 5rem)"
    fontWeight: "900"
    lineHeight: 1
    letterSpacing: "-0.03em"
    textTransform: uppercase

  # Stat numerals
  stat:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 80px
    fontSizeClamp: "clamp(2.5rem, 6vw, 5rem)"
    fontWeight: "900"
    lineHeight: 1
    letterSpacing: "-0.04em"

  # Card headings
  heading-card:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 24px
    fontSizeClamp: "clamp(1.1rem, 1.8vw, 1.5rem)"
    fontWeight: "700"
    lineHeight: 1.15

  # Eyebrow / section number labels
  eyebrow:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 13.6px
    fontSizeClamp: "clamp(0.7rem, 1vw, 0.85rem)"
    fontWeight: "600"
    lineHeight: 1
    letterSpacing: "0.18em"
    textTransform: uppercase

  # Body copy
  body-lg:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 19.2px
    fontSizeClamp: "clamp(0.95rem, 1.4vw, 1.2rem)"
    fontWeight: "300"
    lineHeight: 1.65

  body-sm:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 15.2px
    fontSizeClamp: "clamp(0.82rem, 1.1vw, 0.95rem)"
    fontWeight: "300"
    lineHeight: 1.6

  # Navigation / button labels
  label-button:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 16px
    fontSizeClamp: "clamp(0.75rem, 1vw, 1rem)"
    fontWeight: "500"
    letterSpacing: "0.12em"
    textTransform: uppercase

  # Small card labels, metadata
  label-sm:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 14.08px
    fontSizeClamp: "clamp(0.75rem, 1vw, 0.88rem)"
    fontWeight: "600"
    letterSpacing: "0.10em"
    textTransform: uppercase

  # Chinese character text
  cn-text:
    fontFamily: "Noto Sans SC, Inter, sans-serif"
    letterSpacing: "0.04em"

  # Footer brand logotype
  footer-brand:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 28px
    fontWeight: "900"
    letterSpacing: "0.14em"

rounded:
  sm: 10px
  DEFAULT: 16px
  lg: 20px
  full: 9999px

spacing:
  unit: 8px
  section-x: "clamp(20px, 4vw, 40px)"
  section-y: "clamp(80px, 10vw, 160px)"
  content-max-width: 1280px
  content-max-width-narrow: 1100px
  section-heading-gap: "clamp(48px, 6vw, 80px)"
  card-gap: "clamp(16px, 2vw, 24px)"
  card-padding: "clamp(24px, 3vw, 36px)"
  card-padding-lg: "clamp(28px, 3.5vw, 44px)"
  icon-container: 44px
  sticky-stack-radius: 16px

elevation:
  bizcard-dark: "0 20px 60px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.04)"
  bizcard-light: "0 20px 60px rgba(0,0,0,0.30), inset 0 1px 0 rgba(255,255,255,0.60)"
  bizcard-drop: "drop-shadow(0 30px 80px rgba(224,169,58,0.18))"
  featured-glow-blur: "blur(60px)"

motion:
  fade-in-duration: 0.7s
  fade-in-ease: "cubic-bezier(0.25, 0.1, 0.25, 1)"
  stagger-cards: 0.12s
  stagger-stats: 0.10s
  initial-y-large: 40px
  initial-y-default: 30px
  initial-y-small: 20px
  transition-fast: "0.2s ease"
  transition-default: "0.25s ease"
  pricing-toggle: "0.3s ease"
  pricing-slide-y: 16px
  pricing-slide-duration: 0.18s

components:
  # Primary CTA button (mint fill, pill)
  btn-primary:
    backgroundColor: "#1D9E75"
    textColor: "#FAF9F5"
    borderRadius: 9999px
    padding: "0.85em 2.4em"
    typography: label-button
    hoverBackground: "#04342C"
    hoverTransform: "translateY(-1px)"

  # Ghost / outline button
  btn-ghost:
    backgroundColor: transparent
    textColor: "#04342C"
    border: "1px solid #04342C"
    borderRadius: 9999px
    padding: "0.7em 2em"
    typography: label-button
    hoverBackground: "#04342C"
    hoverTextColor: "#FAF9F5"

  # Dark-section full-width submit
  btn-submit-dark:
    backgroundColor: "#04342C"
    textColor: "#FAF9F5"
    border: none
    borderRadius: 9999px
    padding: "clamp(13px, 1.6vw, 17px) 0"
    typography: label-button
    fontWeight: "700"

  # Service / contact info card (light bg)
  card-light:
    backgroundColor: "#FFFFFF"
    border: "1px solid rgba(4,52,44,0.12)"
    borderRadius: 16px
    padding: "clamp(24px, 3vw, 36px)"
    hoverBorderColor: "#1D9E75"

  # Analytics dashboard card (dark bg)
  card-dark:
    backgroundColor: "rgba(250,249,245,0.05)"
    border: "1px solid rgba(250,249,245,0.12)"
    borderRadius: 16px
    padding: "clamp(20px, 2.5vw, 32px)"

  # Metric chip inside dark card
  metric-chip:
    backgroundColor: "rgba(250,249,245,0.07)"
    border: "1px solid rgba(250,249,245,0.10)"
    borderRadius: 10px
    padding: "clamp(10px,1.5vw,16px)"

  # Pricing card — standard
  pricing-card:
    backgroundColor: "rgba(250,249,245,0.04)"
    border: "1px solid rgba(250,249,245,0.12)"
    borderRadius: 20px

  # Pricing card — featured (Standard plan)
  pricing-card-featured:
    backgroundColor: "rgba(224,169,58,0.07)"
    border: "1px solid #E0A93A"
    borderRadius: 20px
    glowBackground: "#E0A93A"
    glowOpacity: 0.06
    glowFilter: "blur(60px)"

  # Pricing badge pill
  pricing-badge:
    backgroundColor: "#E0A93A"
    textColor: "#1A1A1A"
    borderRadius: 9999px
    padding: "4px 14px"
    fontSize: 10.88px
    fontWeight: "700"
    letterSpacing: "0.12em"
    textTransform: uppercase

  # Form inputs
  input:
    backgroundColor: "#FFFFFF"
    border: "1px solid rgba(4,52,44,0.15)"
    borderRadius: 10px
    padding: "clamp(10px,1.4vw,14px) clamp(12px,1.6vw,16px)"
    textColor: "#04342C"
    fontWeight: "400"

  # Icon container (service cards)
  icon-container:
    size: 44px
    backgroundColor: "rgba(4,52,44,0.06)"
    borderRadius: 10px

  # Service feature list item
  feature-list-marker:
    color: "#1D9E75"
    fontWeight: "700"

  # Pricing feature list marker
  pricing-check:
    color: "#1D9E75"
    size: 16px
---

## Brand Identity

STEEZ (思智 — "thoughtful intelligence") is a Hangzhou-based digital-services agency that builds digital business cards, smart forms, and AR product catalogues for Chinese manufacturers exhibiting at international trade shows. The brand communicates precision, global reach, and quiet confidence — not flashy tech-startup energy, but the measured authority of a firm that handles serious export business.

The name runs in two registers simultaneously: `STEEZ` in Latin capitals (bold, Western-facing) and `思智` in Chinese characters (gold, inward-facing). This bilingual duality is a recurring motif throughout the product: every eyebrow label, every card title, and even the logo on the animated business-card prop carries both scripts.

## Visual Language

The design operates on a two-tone alternating palette — deep forest green (`#04342C`) and warm off-white (`#FAF9F5`) — where sections stack like physical cards peeling back as the user scrolls. Each section has rounded top corners (16 px) and a hairline top border, reinforcing the card metaphor. The gold (`#E0A93A`) accent is used exclusively for emphasis: eyebrow labels, featured-plan borders, stat accents, and the Chinese characters in headings. It never floods an area; it punctuates.

Mint green (`#1D9E75`) is the action colour — reserved for the primary CTA button and feature-list check marks. It reads as "go" and "affirm" without competing with the gold.

## Section Contrast Pattern

Sections alternate between dark and light surfaces in this order:

| Section | Background | Context |
|---|---|---|
| Hero | `#FAF9F5` (light) | Entry — clean, open |
| Numbers | `#04342C` (dark) | Proof — stat strip |
| Services | `#FAF9F5` (light) | Product detail |
| Analytics | `#04342C` (dark) | Data story |
| Pricing | `#04342C` (dark) | Conversion |
| Contact | `#FAF9F5` (light) | Closing handshake |
| Footer | `#1A1A1A` (near-black) | Grounding cap |

Dark sections use off-white text and gold eyebrows. Light sections use forest text and white card surfaces. The footer uses charcoal-deep (`#1A1A1A`) — darker than forest — to signal true end-of-page.

## Typography

Two Google Fonts serve all text:

- **Inter** — Latin headings and body. Geometric, neutral, scales cleanly at extreme display sizes.
- **Noto Sans SC** — Chinese characters, triggered by the `.cn-text` class and `lang="zh"` attribute. Letter-spacing set to `0.04em` to account for ideographic proportions.

All type is set with `-webkit-font-smoothing: antialiased` and `text-rendering: optimizeLegibility`.

The heading scale is intentionally aggressive. The hero wordmark runs from 180 px to 460 px (`clamp`), filling the viewport width. Section headings (`clamp(2.8rem, 8vw, 7rem)`) are uppercase and tracked at −0.03 em. Eyebrow labels are 600-weight, tracked at 0.18 em — they read as metadata, not headings.

Body copy is set at 300 weight (thin). This deliberate lightness creates strong contrast against the 900-weight headings and lets the copy breathe without competing.

## Spacing & Layout

All spacing and font sizes use CSS `clamp()` with three stops: a comfortable mobile floor, a preferred viewport-relative value, and a maximum cap. No fixed px for layout or type sizing.

Content is constrained to 1280 px max-width (1100 px for the narrower Contact and Pricing panels). Sections use symmetric horizontal padding of `clamp(20px, 4vw, 40px)` and vertical padding of `clamp(80px, 10vw, 160px)`.

The card grid systems use 3-column and 2-column layouts at desktop, collapsing to 1 column at mobile breakpoints via CSS Grid with `repeat(3, 1fr)` and `repeat(2, 1fr)`.

## Motion

Scroll-triggered fade/slide animations (`FadeIn` component wrapping `motion.div` from `motion/react`) fire once per element as it enters the viewport. Defaults: 0.7 s duration, cubic-bezier `[0.25, 0.1, 0.25, 1]`, 30 px upward slide. Cards stagger at 0.10–0.12 s intervals. The hero elements stagger from 0.15 s to 0.6 s, with the business-card prop appearing last.

Interactive transitions (button hover, service card border, pricing toggle) run at 0.2–0.25 s. The pricing plan-name slide (billing toggle) animates at 0.18 s with `easeOut`.

Smooth scrolling is provided by Lenis (`lenis@^1.3.23`) via a `ReactLenis` root wrapper.

## Sticky Card Stack

The `.wrapper` div houses all sections as `position: sticky; top: 0` elements with incrementing `z-index` values (2 → 7). Each section has `borderTopLeftRadius: 16px` and `borderTopRightRadius: 16px` plus a 1 px hairline `borderTop`. As the user scrolls, successive sections slide over earlier ones, creating a physical "card stack" depth illusion. The Footer lives outside `.wrapper` and is never sticky.

## The Business Card Prop

The animated `BizCard` component — a 3D-perspective-tilted mock of a digital business card — anchors the hero. It exists in two variants:

- **Dark:** Deep forest gradient (`#084A3D → #021F18`), gold corner glow, off-white typography, white QR module.
- **Light:** Off-white gradient (`#FFFFFF → #EFEDE3`), forest typography, forest QR module.

Shadow: `drop-shadow(0 30px 80px rgba(224,169,58,0.18))` — a warm gold ambient glow that ties the card to the gold brand accent. The card responds to cursor proximity via the `Magnet` component (magnetic pull within a 150 px radius).

## Buttons

Two button shapes coexist:

- **Primary (`.btn-contact`):** Pill, mint fill, off-white text, uppercase 0.12 em tracking. On hover: background transitions to forest, lifts 1 px.
- **Ghost (`.btn-ghost`):** Pill, transparent, forest border and text. On hover: fills to forest with off-white text.

Both use `border-radius: 999px` (true pill), `transition: 0.25s ease`, and the same uppercase label typography.

## Cards

Light-surface cards (Services, Contact info panel) use pure white (`#FFFFFF`) backgrounds with a faint forest border (`rgba(4,52,44,0.12)`), 16 px radius. The `:hover` state on service cards swaps the border to mint green — a subtle affordance that signals interactivity without animation.

Dark-surface cards (Analytics dashboard, Pricing) use a near-transparent off-white surface (`rgba(250,249,245,0.05–0.07)`) so the forest section background shows through as depth. The featured Pricing card elevates to `rgba(224,169,58,0.07)` background with a gold border and a blurred gold radial glow behind it.

## Chinese Typography in Context

Chinese characters always appear in gold (`#E0A93A`) or as secondary labels in the appropriate surface colour. They are never the primary heading — always the subtitle or the accent. The brand name `思智` (lit. "thoughtful intelligence") appears in the hero subtitle and in the footer, consistently in gold and set in Noto Sans SC at 700 weight. This hierarchy communicates: the product speaks English first to international buyers, Chinese second as a signal of origin and cultural credibility.
