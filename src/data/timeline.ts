import { TimelineMoment } from '@/types';

/**
 * ====================================================================
 * DATA TIMELINE PERJALANAN HUBUNGAN (ARYA & NADINA)
 * ====================================================================
 * Bahasa disesuaikan dengan gaya jurnal scrapbook (santai, hangat, "kita").
 * ====================================================================
 */
export const timelineData: TimelineMoment[] = [
  {
    id: 'momen-1',
    order: 1,
    title: 'Pertama Kali Ketemu',
    dateStr: 'Akhir September 2025',
    location: 'Warkop Cakasa',
    badge: 'Malam Tak Terduga',
    story: 'Semua berawal di suatu malam di akhir September 2025. Arya lagi nongkrong di rumah teman, lalu diajak ngopi ke Warkop Cakasa. Di sana, secara nggak sengaja kita pertama kali ketemu dan sapa-sapaan kecil. Siapa sangka, dari secangkir kopi malam itu, cerita kita dimulai.',
    photoUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1000&auto=format&fit=crop',
    photoCaption: 'Awal mula semuanya di Warkop Cakasa ☕',
    highlights: ['Warkop Cakasa', 'Malam Tak Terduga', 'Kopi Pertama']
  },
  {
    id: 'momen-2',
    order: 2,
    title: 'Hari-Hari Sebelum Jadian',
    dateStr: 'Akhir September - Oktober 2025',
    location: 'Kampus & Hood Cipinang',
    badge: 'Rutinitas Manis',
    story: 'Sejak malam itu, kita makin sering ngobrol. Arya rajin antar-jemput Nadina ke kampus, dan hampir selalu mampir ngopi dulu di Hood Cipinang. Dari kebiasaan-kebiasaan kecil dan obrolan random sepulang kampus itu, rasa sayang pelan-pelan tumbuh di antara kita berdua.',
    photoUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1000&auto=format&fit=crop',
    photoCaption: 'Hood Cipinang, tempat ngopi favorit sepulang kampus 🍵',
    highlights: ['Antar Jemput Kampus', 'Hood Cipinang', 'Obrolan Random']
  },
  {
    id: 'momen-3',
    order: 3,
    title: 'Jalan ke Puncak & Resmi Berpasangan',
    dateStr: '1 - 2 November 2025',
    location: 'Depok, Puncak & Jalan Raya Bogor',
    badge: 'Resmi Jadian! 💖',
    story: 'Tanggal 1 November sore, Arya ngajak jalan ke Puncak dengan niat tersembunyi. Di jalan sempat hujan deras dan kita berteduh di Indomaret Depok — momen teduh yang hangat karena Nadina banyak cerita tentang keluarganya. Malamnya kita makan bakso Gunung Mas karena kelaparan, lalu ngopi di Green Coffee. Pas perjalanan pulang yang dingin, Nadina yang ganti bawa motor dan kita sempat beli Kawa-Kawa di warung jamu buat menghangatkan badan. Akhirnya di Jalan Raya Bogor, Arya memberanikan diri nembak Nadina — dan resmi jadian 2 November 2025!',
    photoUrl: 'https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?q=80&w=1000&auto=format&fit=crop',
    photoCaption: 'Depok, Puncak, dan momen manis di Jalan Raya Bogor 💍',
    highlights: ['Berteduh di Depok', 'Bakso Gunung Mas', 'Kawa-kawa Warung Jamu', 'Jalan Raya Bogor 2 Nov 2025']
  }
];
