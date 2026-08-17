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
    title: 'Awal Mula Ketemu',
    caption: 'Malam pertama kali nyapa di Warkop Cakasa. Senyumnya masih kebayang!',
    date: 'September 2025',
    location: 'Warkop Cakasa',
    category: 'memory',
    url: '/images/gallery/photo1.jpg',
  },
  {
    id: 'gal-2',
    title: 'Rutinitas Ngopi Hood',
    caption: 'Spot favorit abis jemput ngampus. Ngobrol apa aja dari A sampe Z.',
    date: 'Unknown',
    location: 'Hood Cipinang',
    category: 'date',
    url: '/images/gallery/photo2.jpg',
  },
  {
    id: 'gal-3',
    title: 'Kehujanan di Depok',
    caption: 'Pas neduh di Indomaret Depok gara-gara hujan deres OTW Puncak.',
    date: '1 November 2025',
    location: 'Depok',
    category: 'trip',
    url: '/images/gallery/photo3.jpg',
  },
  {
    id: 'gal-4',
    title: 'Bakso Malam Puncak',
    caption: 'Kelaparan di jalan, semangkuk bakso Puncak ini rasanya mantap banget.',
    date: '1 November 2025',
    location: 'Gunung Mas, Puncak',
    category: 'trip',
    url: '/images/gallery/photo4.jpg',
  },
  {
    id: 'gal-5',
    title: 'Ngopi di Green Coffee',
    caption: 'Ngopi dingin-dingin di Green Coffee Puncak. Sayang sekarang tempatnya udah tutup.',
    date: '1 November 2025',
    location: 'Green Coffee Puncak',
    category: 'memory',
    url: '/images/gallery/photo5.jpg',
  },
  {
    id: 'gal-6',
    title: 'Nadina Bawa Motor',
    caption: 'Momen Nadina gantian bawa motor pas jalan balik yang super dingin.',
    date: '2 November 2025',
    location: 'Perjalanan Pulang Puncak',
    category: 'candid',
    url: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'gal-7',
    title: 'Mampir Warung Jamu',
    caption: 'Beli Kawa-Kawa Black Currant di warung jamu pinggir jalan biar gak masuk angin.',
    date: '2 November 2025',
    location: 'Warung Jamu Pinggir Jalan',
    category: 'memory',
    url: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'gal-8',
    title: 'Momen Pas Nembak',
    caption: 'Jalan Raya Bogor tempat Arya nembak dan Nadina jawab mau!',
    date: '2 November 2025',
    location: 'Jalan Raya Bogor',
    category: 'date',
    url: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'gal-9',
    title: 'NAYA Berdua',
    caption: 'Perjalanan NAYA yang baru dimulai. Pokoknya jalanin terus bareng-bareng!',
    date: '2025 - Sekarang',
    location: 'Bersama Selamanya',
    category: 'candid',
    url: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?q=80&w=800&auto=format&fit=crop',
  },
];
