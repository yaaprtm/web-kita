'use client';

import React from 'react';
import { Heart, ArrowUp, Gift } from 'lucide-react';
import Link from 'next/link';
import { coupleData } from '@/data/couple';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-warm-900 text-ivory-50 pt-16 pb-12 px-4 overflow-hidden border-t-2 border-dashed border-warm-700">
      <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
        
        {/* Heart Icon */}
        <div className="w-12 h-12 rounded-full bg-dusty-rose/20 border border-dusty-pink/40 flex items-center justify-center text-dusty-pink mb-4 shadow-rose-glow">
          <Heart size={22} className="fill-current animate-pulse text-dusty-pink" />
        </div>

        {/* Title */}
        <h3 className="font-hand text-5xl md:text-6xl font-extrabold text-white mb-2 tracking-widest uppercase">
          NAYA
        </h3>

        {/* Closing Note */}
        <p className="font-hand text-xl text-ivory-200 max-w-lg mx-auto mb-6 leading-relaxed italic">
          &ldquo;makasih ya udah mampir dan baca jurnal cerita NAYA. semoga harimu makin seru! 🧡&rdquo;
        </p>

        {/* Anniversary Badge */}
        <div className="tape-strip text-sm font-hand text-warm-800 mb-6">
          ✨ NAYA resmi jadian • 2 November 2025
        </div>

        {/* Anniversary Page Link */}
        <Link
          href="/anniversary"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-dusty-rose/30 border border-white/20 text-ivory-100 hover:text-white font-hand text-lg transition-all duration-200 mb-10 group"
        >
          <Gift size={16} className="group-hover:animate-bounce text-mustard-300" />
          <span>Kejutan Anniversary NAYA 🎁</span>
        </Link>

        {/* Divider */}
        <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

        {/* Copyright & Back To Top */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 font-hand text-base text-ivory-300">
          <p>© {new Date().getFullYear()} Jurnal Digital NAYA. Dibuat penuh cinta.</p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-hand text-base transition-all border border-white/20 group"
          >
            <span>balik ke atas</span>
            <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
};
