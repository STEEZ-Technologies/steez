import type { Metadata } from "next";
import { Inter, Noto_Sans_SC, Noto_Kufi_Arabic, Geist, Stack_Sans_Notch, Stack_Sans_Text } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/next";
import { Lenis } from "@/components/shared/Lenis";
import { I18nProvider } from "@/lib/i18n/I18nProvider";
import { Preloader } from "@/components/preloader/Preloader";
import { PreloaderProvider } from "@/components/preloader/PreloaderContext";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const stackSansNotch = Stack_Sans_Notch({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-stack-sans",
  display: "swap",
});

const stackSansText = Stack_Sans_Text({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-stack-text",
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

const notoKufiArabic = Noto_Kufi_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-noto-kufi",
  display: "swap",
});

export const metadata: Metadata = {
  title: "STEEZ · 思智 — The Digital Bridge to Your Next Buyer",
  description:
    "Premium digital business cards for Chinese makers. Each STEEZ card is a digital bridge — scan once, land buyers in Berlin, São Paulo, or Riyadh on your full showroom.",
};

export const viewport = {
  themeColor: "#0E2D24",
  viewportFit: "cover" as const,
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={cn(stackSansNotch.variable, stackSansText.variable, inter.variable, notoSansSC.variable, notoKufiArabic.variable, geist.variable, "font-sans")}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <I18nProvider>
            <PreloaderProvider>
              <Preloader />
              <Lenis>{children}</Lenis>
            </PreloaderProvider>
          </I18nProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
