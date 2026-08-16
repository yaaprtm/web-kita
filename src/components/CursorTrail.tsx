'use client';

import React, { useEffect, useRef, useCallback } from 'react';

interface TrailHeart {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
}

const COLORS = ['#E07868', '#C9848A', '#F0A090', '#D4A520', '#E8A8A0'];
const MAX_HEARTS = 12;

export const CursorTrail: React.FC = () => {
  const heartsRef = useRef<TrailHeart[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const counterRef = useRef(0);
  const lastPosRef = useRef({ x: 0, y: 0 });
  const throttleRef = useRef(0);

  const createHeart = useCallback((x: number, y: number) => {
    const id = counterRef.current++;
    const size = 10 + Math.random() * 8;
    const color = COLORS[Math.floor(Math.random() * COLORS.length)];

    // Create DOM element directly for best performance (no React re-renders)
    const el = document.createElement('div');
    el.className = 'cursor-heart';
    el.style.cssText = `
      left: ${x - size / 2}px;
      top:  ${y - size / 2}px;
      width: ${size}px;
      height: ${size}px;
      color: ${color};
      font-size: ${size}px;
      line-height: 1;
    `;
    el.innerHTML = '♥';
    el.setAttribute('aria-hidden', 'true');

    containerRef.current?.appendChild(el);

    // Remove after animation completes
    setTimeout(() => {
      el.remove();
    }, 700);
  }, []);

  useEffect(() => {
    // Only activate on devices with fine pointer (mouse), not touch screens
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      // Throttle to ~60fps and minimum movement distance
      if (now - throttleRef.current < 50) return;
      const dx = e.clientX - lastPosRef.current.x;
      const dy = e.clientY - lastPosRef.current.y;
      if (dx * dx + dy * dy < 400) return; // min 20px movement

      throttleRef.current = now;
      lastPosRef.current = { x: e.clientX, y: e.clientY };
      createHeart(e.clientX, e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [createHeart]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-[9998] overflow-hidden"
      aria-hidden="true"
    />
  );
};
