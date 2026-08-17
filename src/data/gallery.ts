import { GalleryPhoto } from '@/types';

/**
 * ====================================================================
 * DATA GALERI FOTO & VIDEO KENANGAN (NAYA)
 * ====================================================================
 * CARA MENGGANTI FOTO & VIDEO:
 * 1. Foto: simpan di `public/images/gallery/` (contoh: /images/gallery/photo1.jpeg)
 * 2. Video: simpan di `public/video/gallery/` (contoh: /video/gallery/video1.mp4)
 * ====================================================================
 */
export const galleryPhotos: GalleryPhoto[] = [
  {
    id: 'gal-1',
    type: 'photo',
    title: 'Awal Mula Ketemu',
    caption: 'Momen perdana nyapa di Cakasa.',
    backNote: 'Sumpah, waktu itu gak nyangka banget sapaan iseng di warkop ini bakal ngebuka jalan buat segalanya. Senyumnya langsung bikin salting! ☕🤍',
    date: '30 September 2025',
    location: 'Warkop Cakasa',
    category: 'memory',
    url: '/images/gallery/photo1.jpeg',
  },
  {
    id: 'gal-2',
    type: 'video',
    title: 'Rutinitas Ngopi Hood',
    caption: 'Kopi sore abis ngampus.',
    backNote: 'Gak tau kenapa obrolan dari jam kuliah sampe hal gak penting di Hood Cipinang selalu kerasa seru dan gak pernah bikin bosen 🍵',
    date: 'Oktober 2025',
    location: 'Hood Cipinang',
    category: 'date',
    url: '/images/gallery/photo2.jpg',
    poster: '/video/gallery/video2.mp4',
  },
  {
    id: 'gal-3',
    type: 'photo',
    title: 'Kehujanan di Depok',
    caption: 'Neduh hujan OTW Puncak.',
    backNote: 'Muka basah kuyup tapi hati anget banget gara-gara dengerin cerita tentang keluarganya pas neduh di sini 🌧️',
    date: '1 November 2025',
    location: 'Indomaret Depok',
    category: 'trip',
    url: '/images/gallery/photo3.jpeg',
  },
  {
    id: 'gal-4',
    type: 'photo',
    title: 'Bakso Malam Puncak',
    caption: 'Bakso Puncak tengah malam.',
    backNote: 'Kelaparan di tengah jalan, semangkuk bakso kuah panas ini kerasa kaya makanan paling enak se-dunia 🍜',
    date: '1 November 2025',
    location: 'Gunung Mas, Puncak',
    category: 'trip',
    url: '/images/gallery/photo4.jpeg',
  },
  {
    id: 'gal-5',
    type: 'photo',
    title: 'Ngopi di Green Coffee',
    caption: 'Kopi penembus kabut Puncak.',
    backNote: 'Kopi hangat di tengah kabut dingin. Walau tempatnya sekarang udah tutup, rasa angetnya tetep kerasa sampe sekarang 🌿',
    date: '1 November 2025',
    location: 'Green Coffee Puncak',
    category: 'memory',
    url: '/images/gallery/photo5.jpeg',
  },
  {
    id: 'gal-6',
    type: 'video',
    title: 'Klip Perjalanan Puncak',
    caption: 'Vibe jalanan malam & angin sepoi-sepoi.',
    backNote: 'Rekaman video singkat momen di jalan pas Nadina semangat bonceng motor. Vibe-nya berharga banget! 🎥✨',
    date: '2 November 2025',
    location: 'Jalan Raya Bogor',
    category: 'trip',
    url: '/images/gallery/photo6.jpg',
    poster: '/video/gallery/video1.mp4',
  },
  {
    id: 'gal-7',
    type: 'photo',
    title: 'Penghangat STMJ',
    caption: 'Singgah di warung jamu.',
    backNote: 'Badan udah gemeteran kedinginan, untung nemu warung jamu dipinggir jalan buat seruput STMJ hangat 🍶',
    date: '2 November 2025',
    location: 'Warung Jamu Pinggir Jalan',
    category: 'memory',
    url: '/images/gallery/stmj.jpeg',
  },
  {
    id: 'gal-8',
    type: 'photo',
    title: 'Momen Pas Nembak',
    caption: 'Jalan Raya Bogor 2 Nov.',
    backNote: 'Jantung rasanya mau copot pas nembak di motor. Begitu denger jawaban "mau", serasa dunia milik berdua! 💍💖',
    date: '2 November 2025',
    location: 'Jalan Raya Bogor',
    category: 'date',
    url: '/images/gallery/photo10.jpg',
  },
  {
    id: 'gal-9',
    type: 'photo',
    title: 'NAYA Berdua',
    caption: 'Langkah awal NAYA.',
    backNote: 'Senyum paling lepas pas udah resmi barengan. Siap arungi hari-hari seru ke depan berdua! ✨',
    date: '2 November 2025',
    location: 'Bersama Selamanya',
    category: 'candid',
    url: '/images/gallery/photo9.jpg',
  },
];
