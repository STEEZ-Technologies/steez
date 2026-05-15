import type { Metadata } from "next";
import { Inter, Noto_Sans_SC, Geist, Stack_Sans_Notch } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Lenis } from "@/components/shared/Lenis";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const stackSansNotch = Stack_Sans_Notch({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-stack-sans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
  variable: "--font-noto-sc",
  display: "swap",
});

export const metadata: Metadata = {
  title: "STEEZ · 思智 — The Digital Bridge to Your Next Buyer",
  description:
    "Premium digital business cards for Chinese makers. Each STEEZ card is a digital bridge — scan once, land buyers in Berlin, São Paulo, or Riyadh on your full showroom.",
};

export const viewport = {
  themeColor: "#0E2D24",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={cn(stackSansNotch.variable, inter.variable, notoSansSC.variable, geist.variable, "font-sans")}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Lenis>{children}</Lenis>
        </ThemeProvider>
      </body>
    </html>
  );
}
