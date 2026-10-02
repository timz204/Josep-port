import type { Metadata } from "next";
import { JetBrains_Mono, Syne, Manrope } from "next/font/google";
import { Header, HeaderSpacer } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { LanguageProvider } from "@/components/LanguageProvider";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const themeInitScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='light')document.documentElement.classList.add('light');}catch(e){}})();`;

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
  title: {
    default: "Victor Rodriguez | Senior Full Stack Developer",
    template: "%s | Victor Rodriguez",
  },
  description:
    "Senior Full Stack Developer from Xalapa, Mexico with 8+ years building scalable web apps using Python, TypeScript, React, and AWS.",
  keywords: [
    "Victor Rodriguez",
    "Victor Manuel Jimenez Rodriguez",
    "Full Stack Developer",
    "Python",
    "React",
    "AWS",
    "Mexico",
    "Xalapa",
  ],
  authors: [{ name: "Victor Rodriguez" }],
  creator: "Victor Rodriguez",
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
