'use client';

import React, { useState } from 'react';
import { X, MapPin, Calendar, Heart, Sparkles, Map } from 'lucide-react';
import { mapLocations } from '@/data/mapLocations';
import { MapLocation } from '@/types';

// Color token mappings
const colorTokens: Record<string, { pin: string; ring: string; badge: string; glow: string }> = {
  blush:   { pin: '#F472B6', ring: '#FCE7F3', badge: 'bg-blush-100 text-blush-500',  glow: 'drop-shadow(0 0 8px rgba(244,114,182,0.7))' },
  rosegold:{ pin: '#C5A059', ring: '#F4D3C5', badge: 'bg-rosegold-light text-rosegold-dark', glow: 'drop-shadow(0 0 8px rgba(197,160,89,0.7))' },
  warm:    { pin: '#9C7E7E', ring: '#E8DFD5', badge: 'bg-ivory-200 text-warm-800',   glow: 'drop-shadow(0 0 8px rgba(156,126,126,0.6))' },
  gold:    { pin: '#D4AF37', ring: '#FEF9C3', badge: 'bg-yellow-50 text-yellow-700', glow: 'drop-shadow(0 0 12px rgba(212,175,55,0.9))' },
};

// Build SVG polyline path string from location coords
function buildPath(locs: MapLocation[]): string {
  return locs.map((l, i) => `${l.cx},${l.cy}`).join(' ');
}

// Build SVG cubic bezier smooth path
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
      <div className="relative max-w-sm w-full bg-white rounded-3xl shadow-2xl border border-blush-100 overflow-hidden">
        {/* Colored top accent bar */}
        <div className="h-2 w-full" style={{ background: tokens.pin }} />

        <div className="p-6">
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-ivory-100 hover:bg-blush-100 text-warm-700 transition-colors"
          >
            <X size={18} />
          </button>

          {/* Order & Emoji */}
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-12 h-12 rounded-2xl flex flex-col items-center justify-center text-white font-bold text-sm shadow-md"
              style={{ background: tokens.pin }}
            >
              <span className="text-xl leading-none">{loc.emoji}</span>
              <span className="text-[9px] font-semibold mt-0.5">#{loc.order}</span>
            </div>
            <div>
              <span className={`inline-block text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-1 ${tokens.badge}`}>
                {loc.area}
              </span>
              <h3 className="font-serif text-xl font-bold text-warm-900 leading-tight">{loc.name}</h3>
            </div>
          </div>

          {/* Date */}
          <div className="flex items-center gap-1.5 text-xs text-warm-700 font-medium mb-3">
            <Calendar size={13} style={{ color: tokens.pin }} />
            <span>{loc.date}</span>
          </div>

          {/* Story */}
          <p className="font-serif italic text-warm-800 text-sm leading-relaxed">
            &ldquo;{loc.story}&rdquo;
          </p>

          {/* Footer */}
          <div className="mt-5 pt-4 border-t border-blush-50 flex items-center justify-between">
            <span className="text-xs text-warm-700 font-serif">Lokasi #{loc.order} dari 7</span>
            <Heart size={14} className="fill-current" style={{ color: tokens.pin }} />
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
    <section id="lovemap" className="py-20 px-4 md:px-8 bg-ivory-50/60">
      <div className="max-w-5xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blush-100/80 border border-blush-200 text-blush-500 text-xs font-semibold uppercase tracking-widest mb-3">
            <Map size={14} className="text-rosegold-gold" />
            <span>Peta Perjalanan</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-warm-900 mb-4">
            Peta Perjalanan Cinta
          </h2>
          <p className="font-serif italic text-warm-700 text-base md:text-lg max-w-xl mx-auto">
            Tujuh tempat yang menjadi saksi tumbuhnya rasa cinta Arya & Nadina. Klik tiap titik untuk membaca ceritanya.
          </p>
        </div>

        {/* ─── DESKTOP / TABLET: SVG Illustrated Map ─── */}
        <div className="hidden sm:block bg-white/90 backdrop-blur-md border border-blush-100 rounded-3xl shadow-card-warm p-6 md:p-10 relative overflow-hidden">

          {/* Decorative background texture */}
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle, #9C7E7E 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />

          {/* Legend */}
          <div className="absolute top-4 right-4 flex flex-col gap-1.5 text-[11px] text-warm-700 font-medium bg-white/80 rounded-2xl px-3 py-2.5 border border-blush-100 shadow-sm">
            <span className="text-[10px] uppercase tracking-widest font-semibold text-warm-900 mb-0.5">Legenda</span>
            <div className="flex items-center gap-1.5"><span className="w-3 h-0.5 border-t-2 border-dashed border-blush-300 inline-block" />Jalur perjalanan</div>
            <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-blush-400 inline-block" />Lokasi berkesan</div>
            <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-rosegold-gold inline-block" />Titik jadian 💍</div>
          </div>

          {/* ─── SVG Canvas ─── */}
          <svg
            viewBox="0 0 100 92"
            className="w-full"
            style={{ minHeight: 320 }}
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Soft gradient background blob */}
            <defs>
              <radialGradient id="mapGrad" cx="50%" cy="50%" r="70%">
                <stop offset="0%" stopColor="#FFF5F7" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#FAF7F2" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="100" height="92" fill="url(#mapGrad)" />

            {/* Jakarta / Depok / Puncak / Bogor area label clusters */}
            <text x="15" y="10" fill="#C5A099" fontSize="3" fontFamily="serif" opacity="0.6">Jakarta Timur</text>
            <text x="35" y="72" fill="#C5A099" fontSize="3" fontFamily="serif" opacity="0.6">Depok</text>
            <text x="58" y="20" fill="#C5A099" fontSize="3" fontFamily="serif" opacity="0.6">Puncak</text>
            <text x="75" y="84" fill="#C5A099" fontSize="3" fontFamily="serif" opacity="0.6">Bogor</text>

            {/* ─── Dashed connecting path ─── */}
            <path
              d={smoothPath}
              fill="none"
              stroke="#E8B4B8"
              strokeWidth="0.8"
              strokeDasharray="2.5 1.8"
              strokeLinecap="round"
              opacity="0.85"
            />

            {/* ─── Location Pins ─── */}
            {sortedLocs.map((loc) => {
              const tokens = colorTokens[loc.color];
              const isGold = loc.color === 'gold';
              return (
                <g
                  key={loc.id}
                  className="cursor-pointer"
                  onClick={() => setActive(loc)}
                  style={{ filter: `drop-shadow(0 2px 4px rgba(0,0,0,0.1))` }}
                >
                  {/* Pulsing outer ring (decorative) */}
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
                    <animate
                      attributeName="opacity"
                      values="0.55;0.15;0.55"
                      dur={isGold ? '2s' : '3s'}
                      repeatCount="indefinite"
                    />
                  </circle>

                  {/* Main pin circle */}
                  <circle
                    cx={loc.cx}
                    cy={loc.cy}
                    r={isGold ? 3.2 : 2.5}
                    fill={tokens.pin}
                    stroke="white"
                    strokeWidth="0.8"
                  />

                  {/* Order number label */}
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

                  {/* Location name label */}
                  <text
                    x={loc.cx}
                    y={loc.cy + (isGold ? 6.5 : 5.5)}
                    textAnchor="middle"
                    fill="#4A3E3E"
                    fontSize="2.4"
                    fontFamily="serif"
                    pointerEvents="none"
                  >
                    {loc.name}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Hint text */}
          <p className="text-center text-xs text-warm-700 mt-2 font-medium opacity-70 flex items-center justify-center gap-1.5">
            <MapPin size={13} className="text-blush-400" />
            Klik titik pin untuk membaca cerita di tiap lokasi
          </p>
        </div>

        {/* ─── MOBILE: Vertical Card List ─── */}
        <div className="sm:hidden flex flex-col gap-4">
          {sortedLocs.map((loc, idx) => {
            const tokens = colorTokens[loc.color];
            return (
              <button
                key={loc.id}
                onClick={() => setActive(loc)}
                className="w-full text-left bg-white/90 border border-blush-100 rounded-2xl shadow-sm hover:shadow-md p-4 flex items-start gap-4 transition-all active:scale-[0.98]"
              >
                {/* Pin icon */}
                <div
                  className="w-11 h-11 rounded-2xl flex flex-col items-center justify-center text-white flex-shrink-0 shadow"
                  style={{ background: tokens.pin }}
                >
                  <span className="text-lg leading-none">{loc.emoji}</span>
                  <span className="text-[9px] font-bold mt-0.5">#{loc.order}</span>
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-semibold text-warm-700 uppercase tracking-wide">{loc.date}</span>
                  <h4 className="font-serif font-bold text-warm-900 text-base leading-tight mt-0.5">{loc.name}</h4>
                  <p className="text-xs text-warm-700 mt-1 line-clamp-2 font-light">{loc.story}</p>
                </div>
                {/* Connector dashes (except last) */}
              </button>
            );
          })}
          <p className="text-center text-xs text-warm-700 font-medium opacity-70">
            Tap kartu untuk membaca cerita lengkap ✨
          </p>
        </div>

      </div>

      {/* Popup Modal */}
      {active && (
        <LocationPopup loc={active} onClose={() => setActive(null)} />
      )}
    </section>
  );
};
