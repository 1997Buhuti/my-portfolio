import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";

import { portfolioData } from "@/data/portfolio";
import { SITE_URL } from "@/lib/site";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

const siteTitle = `${portfolioData.personal.name} · ${portfolioData.personal.title}`;
const siteDescription = portfolioData.personal.seoDescription;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: siteTitle,
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: portfolioData.personal.name,
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`dark scroll-smooth ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-surface font-mono text-on-surface">
        {children}
      </body>
    </html>
  );
}
