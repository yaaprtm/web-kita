'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Camera, Heart, Sparkles, Eye, Info } from 'lucide-react';
import { galleryPhotos } from '@/data/gallery';
import { GalleryPhoto } from '@/types';
import { LightboxModal } from './LightboxModal';

export const Gallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  const handlePhotoClick = (photo: GalleryPhoto) => {
    setSelectedPhoto(photo);
  };

  const handleNavigate = (newIndex: number) => {
    if (newIndex >= 0 && newIndex < galleryPhotos.length) {
      setSelectedPhoto(galleryPhotos[newIndex]);
    }
  };

  return (
    <section id="gallery" className="py-20 px-4 md:px-8 relative bg-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blush-100/80 border border-blush-200 text-blush-500 text-xs font-semibold uppercase tracking-widest mb-3">
            <Camera size={14} className="text-rosegold-gold" />
            <span>Momen Terindah</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-warm-900 mb-4">
            Galeri Foto Kenangan
          </h2>
          <p className="font-serif italic text-warm-700 text-base md:text-lg max-w-xl mx-auto">
            Kumpulan potret momen berharga dalam perjalanan Arya & Nadina. Klik foto untuk melihat detail kenangan.
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => handlePhotoClick(photo)}
              className="group relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-rose-glow border-4 border-ivory-50 transition-all duration-500 bg-warm-900"
            >
              {/* Image */}
              <Image
                src={photo.url}
                alt={photo.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-95 group-hover:opacity-100"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-warm-900/85 via-warm-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                <div className="flex justify-end">
                  <span className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
                    <Eye size={18} />
                  </span>
                </div>

                <div>
                  <span className="text-[11px] font-semibold tracking-wider text-rosegold-light uppercase">
                    {photo.date} • {photo.location}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-white mb-1">
                    {photo.title}
                  </h3>
                  <p className="text-white/80 text-xs line-clamp-2 font-light">
                    {photo.caption}
                  </p>
                </div>
              </div>

              {/* Bottom Subtle Badge (Non-hover) */}
              <div className="absolute bottom-3 left-3 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-medium text-warm-900 group-hover:opacity-0 transition-opacity flex items-center gap-1">
                <Heart size={11} className="text-blush-500 fill-current" />
                <span>{photo.title}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Instructions banner for User on how to replace photos */}
        <div className="mt-12 p-4 rounded-2xl bg-blush-50 border border-blush-200 max-w-2xl mx-auto flex items-start gap-3 text-xs text-warm-800">
          <Info size={18} className="text-blush-500 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-warm-900">Catatan untuk Arya & Nadina:</span> Foto-foto di atas adalah slot placeholder. Anda bisa menggantinya dengan mudah cukup dengan mengubah file <code className="bg-white px-1.5 py-0.5 rounded border border-blush-200 text-blush-600">src/data/gallery.ts</code> atau menaruh foto asli di folder <code className="bg-white px-1.5 py-0.5 rounded border border-blush-200 text-blush-600">public/images/gallery/</code>.
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
