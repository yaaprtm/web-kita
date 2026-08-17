import React from 'react';
import { Navbar } from '@/components/Navbar';
import { BackgroundDecorations } from '@/components/BackgroundDecorations';
import { MusicPlayer } from '@/components/MusicPlayer';
import { CursorTrail } from '@/components/CursorTrail';
import { Hero } from '@/components/Hero';
import { Timeline } from '@/components/Timeline';
import { MomentCalendar } from '@/components/MomentCalendar';
import { LoveMap } from '@/components/LoveMap';
import { BucketList } from '@/components/BucketList';
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

      {/* Section 3: Kalender Momen NAYA */}
      <MomentCalendar />

      {/* Section 4: Interactive Love Journey Map */}
      <LoveMap />

      {/* Section 5: Bucket List Kita */}
      <BucketList />

      {/* Section 6: Photo Gallery with 3D Flip Polaroids & Lightbox Modal */}
      <Gallery />

      {/* Section 7: Romantic Footer */}
      <Footer />
    </main>
  );
}
