"use client";

import type { MouseEventHandler } from "react";

type ContactButtonProps = {
  label?: string;
  cn?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export function ContactButton({
  label = "Contact",
  cn = "联系",
  onClick,
}: ContactButtonProps) {
  return (
    <button type="button" className="btn-contact" onClick={onClick}>
      <span>{label}</span>
      <span aria-hidden style={{ opacity: 0.7 }}>
        ·
      </span>
      <span className="cn-text" lang="zh">
        {cn}
      </span>
    </button>
  );
}
