import { LegalPage } from "@/components/legal/LegalPage";

export const metadata = { title: "Refund Policy · STEEZ" };

export default function RefundPage() {
  return (
    <LegalPage
      title="Refund Policy"
      updated="2026-05-26"
      intro="STEEZ stands behind every plan with a 30-day money-back guarantee. This Policy describes when and how you can request a refund."
      sections={[
        {
          heading: "30-Day Money-Back Guarantee",
          body: "If you are not satisfied with STEEZ within thirty (30) days of your first paid subscription, contact billing@steez.digital and we will refund 100% of the fees paid for that initial term. No questions, no fine print.",
        },
        {
          heading: "Eligibility",
          body: "The guarantee applies to first-time subscribers only and covers the first paid term (monthly or annual). It does not apply to renewals, add-ons purchased after the first term, or accounts terminated by STEEZ for breach of the Terms of Service.",
        },
        {
          heading: "How To Request",
          body: "Email billing@steez.digital from the email on the account. Include your account ID and a brief reason (optional). We process refunds within 7 business days via the original payment method.",
        },
        {
          heading: "Cancellations After 30 Days",
          body: "You may cancel auto-renewal at any time from your billing dashboard. After the 30-day window, prepaid fees are non-refundable but you keep access until the end of the current billing period.",
        },
        {
          heading: "Hardware Add-ons",
          body: "Physical add-ons (lanyards, table stands, custom QR plates) are made to order. Refunds for hardware require the items to be returned unused within 14 days of delivery. Shipping is non-refundable.",
        },
        {
          heading: "Disputes",
          body: "If we cannot resolve a billing dispute directly, the dispute will be handled according to the Governing Law section of the Terms of Service.",
        },
      ]}
    />
  );
}
