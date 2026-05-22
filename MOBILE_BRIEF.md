# STEEZ — Mobile Redesign Brief for Claude Design

## Product
STEEZ (思智) — Hangzhou digital services agency. Sells digital business cards, lead-capture forms, and product catalogues with buyer analytics. Audience: Chinese manufacturers exhibiting at international trade shows. Bilingual (English + 简体中文). Tone: premium, confident, minimal.

## Brand Tokens (DO NOT CHANGE)

**Palette**
- Forest `#04342C` — dark section bg, primary text on light
- Off-white `#FAF9F5` — light section bg, primary text on dark
- Gold `#E0A93A` — eyebrow labels, accents, featured card bg
- Mint `#1D9E75` — success, feature list `+` icon
- Charcoal `#1A1A1A` — footer bg, featured card text

**Type**
- Inter (Latin) + Noto Sans SC (zh, via `lang="zh"` or `.cn-text`)
- Eyebrow: `600 / clamp(0.7rem,1vw,0.85rem) / 0.18em tracking / uppercase / #E0A93A`
- Heading: `900 / lineHeight 1 / -0.03em / uppercase`
- Body: `300 / lineHeight 1.6 / clamp(0.95rem,1.4vw,1.2rem)`

**Section contrast**
- Dark bg → headings off-white, body `rgba(250,249,245,0.7)`, hairline `rgba(250,249,245,0.12)`
- Light bg → headings forest, body `rgba(4,52,44,0.7)`, hairline `rgba(4,52,44,0.12)`, cards `#FFFFFF`

**Radius**: cards 16px. **Borders**: 1px hairline at top of each section.

## Current Desktop Structure

```
Hero → Numbers → Services → Analytics → Pricing → Contact → Footer
```

- Each section (except Hero, Footer) `position: sticky; top: 0` + incrementing zIndex → card-stack overlap.
- Top border + 16px top-corner radius per section.
- Inline `CSSProperties` everywhere, `clamp()` for all sizes. Tailwind only for `sticky top-0` + `.wrapper`.
- Footer lives OUTSIDE `.wrapper` (else covered by stickies).

## Tech Constraints

- Next.js 16 App Router + Turbopack, React 19, TS 5.
- `motion@12` — import from `motion/react`, NOT `framer-motion`.
- Lenis smooth scroll via `ReactLenis` root in `app/layout.tsx`.
- Tailwind v4 CSS-first (`@theme {}` in `globals.css`, NO `tailwind.config.*`).
- Fonts via `next/font/google` in `app/layout.tsx`.
- `"use client"` required for motion/state hooks.
- DO NOT convert inline styles to Tailwind classes.

## Mobile Targets

- Breakpoints: 360, 390 (iPhone 14/15), 414, 768.
- Touch target ≥44px. Body min 16px (no iOS zoom on input focus).
- Heading cap ~2.6–3rem on mobile.
- Thumb-zone CTAs (bottom 1/3).

## Decisions Needed (give options + recommendation per section)

### 1. Hero
- BizCard 3D tilt: keep w/ device gyro, swap to touch-drag, or static screenshot?
- Nav: hamburger / bottom-dock / collapsed sticky?
- Headline scale + line count.
- CTA placement.

### 2. Numbers (4-col stat strip, dark)
- 2×2 grid vs 1×4 vertical vs horizontal scroll-snap?
- Stat number type ramp.

### 3. Services (3-col device mockups, light)

Current cards each contain a device mockup component:
- `BrowserMockup.tsx` (biz cards)
- `CatalogueTablet.tsx` (catalogues)
- `InteractivePhone.tsx` (forms, uses `iphone.tsx` primitive)

Options:
- Stack vertical, full-width mockups
- Swipe carousel w/ snap
- Tabs (one mockup visible at a time)

Recommend approach + how mockups should crop/scale on narrow viewports.

### 4. Analytics (2-col CSS charts dashboard, dark)
- 1-col stack? Drop secondary charts? Simplify bar/line?
- Heading currently wide ("Buyer Intelligence" `whiteSpace: nowrap`) — define wrap behavior on mobile.

### 5. Pricing (3-col, gold featured center, dark)
- Stacked vertical, featured first or middle?
- Collapsible feature lists?
- Sticky CTA per card?

### 6. Contact (form + info, light)
- Single-col form, info above or below?
- Input style (filled vs underlined)?
- Submit CTA size.

### 7. Footer (dark `#1A1A1A`)
- Multi-col → accordion or stacked?

### Cross-cutting
- Sticky stacking: keep on mobile (laggy on iOS Safari) or switch to linear scroll w/ section divider line?
- Lenis on mobile: keep or disable (momentum conflicts w/ pull-to-refresh)?
- `FadeIn` (whileInView, once:true) timing — keep or shorten?

## Deliverable Format

For each section provide:
1. ASCII layout sketch at 390px wide
2. Type ramp (heading / body / eyebrow sizes)
3. Spacing scale (section padding, gap)
4. Interaction notes (motion, gesture)
5. Component diff vs desktop (what changes, what stays)
6. Asset asks (cropped mockup PNGs, simplified chart variants, etc.)

## Files to Read (paste these alongside this brief)

- `CLAUDE.md`, `AGENTS.md`
- `app/page.tsx`, `app/layout.tsx`, `app/globals.css`
- `components/hero/Hero.tsx`, `Nav.tsx`, `BizCard.tsx`
- `components/numbers/Numbers.tsx`
- `components/services/Services.tsx`, `BrowserMockup.tsx`, `CatalogueTablet.tsx`, `InteractivePhone.tsx`
- `components/ui/iphone.tsx`
- `components/analytics/Analytics.tsx`
- `components/pricing/PricingSection.tsx`
- `components/contact/Contact.tsx`
- `components/footer/Footer.tsx`
- `components/shared/FadeIn.tsx`, `STEEZWordmark.tsx`, `Lenis.tsx`
- `lib/copy.ts`
