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
    caption: 'Momen perdana nyapa di Cakasa.',
    backNote: 'Sumpah, waktu itu gak nyangka banget sapaan iseng di warkop ini bakal ngebuka jalan buat segalanya. Senyumnya langsung bikin salting! ☕🤍',
    date: '30 September 2025',
    location: 'Warkop Cakasa',
    category: 'memory',
    url: '/images/gallery/photo1.jpg',
  },
  {
    id: 'gal-2',
    title: 'Rutinitas Ngopi Hood',
    caption: 'Kopi sore abis ngampus.',
    backNote: 'Gak tau kenapa obrolan dari jam kuliah sampe hal gak penting di Hood Cipinang selalu kerasa seru dan gak pernah bikin bosen 🍵',
    date: 'Oktober 2025',
    location: 'Hood Cipinang',
    category: 'date',
    url: '/images/gallery/photo2.jpg',
  },
  {
    id: 'gal-3',
    title: 'Kehujanan di Depok',
    caption: 'Neduh hujan OTW Puncak.',
    backNote: 'Muka basah kuyup tapi hati anget banget gara-gara dengerin cerita tentang keluarganya pas neduh di sini 🌧️',
    date: '1 November 2025',
    location: 'Indomaret Depok',
    category: 'trip',
    url: '/images/gallery/photo3.jpg',
  },
  {
    id: 'gal-4',
    title: 'Bakso Malam Puncak',
    caption: 'Bakso Puncak tengah malam.',
    backNote: 'Kelaparan di tengah jalan, semangkuk bakso kuah panas ini kerasa kaya makanan paling enak se-dunia 🍜',
    date: '1 November 2025',
    location: 'Gunung Mas, Puncak',
    category: 'trip',
    url: '/images/gallery/photo4.jpg',
  },
  {
    id: 'gal-5',
    title: 'Ngopi di Green Coffee',
    caption: 'Kopi penembus kabut Puncak.',
    backNote: 'Kopi hangat di tengah kabut dingin. Walau tempatnya sekarang udah tutup, rasa angetnya tetep kerasa sampe sekarang 🌿',
    date: '1 November 2025',
    location: 'Green Coffee Puncak',
    category: 'memory',
    url: '/images/gallery/photo5.jpg',
  },
  {
    id: 'gal-6',
    title: 'Nadina Bawa Motor',
    caption: 'Gantian nyetir di jalan balik.',
    backNote: 'Lucu banget liat Nadina semangat bawa motor nembus angin malam, mukanya kemerahan tapi tetep ketawa-tawa 🛵',
    date: '2 November 2025',
    location: 'Perjalanan Pulang Puncak',
    category: 'candid',
    url: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'gal-7',
    title: 'Penghangat STMJ',
    caption: 'Singgah di warung jamu.',
    backNote: 'Badan udah gemeteran kedinginan, untung nemu warung jamu dipinggir jalan buat seruput STMJ hangat 🍶',
    date: '2 November 2025',
    location: 'Warung Jamu Pinggir Jalan',
    category: 'memory',
    url: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'gal-8',
    title: 'Momen Pas Nembak',
    caption: 'Jalan Raya Bogor 2 Nov.',
    backNote: 'Jantung rasanya mau copot pas nembak di motor. Begitu denger jawaban "mau", serasa dunia milik berdua! 💍💖',
    date: '2 November 2025',
    location: 'Jalan Raya Bogor',
    category: 'date',
    url: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'gal-9',
    title: 'NAYA Berdua',
    caption: 'Langkah awal NAYA.',
    backNote: 'Senyum paling lepas pas udah resmi barengan. Siap arungi hari-hari seru ke depan berdua! ✨',
    date: '2 November 2025',
    location: 'Bersama Selamanya',
    category: 'candid',
    url: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?q=80&w=800&auto=format&fit=crop',
  },
];
