'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Calendar, MapPin, Heart } from 'lucide-react';
import { GalleryPhoto } from '@/types';

interface LightboxModalProps {
  photo: GalleryPhoto | null;
  photos: GalleryPhoto[];
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  photo,
  photos,
  onClose,
  onNavigate,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!photo) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [photo]);

  if (!photo) return null;

  const currentIndex = photos.findIndex((p) => p.id === photo.id);

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
    onNavigate(prevIndex);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % photos.length;
    onNavigate(nextIndex);
  };

  return (
    <div className="fixed inset-0 z-50 bg-warm-900/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-fadeIn">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-50 p-3 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors border border-white/30"
        aria-label="Close Lightbox"
      >
        <X size={24} />
      </button>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-4 md:left-8 z-40 p-3 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors border border-white/30"
        aria-label="Previous Photo"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 md:right-8 z-40 p-3 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors border border-white/30"
        aria-label="Next Photo"
      >
        <ChevronRight size={28} />
      </button>

      {/* Main Lightbox Content Card */}
      <div className="max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-blush-100 max-h-[90vh]">
        
        {/* Photo Container */}
        <div className="relative w-full md:w-2/3 aspect-square md:aspect-auto min-h-[300px] md:min-h-[500px] bg-warm-900">
          <Image
            src={photo.url}
            alt={photo.title}
            fill
            className="object-contain"
            priority
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>

        {/* Details Sidebar */}
        <div className="w-full md:w-1/3 p-6 md:p-8 flex flex-col justify-between bg-ivory-50">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-blush-500" />
              <span className="text-xs font-semibold uppercase tracking-wider text-rosegold-dark">
                Foto Kenangan ({currentIndex + 1} dari {photos.length})
              </span>
            </div>

            <h3 className="font-serif text-2xl font-bold text-warm-900 mb-3">
              {photo.title}
            </h3>

            <p className="text-warm-800 text-sm leading-relaxed mb-6 font-light">
              {photo.caption}
            </p>

            <div className="flex flex-col gap-2.5 pt-4 border-t border-blush-100 text-xs text-warm-700 font-medium">
              <div className="flex items-center gap-2">
                <Calendar size={14} className="text-rosegold-gold" />
                <span>{photo.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-blush-500" />
                <span>{photo.location}</span>
              </div>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-blush-100 flex items-center justify-between">
            <span className="text-xs text-warm-700 font-serif italic">
              Arya & Nadina Memory
            </span>
            <Heart size={16} className="text-blush-500 fill-current" />
          </div>
        </div>

      </div>
    </div>
  );
};
