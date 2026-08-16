'use client';

import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

export const BackgroundDecorations: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Background Soft Glow Radial Gradients */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blush-200/40 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -right-32 w-[30rem] h-[30rem] bg-rosegold-light/30 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-ivory-300/50 rounded-full blur-3xl" />

      {/* Floating Gentle Elements */}
      <div className="absolute top-20 left-[10%] animate-pulse opacity-20 text-blush-400">
        <Heart size={24} className="fill-current" />
      </div>
      <div className="absolute top-1/4 right-[8%] animate-bounce opacity-25 text-rosegold-gold" style={{ animationDuration: '4s' }}>
        <Sparkles size={20} />
      </div>
      <div className="absolute top-2/3 left-[5%] animate-pulse opacity-20 text-blush-300" style={{ animationDuration: '5s' }}>
        <Heart size={28} className="fill-current" />
      </div>
      <div className="absolute bottom-1/4 right-[12%] animate-pulse opacity-25 text-rosegold-gold" style={{ animationDuration: '6s' }}>
        <Sparkles size={22} />
      </div>

      {/* Top Corner Floral Decorative Accents */}
      <div className="absolute top-0 left-0 w-32 md:w-48 opacity-25 pointer-events-none">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-rosegold-gold stroke-current">
          <path d="M0 0C30 10 50 30 60 60C40 40 20 20 0 0Z" fill="currentColor" fillOpacity="0.1" />
          <path d="M0 20C20 30 35 45 45 70" strokeWidth="1" strokeDasharray="2 2" />
          <circle cx="60" cy="60" r="3" fill="currentColor" />
          <circle cx="45" cy="70" r="2" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute top-0 right-0 w-32 md:w-48 opacity-25 pointer-events-none transform scale-x-[-1]">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-rosegold-gold stroke-current">
          <path d="M0 0C30 10 50 30 60 60C40 40 20 20 0 0Z" fill="currentColor" fillOpacity="0.1" />
          <path d="M0 20C20 30 35 45 45 70" strokeWidth="1" strokeDasharray="2 2" />
          <circle cx="60" cy="60" r="3" fill="currentColor" />
          <circle cx="45" cy="70" r="2" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
};
