import { createContext, useContext, useState, type ReactNode } from "react";

const Ctx = createContext<{ items: string[]; add: (id: string) => void; clear: () => void }>({
  items: [],
  add: () => {},
  clear: () => {},
});

export function InquiryProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<string[]>([]);
  const add = (id: string) => setItems((p) => (p.includes(id) ? p : [...p, id]));
  const clear = () => setItems([]);
  return <Ctx.Provider value={{ items, add, clear }}>{children}</Ctx.Provider>;
}
export const useInquiry = () => useContext(Ctx);
