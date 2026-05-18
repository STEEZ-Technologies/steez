import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./context/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream:           "rgb(var(--color-cream) / <alpha-value>)",
        espresso:        "rgb(var(--color-espresso) / <alpha-value>)",
        "espresso-light":"rgb(var(--color-espresso-light) / <alpha-value>)",
        bronze:          "rgb(var(--color-bronze) / <alpha-value>)",
        "bronze-light":  "rgb(var(--color-bronze-light) / <alpha-value>)",
        "warm-brown":    "rgb(var(--color-warm-brown) / <alpha-value>)",
        "cream-dark":    "rgb(var(--color-cream-dark) / <alpha-value>)",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
