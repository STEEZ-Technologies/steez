import { COPY } from "@/lib/copy";
import { FadeIn } from "@/components/shared/FadeIn";
import { NavLabel } from "@/components/shared/NavLabel";
import { STEEZWordmark } from "@/components/shared/STEEZWordmark";

export function Nav() {
  return (
    <FadeIn delay={0} y={-20}>
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          gap: 24,
          padding: "clamp(16px, 3vw, 32px) clamp(20px, 4vw, 40px)",
        }}
      >
        <a
          href="#top"
          aria-label="STEEZ home"
          className="rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mint"
          style={{ textDecoration: "none" }}
        >
          <STEEZWordmark size={28} />
        </a>
        <div style={{ flex: 1 }} />
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            gap: "clamp(20px, 3vw, 48px)",
            margin: 0,
            padding: 0,
            color: "var(--bone)",
            fontWeight: 500,
            fontSize: "clamp(0.85rem, 1.1vw, 1.2rem)",
            letterSpacing: "0.06em",
          }}
        >
          {COPY.nav.map((l) => (
            <li key={l.en}>
              <a
                href={l.href}
                className="rounded-sm transition-opacity duration-200 hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mint"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <NavLabel en={l.en} cn={l.cn} />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </FadeIn>
  );
}
