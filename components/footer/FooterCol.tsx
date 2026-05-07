import type { ReactNode } from "react";

type FooterColProps = {
  titleEn: string;
  titleCn: string;
  children: ReactNode;
};

export function FooterCol({ titleEn, titleCn, children }: FooterColProps) {
  return (
    <div>
      <div
        style={{
          fontWeight: 600,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          fontSize: "0.78rem",
          opacity: 0.6,
        }}
      >
        {titleEn} ·{" "}
        <span className="cn-text" lang="zh">
          {titleCn}
        </span>
      </div>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          marginTop: 16,
          display: "grid",
          gap: 8,
        }}
      >
        {children}
      </ul>
    </div>
  );
}
