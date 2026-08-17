'use client';

import React from 'react';
import { Coffee, Car, Utensils, Mic, Palette, Gift, Mountain, CheckCircle2, CircleDashed, Coins, Sparkles } from 'lucide-react';
import { bucketListData } from '@/data/bucketlist';
import { BucketListItem } from '@/types';
import { SectionLabel, DoodleUnderline, WashiTape, DoodleStar } from './Doodles';

const iconMap: Record<BucketListItem['iconName'], React.ReactNode> = {
  coffee: <Coffee size={24} className="text-warm-800" />,
  car: <Car size={24} className="text-warm-800" />,
  utensils: <Utensils size={24} className="text-warm-800" />,
  mic: <Mic size={24} className="text-warm-800" />,
  palette: <Palette size={24} className="text-warm-800" />,
  gift: <Gift size={24} className="text-warm-800" />,
  mountain: <Mountain size={24} className="text-warm-800" />,
};

const WASHI_COLORS = [
  'rgba(245,216,120,0.75)',
  'rgba(232,168,160,0.75)',
  'rgba(201,132,138,0.75)',
  'rgba(180,210,190,0.75)',
];

const formatRupiah = (amount: number): string => {
  return 'Rp ' + amount.toLocaleString('id-ID');
};

export const BucketList: React.FC = () => {
  const completedCount = bucketListData.filter((item) => item.achieved).length;
  const totalCount = bucketListData.length;
  const percentage = Math.round((completedCount / totalCount) * 100);

  // Total budget calculation
  const totalTargetBudget = bucketListData.reduce((sum, item) => sum + item.targetBudget, 0);
  const totalCurrentSaved = bucketListData.reduce((sum, item) => sum + item.currentSaved, 0);
  const totalBudgetPercentage = totalTargetBudget > 0 
    ? Math.min(100, Math.round((totalCurrentSaved / totalTargetBudget) * 100))
    : 0;

  return (
    <section id="bucketlist" className="py-20 px-4 md:px-8 relative bg-ivory-100/90 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12 relative">
          <SectionLabel color="bg-mustard-100">📌 impian kita</SectionLabel>
          
          <h2 className="font-hand text-4xl md:text-6xl font-bold text-warm-900 mt-3 mb-2">
            Bucket List NAYA
          </h2>
          <DoodleUnderline className="text-dusty-pink mx-auto mb-3" width={220} />
          
          <p className="font-hand text-xl text-warm-700 max-w-lg mx-auto italic">
            Daftar rencana dan mimpi seru yang pengen kita wujudin bareng-bareng.
          </p>

          <DoodleStar className="absolute top-2 right-12 text-mustard-500 opacity-60" size={26} />
        </div>

        {/* Dual Summary Card: Progress Wishlist & Total Budget */}
        <div className="max-w-2xl mx-auto mb-12 grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Wishlist Counter Card */}
          <div className="bg-white/90 backdrop-blur-md rounded-3xl p-5 border-2 border-dashed border-warm-200 shadow-card-warm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-blush-100 flex items-center justify-center text-sm">🎯</span>
                  <span className="font-hand text-lg font-bold text-warm-900">Mimpi Terwujud</span>
                </div>
                <span className="font-hand text-sm font-bold text-dusty-rose bg-ivory-100 px-2.5 py-0.5 rounded-full border border-warm-200">
                  {completedCount}/{totalCount}
                </span>
              </div>
              <div className="w-full bg-warm-100 h-3 rounded-full overflow-hidden border border-warm-200 p-0.5 mb-2">
                <div
                  className="bg-gradient-to-r from-mustard-400 to-dusty-rose h-full rounded-full transition-all duration-700"
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
            <p className="font-hand text-xs text-warm-600 italic opacity-80">
              {completedCount === 0
                ? 'Pelan-pelan kita wujudin satu per satu!'
                : `${completedCount} impian udah terwujud! 🎉`}
            </p>
          </div>

          {/* Total Savings Budget Summary Card */}
          <div className="bg-white/90 backdrop-blur-md rounded-3xl p-5 border-2 border-dashed border-warm-200 shadow-card-warm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-bold text-sm">
                    <Coins size={15} />
                  </div>
                  <span className="font-hand text-lg font-bold text-warm-900">Total Tabungan</span>
                </div>
                <span className="font-hand text-xs font-bold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                  {totalBudgetPercentage}%
                </span>
              </div>
              <div className="w-full bg-warm-100 h-3 rounded-full overflow-hidden border border-warm-200 p-0.5 mb-2">
                <div
                  className="bg-gradient-to-r from-amber-400 to-emerald-500 h-full rounded-full transition-all duration-700"
                  style={{ width: `${totalBudgetPercentage}%` }}
                />
              </div>
            </div>
            <div className="font-hand text-xs text-warm-700 flex items-center justify-between font-semibold">
              <span>{formatRupiah(totalCurrentSaved)}</span>
              <span className="text-warm-500 font-normal">Target: {formatRupiah(totalTargetBudget)}</span>
            </div>
          </div>

        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {bucketListData.map((item, idx) => {
            const tapeColor = WASHI_COLORS[idx % WASHI_COLORS.length];
            const itemSavedPercent = item.targetBudget > 0
              ? Math.min(100, Math.round((item.currentSaved / item.targetBudget) * 100))
              : 0;
            const isFundReady = item.currentSaved >= item.targetBudget && item.targetBudget > 0;

            return (
              <div
                key={item.id}
                className="bg-white/95 rounded-3xl p-6 border border-warm-200 shadow-card-warm hover:shadow-rose-glow hover:-translate-y-1 transition-all duration-300 relative flex flex-col justify-between group"
              >
                {/* Decorative Washi Tape */}
                <WashiTape color={tapeColor} top={-9} left={20} rotate={idx % 2 === 0 ? '-3deg' : '3deg'} />

                <div>
                  {/* Top Header: Icon + Badges */}
                  <div className="flex items-start justify-between gap-2 mb-4 pt-2 flex-wrap">
                    <div className="w-12 h-12 rounded-2xl bg-ivory-100 border border-warm-200 flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                      {iconMap[item.iconName]}
                    </div>

                    <div className="flex flex-col items-end gap-1.5">
                      {/* Status Badge */}
                      {item.achieved ? (
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 font-hand text-xs font-bold shadow-xs">
                          <CheckCircle2 size={13} className="text-emerald-600" />
                          Sudah Kesampaian
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-mustard-100 border border-mustard-300/60 text-warm-800 font-hand text-xs font-semibold shadow-xs">
                          <CircleDashed size={13} className="text-mustard-600 animate-spin-slow" />
                          Belum Kesampaian
                        </span>
                      )}

                      {/* Dana Siap Badge */}
                      {isFundReady && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 font-hand text-[11px] font-bold shadow-xs">
                          <Sparkles size={11} className="text-amber-600" />
                          Dana Siap! 🎉
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-hand text-2xl font-bold text-warm-900 mb-2 leading-snug group-hover:text-dusty-rose transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-warm-700 text-sm leading-relaxed font-light mb-5">
                    {item.description}
                  </p>
                </div>

                {/* Savings Budget Progress Section */}
                <div className="pt-4 border-t border-warm-100">
                  <div className="flex items-center justify-between text-xs font-hand text-warm-700 mb-1.5 font-bold">
                    <span className="flex items-center gap-1 text-warm-800">
                      <Coins size={13} className="text-amber-600" /> Tabungan
                    </span>
                    <span>
                      {formatRupiah(item.currentSaved)} / {formatRupiah(item.targetBudget)}
                    </span>
                  </div>

                  {/* Item Budget Progress Bar */}
                  <div className="w-full bg-warm-100 h-2.5 rounded-full overflow-hidden border border-warm-200 p-0.5">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        isFundReady
                          ? 'bg-gradient-to-r from-amber-400 to-emerald-500'
                          : 'bg-gradient-to-r from-mustard-300 to-dusty-pink'
                      }`}
                      style={{ width: `${itemSavedPercent}%` }}
                    />
                  </div>

                  {/* Wishlist index */}
                  <div className="mt-3 flex items-center justify-between text-[11px] font-hand text-warm-500 opacity-80">
                    <span>Wishlist #{idx + 1}</span>
                    {item.achieved && item.dateAchieved && (
                      <span className="text-emerald-700 font-bold">✨ {item.dateAchieved}</span>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
