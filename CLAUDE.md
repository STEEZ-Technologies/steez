@AGENTS.md

# STEEZ — Project Handoff

STEEZ (思智) is a marketing landing page for a Shenzhen-based digital services agency targeting Chinese manufacturers who exhibit at international trade shows. Product: digital business cards, forms, and catalogues with buyer analytics.

---

## Tech Stack

| | |
|---|---|
| Framework | Next.js 16.2.6, App Router, Turbopack |
| Runtime | React 19.2, TypeScript 5 |
| Animation | `motion@^12` (Framer Motion rebrand — import from `motion/react`, NOT `framer-motion`) |
| Smooth scroll | `lenis@^1.3.23` via `ReactLenis` root wrapper in `app/layout.tsx` |
| Styling | Tailwind v4 (CSS-first `@theme` block in `globals.css` — NO `tailwind.config.*`) |
| Fonts | Inter (Latin) + Noto Sans SC (Chinese), loaded in `app/layout.tsx` via `next/font/google` |

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

### Section contrast rules

**Dark sections** (`#04342C` bg): headings `#FAF9F5`, subtext `rgba(250,249,245,0.7)`, eyebrows `#E0A93A`, borders `rgba(250,249,245,0.12–0.15)`, dividers `rgba(250,249,245,0.1)`.

**Light sections** (`#FAF9F5` bg): headings `#04342C`, subtext `rgba(4,52,44,0.7)`, eyebrows `#E0A93A`, borders `rgba(4,52,44,0.12–0.15)`, dividers `rgba(4,52,44,0.1)`. Cards use `#FFFFFF` bg.

**Footer** (`#1A1A1A` bg): text `#FAF9F5`, accent `#E0A93A`, hairlines `rgba(250,249,245,0.12–0.15)`.

### Typography

- Eyebrow labels: `fontWeight: 600, fontSize: clamp(0.7rem,1vw,0.85rem), letterSpacing: "0.18em", textTransform: "uppercase", color: #E0A93A`
- Section headings: `fontWeight: 900, fontSize: clamp(2.8rem,8vw,7rem), lineHeight: 1, letterSpacing: "-0.03em", textTransform: "uppercase"`
- Body: `fontWeight: 300, lineHeight: 1.6–1.65, fontSize: clamp(0.95rem,1.4vw,1.2rem)`

---

## Key Patterns

### Inline styles
All components use React `CSSProperties` inline styles for layout/color. Tailwind used only for utilities (`sticky top-0`, `wrapper`). Do NOT convert to Tailwind classes.

### FadeIn
`components/shared/FadeIn.tsx` — wraps `motion.div` with `whileInView`, `once: true`. Props: `delay`, `x`, `y`. Used on every section heading and card.

### Chinese text
Wrap Chinese characters in `<span className="cn-text" lang="zh">` or use `lang="zh"` on the element. This triggers Noto Sans SC font.

### Clamp sizing
All spacing and font sizes use `clamp(min, preferred-vw, max)`. Never use fixed px for layout.

### Animation imports
```ts
import { motion, useScroll, useTransform } from "motion/react";
// NOT from "framer-motion"
```

---

## Component Map

| File | Purpose | Status |
|---|---|---|
| `components/hero/Hero.tsx` | Full-viewport hero, BizCard 3D tilt, Nav | Active |
| `components/hero/BizCard.tsx` | Animated digital business card mock | Active |
| `components/hero/Nav.tsx` | Top nav bar | Active |
| `components/numbers/Numbers.tsx` | 4-col stat strip | Active |
| `components/services/Services.tsx` | 3-col service cards | Active |
| `components/analytics/Analytics.tsx` | 2-col analytics dashboard (pure CSS charts) | Active |
| `components/pricing/Pricing.tsx` | 3-col pricing cards, gold featured card | Active |
| `components/contact/Contact.tsx` | Contact form + info card | Active |
| `components/footer/Footer.tsx` | Footer with FooterCol sub-component | Active |
| `components/shared/FadeIn.tsx` | Scroll-triggered fade/slide animation | Active |
| `components/shared/Lenis.tsx` | ReactLenis root wrapper (client component) | Active |
| `components/ui/ContainerScroll.tsx` | 3D tilt scroll animation (stripped chrome) | Active (used in hero area) |
| `components/about/` | Old About section | **Unused** — not imported anywhere |
| `components/marquee/` | Old Marquee section | **Unused** — not imported anywhere |
| `components/projects/` | Old Projects/case studies section | **Unused** — not imported anywhere |
| `components/tiles/` | Old tile marquee components | **Unused** — not imported anywhere |

Unused directories are safe to delete.

---

## Copy Source

All copy strings (footer, section labels, etc.) live in `lib/copy.ts`. New section copy is inlined directly in the component (not in copy.ts) — this is intentional.

---

## Known Gotchas

- `motion@12` is the rebranded framer-motion. APIs identical but package name changed. Always import from `motion/react`.
- Tailwind v4 has no config file. All theme tokens defined in `@theme {}` block in `globals.css`.
- `Footer` must stay **outside** the `.wrapper` div — moving it inside causes it to be permanently covered by sticky sections.
- `"use client"` required on any component using `useState`, `useRef`, `useScroll`, or any motion hooks. Server components (no interactivity) need no directive.
- Inline `position: "relative"` on a section will override Tailwind's `sticky` class. Remove inline position from sticky sections.
