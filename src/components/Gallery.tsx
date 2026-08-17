'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Camera, Eye, Info, Sparkles } from 'lucide-react';
import { galleryPhotos } from '@/data/gallery';
import { GalleryPhoto } from '@/types';
import { LightboxModal } from './LightboxModal';
import { SectionLabel, WashiTape, DoodleStar, DoodleUnderline } from './Doodles';

const WASHI_COLORS = [
  'rgba(245,216,120,0.75)',
  'rgba(232,168,160,0.75)',
  'rgba(201,132,138,0.75)',
  'rgba(180,210,190,0.75)',
  'rgba(240,160,144,0.75)',
];

const PRESET_ROTATIONS = [-5, 4, -3, 6, -4, 5, -6, 3, -2];

interface PolaroidCardProps {
  photo: GalleryPhoto;
  idx: number;
  onSelect: (photo: GalleryPhoto) => void;
}

const PolaroidCard: React.FC<PolaroidCardProps> = ({ photo, idx, onSelect }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const rotation = PRESET_ROTATIONS[idx % PRESET_ROTATIONS.length];
  const tapeColor = WASHI_COLORS[idx % WASHI_COLORS.length];

  // Motion values for 3D tilt effect on hover
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-60, 60], [10, -10]);
  const rotateY = useTransform(x, [-60, 60], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    x.set(offsetX);
    y.set(offsetY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleZoomClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSelect(photo);
  };

  return (
    <div className="perspective-1000 w-full min-h-[380px] select-none">
      <motion.div
        drag
        dragConstraints={{ left: -40, right: 40, top: -40, bottom: 40 }}
        dragSnapToOrigin={true}
        whileDrag={{ scale: 1.05, zIndex: 40 }}
        initial={{ rotate: rotation }}
        whileHover={{ scale: 1.03, rotate: 0, zIndex: 30 }}
        style={{ rotateX, rotateY, perspective: 1000 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleCardClick}
        className="w-full h-full relative cursor-pointer group"
      >
        {/* Washi Tape Strip */}
        <WashiTape
          color={tapeColor}
          top={-9}
          left={idx % 2 === 0 ? 16 : undefined}
          right={idx % 2 !== 0 ? 16 : undefined}
          rotate={idx % 2 === 0 ? '-6deg' : '6deg'}
        />

        {/* 3D Flip Inner Container */}
        <div
          className={`w-full h-full transition-transform duration-700 [transform-style:preserve-3d] relative ${
            isFlipped ? '[transform:rotateY(180deg)]' : ''
          }`}
        >
          {/* FRONT SIDE */}
          <div className="polaroid w-full h-full [backface-visibility:hidden] flex flex-col justify-between">
            {/* Image container */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xs bg-warm-900 group">
              <Image
                src={photo.url}
                alt={photo.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Hover overlay badge / Zoom trigger */}
              <div className="absolute inset-0 bg-warm-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button
                  onClick={handleZoomClick}
                  className="px-3 py-1.5 rounded-full bg-white/95 text-warm-900 font-hand text-sm font-bold shadow-md hover:bg-white flex items-center gap-1.5"
                >
                  <Eye size={15} /> Perbesar Foto
                </button>
              </div>
            </div>

            {/* Polaroid bottom caption */}
            <div className="pt-3 px-1 text-center flex flex-col items-center">
              <p className="font-hand text-xl font-bold text-warm-900 leading-tight">
                {photo.title}
              </p>
              <p className="font-hand text-xs text-warm-700 mt-0.5">
                {photo.date} • {photo.location}
              </p>
              <span className="mt-2.5 inline-flex items-center gap-1 text-[11px] font-hand text-dusty-rose bg-dusty-light/60 px-2.5 py-0.5 rounded-full border border-dusty-pink/30 shadow-xs">
                🔄 Tap/Klik buat balik foto
              </span>
            </div>
          </div>

          {/* BACK SIDE */}
          <div className="polaroid w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] absolute inset-0 bg-ivory-100 border-2 border-dashed border-warm-300 p-5 flex flex-col justify-between text-left">
            <div>
              <div className="flex items-center justify-between border-b border-warm-200 pb-2 mb-3">
                <span className="font-hand text-xs font-bold uppercase tracking-wider text-dusty-rose">
                  📝 Catatan Balik Foto
                </span>
                <span className="font-hand text-xs text-warm-600">{photo.date}</span>
              </div>

              {/* Handwritten Note */}
              <p className="font-hand text-xl text-warm-900 leading-relaxed italic mb-4">
                &ldquo;{photo.backNote || photo.caption}&rdquo;
              </p>
            </div>

            <div>
              <div className="pt-3 border-t border-warm-200 flex items-center justify-between">
                <span className="font-hand text-xs text-warm-700">📍 {photo.location}</span>
                <button
                  onClick={handleZoomClick}
                  className="px-3 py-1 rounded-full bg-dusty-pink/20 hover:bg-dusty-pink/40 text-warm-900 font-hand text-xs font-bold transition-colors flex items-center gap-1 border border-dusty-pink/30"
                >
                  <Eye size={13} /> Fullscreen
                </button>
              </div>
              <div className="text-center mt-2">
                <span className="text-[10px] font-hand text-warm-500">🔄 Tap untuk balik ke depan</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const Gallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  const handleNavigate = (newIndex: number) => {
    if (newIndex >= 0 && newIndex < galleryPhotos.length) {
      setSelectedPhoto(galleryPhotos[newIndex]);
    }
  };

  return (
    <section id="gallery" className="py-20 px-4 md:px-8 relative bg-ivory-50/90 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-14 relative">
          <SectionLabel color="bg-mustard-100">📷 foto NAYA</SectionLabel>
          
          <h2 className="font-hand text-4xl md:text-6xl font-bold text-warm-900 mt-3 mb-2">
            Galeri Foto NAYA
          </h2>
          <DoodleUnderline className="text-dusty-pink mx-auto mb-3" width={220} />
          
          <p className="font-hand text-xl text-warm-700 max-w-lg mx-auto italic">
            Koleksi foto polaroid NAYA. Tap/Klik fotonya buat balik dan baca catatan di belakangnya!
          </p>

          <DoodleStar className="absolute top-2 left-12 text-dusty-pink opacity-50" size={26} />
        </div>

        {/* Draggable & Flippable Polaroid Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 py-4 px-2">
          {galleryPhotos.map((photo, idx) => (
            <PolaroidCard
              key={photo.id}
              photo={photo}
              idx={idx}
              onSelect={setSelectedPhoto}
            />
          ))}
        </div>

        {/* Hint banner */}
        <div className="mt-12 p-4 rounded-2xl bg-white border border-warm-200 shadow-sm max-w-xl mx-auto flex items-start gap-3 text-xs text-warm-800">
          <Info size={18} className="text-dusty-rose shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-warm-900">Tips Scrapbook:</span> Tap/Klik foto polaroid untuk **membalik foto** dan membaca pesan rahasia di baliknya. Kamu juga bisa menggeser (drag) foto pakai mouse/sentuhan HP!
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        photo={selectedPhoto}
        photos={galleryPhotos}
        onClose={() => setSelectedPhoto(null)}
        onNavigate={handleNavigate}
      />
    </section>
  );
};
