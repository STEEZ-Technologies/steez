import { LegalPage } from "@/components/legal/LegalPage";

export const metadata = { title: "Terms of Service · STEEZ" };

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="2026-05-26"
      intro={`These Terms of Service ("Terms") govern your access to and use of the STEEZ platform, websites, and APIs (collectively, the "Service"). By creating an account or otherwise using the Service you agree to these Terms.`}
      sections={[
        {
          heading: "Eligibility & Account",
          body: "You must be a legally registered business and at least 18 years old to subscribe. You are responsible for maintaining the confidentiality of your account credentials and for all activity under your account.",
        },
        {
          heading: "Subscription & Billing",
          body: "STEEZ is billed in advance on a monthly or annual basis. Fees are stated in Chinese Renminbi (¥) unless otherwise specified. Failure to pay may result in suspension or termination of the Service. Renewals occur automatically unless cancelled before the renewal date.",
        },
        {
          heading: "Acceptable Use",
          body: "You will not (a) upload illegal, infringing, defamatory, or fraudulent content, (b) misrepresent your identity or your products, (c) circumvent technical limits or attempt to access other accounts, (d) use the Service to facilitate sanctioned transactions or restricted exports, or (e) scrape or reverse-engineer the platform.",
        },
        {
          heading: "Content Ownership",
          body: "You retain all rights to the content you upload (logos, photos, copy, product data). You grant STEEZ a worldwide, royalty-free licence to host, display, and process such content solely to provide the Service. STEEZ retains all rights to the platform itself, including software, design, and trademarks.",
        },
        {
          heading: "Service Availability",
          body: "We aim for 99.5% monthly uptime. Scheduled maintenance is announced in advance. STEEZ is not liable for downtime caused by force majeure, customer infrastructure, or third-party providers.",
        },
        {
          heading: "Termination",
          body: "Either party may terminate for material breach uncured within 30 days of written notice. STEEZ may suspend access immediately for security or legal reasons. Upon termination your data is exportable for 60 days, after which it is deleted.",
        },
        {
          heading: "Disclaimer & Liability Cap",
          body: "The Service is provided \"as is\". To the maximum extent permitted by law, STEEZ disclaims implied warranties of merchantability and fitness for a particular purpose. STEEZ's aggregate liability arising from or related to these Terms shall not exceed the fees paid by you in the twelve months preceding the claim.",
        },
        {
          heading: "Governing Law & Dispute Resolution",
          body: "These Terms are governed by the laws of the People's Republic of China. Disputes shall be resolved by binding arbitration before the Hangzhou Arbitration Commission in accordance with its rules. The seat of arbitration is Hangzhou; the language is Mandarin Chinese, with English translation available on request.",
        },
        {
          heading: "Changes",
          body: "We may revise these Terms. Material changes will be notified at least 30 days before they take effect; continued use of the Service after that date constitutes acceptance.",
        },
      ]}
    />
  );
}
