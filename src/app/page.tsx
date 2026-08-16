import React from 'react';
import { Navbar } from '@/components/Navbar';
import { BackgroundDecorations } from '@/components/BackgroundDecorations';
import { Hero } from '@/components/Hero';
import { Timeline } from '@/components/Timeline';
import { Gallery } from '@/components/Gallery';
import { Guestbook } from '@/components/Guestbook';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Ambient background animations & music toggle */}
      <BackgroundDecorations />

      {/* Floating glassmorphism navbar */}
      <Navbar />

      {/* Section 1: Hero & Days Together Counter */}
      <Hero />

      {/* Section 2: Narrative Timeline */}
      <Timeline />

      {/* Section 3: Photo Gallery & Lightbox Modal */}
      <Gallery />

      {/* Section 4: Guest Book & Message Wall */}
      <Guestbook />

      {/* Section 5: Romantic Footer */}
      <Footer />
    </main>
  );
}
