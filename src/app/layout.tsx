import type { Metadata } from "next";
import "./globals.css";
import { coupleData } from "@/data/couple";

export const metadata: Metadata = {
  title: "NAYA — Jurnal Perjalanan Cinta Kita",
  description: coupleData.tagline,
  keywords: ["NAYA", "Nadina Arya", "Arya Nadina", "Website Couple", "Jurnal Digital NAYA"],
  openGraph: {
    title: "NAYA — Jurnal Perjalanan Cinta Kita",
    description: coupleData.tagline,
    images: [{ url: coupleData.heroPhoto, width: 1200, height: 630, alt: "NAYA" }],
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased selection:bg-mustard-100 selection:text-warm-900 bg-ivory-100 text-warm-900 min-h-screen relative">
        {children}
      </body>
    </html>
  );
}
