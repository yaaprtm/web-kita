'use client';

import React from 'react';
import Image from 'next/image';
import { Heart, Sparkles, ChevronDown, Compass } from 'lucide-react';
import { coupleData } from '@/data/couple';
import { DaysCounter } from './DaysCounter';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-28 md:pt-36 pb-16 md:pb-24 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center">

        {/* Decorative Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blush-100/70 border border-blush-200 text-blush-500 text-xs md:text-sm font-medium shadow-xs mb-6 animate-fadeIn">
          <Sparkles size={16} className="text-rosegold-gold" />
          <span>Website Perayaan Hubungan</span>
          <Heart size={14} className="fill-current text-blush-500" />
        </div>

        {/* Main Names Typography */}
        <h1 className="font-serif text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight text-warm-900 mb-4 leading-tight">
          {coupleData.groomName}{' '}
          <span className="font-script font-normal text-rosegold-gold text-6xl sm:text-7xl md:text-9xl mx-1 inline-block transform hover:rotate-6 transition-transform">
            &
          </span>{' '}
          {coupleData.brideName}
        </h1>

        {/* Romantic Tagline */}
        <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-warm-700 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          &ldquo;{coupleData.tagline}&rdquo;
        </p>

        {/* Hero Photo Card with Soft Rose Frame */}
        <div className="relative my-4 w-full max-w-md sm:max-w-lg aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white p-2 bg-white/60 backdrop-blur-md group hover:shadow-rose-glow transition-all duration-500">
          <div className="relative w-full h-full rounded-2xl overflow-hidden">
            <Image
              src={coupleData.heroPhoto}
              alt={coupleData.heroPhotoCaption}
              fill
              priority
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 500px"
            />
            {/* Soft Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-warm-900/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
            
            {/* Photo Caption Badge */}
            <div className="absolute bottom-3 left-3 right-3 bg-white/80 backdrop-blur-md px-4 py-2 rounded-xl border border-white/60 flex items-center justify-between shadow-sm">
              <span className="font-serif text-xs md:text-sm font-semibold text-warm-900">
                {coupleData.heroPhotoCaption}
              </span>
              <Heart size={14} className="text-blush-500 fill-current" />
            </div>
          </div>

          {/* Decorative Corner Stars */}
          <div className="absolute -top-3 -right-3 w-8 h-8 bg-rosegold-gold rounded-full flex items-center justify-center text-white shadow-md">
            <Sparkles size={16} />
          </div>
        </div>

        {/* Days Together Counter */}
        <DaysCounter />

        {/* Scroll Down Action */}
        <a
          href="#timeline"
          className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-warm-900 text-white font-medium text-sm shadow-md hover:bg-blush-500 hover:shadow-lg transition-all duration-300 group"
        >
          <Compass size={18} className="group-hover:rotate-45 transition-transform duration-300" />
          <span>Jelajahi Cerita Perjalanan</span>
          <ChevronDown size={16} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};
