# 💖 Website Couple Arya & Nadina

Website couple romantis dan elegan untuk merayakan hubungan **Arya & Nadina**. Dibuat dengan **Next.js (App Router)**, **Tailwind CSS**, **Framer Motion**, dan **Lucide React**.

---

## 🚀 Cara Menjalankan Proyek di Komputer Lokal

1. **Jalankan Mode Pengembangan:**
   ```bash
   npm run dev
   ```
   Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

2. **Uji Build Produksi:**
   ```bash
   npm run build
   npm start
   ```

---

## 📸 CARA MENGGANTI FOTO PLACEHOLDER DENGAN FOTO ASLI

Semua foto dan teks disimpan di file data yang sangat rapi di folder `src/data/`:

### 1. Mengganti Foto Utama (Hero Section)
* Opsi A (File Lokal):
  1. Simpan foto Anda di folder `public/images/hero.jpg`
  2. Buka file [`src/data/couple.ts`](file:///c:/Users/user/Desktop/PROJEK%20WEB%20KITA/src/data/couple.ts)
  3. Ubah atribut `heroPhoto: "/images/hero.jpg"`

* Opsi B (URL Online / Cloudinary / Unsplash):
  Ubah atribut `heroPhoto` langsung dengan link gambar Anda.

### 2. Mengganti Foto Timeline Perjalanan
1. Simpan foto-foto Anda di `public/images/timeline-1.jpg`, `timeline-2.jpg`, `timeline-3.jpg`
2. Buka file [`src/data/timeline.ts`](file:///c:/Users/user/Desktop/PROJEK%20WEB%20KITA/src/data/timeline.ts)
3. Ubah atribut `photoUrl` pada masing-masing momen menjadi `/images/timeline-1.jpg`

### 3. Mengganti Foto Galeri Kenangan
1. Simpan foto-foto Anda di folder `public/images/gallery/` (misal: `photo-1.jpg`, `photo-2.jpg`, dst.)
2. Buka file [`src/data/gallery.ts`](file:///c:/Users/user/Desktop/PROJEK%20WEB%20KITA/src/data/gallery.ts)
3. Ubah atribut `url` pada tiap foto menjadi `/images/gallery/photo-1.jpg`

---

## 📝 CARA MENGEDIT TEKS & CERITA

- **Nama, Tagline, & Tanggal Jadian:** Edit di [`src/data/couple.ts`](file:///c:/Users/user/Desktop/PROJEK%20WEB%20KITA/src/data/couple.ts)
- **Cerita Timeline Perjalanan:** Edit di [`src/data/timeline.ts`](file:///c:/Users/user/Desktop/PROJEK%20WEB%20KITA/src/data/timeline.ts)
- **Judul & Caption Galeri:** Edit di [`src/data/gallery.ts`](file:///c:/Users/user/Desktop/PROJEK%20WEB%20KITA/src/data/gallery.ts)

---

## 🌐 CARA DEPLOY KE VERCEL (GRATIS)

1. Upload / Push folder proyek ini ke GitHub Anda.
2. Buka [Vercel.com](https://vercel.com) dan login menggunakan akun GitHub.
3. Klik **"Add New Project"** -> Pilih repository GitHub proyek ini.
4. Klik **Deploy**. Dalam < 1 menit website couple Arya & Nadina sudah online secara gratis dengan link resmi!

---

## 💌 CATATAN SETUP DATABASE GUEST BOOK (OPSIONAL)

Saat ini ucapan pengunjung tersimpan di `localStorage` browser. Jika ingin ucapan publik tersimpan terpusat di cloud:
1. Buat project gratis di [Supabase.com](https://supabase.com).
2. Buat tabel `guestbook` dengan kolom: `name`, `relation`, `message`, `badge_emoji`, `created_at`.
3. Install `@supabase/supabase-js` dan ganti fungsi `handleSubmit` di `src/components/Guestbook.tsx`.
