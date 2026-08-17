import { BucketListItem } from '@/types';

/**
 * ====================================================================
 * DATA BUCKET LIST KITA (NAYA)
 * ====================================================================
 * Anda bisa memperbarui status `achieved` menjadi true jika salah satu
 * wishlist di bawah ini sudah kesampaian!
 * ====================================================================
 */
export const bucketListData: BucketListItem[] = [
  {
    id: 'bucket-1',
    title: 'Coffee Shop Hunting',
    description: 'Ngopi bareng di 10 warkop/coffee shop yang belum pernah kita datengin. Nostalgia dikit ke tempat kita ketemu pertama kali.',
    iconName: 'coffee',
    achieved: false,
  },
  {
    id: 'bucket-2',
    title: 'Road Trip Domestik',
    description: 'Jalan-jalan ke tempat yang belum pernah kita kunjungin bareng — Bromo, Bandung, atau pantai-pantai yang belum kesampean.',
    iconName: 'car',
    achieved: false,
  },
  {
    id: 'bucket-3',
    title: 'Kulineran Random',
    description: 'Coba makanan legendaris di kota-kota beda, biar makin banyak cerita kuliner kayak bakso di Gunung Mas dulu.',
    iconName: 'utensils',
    achieved: false,
  },
  {
    id: 'bucket-4',
    title: 'Nonton Konser Bareng',
    description: 'Nonton konser musisi favorit bareng, apalagi kalo lagunya related sama kita.',
    iconName: 'mic',
    achieved: false,
  },
  {
    id: 'bucket-5',
    title: 'Belajar Sesuatu yang Baru Bareng',
    description: 'Ikut kelas masak, melukis, atau bikin proyek DIY kecil bareng, biar ada kenangan fisik juga.',
    iconName: 'palette',
    achieved: false,
  },
  {
    id: 'bucket-6',
    title: 'Kejutan Trip Misterius',
    description: 'Salah satu dari kita nyiapin trip kejutan buat yang lain, tanpa dikasih tau tujuannya sampe hari-H.',
    iconName: 'gift',
    achieved: false,
  },
];
