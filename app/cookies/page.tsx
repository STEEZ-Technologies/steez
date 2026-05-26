import { LegalPage } from "@/components/legal/LegalPage";

export const metadata = { title: "Cookie Policy · STEEZ" };

export default function CookiesPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      updated="2026-05-26"
      intro="This Cookie Policy explains how STEEZ uses cookies and similar tracking technologies on steez.digital and on STEEZ-hosted digital cards, profiles, and catalogues."
      sections={[
        {
          heading: "What Cookies Are",
          body: "Cookies are small text files placed on your device when you visit a website. They are widely used to make sites work, remember preferences, and provide usage information.",
        },
        {
          heading: "Categories We Use",
          body: "Strictly necessary — required for the site to function (session, security, language preference). Analytics — anonymous statistics on page usage (loaded only after consent in EU/UK). Performance — used to measure CDN and shader rendering performance. We do not use third-party advertising cookies.",
        },
        {
          heading: "Buyer-Scan Tracking",
          body: "When a buyer scans a STEEZ QR code we record the scan event (timestamp, approximate region, device class, language preference) using a first-party identifier set on the showroom domain. This is documented in our Privacy Policy.",
        },
        {
          heading: "Managing Your Choices",
          body: "On first visit from the EU, UK, or other consent-required regions we display a cookie banner. You may change your choices at any time via the \"Cookie Settings\" link in the footer (coming soon) or by clearing cookies in your browser. Blocking strictly-necessary cookies will break parts of the site.",
        },
        {
          heading: "Third-Party Cookies",
          body: "Limited third parties may set cookies on STEEZ pages — payment processor, CDN, font hosts, error monitoring. We list them in this Policy and require each to comply with GDPR / PIPL processing terms.",
        },
        {
          heading: "Contact",
          body: "Questions about cookies: legal@steez.digital.",
        },
      ]}
    />
  );
}
