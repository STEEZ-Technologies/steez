"use client";

import type { MouseEventHandler } from "react";

type LiveProjectButtonProps = {
  label?: string;
  cn?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export function LiveProjectButton({
  label = "View Showroom",
  cn = "查看展厅",
  onClick,
}: LiveProjectButtonProps) {
  return (
    <button type="button" className="btn-ghost" onClick={onClick}>
      <span>{label}</span>
      <span aria-hidden style={{ opacity: 0.5 }}>
        ·
      </span>
      <span className="cn-text" lang="zh">
        {cn}
      </span>
    </button>
  );
}
