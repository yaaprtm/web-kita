import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kejutan Anniversary Pertama 🎁 — Arya & Nadina',
  description: 'Halaman kejutan spesial untuk anniversary pertama Arya & Nadina, 2 November 2026.',
  robots: { index: false, follow: false }, // Don't index this page in search engines
};

export default function AnniversaryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
