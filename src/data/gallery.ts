import { GalleryPhoto } from '@/types';

/**
 * ====================================================================
 * DATA GALERI FOTO KENANGAN (ARYA & NADINA)
 * ====================================================================
 * Anda bisa menambah, mengurangi, atau mengganti foto & caption di sini.
 * 
 * CARA MENGGANTI FOTO GALERI:
 * 1. Simpan foto-foto Anda di folder `public/images/gallery/` (misal: photo1.jpg)
 * 2. Ubah atribut `url` di bawah menjadi `/images/gallery/photo1.jpg`
 * ====================================================================
 */
export const galleryPhotos: GalleryPhoto[] = [
  {
    id: 'gal-1',
    title: 'Nongkrong Malam Pertama',
    caption: 'Malam saat semuanya dimulai dari senyuman tidak sengaja di Warkop Cakasa.',
    date: 'September 2025',
    location: 'Warkop Cakasa',
    category: 'memory',
    url: '/images/gallery/photo1.jpg',
  },
  {
    id: 'gal-2',
    title: 'Kopi & Cerita di Hood',
    caption: 'Singgah favorit. Obrolan hangat dari kopi yang masih mengepul.',
    date: 'Unknown',
    location: 'Hood Cipinang',
    category: 'date',
    url: '/images/gallery/photo2.jpg',
  },
  {
    id: 'gal-3',
    title: 'Teduh Saat Hujan Hujanan',
    caption: 'Berteduh di Depok saat hujan deras menuju Puncak. Saat-saat obrolan paling hangat.',
    date: '1 November 2025',
    location: 'Depok',
    category: 'trip',
    url: '/images/gallery/photo3.jpg',
  },
  {
    id: 'gal-4',
    title: 'Bakso Pinggir Jalan Gunung Mas',
    caption: 'Kelaparan di tengah malam Puncak dan semangkuk bakso paling nikmat.',
    date: '1 November 2025',
    location: 'Gunung Mas, Puncak',
    category: 'trip',
    url: '/images/gallery/photo4.jpg',
  },
  {
    id: 'gal-5',
    title: 'Singgah di Green Coffee',
    caption: 'Kopi hangat penembus dinginnya Puncak yang kini tinggal kenangan manis.',
    date: '1 November 2025',
    location: 'Green Coffee Puncak',
    category: 'memory',
    url: '/images/gallery/photo5.jpg',
  },
  {
    id: 'gal-6',
    title: 'Menembus Angin Malam',
    caption: 'Nadina di balik stang motor, menembus dingin malam dengan senyuman bahagia.',
    date: '2 November 2025',
    location: 'Perjalanan Pulang Puncak',
    category: 'candid',
    url: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'gal-7',
    title: 'Penghangat Kawa-Kawa',
    caption: 'Berhenti sebentar di warung jamu membeli Kawa-Kawa Black Currant penghangat tubuh.',
    date: '2 November 2025',
    location: 'Warung Jamu Pinggir Jalan',
    category: 'memory',
    url: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'gal-8',
    title: 'Jalan Raya Bogor 2 Nov',
    caption: 'Momen berharga di mana Arya menyatakan perasaan dan Nadina membalas dengan ya.',
    date: '2 November 2025',
    location: 'Jalan Raya Bogor',
    category: 'date',
    url: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'gal-9',
    title: 'Bahagia Bersama',
    caption: 'Awal dari langkah manis yang akan kita arungi bersama selamanya.',
    date: '2025 - Sekarang',
    location: 'Bersama Selamanya',
    category: 'candid',
    url: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?q=80&w=800&auto=format&fit=crop',
  },
];
