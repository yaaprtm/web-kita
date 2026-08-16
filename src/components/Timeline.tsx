'use client';

import React from 'react';
import Image from 'next/image';
import { Heart, MapPin, Calendar, Sparkles } from 'lucide-react';
import { timelineData } from '@/data/timeline';

export const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="py-20 px-4 md:px-8 relative bg-ivory-50/50">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blush-100/80 border border-blush-200 text-blush-500 text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles size={14} className="text-rosegold-gold" />
            <span>Kisah Cinta Kita</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-warm-900 mb-4">
            Timeline Perjalanan Hubungan
          </h2>
          <p className="font-serif italic text-warm-700 text-base md:text-lg max-w-xl mx-auto">
            Setiap langkah kecil yang membawa Arya dan Nadina menyatu dalam hangatnya ikatan sejati.
          </p>
        </div>

        {/* Timeline Items Container */}
        <div className="relative">
          {/* Vertical Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blush-200 via-rosegold-gold to-blush-200 transform -translate-x-1/2 rounded-full" />

          {/* Moments List */}
          <div className="flex flex-col gap-12 md:gap-16">
            {timelineData.map((moment, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={moment.id}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Node Badge */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-10 w-10 h-10 rounded-full bg-white border-2 border-rosegold-gold shadow-md flex items-center justify-center text-blush-500 hover:scale-125 transition-transform duration-300">
                    <Heart size={18} className="fill-current" />
                  </div>

                  {/* Content Card Side */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-blush-100 shadow-card-warm hover:shadow-rose-glow transition-all duration-300 group">
                      
                      {/* Top Meta Info */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blush-50 text-blush-500 text-xs font-medium border border-blush-100">
                          <Calendar size={13} className="text-rosegold-gold" />
                          {moment.dateStr}
                        </span>
                        
                        <span className="inline-flex items-center gap-1 text-warm-700 text-xs font-medium">
                          <MapPin size={13} className="text-blush-400" />
                          {moment.location}
                        </span>
                      </div>

                      {/* Badge if available */}
                      {moment.badge && (
                        <div className="mb-2">
                          <span className="text-[11px] font-semibold tracking-wider text-rosegold-dark uppercase bg-rosegold-light/20 px-2.5 py-0.5 rounded-md">
                            {moment.badge}
                          </span>
                        </div>
                      )}

                      {/* Moment Title */}
                      <h3 className="font-serif text-2xl font-bold text-warm-900 mb-3 group-hover:text-blush-500 transition-colors">
                        {moment.title}
                      </h3>

                      {/* Narrative Story (Detailed & Heartwarming) */}
                      <p className="text-warm-800 text-sm md:text-base leading-relaxed font-light mb-4">
                        {moment.story}
                      </p>

                      {/* Moment Highlights Badges */}
                      {moment.highlights && moment.highlights.length > 0 && (
                        <div className="flex flex-wrap gap-2 pt-2 border-t border-blush-50">
                          {moment.highlights.map((item, hIdx) => (
                            <span
                              key={hIdx}
                              className="text-xs text-warm-700 bg-ivory-100 px-2.5 py-1 rounded-lg font-medium"
                            >
                              ✨ {item}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Moment Photo Side */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border-4 border-white group hover:scale-[1.02] transition-transform duration-500">
                      <Image
                        src={moment.photoUrl}
                        alt={moment.photoCaption}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 500px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-warm-900/60 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <p className="font-serif text-xs md:text-sm font-medium italic opacity-95">
                          &ldquo;{moment.photoCaption}&rdquo;
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
