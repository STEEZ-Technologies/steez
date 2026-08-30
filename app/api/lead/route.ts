import { NextResponse } from "next/server";
import { Resend } from "resend";

// Where leads land. Override with LEAD_TO_EMAIL if you want a different inbox.
const TO_EMAIL = process.env.LEAD_TO_EMAIL || "adambaha44@gmail.com";
// Resend's shared sender works out of the box on the free tier (no domain
// verification needed to reach your OWN account email). Swap for a verified
// domain sender (e.g. "STEEZ <leads@steez.digital>") once the domain is set up.
const FROM_EMAIL = process.env.LEAD_FROM_EMAIL || "STEEZ Leads <onboarding@resend.dev>";

const TIER_LABELS: Record<string, string> = {
  essential: "Essential Tier",
  growth: "Growth Tier",
  active: "Active Tier",
  none: "Not specified",
};

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[lead] RESEND_API_KEY missing — email not sent");
    return NextResponse.json(
      { ok: false, error: "Email not configured" },
      { status: 500 }
    );
  }

  let body: {
    name?: string;
    company?: string;
    contact?: string;
    tier?: string;
    message?: string;
  };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  const name = (body.name || "").trim();
  const company = (body.company || "").trim();
  const contact = (body.contact || "").trim();
  const message = (body.message || "").trim();
  const tier = TIER_LABELS[body.tier || "none"] || "Not specified";

  if (!name || !contact || !message) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: contact.includes("@") ? contact : undefined,
      subject: `New STEEZ lead — ${name}${company ? ` (${company})` : ""}`,
      text: [
        `Name:     ${name}`,
        `Company:  ${company || "—"}`,
        `Contact:  ${contact}`,
        `Interest: ${tier}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("[lead] resend error:", error);
      return NextResponse.json({ ok: false, error: "Send failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[lead] unexpected error:", err);
    return NextResponse.json({ ok: false, error: "Send failed" }, { status: 500 });
  }
}
