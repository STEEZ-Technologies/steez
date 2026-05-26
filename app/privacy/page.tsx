import { LegalPage } from "@/components/legal/LegalPage";

export const metadata = { title: "Privacy Policy · STEEZ" };

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="2026-05-26"
      intro={`STEEZ Digital ("STEEZ", "we", "us") operates a platform for Chinese manufacturers to share digital business cards, company profiles, and product catalogues with international buyers. This Privacy Policy explains what personal information we collect, how we use it, and your rights under China's Personal Information Protection Law (PIPL), the EU General Data Protection Regulation (GDPR), and other applicable laws.`}
      sections={[
        {
          heading: "Information We Collect",
          body: "We collect information you provide directly (name, email, company, message content), information generated when buyers scan your STEEZ QR codes (timestamp, device type, approximate region from IP, language preference), and limited analytics from our website (page views, session duration, referrer). We do not collect government-issued IDs, payment card numbers (handled by our payment processor), or biometric data.",
        },
        {
          heading: "How We Use Information",
          body: "We use personal information to deliver the STEEZ service, route buyer inquiries to the correct manufacturer account, provide buyer-scan analytics dashboards to our subscribers, send transactional emails (account, billing, support), and comply with legal obligations. We do not sell personal information.",
        },
        {
          heading: "Legal Basis (GDPR / PIPL)",
          body: "We process personal data on the basis of (a) performance of a contract with you or your organization, (b) your explicit consent for non-essential cookies and marketing communications, (c) our legitimate interests in operating and securing the service, and (d) compliance with legal obligations. For cross-border transfers from mainland China, we rely on the Cyberspace Administration of China standard contract.",
        },
        {
          heading: "Data Retention",
          body: "Account data is retained for the duration of your subscription plus 24 months for tax and contract enforcement. Buyer-scan analytics are retained for 36 months in aggregated form, then deleted. Backups are rotated every 90 days. You may request deletion at any time.",
        },
        {
          heading: "Your Rights",
          body: "Depending on your jurisdiction, you have the right to access, correct, port, restrict, or delete your personal data, to withdraw consent, and to lodge a complaint with a supervisory authority. To exercise these rights contact legal@steez.digital. We respond within 30 days.",
        },
        {
          heading: "International Transfers",
          body: "Personal data may be transferred outside the country of collection (notably between mainland China and our infrastructure providers). We use approved transfer mechanisms (PIPL standard contract, GDPR Standard Contractual Clauses) and apply additional safeguards where required.",
        },
        {
          heading: "Security",
          body: "STEEZ uses TLS 1.3 for data in transit, AES-256 encryption at rest, role-based access controls, mandatory MFA for staff, and quarterly third-party security reviews. No internet-based service is perfectly secure; we will notify affected users without undue delay in the event of a breach.",
        },
        {
          heading: "Children",
          body: "STEEZ is a B2B service intended for users 18 and older. We do not knowingly collect information from minors.",
        },
        {
          heading: "Changes",
          body: "We may update this Policy. Material changes will be communicated via email or in-product notice at least 30 days before they take effect.",
        },
      ]}
    />
  );
}
