'use client';

import React from 'react';
import { Heart } from 'lucide-react';

// Doodle SVG shapes used throughout the scrapbook
export const DoodleHeart = ({ className = '', size = 24 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
    <path
      d="M12 21C12 21 3 14.5 3 8.5C3 5.5 5.5 3 8.5 3C10 3 11.5 3.8 12 5C12.5 3.8 14 3 15.5 3C18.5 3 21 5.5 21 8.5C21 14.5 12 21 12 21Z"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
    />
  </svg>
);

export const DoodleStar = ({ className = '', size = 24 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
    <path d="M12 2 L13.5 9 L20 9 L15 13.5 L17 20 L12 16 L7 20 L9 13.5 L4 9 L10.5 9 Z"
      stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" fill="currentColor" fillOpacity="0.25" />
  </svg>
);

export const DoodleArrow = ({ className = '', size = 40 }: { className?: string; size?: number }) => (
  <svg width={size} height={size * 0.6} viewBox="0 0 60 36" className={className} fill="none">
    <path d="M4 18 C15 10 35 26 52 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M46 12 L54 18 L46 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const DoodleUnderline = ({ className = '', width = 120 }: { className?: string; width?: number }) => (
  <svg width={width} height="12" viewBox={`0 0 ${width} 12`} className={className} fill="none">
    <path
      d={`M4 8 C${width * 0.2} 4, ${width * 0.6} 12, ${width - 4} 6`}
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
    />
  </svg>
);

export const DoodleSpiral = ({ className = '', size = 28 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" className={className} fill="none">
    <path
      d="M14 14 C14 10 18 8 20 11 C22 14 20 19 16 20 C11 21 7 17 8 12 C9 6 16 3 21 6"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
    />
  </svg>
);

// Washi tape strip decoration for polaroid corners
export const WashiTape = ({ color, rotate = '-8deg', top, left, right, bottom }: {
  color: string;
  rotate?: string;
  top?: string | number;
  left?: string | number;
  right?: string | number;
  bottom?: string | number;
}) => (
  <div
    className="washi-tape"
    style={{
      background: color,
      transform: `rotate(${rotate})`,
      top, left, right, bottom,
    }}
  />
);

// Scrapbook section label (tape-strip style)
export const SectionLabel = ({ children, color = 'bg-mustard-100' }: { children: React.ReactNode; color?: string }) => (
  <span className={`tape-strip text-sm font-hand font-semibold text-warm-800 ${color}`}>
    {children}
  </span>
);
