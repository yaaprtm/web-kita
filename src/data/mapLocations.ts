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
    story: 'Tempat pertama kali kami bertemu, di suatu malam yang tidak direncanakan. Arya yang tadinya cuma diajak nongkrong biasa, pulang membawa satu perasaan baru yang tak terduga.',
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
    story: 'Tempat singgah favorit kami — ngopi hangat setiap kali Arya menjemput Nadina dari kampus. Dari obrolan kecil di sini, perlahan benih cinta mulai tumbuh.',
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
    story: 'Berteduh dari hujan deras dalam perjalanan ke Puncak. Momen yang tidak direncanakan justru menjadi momen paling intim — Nadina bercerita banyak tentang keluarganya.',
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
    story: 'Berhenti makan bakso pinggir jalan karena kelaparan di tengah perjalanan malam. Semangkuk bakso sederhana terasa seperti makan malam paling bermakna.',
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
    story: 'Ngopi sambil menikmati dinginnya udara Puncak malam itu. Kini tempatnya sudah tidak ada lagi, tapi hangat momen itu akan selalu kami kenang.',
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
    story: 'Berhenti di warung jamu pinggir jalan membeli Kawa-Kawa Black Currant untuk menghangatkan badan di tengah perjalanan pulang yang dingin. Manis dan hangat, seperti malam itu.',
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
    story: 'Titik paling berkesan dalam perjalanan kami — di sinilah Arya akhirnya memberanikan diri menyatakan perasaan dan resmi mengajak Nadina menjadi kekasihnya. Resmi sejak 2 November 2025.',
    color: 'gold',
    cx: 87,
    cy: 70,
  },
];
