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
    story: 'Spot pertemuan pertama NAYA di malam akhir September 2025.',
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
    date: 'Oktober 2025',
    story: 'Tempat mampir ngopi favorit sepulang kampus selama masa PDKT.',
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
    story: 'Spot berteduh dari hujan deras dalam perjalanan menuju Puncak.',
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
    story: 'Tempat makan bakso malam di Puncak saat kelaparan di tengah jalan.',
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
    story: 'Spot ngopi hangat menikmati dinginnya udara Puncak Pass.',
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
    story: 'Tempat mampir minum STMJ hangat saat perjalanan pulang ke Jakarta.',
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
    story: 'Titik lokasi Arya nembak Nadina dan resmi jadian pada 2 November 2025.',
    color: 'gold',
    cx: 87,
    cy: 70,
  },
];
