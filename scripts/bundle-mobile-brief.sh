#!/usr/bin/env bash
# Bundles mobile redesign context into two zips for upload to Claude Design.
# Split into two so each stays under the per-message attachment cap (~20 files).

set -euo pipefail

cd "$(dirname "$0")/.."

OUT_DIR="mobile-brief-bundle"
rm -rf "$OUT_DIR"
mkdir -p "$OUT_DIR"

BUNDLE_1=(
  MOBILE_BRIEF.md
  CLAUDE.md
  AGENTS.md
  app/page.tsx
  app/layout.tsx
  app/globals.css
  components/shared/FadeIn.tsx
  components/shared/STEEZWordmark.tsx
  components/shared/Lenis.tsx
  components/shared/NavLabel.tsx
  components/shared/AnimatedThemeToggler.tsx
  lib/copy.ts
)

BUNDLE_2=(
  components/hero/Hero.tsx
  components/hero/Nav.tsx
  components/numbers/Numbers.tsx
  components/services/Services.tsx
  components/services/BrowserMockup.tsx
  components/services/CatalogueTablet.tsx
  components/services/InteractivePhone.tsx
  components/ui/iphone.tsx
  components/analytics/Analytics.tsx
  components/pricing/PricingSection.tsx
  components/contact/Contact.tsx
  components/footer/Footer.tsx
  components/footer/FooterCol.tsx
)

zip -r "$OUT_DIR/bundle-1-context.zip" "${BUNDLE_1[@]}"
zip -r "$OUT_DIR/bundle-2-sections.zip" "${BUNDLE_2[@]}"

echo ""
echo "Wrote:"
echo "  $OUT_DIR/bundle-1-context.zip  (brief + tokens + shared)"
echo "  $OUT_DIR/bundle-2-sections.zip (section components)"
echo ""
echo "Upload both to Claude Design. Paste prompt from MOBILE_BRIEF.md tail."
