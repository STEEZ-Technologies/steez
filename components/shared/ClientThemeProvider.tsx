"use client";

import { createContext, useContext, ReactNode, useEffect } from "react";

interface ClientTheme {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  backgroundColor: string;
  textColor: string;
}

const ThemeContext = createContext<ClientTheme | null>(null);

export function ClientThemeProvider({ 
  theme, 
  children 
}: { 
  theme: ClientTheme; 
  children: ReactNode 
}) {
  useEffect(() => {
    // Inject client-specific colors into CSS variables
    const root = document.documentElement;
    root.style.setProperty("--forest", theme.backgroundColor); // Mapping to existing vars
    root.style.setProperty("--bg", theme.backgroundColor);
    root.style.setProperty("--fg", theme.textColor);
    root.style.setProperty("--accent", theme.accentColor);
    root.style.setProperty("--mint", theme.primaryColor);
    root.style.setProperty("--gold", theme.secondaryColor);
    
    // Optional: Clean up or reset if needed
  }, [theme]);

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useClientTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useClientTheme must be used within ClientThemeProvider");
  return context;
};
