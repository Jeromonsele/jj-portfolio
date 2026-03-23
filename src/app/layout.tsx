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
  metadataBase: new URL("https://jordaneromonsele.com"),
  title: "Jordan Eromonsele — Product & Operations Leader",
  description:
    "Product and operations leader who uses data, economics, and systems design to ship products. Case studies, live products, and PM thinking.",
  openGraph: {
    title: "Jordan Eromonsele — Product & Operations Leader",
    description:
      "Product and operations leader. Case studies, live products, and PM thinking.",
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
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-black focus:text-white focus:px-4 focus:py-2 focus:text-sm">
          Skip to content
        </a>
        <div className="fixed inset-0 z-50 pointer-events-none bg-paper opacity-[0.06] mix-blend-multiply" aria-hidden="true" />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
