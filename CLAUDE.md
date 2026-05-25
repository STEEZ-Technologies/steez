# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

# STEEZ — Project Handoff

STEEZ (思智) is a marketing landing page for a Hangzhou-based digital services agency targeting Chinese manufacturers who exhibit at international trade shows. Product: digital business cards, forms, and catalogues with buyer analytics.

---

## Commands

```bash
npm run dev      # dev server (Turbopack)
npm run build    # production build
npm run start    # serve production build
npm run lint     # eslint (Next.js core-web-vitals + TypeScript preset)
```

No test runner is configured.

---

## Tech Stack

| | |
|---|---|
| Framework | Next.js 16.2.6, App Router, Turbopack |
| Runtime | React 19.2, TypeScript 5 |
| Animation | `motion@^12` (Framer Motion rebrand) + `gsap@^3` |
| 3D | `@react-three/fiber` + `@react-three/drei` + `three` |
| Smooth scroll | `lenis@^1.3.23` via `ReactLenis` root wrapper in `app/layout.tsx` |
| Styling | Tailwind v4 (CSS-first `@theme` block in `globals.css` — NO `tailwind.config.*`) |
| Theme | `next-themes` `ThemeProvider` wraps layout |
| Fonts | Geist, Stack Sans Notch, Inter, Noto Sans SC — all loaded via `next/font/google` in `app/layout.tsx` |

---

## Page Structure

`app/page.tsx` renders:

```
<main>
  <div className="wrapper">   ← sticky stacking container
    <Hero />                  zIndex: — (no sticky)
    <Numbers />               zIndex: 2, sticky top-0, bg #04342C (dark)
    <Services />              zIndex: 3, sticky top-0, bg #FAF9F5 (light)
    <Analytics />             zIndex: 4, sticky top-0, bg #04342C (dark)
    <Pricing />               zIndex: 6, sticky top-0, bg #04342C (dark)
    <Contact />               zIndex: 7, sticky top-0, bg #FAF9F5 (light)
  </div>
  <Footer />                  ← outside wrapper, no sticky, bg #1A1A1A
</main>
```

Sticky stacking: each section `position: sticky; top: 0` (via Tailwind `className="sticky top-0"`) + incrementing `zIndex` inline. Each section has `borderTopLeftRadius: 16, borderTopRightRadius: 16` + `borderTop: 1px solid <divider>` to create card-stack overlap effect.

---

## Design System

### Palette

| Token | Value | Usage |
|---|---|---|
| Forest | `#04342C` | Dark section bg, primary text on light |
| Off-white | `#FAF9F5` | Light section bg, primary text on dark |
| Gold | `#E0A93A` | Eyebrow labels, accents, featured card bg |
| Mint | `#1D9E75` | Success states, feature list `+` icon |
| Charcoal-deep | `#1A1A1A` | Footer bg, featured card text |

All palette tokens are registered in `globals.css` under `@theme {}` as CSS custom properties (e.g. `--color-forest`). Use Tailwind utility classes like `bg-forest` or reference via `var(--color-forest)` in inline styles.

### Section contrast rules

**Dark sections** (`#04342C` bg): headings `#FAF9F5`, subtext `rgba(250,249,245,0.7)`, eyebrows `#E0A93A`, borders `rgba(250,249,245,0.12–0.15)`, dividers `rgba(250,249,245,0.1)`.

**Light sections** (`#FAF9F5` bg): headings `#04342C`, subtext `rgba(4,52,44,0.7)`, eyebrows `#E0A93A`, borders `rgba(4,52,44,0.12–0.15)`, dividers `rgba(4,52,44,0.1)`. Cards use `#FFFFFF` bg.

**Footer** (`#1A1A1A` bg): text `#FAF9F5`, accent `#E0A93A`, hairlines `rgba(250,249,245,0.12–0.15)`.

### Typography

- Eyebrow labels: `fontWeight: 600, fontSize: clamp(0.7rem,1vw,0.85rem), letterSpacing: "0.18em", textTransform: "uppercase", color: #E0A93A`
- Section headings: `fontWeight: 900, fontSize: clamp(2.8rem,8vw,7rem), lineHeight: 1, letterSpacing: "-0.03em", textTransform: "uppercase"`
- Body: `fontWeight: 300, lineHeight: 1.6–1.65, fontSize: clamp(0.95rem,1.4vw,1.2rem)`

`globals.css` also exposes fluid type-scale tokens (`--text-caption` → `--text-display`) and spacing tokens (`--space-4` → `--space-120`).

---

## Key Patterns

### Inline styles
All components use React `CSSProperties` inline styles for layout/color. Tailwind used only for utilities (`sticky top-0`, `wrapper`). Do NOT convert to Tailwind classes.

### cn() utility
Use `@/lib/utils` (clsx + tailwind-merge). Ignore `@/lib/cn` — it's a duplicate without twMerge.

### FadeIn
`components/shared/FadeIn.tsx` — wraps `motion.div` with `whileInView`, `once: true`. Props: `delay`, `x`, `y`. Used on every section heading and card.

### Chinese text
Wrap Chinese characters in `<span className="cn-text" lang="zh">` or use `lang="zh"` on the element. This triggers Noto Sans SC font.

### Clamp sizing
All spacing and font sizes use `clamp(min, preferred-vw, max)`. Never use fixed px for layout.

### Animation imports
```ts
import { motion, useScroll, useTransform } from "motion/react";
// NOT from "framer-motion" (both are installed; always use motion/react)
```

GSAP (`gsap` + `@gsap/react`) is also available for timeline/sequence animations where motion is insufficient.

### 3D / R3F
`components/portfolio/` contains React Three Fiber components (`ProductScene.tsx`, `ProductViewer.tsx`, `WaterPump.tsx`). Use `@react-three/fiber` + `@react-three/drei`; 3D model assets live in `app/3dmodels/`.

---

## Component Map

| File | Purpose |
|---|---|
| `components/hero/Hero.tsx` | Full-viewport hero, BizCard 3D tilt, Nav |
| `components/hero/BizCard.tsx` | Animated digital business card mock |
| `components/hero/Nav.tsx` | Top nav bar |
| `components/numbers/Numbers.tsx` | 4-col stat strip |
| `components/services/Services.tsx` | 3-col service cards |
| `components/analytics/Analytics.tsx` | 2-col analytics dashboard (pure CSS charts) |
| `components/pricing/Pricing.tsx` | 3-col pricing cards, gold featured card |
| `components/contact/Contact.tsx` | Contact form + info card |
| `components/footer/Footer.tsx` | Footer with FooterCol sub-component |
| `components/portfolio/` | 3D product viewer (R3F) — not in main page flow |
| `components/shared/FadeIn.tsx` | Scroll-triggered fade/slide animation |
| `components/shared/Lenis.tsx` | ReactLenis root wrapper (client component) |
| `components/ui/ContainerScroll.tsx` | 3D tilt scroll animation |

Unused (safe to delete): `components/about/`, `components/marquee/`, `components/projects/`, `components/tiles/`.

---

## Copy Source

All copy strings (footer, section labels, etc.) live in `lib/copy.ts`. New section copy is inlined directly in the component — intentional.

---

## Known Gotchas

- `motion@12` is the rebranded framer-motion. APIs identical but package name changed. Always import from `motion/react`.
- Tailwind v4 has no config file. All theme tokens defined in `@theme {}` block in `globals.css`.
- `Footer` must stay **outside** the `.wrapper` div — moving it inside causes it to be permanently covered by sticky sections.
- `"use client"` required on any component using `useState`, `useRef`, `useScroll`, or any motion hooks. Server components (no interactivity) need no directive.
- Inline `position: "relative"` on a section will override Tailwind's `sticky` class. Remove inline position from sticky sections.
- `next-themes` `ThemeProvider` is in the layout — dark/light mode infrastructure exists but is not currently surfaced in the UI.
