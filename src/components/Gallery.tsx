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

  return (
    <motion.div
      drag
      dragConstraints={{ left: -60, right: 60, top: -60, bottom: 60 }}
      dragSnapToOrigin={true}
      whileDrag={{ scale: 1.08, zIndex: 40 }}
      initial={{ rotate: rotation }}
      whileHover={{ scale: 1.04, rotate: 0, zIndex: 30 }}
      style={{ rotateX, rotateY, perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="polaroid relative rounded-sm cursor-grab active:cursor-grabbing"
    >
      {/* Washi Tape Strip */}
      <WashiTape
        color={tapeColor}
        top={-9}
        left={idx % 2 === 0 ? 16 : undefined}
        right={idx % 2 !== 0 ? 16 : undefined}
        rotate={idx % 2 === 0 ? '-6deg' : '6deg'}
      />

      {/* Image container */}
      <div
        onClick={() => onSelect(photo)}
        className="relative aspect-[4/3] w-full overflow-hidden rounded-xs bg-warm-900 group cursor-pointer"
      >
        <Image
          src={photo.url}
          alt={photo.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Hover overlay badge */}
        <div className="absolute inset-0 bg-warm-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="w-10 h-10 rounded-full bg-white/90 text-warm-900 flex items-center justify-center shadow-md">
            <Eye size={20} />
          </span>
        </div>
      </div>

      {/* Polaroid bottom caption */}
      <div onClick={() => onSelect(photo)} className="pt-3 px-1 text-center cursor-pointer">
        <p className="font-hand text-xl font-bold text-warm-900 leading-tight">
          {photo.title}
        </p>
        <p className="font-hand text-sm text-warm-700 mt-0.5">
          {photo.date} • {photo.location}
        </p>
      </div>
    </motion.div>
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
            Koleksi foto polaroid NAYA. Coba deh geser-geser fotonya atau klik buat liat detailnya!
          </p>

          <DoodleStar className="absolute top-2 left-12 text-dusty-pink opacity-50" size={26} />
        </div>

        {/* Draggable Polaroid Grid */}
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
            <span className="font-semibold text-warm-900">Tips Seru:</span> Foto polaroid NAYA di atas bisa kamu **geser-geser (drag)** pake mouse atau jari kamu! Klik fotonya buat liat cerita lengkapnya.
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
