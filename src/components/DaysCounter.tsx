'use client';

import React, { useState, useEffect } from 'react';
import { Calendar, Heart, Clock } from 'lucide-react';
import { coupleData } from '@/data/couple';

interface Duration {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalDays: number;
}

export const DaysCounter: React.FC = () => {
  const [duration, setDuration] = useState<Duration>({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    totalDays: 0,
  });

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const startDate = new Date(coupleData.anniversaryDate);

    const updateCounter = () => {
      const now = new Date();

      // Ensure valid calculation if now is before start date in test environment
      if (now < startDate) {
        setDuration({
          years: 0,
          months: 0,
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          totalDays: 0,
        });
        return;
      }

      // Calculate total difference in milliseconds
      const diffMs = now.getTime() - startDate.getTime();
      const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

      // Calculate precise calendar Years, Months, Days
      let years = now.getFullYear() - startDate.getFullYear();
      let months = now.getMonth() - startDate.getMonth();
      let days = now.getDate() - startDate.getDate();

      if (days < 0) {
        months -= 1;
        // Days in previous month
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
      }

      if (months < 0) {
        years -= 1;
        months += 12;
      }

      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();

      setDuration({
        years,
        months,
        days,
        hours,
        minutes,
        seconds,
        totalDays,
      });
    };

    updateCounter();
    const interval = setInterval(updateCounter, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!isClient) {
    return (
      <div className="w-full py-8 flex items-center justify-center">
        <div className="animate-pulse flex gap-4">
          <div className="w-20 h-20 bg-blush-100/50 rounded-2xl" />
          <div className="w-20 h-20 bg-blush-100/50 rounded-2xl" />
          <div className="w-20 h-20 bg-blush-100/50 rounded-2xl" />
        </div>
      </div>
    );
  }

  const timeUnits = [
    { label: 'Tahun', value: duration.years },
    { label: 'Bulan', value: duration.months },
    { label: 'Hari', value: duration.days },
    { label: 'Jam', value: duration.hours },
    { label: 'Menit', value: duration.minutes },
    { label: 'Detik', value: duration.seconds },
  ];

  return (
    <div id="counter" className="w-full max-w-4xl mx-auto my-6 px-4">
      <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 md:p-10 border border-blush-200/60 shadow-soft-pink text-center relative overflow-hidden group">
        
        {/* Glow backdrop */}
        <div className="absolute inset-0 bg-gradient-to-r from-blush-100/30 via-ivory-100/50 to-rosegold-light/20 -z-10" />

        {/* Section Header */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blush-50 border border-blush-200 text-blush-500 text-xs font-semibold tracking-wider uppercase mb-3">
          <Calendar size={14} className="text-rosegold-gold" />
          <span>Tanggal Jadian: 2 November 2025</span>
        </div>

        <h3 className="font-serif text-2xl md:text-3xl font-bold text-warm-900 mb-2">
          Sudah Bersama Selama
        </h3>
        
        <p className="text-sm text-warm-700 max-w-md mx-auto mb-8 font-light">
          Total <span className="font-semibold text-blush-500">{duration.totalDays} hari</span> penuh cerita, senyuman, dan cinta yang tumbuh setiap harinya.
        </p>

        {/* Counter Grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4 mb-6">
          {timeUnits.map((unit, idx) => (
            <div
              key={idx}
              className="bg-ivory-50/90 border border-blush-100 rounded-2xl p-3 md:p-4 shadow-sm hover:shadow-md hover:border-blush-300 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center"
            >
              <span className="font-serif text-2xl md:text-4xl font-extrabold bg-gradient-to-b from-warm-900 to-warm-700 bg-clip-text text-transparent">
                {String(unit.value).padStart(2, '0')}
              </span>
              <span className="text-[11px] md:text-xs font-medium text-warm-700 uppercase tracking-widest mt-1">
                {unit.label}
              </span>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="inline-flex items-center gap-2 text-xs font-medium text-warm-700 bg-white/80 px-4 py-2 rounded-full border border-blush-100 shadow-xs">
          <Clock size={13} className="text-rosegold-gold" />
          <span>Real-time counter • Update setiap detik</span>
          <Heart size={12} className="text-blush-500 fill-current animate-pulse" />
        </div>
      </div>
    </div>
  );
};
