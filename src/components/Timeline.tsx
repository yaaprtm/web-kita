'use client';

import React from 'react';
import Image from 'next/image';
import { Heart, MapPin, Calendar } from 'lucide-react';
import { timelineData } from '@/data/timeline';
import { DoodleHeart, DoodleStar, DoodleUnderline, SectionLabel, WashiTape } from './Doodles';

const WASHI_COLORS = ['rgba(245,216,120,0.75)', 'rgba(232,168,160,0.75)', 'rgba(201,132,138,0.75)'];
const ROTATIONS = ['rotate-[-2deg]', 'rotate-[2deg]', 'rotate-[-1.5deg]'];

export const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="py-20 px-4 md:px-8 relative bg-ivory-100/70">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <SectionLabel color="bg-mustard-100">📖 cerita NAYA</SectionLabel>
          
          <h2 className="font-hand text-4xl md:text-6xl font-bold text-warm-900 mt-3 mb-2">
            Perjalanan Cerita NAYA
          </h2>
          <DoodleUnderline className="text-dusty-pink mx-auto mb-3" width={220} />
          
          <p className="font-hand text-xl text-warm-700 max-w-lg mx-auto italic">
            dari yang awalnya cuma ketemuan gak sengaja, eh malah keterusan bareng tiap hari.
          </p>

          <DoodleStar className="absolute top-0 right-10 text-mustard-500 opacity-60" size={24} />
          <DoodleHeart className="absolute bottom-0 left-8 text-dusty-rose opacity-50" size={22} />
        </div>

        {/* Timeline Items Container */}
        <div className="relative">
          {/* Vertical Center Line — Hand Drawn dashed look */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 border-r-2 border-dashed border-dusty-rose/40 transform -translate-x-1/2" />

          {/* Moments List */}
          <div className="flex flex-col gap-12 md:gap-16">
            {timelineData.map((moment, idx) => {
              const isEven = idx % 2 === 0;
              const tapeColor = WASHI_COLORS[idx % WASHI_COLORS.length];
              const rotation = ROTATIONS[idx % ROTATIONS.length];

              return (
                <div
                  key={moment.id}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Node Badge */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-10 w-10 h-10 rounded-full bg-white border-2 border-dusty-rose shadow-sm flex items-center justify-center text-dusty-rose hover:scale-125 transition-transform duration-300">
                    <Heart size={18} className="fill-current" />
                  </div>

                  {/* Content Card Side */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-dusty-light/60 shadow-card-warm hover:shadow-rose-glow transition-all duration-300 group relative">
                      
                      {/* Top Meta Info */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ivory-100 text-warm-800 font-hand text-sm font-semibold border border-warm-200">
                          <Calendar size={13} className="text-dusty-rose" />
                          {moment.dateStr}
                        </span>
                        
                        <span className="inline-flex items-center gap-1 text-warm-700 font-hand text-sm">
                          <MapPin size={13} className="text-mustard-500" />
                          {moment.location}
                        </span>
                      </div>

                      {/* Badge */}
                      {moment.badge && (
                        <div className="mb-2">
                          <span className="text-xs font-hand font-bold tracking-wider text-warm-800 uppercase bg-mustard-100 px-2.5 py-0.5 rounded-md border border-mustard-300/40">
                            ✨ {moment.badge}
                          </span>
                        </div>
                      )}

                      {/* Moment Title */}
                      <h3 className="font-hand text-3xl font-bold text-warm-900 mb-2 group-hover:text-dusty-rose transition-colors">
                        {moment.title}
                      </h3>

                      {/* Narrative Story */}
                      <p className="font-sans text-warm-800 text-sm md:text-base leading-relaxed font-light mb-4">
                        {moment.story}
                      </p>

                      {/* Moment Highlights Badges */}
                      {moment.highlights && moment.highlights.length > 0 && (
                        <div className="flex flex-wrap gap-2 pt-3 border-t border-dusty-light/40">
                          {moment.highlights.map((item, hIdx) => (
                            <span
                              key={hIdx}
                              className="font-hand text-sm text-warm-800 bg-ivory-100 border border-warm-200 px-2.5 py-0.5 rounded-lg"
                            >
                              📌 {item}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Moment Photo Side (Polaroid style) */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <div className={`polaroid ${rotation} hover:rotate-0 transition-transform duration-500 hover:scale-[1.02]`}>
                      <WashiTape color={tapeColor} top={-9} right={20} rotate="5deg" />
                      <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                        <Image
                          src={moment.photoUrl}
                          alt={moment.photoCaption}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 450px"
                        />
                      </div>
                      <div className="pt-2.5 text-center">
                        <p className="font-hand text-base text-warm-800 italic">
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
