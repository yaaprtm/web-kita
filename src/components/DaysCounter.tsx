'use client';

import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';
import { coupleData } from '@/data/couple';
import { DoodleHeart } from './Doodles';

interface Duration {
  years: number; months: number; days: number;
  hours: number; minutes: number; seconds: number;
  totalDays: number;
}

export const DaysCounter: React.FC = () => {
  const [duration, setDuration] = useState<Duration>({ years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0, totalDays: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const startDate = new Date(coupleData.anniversaryDate);
    const update = () => {
      const now = new Date();
      if (now < startDate) { setDuration({ years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0, totalDays: 0 }); return; }
      const diffMs = now.getTime() - startDate.getTime();
      const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
      let years = now.getFullYear() - startDate.getFullYear();
      let months = now.getMonth() - startDate.getMonth();
      let days = now.getDate() - startDate.getDate();
      if (days < 0) { months--; days += new Date(now.getFullYear(), now.getMonth(), 0).getDate(); }
      if (months < 0) { years--; months += 12; }
      setDuration({ years, months, days, hours: now.getHours(), minutes: now.getMinutes(), seconds: now.getSeconds(), totalDays });
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  if (!isClient) return null;

  const timeUnits = [
    { label: 'tahun', value: duration.years },
    { label: 'bulan', value: duration.months },
    { label: 'hari', value: duration.days },
    { label: 'jam', value: duration.hours },
    { label: 'menit', value: duration.minutes },
    { label: 'detik', value: duration.seconds },
  ];

  return (
    <div id="counter" className="w-full max-w-3xl mx-auto my-6 px-4">
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 border-2 border-dashed border-dusty-pink/40 shadow-card-warm text-center relative">
        {/* Corner doodles */}
        <DoodleHeart className="absolute top-3 left-3 text-dusty-rose opacity-40" size={20} />
        <DoodleHeart className="absolute top-3 right-3 text-mustard-500 opacity-40" size={16} />

        {/* Yellow tape label on top */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <div className="tape-strip text-sm font-hand text-warm-800 flex items-center gap-1.5">
            <Calendar size={13} className="text-dusty-rose" />
            jadian sejak 2 November 2025
          </div>
        </div>

        <h3 className="font-hand text-2xl md:text-3xl font-bold text-warm-900 mb-1 mt-2">
          sudah bareng selama...
        </h3>
        <p className="font-sans text-sm text-warm-700 mb-6">
          total <span className="font-semibold text-dusty-rose">{duration.totalDays} hari</span> penuh cerita dan tawa 🧡
        </p>

        {/* Counter boxes — scrapbook stamp style */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-3 mb-4">
          {timeUnits.map((unit, idx) => (
            <div
              key={idx}
              className="bg-ivory-100 border-2 border-warm-200 rounded-xl px-2 py-3 text-center hover:border-dusty-pink hover:-translate-y-1 transition-all duration-200"
            >
              <span className="font-hand text-3xl md:text-4xl font-bold text-warm-900 block">
                {String(unit.value).padStart(2, '0')}
              </span>
              <span className="font-hand text-xs text-warm-700 uppercase tracking-wide mt-1 block">
                {unit.label}
              </span>
            </div>
          ))}
        </div>

        <p className="font-hand text-sm text-warm-600 opacity-70">
          ⏱️ update tiap detik
        </p>
      </div>
    </div>
  );
};
