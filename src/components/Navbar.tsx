'use client';

import React, { useState, useEffect } from 'react';
import { Heart, Menu, X, Gift } from 'lucide-react';
import Link from 'next/link';
import { coupleData } from '@/data/couple';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#hero' },
    { name: 'Cerita Kita', href: '#timeline' },
    { name: 'Peta', href: '#lovemap' },
    { name: 'Galeri', href: '#gallery' },
    { name: 'Pesan', href: '#guestbook' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-ivory-50/85 backdrop-blur-md shadow-card-warm py-3 border-b border-blush-100'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-full bg-blush-100 flex items-center justify-center text-blush-500 shadow-sm group-hover:scale-110 transition-transform">
            <Heart size={16} className="fill-current text-blush-500" />
          </div>
          <span className="font-serif text-xl md:text-2xl font-bold tracking-wide text-warm-900 group-hover:text-blush-500 transition-colors">
            {coupleData.groomName} <span className="font-script font-normal text-rosegold-gold text-2xl md:text-3xl">&</span> {coupleData.brideName}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-warm-800 hover:text-blush-500 tracking-wide transition-colors relative group py-1"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blush-300 to-rosegold-gold transition-all duration-300 group-hover:w-full rounded-full" />
            </a>
          ))}
          {/* Anniversary Surprise Button */}
          <Link
            href="/anniversary"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-blush-400 to-rosegold-gold text-white text-xs font-semibold shadow-sm hover:shadow-rose-glow hover:scale-105 transition-all duration-200"
          >
            <Gift size={13} />
            <span>Kejutan 🎁</span>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-warm-900 hover:text-blush-500 transition-colors rounded-lg bg-white/60 border border-blush-100"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-b border-blush-100 shadow-lg px-6 py-6 transition-all duration-300 animate-fadeIn">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-warm-800 hover:text-blush-500 py-2 border-b border-blush-50 flex items-center justify-between"
              >
                {link.name}
                <Heart size={14} className="text-blush-300 opacity-60" />
              </a>
            ))}
            {/* Anniversary mobile link */}
            <Link
              href="/anniversary"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 py-2 text-base font-semibold text-blush-500"
            >
              <Gift size={16} />
              <span>Kejutan Anniversary 🎁</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
