'use client';

import React, { useState } from 'react';
import { Calendar as CalendarIcon, Heart, MapPin, ArrowRight, X, Sparkles } from 'lucide-react';
import { timelineData } from '@/data/timeline';
import { SectionLabel, DoodleUnderline, DoodleHeart, WashiTape } from './Doodles';

interface CalendarEvent {
  day: number;
  monthIndex: number; // 0: Sept 2025, 1: Oct 2025, 2: Nov 2025
  monthName: string;
  year: number;
  title: string;
  location: string;
  shortSummary: string;
  targetId: string; // timeline moment id e.g. 'momen-1'
  emoji: string;
  isSpecial?: boolean;
}

const EVENTS: CalendarEvent[] = [
  {
    day: 30,
    monthIndex: 0,
    monthName: 'September',
    year: 2025,
    title: 'Pertama Kali Ketemu',
    location: 'Warkop Cakasa',
    shortSummary: 'Momen sapaan pertama NAYA di Warkop Cakasa.',
    targetId: 'momen-1',
    emoji: '☕',
  },
  {
    day: 15,
    monthIndex: 1,
    monthName: 'Oktober',
    year: 2025,
    title: 'Masa PDKT & Ngopi Hood',
    location: 'Hood Cipinang',
    shortSummary: 'Rutinitas ngopi santai sepulang kampus.',
    targetId: 'momen-2',
    emoji: '🍵',
  },
  {
    day: 1,
    monthIndex: 2,
    monthName: 'November',
    year: 2025,
    title: 'Perjalanan Puncak',
    location: 'Indomaret Depok & Puncak',
    shortSummary: 'Roadtrip ke Puncak & neduh hujan di Depok.',
    targetId: 'momen-3',
    emoji: '🌧️',
  },
  {
    day: 2,
    monthIndex: 2,
    monthName: 'November',
    year: 2025,
    title: 'Resmi Jadian! 💖',
    location: 'Jalan Raya Bogor',
    shortSummary: 'Momen Arya nembak Nadina & resmi jadian.',
    targetId: 'momen-3',
    emoji: '💍',
    isSpecial: true,
  },
];

const MONTHS = [
  { name: 'September 2025', monthIndex: 0, daysCount: 30, startDayOfWeek: 1 }, // Sept 1 2025 is Monday (1)
  { name: 'Oktober 2025', monthIndex: 1, daysCount: 31, startDayOfWeek: 3 },   // Oct 1 2025 is Wednesday (3)
  { name: 'November 2025', monthIndex: 2, daysCount: 30, startDayOfWeek: 6 },  // Nov 1 2025 is Saturday (6)
];

const DAY_NAMES = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];

export const MomentCalendar: React.FC = () => {
  const [activeMonthIdx, setActiveMonthIdx] = useState(2); // default November 2025
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);

  const currentMonth = MONTHS[activeMonthIdx];

  // Get events in active month
  const monthEvents = EVENTS.filter((e) => e.monthIndex === activeMonthIdx);

  // Generate grid cells
  const paddingDays = Array.from({ length: currentMonth.startDayOfWeek });
  const monthDays = Array.from({ length: currentMonth.daysCount }, (_, i) => i + 1);

  const handleScrollToTimeline = (targetId: string) => {
    setSelectedEvent(null);
    const element = document.getElementById(targetId) || document.getElementById('timeline');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="calendar" className="py-16 px-4 md:px-8 relative bg-ivory-50/80 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-10 relative">
          <SectionLabel color="bg-dusty-light">📅 kalender momen</SectionLabel>
          
          <h2 className="font-hand text-4xl md:text-6xl font-bold text-warm-900 mt-3 mb-2">
            Kalender Momen NAYA
          </h2>
          <DoodleUnderline className="text-mustard-500 mx-auto mb-3" width={220} />
          
          <p className="font-hand text-xl text-warm-700 max-w-lg mx-auto italic">
            Bulan-bulan bersejarah kita. Klik tanggal berpenanda buat liat momen singkatnya!
          </p>
        </div>

        {/* Calendar Scrapbook Widget */}
        <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 md:p-10 border-2 border-dashed border-warm-300 shadow-card-warm relative">
          <WashiTape color="rgba(245,216,120,0.75)" top={-10} left="50%" rotate="-1.5deg" />

          {/* Month Selector Tabs */}
          <div className="flex items-center justify-center gap-2 mb-8 flex-wrap">
            {MONTHS.map((m, idx) => (
              <button
                key={m.name}
                onClick={() => setActiveMonthIdx(idx)}
                className={`font-hand text-lg md:text-xl font-bold px-5 py-2 rounded-2xl transition-all duration-200 border ${
                  activeMonthIdx === idx
                    ? 'bg-warm-900 text-ivory-50 border-warm-900 shadow-md scale-105'
                    : 'bg-ivory-100 text-warm-800 border-warm-200 hover:bg-dusty-light/50'
                }`}
              >
                {m.name}
              </button>
            ))}
          </div>

          {/* Days Header */}
          <div className="grid grid-cols-7 gap-1 md:gap-2 text-center mb-3">
            {DAY_NAMES.map((dayName, idx) => (
              <div
                key={dayName}
                className={`font-hand text-base md:text-lg font-bold py-1 ${
                  idx === 0 ? 'text-dusty-rose' : 'text-warm-700'
                }`}
              >
                {dayName}
              </div>
            ))}
          </div>

          {/* Calendar Days Grid */}
          <div className="grid grid-cols-7 gap-1.5 md:gap-3 text-center">
            {/* Empty padding cells */}
            {paddingDays.map((_, pIdx) => (
              <div key={`pad-${pIdx}`} className="h-11 md:h-14 rounded-2xl bg-transparent" />
            ))}

            {/* Month Day Cells */}
            {monthDays.map((day) => {
              const event = monthEvents.find((e) => e.day === day);
              const isEvent = !!event;

              return (
                <div
                  key={day}
                  onClick={() => event && setSelectedEvent(event)}
                  className={`h-11 md:h-14 rounded-2xl flex flex-col items-center justify-center relative transition-all duration-300 font-hand text-lg md:text-2xl font-bold ${
                    isEvent
                      ? event.isSpecial
                        ? 'bg-blush-400 text-white shadow-rose-glow cursor-pointer scale-105 border-2 border-blush-500 animate-pulse'
                        : 'bg-mustard-100 text-warm-900 cursor-pointer hover:scale-110 border-2 border-mustard-400 shadow-sm'
                      : 'bg-ivory-50 text-warm-800 border border-warm-100'
                  }`}
                >
                  <span>{day}</span>

                  {/* Icon badge if event exists */}
                  {isEvent && (
                    <span className="absolute -top-1.5 -right-1.5 text-xs bg-white rounded-full p-0.5 shadow-sm border border-warm-200">
                      {event.emoji}
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom legend note */}
          <div className="mt-6 pt-4 border-t border-warm-200 flex items-center justify-between text-xs font-hand text-warm-700">
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-blush-400 inline-block" /> Tanggal Spesial Jadian
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-mustard-300 inline-block" /> Momen Bersejarah
            </span>
          </div>

        </div>

      </div>

      {/* Event Popup Lightbox */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-warm-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="relative max-w-sm w-full bg-white rounded-3xl p-6 shadow-2xl border-2 border-warm-200 overflow-hidden text-center">
            
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-ivory-100 hover:bg-blush-100 text-warm-700 transition-colors"
            >
              <X size={18} />
            </button>

            <div className="w-14 h-14 rounded-full bg-mustard-100 border-2 border-mustard-300 flex items-center justify-center text-2xl mx-auto mb-3 shadow-sm">
              {selectedEvent.emoji}
            </div>

            <span className="inline-block font-hand text-xs font-semibold text-warm-700 uppercase tracking-wider bg-ivory-100 px-3 py-1 rounded-full border border-warm-200 mb-2">
              {selectedEvent.day} {selectedEvent.monthName} {selectedEvent.year}
            </span>

            <h3 className="font-hand text-2xl font-bold text-warm-900 mb-1">
              {selectedEvent.title}
            </h3>

            <p className="font-hand text-sm text-warm-600 mb-3 flex items-center justify-center gap-1">
              <MapPin size={13} className="text-dusty-rose" /> {selectedEvent.location}
            </p>

            <p className="font-sans text-warm-800 text-sm leading-relaxed mb-6 font-light italic">
              &ldquo;{selectedEvent.shortSummary}&rdquo;
            </p>

            <button
              onClick={() => handleScrollToTimeline(selectedEvent.targetId)}
              className="w-full py-3 px-4 rounded-2xl bg-warm-900 hover:bg-dusty-rose text-ivory-50 font-hand font-bold text-base transition-colors flex items-center justify-center gap-2 shadow-md"
            >
              Baca cerita lengkap 📖 <ArrowRight size={16} />
            </button>

          </div>
        </div>
      )}
    </section>
  );
};
