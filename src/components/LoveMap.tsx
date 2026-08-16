'use client';

import React, { useState } from 'react';
import { X, MapPin, Calendar, Heart, Map } from 'lucide-react';
import { mapLocations } from '@/data/mapLocations';
import { MapLocation } from '@/types';
import { SectionLabel, DoodleStar, DoodleUnderline } from './Doodles';

const colorTokens: Record<string, { pin: string; ring: string; badge: string; glow: string }> = {
  blush:   { pin: '#E07868', ring: '#FFE4D8', badge: 'bg-blush-100 text-blush-500',  glow: 'drop-shadow(0 0 8px rgba(224,120,104,0.7))' },
  rosegold:{ pin: '#C9848A', ring: '#F5D5D0', badge: 'bg-dusty-light text-warm-900', glow: 'drop-shadow(0 0 8px rgba(201,132,138,0.7))' },
  warm:    { pin: '#6B5248', ring: '#E4D8C8', badge: 'bg-ivory-200 text-warm-800',   glow: 'drop-shadow(0 0 8px rgba(107,82,72,0.6))' },
  gold:    { pin: '#D4A520', ring: '#FEF9C3', badge: 'bg-mustard-100 text-mustard-700', glow: 'drop-shadow(0 0 12px rgba(212,165,32,0.9))' },
};

function buildSmoothPath(locs: MapLocation[]): string {
  if (locs.length < 2) return '';
  let d = `M ${locs[0].cx} ${locs[0].cy}`;
  for (let i = 1; i < locs.length; i++) {
    const prev = locs[i - 1];
    const curr = locs[i];
    const cpx1 = (prev.cx + curr.cx) / 2;
    const cpy1 = prev.cy;
    const cpx2 = (prev.cx + curr.cx) / 2;
    const cpy2 = curr.cy;
    d += ` C ${cpx1} ${cpy1}, ${cpx2} ${cpy2}, ${curr.cx} ${curr.cy}`;
  }
  return d;
}

interface PopupProps {
  loc: MapLocation;
  onClose: () => void;
}

const LocationPopup: React.FC<PopupProps> = ({ loc, onClose }) => {
  const tokens = colorTokens[loc.color];
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-warm-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative max-w-sm w-full bg-white rounded-3xl shadow-2xl border-2 border-warm-200 overflow-hidden">
        {/* Top accent line */}
        <div className="h-2.5 w-full" style={{ background: tokens.pin }} />

        <div className="p-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-ivory-100 hover:bg-blush-100 text-warm-700 transition-colors"
          >
            <X size={18} />
          </button>

          <div className="flex items-center gap-3 mb-3">
            <div
              className="w-12 h-12 rounded-2xl flex flex-col items-center justify-center text-white font-bold text-sm shadow-md"
              style={{ background: tokens.pin }}
            >
              <span className="text-xl leading-none">{loc.emoji}</span>
              <span className="font-hand text-xs font-semibold mt-0.5">#{loc.order}</span>
            </div>
            <div>
              <span className={`inline-block font-hand text-xs font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-1 ${tokens.badge}`}>
                {loc.area}
              </span>
              <h3 className="font-hand text-2xl font-bold text-warm-900 leading-tight">{loc.name}</h3>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-warm-700 font-medium mb-3">
            <Calendar size={13} style={{ color: tokens.pin }} />
            <span>{loc.date}</span>
          </div>

          <p className="font-hand text-lg italic text-warm-800 leading-relaxed">
            &ldquo;{loc.story}&rdquo;
          </p>

          <div className="mt-5 pt-4 border-t border-warm-100 flex items-center justify-between">
            <span className="font-hand text-sm text-warm-700">Lokasi #{loc.order} dari 7</span>
            <Heart size={15} className="fill-current" style={{ color: tokens.pin }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export const LoveMap: React.FC = () => {
  const [active, setActive] = useState<MapLocation | null>(null);
  const sortedLocs = [...mapLocations].sort((a, b) => a.order - b.order);
  const smoothPath = buildSmoothPath(sortedLocs);

  return (
    <section id="lovemap" className="py-20 px-4 md:px-8 bg-ivory-100/80 relative">
      <div className="max-w-5xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-12">
          <SectionLabel color="bg-dusty-light">🗺️ peta jejak kita</SectionLabel>
          
          <h2 className="font-hand text-4xl md:text-6xl font-bold text-warm-900 mt-3 mb-2">
            Peta Perjalanan Cinta
          </h2>
          <DoodleUnderline className="text-mustard-500 mx-auto mb-3" width={200} />
          
          <p className="font-hand text-xl text-warm-700 max-w-lg mx-auto italic">
            7 titik lokasi saksi perjalanan kita. Klik pin lokasi buat baca ceritanya.
          </p>
        </div>

        {/* DESKTOP: SVG Illustrated Map */}
        <div className="hidden sm:block bg-white/90 backdrop-blur-md border-2 border-dashed border-warm-200 rounded-3xl shadow-card-warm p-6 md:p-10 relative overflow-hidden">
          
          {/* Legend */}
          <div className="absolute top-4 right-4 flex flex-col gap-1.5 font-hand text-xs text-warm-700 bg-ivory-50/90 rounded-2xl px-3.5 py-2.5 border border-warm-200 shadow-sm">
            <span className="font-bold text-warm-900 mb-0.5">Legenda Peta</span>
            <div className="flex items-center gap-1.5"><span className="w-3 h-0.5 border-t-2 border-dashed border-dusty-rose inline-block" />Jalur jalan</div>
            <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-blush-400 inline-block" />Titik singgah</div>
            <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-mustard-500 inline-block" />Tempat jadian 💍</div>
          </div>

          <svg
            viewBox="0 0 100 92"
            className="w-full"
            style={{ minHeight: 320 }}
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Area labels */}
            <text x="15" y="10" fill="#9C7E7E" fontSize="3" fontFamily="Caveat, cursive" fontWeight="bold" opacity="0.6">Jakarta Timur</text>
            <text x="35" y="72" fill="#9C7E7E" fontSize="3" fontFamily="Caveat, cursive" fontWeight="bold" opacity="0.6">Depok</text>
            <text x="58" y="20" fill="#9C7E7E" fontSize="3" fontFamily="Caveat, cursive" fontWeight="bold" opacity="0.6">Puncak</text>
            <text x="75" y="84" fill="#9C7E7E" fontSize="3" fontFamily="Caveat, cursive" fontWeight="bold" opacity="0.6">Bogor</text>

            {/* Dashed connecting path */}
            <path
              d={smoothPath}
              fill="none"
              stroke="#E07868"
              strokeWidth="0.8"
              strokeDasharray="2.5 1.8"
              strokeLinecap="round"
              opacity="0.85"
            />

            {/* Pins */}
            {sortedLocs.map((loc) => {
              const tokens = colorTokens[loc.color];
              const isGold = loc.color === 'gold';
              return (
                <g
                  key={loc.id}
                  className="cursor-pointer"
                  onClick={() => setActive(loc)}
                >
                  <circle
                    cx={loc.cx}
                    cy={loc.cy}
                    r={isGold ? 5 : 3.8}
                    fill={tokens.ring}
                    opacity="0.55"
                  >
                    <animate
                      attributeName="r"
                      values={isGold ? '5;6.5;5' : '3.8;5;3.8'}
                      dur={isGold ? '2s' : '3s'}
                      repeatCount="indefinite"
                    />
                  </circle>

                  <circle
                    cx={loc.cx}
                    cy={loc.cy}
                    r={isGold ? 3.2 : 2.5}
                    fill={tokens.pin}
                    stroke="white"
                    strokeWidth="0.8"
                  />

                  <text
                    x={loc.cx}
                    y={loc.cy + 0.9}
                    textAnchor="middle"
                    fill="white"
                    fontSize={isGold ? '2.2' : '1.9'}
                    fontWeight="bold"
                    fontFamily="sans-serif"
                    pointerEvents="none"
                  >
                    {loc.order}
                  </text>

                  <text
                    x={loc.cx}
                    y={loc.cy + (isGold ? 6.5 : 5.5)}
                    textAnchor="middle"
                    fill="#2D1E18"
                    fontSize="2.6"
                    fontFamily="Caveat, cursive"
                    fontWeight="bold"
                    pointerEvents="none"
                  >
                    {loc.name}
                  </text>
                </g>
              );
            })}
          </svg>

          <p className="text-center font-hand text-base text-warm-700 mt-2 opacity-80 flex items-center justify-center gap-1.5">
            <MapPin size={14} className="text-dusty-rose" />
            klik titik pin untuk baca cerita lengkap di tiap lokasi ✨
          </p>
        </div>

        {/* MOBILE: Card List */}
        <div className="sm:hidden flex flex-col gap-4">
          {sortedLocs.map((loc) => {
            const tokens = colorTokens[loc.color];
            return (
              <button
                key={loc.id}
                onClick={() => setActive(loc)}
                className="w-full text-left bg-white border border-warm-200 rounded-2xl shadow-sm hover:shadow-md p-4 flex items-start gap-4 transition-all"
              >
                <div
                  className="w-11 h-11 rounded-2xl flex flex-col items-center justify-center text-white flex-shrink-0 shadow"
                  style={{ background: tokens.pin }}
                >
                  <span className="text-lg leading-none">{loc.emoji}</span>
                  <span className="font-hand text-xs font-bold mt-0.5">#{loc.order}</span>
                </div>
                <div className="min-w-0">
                  <span className="font-hand text-xs font-semibold text-warm-700 uppercase tracking-wide">{loc.date}</span>
                  <h4 className="font-hand font-bold text-warm-900 text-xl leading-tight mt-0.5">{loc.name}</h4>
                  <p className="font-sans text-xs text-warm-700 mt-1 line-clamp-2 font-light">{loc.story}</p>
                </div>
              </button>
            );
          })}
          <p className="text-center font-hand text-base text-warm-700 opacity-80">
            tap kartu untuk membaca cerita lengkap ✨
          </p>
        </div>

      </div>

      {active && <LocationPopup loc={active} onClose={() => setActive(null)} />}
    </section>
  );
};
