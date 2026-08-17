import { MapLocation } from '@/types';

/**
 * ====================================================================
 * DATA LOKASI PETA PERJALANAN CINTA ARYA & NADINA
 * ====================================================================
 * Urutan kronologis: dari pertemuan pertama hingga hari jadian.
 * 
 * Koordinat (x, y) adalah posisi relatif pada canvas SVG (0–100).
 * Anda bisa menyesuaikan `story` untuk memperpanjang narasi tiap lokasi.
 * ====================================================================
 */
export const mapLocations: MapLocation[] = [
  {
    id: 'loc-1',
    order: 1,
    name: 'Warkop Cakasa',
    area: 'Jakarta Timur',
    emoji: '☕',
    date: 'Akhir September 2025',
    story: 'Spot pertama kali kita ketemu di malam yang gak disangka-sangka. Arya yang tadinya cuma niat nongkrong biasa, pas pulang malah kebayang-bayang terus.',
    color: 'blush',
    // SVG canvas coordinate (percentage-based, 0-100)
    cx: 18,
    cy: 22,
  },
  {
    id: 'loc-2',
    order: 2,
    name: 'Hood Cipinang',
    area: 'Cipinang, Jakarta',
    emoji: '🍵',
    date: 'September — Oktober 2025',
    story: 'Spot langganan kita tiap Arya abis jemput Nadina ngampus. Dari ngobrol santai sambil ngopi di sini, makin kerasa deh cocoknya.',
    color: 'rosegold',
    cx: 28,
    cy: 42,
  },
  {
    id: 'loc-3',
    order: 3,
    name: 'Indomaret Depok',
    area: 'Depok, Jawa Barat',
    emoji: '🌧️',
    date: '1 November 2025',
    story: 'Tempat neduh pas kehujanan deras waktu OTW Puncak. Niatnya cuma nunggu hujan redah, eh Nadina malah cerita panjang lebar soal keluarganya.',
    color: 'blush',
    cx: 38,
    cy: 58,
  },
  {
    id: 'loc-4',
    order: 4,
    name: 'Gunung Mas',
    area: 'Puncak, Bogor',
    emoji: '🍜',
    date: '1 November 2025',
    story: 'Mampir makan bakso gara-gara kelaparan di tengah dinginnya malam Puncak. Bakso biasa tapi rasanya nikmat banget karena makannya barengan.',
    color: 'warm',
    cx: 55,
    cy: 45,
  },
  {
    id: 'loc-5',
    order: 5,
    name: 'Green Coffee',
    area: 'Puncak Pass, Bogor',
    emoji: '🌿',
    date: '1 November 2025',
    story: 'Mampir ngopi ngerasain dinginnya Puncak malam itu. Sekarang tempatnya udah gak ada sih, tapi kenangannya tetep nempel terus.',
    color: 'rosegold',
    cx: 65,
    cy: 30,
  },
  {
    id: 'loc-6',
    order: 6,
    name: 'Warung Jamu',
    area: 'Pinggir Jalan Bogor',
    emoji: '🍶',
    date: '2 November 2025',
    story: 'Pinggir jalan pas balik, mampir warung jamu beli Kawa-Kawa Black Currant biar gak menggigil di jalan. Lumayan banget bikin badan anget.',
    color: 'warm',
    cx: 78,
    cy: 52,
  },
  {
    id: 'loc-7',
    order: 7,
    name: 'Jalan Raya Bogor',
    area: 'Bogor, Jawa Barat',
    emoji: '💍',
    date: '2 November 2025',
    story: 'Titik paling bersejarah! Di sepanjang jalan ini Arya akhirnya memberanikan diri nembak Nadina, dan Nadina blak-blakan bilang mau. Resmi jadian 2 November 2025!',
    color: 'gold',
    cx: 87,
    cy: 70,
  },
];
