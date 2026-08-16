'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Heart, Sparkles, Home, Clock, Gift, Star, Camera, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// ─── CONFIGURATION ────────────────────────────────────────────────────────────
/** Ganti dengan tanggal dan waktu yang ingin digunakan sebagai "kunci" halaman. */
const UNLOCK_DATE = new Date('2026-11-02T00:00:00');

/** Foto highlight placeholder untuk grid. Ganti URL ini dengan foto asli Anda. */
const HIGHLIGHT_PHOTOS = [
  {
    url: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=600&auto=format&fit=crop',
    caption: 'Awal mula segalanya',
  },
  {
    url: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=600&auto=format&fit=crop',
    caption: 'Kopi & obrolan sore hari',
  },
  {
    url: 'https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?q=80&w=600&auto=format&fit=crop',
    caption: 'Perjalanan ke Puncak',
  },
  {
    url: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=600&auto=format&fit=crop',
    caption: 'Hari paling berkesan',
  },
  {
    url: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=600&auto=format&fit=crop',
    caption: 'Perjalanan bersama',
  },
  {
    url: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?q=80&w=600&auto=format&fit=crop',
    caption: 'Satu tahun bahagia',
  },
];

/** Statistik playful. Angka bisa disesuaikan. */
const STATS = [
  { value: '365', label: 'Hari sudah kita lalui bersama', emoji: '📅' },
  { value: '7', label: 'Lokasi berkesan yang jadi saksi', emoji: '📍' },
  { value: '∞', label: 'Cangkir kopi yang kita nikmati', emoji: '☕' },
  { value: '1', label: 'Tahun penuh cinta yang sesungguhnya', emoji: '💖' },
];
// ─── END CONFIGURATION ────────────────────────────────────────────────────────

// Countdown hook
function useCountdown(target: Date) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      if (now >= target) {
        setUnlocked(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      const diff = target.getTime() - now.getTime();
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      setTimeLeft({ days, hours, minutes, seconds });
    };

    tick(); // immediate call
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [target]);

  return { timeLeft, unlocked };
}

// ─── LOCKED VIEW (Countdown) ─────────────────────────────────────────────────
function LockedView({ timeLeft }: { timeLeft: { days: number; hours: number; minutes: number; seconds: number } }) {
  const units = [
    { label: 'Hari', value: timeLeft.days },
    { label: 'Jam', value: timeLeft.hours },
    { label: 'Menit', value: timeLeft.minutes },
    { label: 'Detik', value: timeLeft.seconds },
  ];

  return (
    <div className="min-h-screen bg-ivory-50 flex flex-col items-center justify-center px-4 text-center relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blush-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-rosegold-light/30 rounded-full blur-3xl pointer-events-none" />

      {/* Back link */}
      <Link
        href="/"
        className="absolute top-6 left-6 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/80 border border-blush-100 text-warm-800 text-xs font-medium hover:bg-blush-50 transition-colors shadow-sm"
      >
        <ArrowLeft size={14} />
        Kembali ke Beranda
      </Link>

      {/* Gift icon */}
      <div className="w-20 h-20 rounded-full bg-blush-100 border-4 border-blush-200 flex items-center justify-center mb-8 shadow-soft-pink animate-bounce">
        <Gift size={36} className="text-blush-500" />
      </div>

      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blush-100/80 border border-blush-200 text-blush-500 text-xs font-semibold uppercase tracking-widest mb-4">
        <Sparkles size={13} className="text-rosegold-gold" />
        <span>Kejutan Anniversary Pertama</span>
      </div>

      <h1 className="font-serif text-4xl md:text-6xl font-bold text-warm-900 mb-4">
        Sabar ya, <span className="text-blush-500">Sayangku</span> 🤍
      </h1>
      <p className="font-serif italic text-warm-700 text-base md:text-xl max-w-lg mb-10">
        Kejutan ini akan terbuka tepat pada hari spesial kita — <strong className="not-italic">2 November 2026</strong>. Kamu sudah tidak sabar? Begitu juga aku.
      </p>

      {/* Countdown Grid */}
      <div className="grid grid-cols-4 gap-3 md:gap-5 mb-10">
        {units.map((u) => (
          <div key={u.label} className="bg-white/90 border border-blush-100 rounded-2xl px-4 py-5 shadow-card-warm text-center min-w-[70px]">
            <span className="block font-serif text-3xl md:text-5xl font-extrabold text-warm-900">
              {String(u.value).padStart(2, '0')}
            </span>
            <span className="block text-xs font-medium text-warm-700 uppercase tracking-widest mt-1">{u.label}</span>
          </div>
        ))}
      </div>

      <p className="text-sm text-warm-700 font-medium flex items-center gap-2">
        <Clock size={14} className="text-rosegold-gold" />
        Menghitung mundur menuju hari paling spesial kita ✨
      </p>
    </div>
  );
}

// ─── UNLOCKED VIEW (Anniversary Content) ─────────────────────────────────────
function UnlockedView() {
  return (
    <div className="min-h-screen bg-ivory-50 relative overflow-x-hidden">
      {/* Decorative ambient blobs */}
      <div className="fixed -top-32 -left-32 w-96 h-96 bg-blush-200/30 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="fixed top-1/2 -right-32 w-80 h-80 bg-rosegold-light/25 rounded-full blur-3xl pointer-events-none z-0" />

      {/* Back link */}
      <div className="fixed top-6 left-6 z-40">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-blush-100 text-warm-800 text-xs font-medium hover:bg-blush-50 transition-colors shadow-sm"
        >
          <ArrowLeft size={14} />
          Beranda
        </Link>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-24 relative z-10 flex flex-col items-center text-center">

        {/* ── 1. HEADER ── */}
        <div className="w-16 h-16 rounded-full bg-blush-100 border-4 border-blush-200 flex items-center justify-center mb-6 shadow-rose-glow">
          <Heart size={28} className="fill-current text-blush-500 animate-pulse" />
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blush-100/80 border border-blush-200 text-blush-500 text-xs font-semibold uppercase tracking-widest mb-4">
          <Sparkles size={13} className="text-rosegold-gold" />
          <span>Happy 1st Anniversary</span>
        </div>

        <h1 className="font-serif text-4xl md:text-6xl font-bold text-warm-900 mb-2 leading-tight">
          Selamat Satu Tahun, <br />
          <span className="text-blush-500">Arya & Nadina</span> 💖
        </h1>
        <p className="text-sm font-medium text-rosegold-dark uppercase tracking-widest mb-10">2 November 2025 — 2 November 2026</p>

        {/* ── 2. PERSONAL MESSAGE ── */}
        <div className="w-full bg-white/90 backdrop-blur-md border border-blush-100 rounded-3xl p-8 md:p-10 shadow-card-warm mb-12 text-left relative overflow-hidden">
          {/* Decorative quote marks */}
          <span className="absolute top-4 left-5 text-8xl font-serif text-blush-100 leading-none select-none">&ldquo;</span>
          <div className="relative z-10">
            <p className="font-serif italic text-warm-800 text-base md:text-lg leading-relaxed mb-4">
              Setahun yang lalu, semuanya dimulai dari pertemuan tidak sengaja di suatu malam yang sederhana. Siapa sangka malam itu akan menjadi awal dari sesuatu yang begitu indah dan berarti.
            </p>
            <p className="font-serif italic text-warm-800 text-base md:text-lg leading-relaxed mb-4">
              Satu tahun bersama — dari kopi pertama, perjalanan hujan, malam di Puncak, hingga semua hari biasa yang terasa luar biasa karena ada kamu di dalamnya. Terima kasih sudah jadi orang yang paling aku percaya.
            </p>
            <p className="font-serif italic text-warm-800 text-base md:text-lg leading-relaxed">
              Semoga di tahun kedua, ketiga, dan seterusnya — kamu masih mau duduk di sebelahku, memesan kopi yang sama, dan bercerita tentang hari-hari yang sudah kita lalui bersama. Aku cinta kamu.
            </p>
            <p className="font-serif font-bold text-warm-900 mt-6 text-right">— Arya 💌</p>
          </div>
        </div>

        {/* ── 3. PHOTO GRID ── */}
        <div className="w-full mb-14">
          <div className="flex items-center gap-2 justify-center mb-6">
            <Camera size={18} className="text-rosegold-gold" />
            <h2 className="font-serif text-2xl font-bold text-warm-900">Momen Terbaik Setahun Ini</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {HIGHLIGHT_PHOTOS.map((photo, idx) => (
              <div key={idx} className="relative aspect-square rounded-2xl overflow-hidden border-4 border-white shadow-md group">
                <Image
                  src={photo.url}
                  alt={photo.caption}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-warm-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                  <p className="text-white text-xs font-medium font-serif italic">{photo.caption}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-warm-700 mt-4 text-center font-light opacity-70">
            💡 Ganti foto-foto di atas lewat file <code className="bg-blush-50 px-1.5 rounded">src/app/anniversary/page.tsx</code> bagian <code className="bg-blush-50 px-1.5 rounded">HIGHLIGHT_PHOTOS</code>
          </p>
        </div>

        {/* ── 4. PLAYFUL STATS ── */}
        <div className="w-full mb-14">
          <div className="flex items-center gap-2 justify-center mb-6">
            <Star size={18} className="text-rosegold-gold fill-current" />
            <h2 className="font-serif text-2xl font-bold text-warm-900">Satu Tahun Dalam Angka</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {STATS.map((stat, idx) => (
              <div key={idx} className="bg-white/90 border border-blush-100 rounded-2xl p-5 shadow-sm text-center hover:shadow-md hover:-translate-y-1 transition-all">
                <div className="text-3xl mb-2">{stat.emoji}</div>
                <div className="font-serif text-4xl font-extrabold text-warm-900 mb-1">{stat.value}</div>
                <p className="text-xs text-warm-700 font-medium leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── 5. CLOSING ── */}
        <div className="w-full bg-warm-900 text-white rounded-3xl p-8 md:p-10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blush-500/10 via-transparent to-rosegold-gold/10 pointer-events-none" />
          <div className="relative z-10 flex flex-col items-center text-center">
            <Heart size={28} className="fill-current text-blush-400 mb-4 animate-pulse" />
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-3">
              Dan cerita ini belum selesai.
            </h3>
            <p className="font-serif italic text-ivory-200 text-base md:text-lg max-w-md mb-8">
              Terima kasih sudah hadir, sudah mau bertahan, dan sudah memilih untuk terus melangkah bersama kami. Masih banyak momen yang menanti untuk diceritakan. 🤍
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-warm-900 font-semibold text-sm hover:bg-blush-50 transition-colors shadow-md"
            >
              <Home size={16} />
              Kembali ke Beranda
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

// ─── MAIN PAGE ───────────────────────────────────────────────────────────────
export default function AnniversaryPage() {
  const { timeLeft, unlocked } = useCountdown(UNLOCK_DATE);
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch — render only on client
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return unlocked ? <UnlockedView /> : <LockedView timeLeft={timeLeft} />;
}
