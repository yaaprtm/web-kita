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
    <div className="fixed inset-0 z-50 bg-warm-900/80 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-fadeIn">
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
      <div className="max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row border-2 border-warm-200 max-h-[90vh]">
        
        {/* Photo / Video Container */}
        <div className="relative w-full md:w-2/3 aspect-square md:aspect-auto min-h-[300px] md:min-h-[480px] bg-warm-900 flex items-center justify-center overflow-hidden">
          {photo.type === 'video' ? (
            <video
              key={photo.id}
              src={photo.url}
              poster={photo.poster}
              controls
              autoPlay
              loop
              playsInline
              className="w-full h-full object-contain max-h-[80vh]"
            />
          ) : (
            <Image
              src={photo.url}
              alt={photo.title}
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 100vw, 800px"
            />
          )}
        </div>

        {/* Details Sidebar */}
        <div className="w-full md:w-1/3 p-6 md:p-8 flex flex-col justify-between bg-ivory-100">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-dusty-rose" />
              <span className="font-hand text-sm font-semibold uppercase tracking-wider text-warm-700">
                Foto #{currentIndex + 1} dari {photos.length}
              </span>
            </div>

            <h3 className="font-hand text-3xl font-bold text-warm-900 mb-2 leading-tight">
              {photo.title}
            </h3>

            <p className="font-sans text-warm-800 text-sm leading-relaxed mb-6 font-light">
              {photo.caption}
            </p>

            <div className="flex flex-col gap-2.5 pt-4 border-t border-warm-200 text-xs text-warm-700 font-medium">
              <div className="flex items-center gap-2">
                <Calendar size={14} className="text-mustard-500" />
                <span>{photo.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-dusty-rose" />
                <span>{photo.location}</span>
              </div>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-warm-200 flex items-center justify-between">
            <span className="font-hand text-lg text-warm-800 italic">
              NAYA Journal 📖
            </span>
            <Heart size={16} className="text-dusty-rose fill-current" />
          </div>
        </div>

      </div>
    </div>
  );
};
