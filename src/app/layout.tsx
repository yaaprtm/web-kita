import type { Metadata } from "next";
import "./globals.css";
import { coupleData } from "@/data/couple";

export const metadata: Metadata = {
  title: `${coupleData.groomName} & ${coupleData.brideName} — Website Couple Romantis`,
  description: coupleData.tagline,
  keywords: ["Arya Nadina", "Couple Website", "Cerita Cinta Arya Nadina", "Anniversary Website"],
  openGraph: {
    title: `${coupleData.groomName} & ${coupleData.brideName} — Website Couple`,
    description: coupleData.tagline,
    images: [
      {
        url: coupleData.heroPhoto,
        width: 1200,
        height: 630,
        alt: `${coupleData.groomName} & ${coupleData.brideName}`,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased selection:bg-blush-200 selection:text-warm-900 bg-ivory-50 text-warm-900 min-h-screen relative">
        {children}
      </body>
    </html>
  );
}
