import { ContactButton } from "@/components/shared/ContactButton";
import { FadeIn } from "@/components/shared/FadeIn";
import { LiveProjectButton } from "@/components/shared/LiveProjectButton";
import { Magnet } from "@/components/shared/Magnet";
import { NavLabel } from "@/components/shared/NavLabel";
import { QRPattern } from "@/components/shared/QRPattern";
import { STEEZWordmark } from "@/components/shared/STEEZWordmark";

// Step 1 smoke layout — exercises every shared primitive.
// Will be replaced section-by-section starting at Step 2 (Hero).
export default function Home() {
  return (
    <main className="min-h-screen bg-forest text-bone p-12 flex flex-col gap-12 items-start">
      <FadeIn>
        <STEEZWordmark size={48} />
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="flex gap-8 items-baseline">
          <NavLabel en="About" cn="关于" />
          <NavLabel en="Pricing" cn="定价" />
          <NavLabel en="Cards" cn="名片" />
          <NavLabel en="Contact" cn="联系" />
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <Magnet padding={150} strength={3}>
          <div
            style={{
              width: 240,
              height: 240,
              padding: 16,
              background: "var(--forest-deep)",
              borderRadius: 16,
              border: "1px solid var(--hairline)",
            }}
          >
            <QRPattern size={208} fg="var(--mint)" />
          </div>
        </Magnet>
      </FadeIn>

      <FadeIn delay={0.3} className="flex gap-4">
        <ContactButton />
        <LiveProjectButton />
      </FadeIn>
    </main>
  );
}
