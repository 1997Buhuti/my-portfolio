import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";

import { Navigation } from "@/components/navigation";
import { SiteFooter } from "@/components/site-footer";
import { portfolioData } from "@/data/portfolio";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${portfolioData.personal.name} · ${portfolioData.personal.title}`,
  description: portfolioData.personal.summary,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`dark scroll-smooth ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-surface font-mono text-on-surface">
        <Navigation />
        <main className="flex-1 pt-16 pb-28 lg:pb-0">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
