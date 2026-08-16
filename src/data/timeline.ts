import { TimelineMoment } from '@/types';

/**
 * ====================================================================
 * DATA TIMELINE PERJALANAN HUBUNGAN ARYA & NADINA
 * ====================================================================
 * Setiap cerita ditulis dalam bentuk narasi hangat 3-5 kalimat.
 * 
 * CARA MENGGANTI FOTO TIMELINE:
 * Simpan foto di `public/images/timeline-1.jpg`, `timeline-2.jpg`, dst.
 * Lalu ganti `photoUrl` di bawah menjadi `/images/timeline-1.jpg`.
 * ====================================================================
 */
export const timelineData: TimelineMoment[] = [
  {
    id: 'momen-1',
    order: 1,
    title: 'Pertama Kali Bertemu',
    dateStr: 'Akhir September 2025',
    location: 'Warkop Cakasa',
    badge: 'Takdir Yang Tak Terduga',
    story: 'Semua bermula di suatu malam di akhir September 2025, saat Arya yang sedang berkumpul di rumah teman diajak nongkrong ngopi di Warkop Cakasa. Di tempat yang sederhana itu, untuk pertama kalinya mata Arya dan Nadina saling bertemu secara tidak sengaja. Sebuah sapaan kecil malam itu menjadi pemicu takdir manis yang mengubah hari-hari mereka selanjutnya.',
    photoUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1000&auto=format&fit=crop',
    photoCaption: 'Awal mula cerita dari secangkir kopi di Warkop Cakasa',
    highlights: ['Warkop Cakasa', 'Malam tak terduga', 'Secangkir Kopi Pertama']
  },
  {
    id: 'momen-2',
    order: 2,
    title: 'Hari-Hari Sebelum Jadian',
    dateStr: 'Akhir September - Oktober 2025',
    location: 'Kampus & Hood Cipinang',
    badge: 'Benih Cinta Tumbuh',
    story: 'Sejak pertemuan di Warkop Cakasa, kebersamaan mereka semakin intens. Arya dengan senang hati sering mengantar dan menjemput Nadina ke dan dari kampus, di mana perjalanan tersebut hampir selalu diselingi singgah ngopi hangat di Hood Cipinang. Dari obrolan acak, gelak tawa, hingga kebiasaan-kebiasaan kecil selama perjalanan itu, perlahan benih rasa cinta dan kasih sayang mulai bersemi makin dalam.',
    photoUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1000&auto=format&fit=crop',
    photoCaption: 'Setiap sudut Cipinang menyimpan hangat obrolan kita',
    highlights: ['Antar Jemput Kampus', 'Hood Cipinang', 'Obrolan Tanpa Akhir']
  },
  {
    id: 'momen-3',
    order: 3,
    title: 'Perjalanan ke Puncak & Menjadi Sepasang Kekasih',
    dateStr: '1 - 2 November 2025',
    location: 'Depok, Puncak & Jalan Raya Bogor',
    badge: 'Resmi Sepasang Kekasih',
    story: 'Perjalanan berkesan dimulai pada 1 November sore saat Arya mengajak Nadina ke Puncak dengan niat tersembunyi untuk menyatakan perasaan. Di perjalanan, hujan deras memaksa mereka berteduh di sebuah Indomaret di Depok — momen teduh yang justru menjadi sangat intim ketika Nadina membuka hati menceritakan banyak hal tentang keluarganya. Perjalanan berlanjut hingga malam; mereka menyantap bakso hangat pinggir jalan di depan Gunung Mas karena kelaparan, lalu menikmati kopi di Green Coffee. Saat perjalanan pulang yang dingin, Nadina ganti mengendarai motor dan mereka sempat berhenti di warung jamu membeli minuman Kawa-Kawa Black Currant hangat untuk menepis dinginnya angin malam. Hingga akhirnya, di sepanjang Jalan Raya Bogor pada tanggal 2 November 2025, Arya memberanikan diri menyatakan perasaannya — dan Nadina menerima dengan senyuman hangat, resmi menjadi sepasang kekasih.',
    photoUrl: 'https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?q=80&w=1000&auto=format&fit=crop',
    photoCaption: 'Di dinginnya malam Puncak dan hangatnya Jalan Raya Bogor, cinta kita berlabuh',
    highlights: ['Berteduh di Depok', 'Bakso Gunung Mas', 'Kawa-kawa Warung Jamu', 'Jalan Raya Bogor 2 Nov 2025']
  }
];
