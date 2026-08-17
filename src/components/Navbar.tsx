'use client';

import React, { useState, useEffect } from 'react';
import { Heart, Menu, X, Gift } from 'lucide-react';
import Link from 'next/link';
import { coupleData } from '@/data/couple';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Cerita', href: '#timeline' },
    { name: 'Kalender', href: '#calendar' },
    { name: 'Peta', href: '#lovemap' },
    { name: 'Bucket List', href: '#bucketlist' },
    { name: 'Galeri', href: '#gallery' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-ivory-100/90 backdrop-blur-md shadow-soft-warm py-3 border-b border-dusty-light/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Brand */}
        <a href="#hero" className="flex items-center gap-2 group">
          <span className="font-hand text-3xl md:text-4xl font-extrabold text-warm-900 group-hover:text-dusty-rose transition-colors tracking-widest uppercase">
            NAYA
          </span>
          <div className="w-7 h-7 rounded-full bg-dusty-light flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
            <Heart size={14} className="fill-current text-dusty-rose" />
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-hand text-lg font-semibold text-warm-800 hover:text-dusty-rose transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-dusty-rose transition-all duration-300 group-hover:w-full rounded-full" />
            </a>
          ))}
          <Link
            href="/anniversary"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-mustard-100 border border-mustard-300/60 text-warm-800 text-sm font-semibold font-hand hover:bg-mustard-300/40 transition-all duration-200 rotate-[-0.5deg]"
          >
            <Gift size={14} className="text-mustard-700" />
            <span>Kejutan 🎁</span>
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-warm-900 hover:text-dusty-rose rounded-lg bg-white/70 border border-dusty-light/40"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-ivory-50/98 backdrop-blur-lg border-b border-dusty-light/40 shadow-lg px-6 py-6 animate-fadeIn">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-hand text-xl font-semibold text-warm-800 hover:text-dusty-rose py-2 border-b border-dusty-light/30 flex items-center justify-between"
              >
                {link.name}
                <Heart size={14} className="text-dusty-pink opacity-60" />
              </a>
            ))}
            <Link
              href="/anniversary"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 py-2 font-hand text-xl font-bold text-mustard-700"
            >
              <Gift size={18} />
              <span>Kejutan Anniversary 🎁</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
