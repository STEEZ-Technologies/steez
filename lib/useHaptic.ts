"use client";

export function useHaptic() {
  return (ms = 8) => {
    if (typeof navigator !== "undefined" && typeof navigator.vibrate === "function") {
      navigator.vibrate(ms);
    }
  };
}
