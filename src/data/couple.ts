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
  coupleTitle: "NAYA",
  // Tanggal jadian resmi: 2 November 2025
  anniversaryDate: "2025-11-02T00:00:00",
  tagline: "Awalnya cuma ngopi biasa, eh nggak nyangka malah kebablasan nyaman sampai sekarang.",
  subTagline: "NAYA — gabungan dari NAdina & ArYA. Ini cerita kita.",
  // Foto placeholder berkualitas tinggi — ganti dengan foto asli di `public/images/hero.jpg`
  heroPhoto: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1200&auto=format&fit=crop",
  heroPhotoCaption: "NAYA — 2 November 2025",
};
