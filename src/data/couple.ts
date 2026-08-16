import { CoupleInfo } from '@/types';

/**
 * ====================================================================
 * DATA PASANGAN (ARYA & NADINA)
 * ====================================================================
 * Anda bisa mengubah nama, tagline, tanggal jadian, dan URL foto di sini.
 * 
 * CARA MENGGANTI FOTO Halaman Utama:
 * 1. Simpan foto Anda di folder `public/images/hero.jpg`
 * 2. Ubah `heroPhoto` di bawah menjadi `/images/hero.jpg`
 * ====================================================================
 */
export const coupleData: CoupleInfo = {
  groomName: "Arya",
  brideName: "Nadina",
  coupleTitle: "Arya & Nadina",
  // Tanggal jadian resmi: 2 November 2025
  anniversaryDate: "2025-11-02T00:00:00",
  tagline: "ini cerita kita — apa adanya, dari kopi pertama sampai sekarang.",
  subTagline: "dirangkum dalam satu jurnal digital, supaya kita selalu ingat dari mana semuanya dimulai.",
  // Foto placeholder berkualitas tinggi — ganti dengan foto asli di `public/images/hero.jpg`
  heroPhoto: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1200&auto=format&fit=crop",
  heroPhotoCaption: "Arya & Nadina — 2 November 2025",
};
