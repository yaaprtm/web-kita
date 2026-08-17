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
    targetBudget: 500000,
    currentSaved: 0,
  },
  {
    id: 'bucket-2',
    title: 'Road Trip Domestik',
    description: 'Jalan-jalan ke tempat yang belum pernah kita kunjungin bareng — Bromo, Bandung, atau pantai-pantai yang belum kesampean.',
    iconName: 'car',
    achieved: false,
    targetBudget: 3000000,
    currentSaved: 0,
  },
  {
    id: 'bucket-3',
    title: 'Kulineran Random',
    description: 'Coba makanan legendaris di kota-kota beda, biar makin banyak cerita kuliner kayak bakso di Gunung Mas dulu.',
    iconName: 'utensils',
    achieved: false,
    targetBudget: 750000,
    currentSaved: 0,
  },
  {
    id: 'bucket-4',
    title: 'Hiking ke Puncak Gunung',
    description: 'Naik gunung yang belum pernah kita daki bareng, nyambung banget sama cerita awal kita yang udah pernah ke Puncak.',
    iconName: 'mountain',
    achieved: false,
    targetBudget: 1500000,
    currentSaved: 0,
  },
  {
    id: 'bucket-5',
    title: 'Belajar Sesuatu yang Baru Bareng',
    description: 'Ikut kelas masak, melukis, atau bikin proyek DIY kecil bareng, biar ada kenangan fisik juga.',
    iconName: 'palette',
    achieved: false,
    targetBudget: 1000000,
    currentSaved: 0,
  },
  {
    id: 'bucket-6',
    title: 'Kejutan Trip Misterius',
    description: 'Salah satu dari kita nyiapin trip kejutan buat yang lain, tanpa dikasih tau tujuannya sampe hari-H.',
    iconName: 'gift',
    achieved: false,
    targetBudget: 2000000,
    currentSaved: 0,
  },
];
