# Project Setup: API Service dengan ElysiaJS, Drizzle ORM, dan MySQL

**Tujuan:**
Menginisialisasi proyek backend baru menggunakan Bun sebagai runtime, ElysiaJS sebagai framework web, dan Drizzle ORM untuk manajemen database MySQL.

**Tech Stack:**
- Runtime & Package Manager: Bun
- Web Framework: ElysiaJS
- ORM: Drizzle ORM
- Database: MySQL (menggunakan driver `mysql2`)

---

## Langkah-langkah Implementasi (High-Level)

### 1. Inisialisasi Proyek
- Jalankan perintah inisialisasi proyek standar menggunakan Bun di direktori utama (contoh: `bun init`).
- Pastikan file `package.json` dan `tsconfig.json` terbentuk dengan benar.

### 2. Instalasi Dependensi
- **Framework Utama:** Install paket `elysia`.
- **Database & ORM:** Install `drizzle-orm` dan driver database MySQL (contoh: `mysql2`).
- **Dev Dependencies:** Install `drizzle-kit` untuk keperluan pembuatan dan eksekusi migrasi.

### 3. Konfigurasi Database (Drizzle & MySQL)
- Buat file konfigurasi untuk mengatur koneksi database (misalnya di `src/db/index.ts`).
- Siapkan file `drizzle.config.ts` di root direktori untuk memberi tahu Drizzle Kit letak file schema dan URL database.
- Buat file schema awal (misalnya `src/db/schema.ts`) yang berisi definisi tabel sederhana (seperti tabel `users`) sebagai *proof of concept*.

### 4. Setup Server ElysiaJS
- Buka dan modifikasi file entry point aplikasi (biasanya `src/index.ts`).
- Inisialisasi aplikasi Elysia.
- Buat endpoint dasar (misalnya `GET /`) yang mengembalikan pesan konfirmasi bahwa server berjalan.
- Pastikan server "listen" pada port tertentu (misalnya port 3000).

### 5. Pengaturan Environment & Skrip
- Gunakan file `.env` untuk menyimpan string koneksi database (`DATABASE_URL`).
- Tambahkan skrip bantuan di dalam `package.json`, misalnya:
  - `dev`: Untuk menjalankan server dengan mode hot-reload/watch.
  - `db:generate`: Untuk membuat file migrasi Drizzle.
  - `db:push` atau `db:migrate`: Untuk mengaplikasikan perubahan schema ke database.

---

**Catatan untuk Implementator:**
Dokumen ini bersifat panduan tingkat tinggi (high-level). Fokus utama pada tiket ini adalah memastikan pondasi proyek berdiri, dependencies terpasang, server web dapat diakses, dan ORM berhasil terhubung dengan database MySQL. Detail spesifik mengenai nama folder, variabel, dan sintaks diserahkan pada konvensi standar yang berlaku.
