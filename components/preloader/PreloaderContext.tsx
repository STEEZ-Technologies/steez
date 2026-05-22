"use client";

import { createContext, useContext, useState, useCallback, useMemo } from "react";

type PreloaderCtx = {
  done: boolean;
  setDone: () => void;
};

const Ctx = createContext<PreloaderCtx>({ done: true, setDone: () => {} });

export function PreloaderProvider({ children }: { children: React.ReactNode }) {
  const [done, setDoneState] = useState(false);
  const setDone = useCallback(() => setDoneState(true), []);
  const value = useMemo(() => ({ done, setDone }), [done, setDone]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function usePreloader() {
  return useContext(Ctx);
}
