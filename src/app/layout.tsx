import type { Metadata } from "next";
import { JetBrains_Mono, Syne, Manrope } from "next/font/google";
import { Header, HeaderSpacer } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { LanguageProvider } from "@/components/LanguageProvider";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const themeInitScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='light')document.documentElement.classList.add('light');}catch(e){}})();`;

const localeInitScript = `(function(){try{var l=localStorage.getItem('locale');if(l==='es'||l==='en')document.documentElement.lang=l;else if(navigator.language.toLowerCase().indexOf('es')===0)document.documentElement.lang='es';}catch(e){}})();`;

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  "title": {
    "default": "Joseph Bernard Adlaon | WordPress Developer & SEO Specialist",
    "template": "%s | Joseph Bernard Adlaon"
  },
  "description": "WordPress Developer and SEO Specialist with 7+ years of experience developing, optimizing, and maintaining responsive, SEO-friendly websites.",
  "keywords": [
    "Joseph Bernard Adlaon",
    "WordPress Developer",
    "SEO Specialist",
    "Elementor Pro",
    "Philippines"
  ],
  "authors": [
    {
      "name": "Joseph Bernard Adlaon"
    }
  ],
  "creator": "Joseph Bernard Adlaon"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${syne.variable} ${jetbrains.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full antialiased">
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script dangerouslySetInnerHTML={{ __html: localeInitScript }} />
        <JsonLd />
        <ThemeProvider>
          <LanguageProvider>
            <Header />
            <ScrollProgress />
            <HeaderSpacer />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
