import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jordan Eromonsele — Builder, Strategist, Systems Thinker",
  description:
    "PMP-certified project leader and founder. 25+ shipped projects across tech, art, infrastructure, and home services.",
  openGraph: {
    title: "Jordan Eromonsele",
    description: "Strategic partner, not a thought bubble.",
    images: ["/avatar-og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrains.variable}`}
    >
      <body className="bg-warm-white text-black font-sans antialiased relative selection:bg-orange selection:text-white">
        <div className="fixed inset-0 z-50 pointer-events-none bg-noise opacity-[0.03] mix-blend-multiply" aria-hidden="true" />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
