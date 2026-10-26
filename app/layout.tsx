import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";

import { Navigation } from "@/components/navigation";
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
      <body className="flex min-h-full flex-col bg-zinc-950 font-sans text-zinc-300">
        <Navigation />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
