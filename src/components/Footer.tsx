'use client';

import React from 'react';
import { Heart, Sparkles, ArrowUp, Gift } from 'lucide-react';
import Link from 'next/link';
import { coupleData } from '@/data/couple';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-warm-900 text-ivory-50 pt-16 pb-12 px-4 overflow-hidden border-t border-rosegold-gold/20">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-blush-500/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
        
        {/* Heart Icon */}
        <div className="w-12 h-12 rounded-full bg-blush-500/20 border border-blush-400/40 flex items-center justify-center text-blush-300 mb-6 shadow-rose-glow">
          <Heart size={22} className="fill-current animate-pulse text-blush-400" />
        </div>

        {/* Closing Title */}
        <h3 className="font-serif text-3xl md:text-4xl font-bold text-white mb-3 tracking-wide">
          {coupleData.groomName} <span className="font-script text-rosegold-gold text-4xl md:text-5xl">&</span> {coupleData.brideName}
        </h3>

        {/* Romantic Closing Statement */}
        <p className="font-serif italic text-ivory-200 text-base md:text-lg max-w-lg mx-auto mb-8 leading-relaxed font-light">
          &ldquo;Terima kasih telah menjadi bagian dari perjalanan dan cerita hangat kami. Semoga cinta dan kebahagiaan senantiasa menyertai kita semua.&rdquo;
        </p>

        {/* Anniversary Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold uppercase tracking-widest text-rosegold-light mb-6">
          <Sparkles size={14} className="text-rosegold-gold" />
          <span>Resmi Berpasangan • 2 November 2025</span>
        </div>

        {/* Anniversary Page Link */}
        <Link
          href="/anniversary"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-blush-500/20 border border-blush-400/30 hover:border-blush-400/60 text-blush-300 hover:text-white text-sm font-medium transition-all duration-200 mb-10 group"
        >
          <Gift size={15} className="group-hover:animate-bounce" />
          <span>Kejutan Anniversary Pertama 🎁</span>
        </Link>

        {/* Divider */}
        <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

        {/* Copyright & Back To Top */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-warm-200 font-light">
          <p>© {new Date().getFullYear()} Website Couple Arya & Nadina. Dibuat dengan penuh cinta.</p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all text-xs font-medium border border-white/20 group"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
};
