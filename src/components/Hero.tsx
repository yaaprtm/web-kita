'use client';

import React from 'react';
import Image from 'next/image';
import { ChevronDown, Sparkles } from 'lucide-react';
import { coupleData } from '@/data/couple';
import { DaysCounter } from './DaysCounter';
import { DoodleHeart, DoodleStar, DoodleArrow, DoodleUnderline } from './Doodles';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-28 md:pt-36 pb-16 md:pb-24 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">

        {/* Tape label badge */}
        <div className="tape-strip text-sm text-warm-800 mb-6 animate-fadeIn">
          ✏️ jurnal digital pasangan
        </div>

        {/* Decorative doodle stars */}
        <div className="relative mb-2">
          <DoodleStar className="absolute -top-8 -left-6 text-mustard-500 opacity-70 doodle-reveal in-view" size={28} />
          <DoodleStar className="absolute -top-4 right-0 text-dusty-rose opacity-60 doodle-reveal in-view" size={18} />

          {/* Main Names — handwritten style */}
          <h1 className="font-hand text-6xl sm:text-7xl md:text-9xl font-bold text-warm-900 leading-none tracking-wide">
            {coupleData.groomName}{' '}
            <span className="text-dusty-rose">&</span>{' '}
            {coupleData.brideName}
          </h1>
        </div>

        {/* Doodle underline below title */}
        <div className="mb-6">
          <DoodleUnderline className="text-mustard-500 mx-auto" width={260} />
        </div>

        {/* Tagline — lowercase casual */}
        <p className="font-hand text-xl sm:text-2xl md:text-3xl text-warm-700 max-w-2xl mx-auto mb-10 leading-relaxed italic">
          &ldquo;{coupleData.tagline}&rdquo;
        </p>

        {/* Hero Polaroid Photo */}
        <div className="relative my-4 group">
          {/* Polaroid frame */}
          <div className="polaroid max-w-sm sm:max-w-md mx-auto rotate-[-1.5deg] hover:rotate-0 transition-transform duration-500 hover:scale-[1.02]">
            {/* Washi tape */}
            <div className="washi-tape" style={{ background: 'rgba(245,216,120,0.7)', top: -9, left: '50%', transform: 'translateX(-50%) rotate(-2deg)' }} />

            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm">
              <Image
                src={coupleData.heroPhoto}
                alt={coupleData.heroPhotoCaption}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 480px"
              />
            </div>

            {/* Caption below photo (polaroid style) */}
            <div className="pt-2 text-center">
              <p className="font-hand text-lg text-warm-800 font-semibold">{coupleData.heroPhotoCaption}</p>
              <p className="font-hand text-sm text-warm-600 mt-0.5">foto pertama kita bareng 📸</p>
            </div>
          </div>

          {/* Floating doodle hearts around polaroid */}
          <DoodleHeart className="absolute -top-6 -right-8 text-dusty-rose opacity-50 animate-pulse" size={26} />
          <DoodleHeart className="absolute bottom-12 -left-8 text-mustard-500 opacity-40 animate-pulse" size={20} />
        </div>

        {/* Days Together Counter */}
        <DaysCounter />

        {/* Arrow doodle + CTA */}
        <div className="mt-8 flex flex-col items-center gap-2">
          <p className="font-hand text-lg text-warm-700">scroll ke bawah, baca ceritanya</p>
          <DoodleArrow className="text-dusty-rose mx-auto rotate-90" size={38} />
          <a
            href="#timeline"
            className="mt-1 inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-warm-900 text-ivory-50 font-hand font-bold text-lg hover:bg-dusty-rose transition-all duration-300 rotate-[-0.5deg] hover:rotate-0 shadow-md hover:shadow-rose-glow"
          >
            Baca Cerita Kita <ChevronDown size={18} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
