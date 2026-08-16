import React from 'react';
import { Navbar } from '@/components/Navbar';
import { BackgroundDecorations } from '@/components/BackgroundDecorations';
import { MusicPlayer } from '@/components/MusicPlayer';
import { CursorTrail } from '@/components/CursorTrail';
import { Hero } from '@/components/Hero';
import { Timeline } from '@/components/Timeline';
import { LoveMap } from '@/components/LoveMap';
import { Gallery } from '@/components/Gallery';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Desktop Cursor Trail (Heart particles) */}
      <CursorTrail />

      {/* Ambient background decorations */}
      <BackgroundDecorations />

      {/* Global floating music player — "Perfect" by Ed Sheeran */}
      <MusicPlayer />

      {/* Floating glassmorphism navbar */}
      <Navbar />

      {/* Section 1: Hero & Days Together Counter */}
      <Hero />

      {/* Section 2: Narrative Timeline */}
      <Timeline />

      {/* Section 3: Interactive Love Journey Map */}
      <LoveMap />

      {/* Section 4: Photo Gallery with Draggable Polaroids & Lightbox Modal */}
      <Gallery />

      {/* Section 5: Romantic Footer */}
      <Footer />
    </main>
  );
}
