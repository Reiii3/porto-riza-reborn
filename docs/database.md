# Struktur Database Portofolio

Database disimpan di Supabase, project `portofolio-riza` (region Southeast Asia, Singapore). Alamat project dan
publishable key disimpan di `.env.local`, yang tidak ikut di-commit
karena tercantum di `.gitignore` (`.env*`).

## Tabel `projects`

Daftar proyek portofolio Riza Maulana.

| Kolom | Tipe | Keterangan |
| --- | --- | --- |
| `id` | `int8` | Primary key, nomor otomatis 1, 2, 3, ... |
| `created_at` | `timestamptz` | Waktu baris dibuat, terisi otomatis dengan `now()` |
| `slug` | `text` | Penanda unik di alamat, misalnya `game-corner` (unik) |
| `judul` | `text` | Judul proyek |
| `deskripsi` | `text` | Kalimat singkat tentang proyek |
| `kategori` | `text` | Kategori proyek, misalnya React atau HTML |
| `minggu` | `text` | Minggu proyek dibuat, misalnya `Minggu 01` |
| `fitur` | `text[]` | Daftar hal yang dipelajari (array teks) |
| `gambar_url` | `text` | Alamat gambar di folder `public`, misalnya `/img/axbridge.png` |

RLS aktif. Policy `Pengunjung boleh membaca proyek`: peran `anon`
boleh `select` semua baris.

## Tabel `messages`

Pesan dari form kontak.

| Kolom | Tipe | Keterangan |
| --- | --- | --- |
| `id` | `int8` | Primary key, nomor otomatis 1, 2, 3, ... |
| `created_at` | `timestamptz` | Waktu baris dibuat, terisi otomatis dengan `now()` |
| `nama` | `text` | Nama pengirim |
| `email` | `text` | Email pengirim |
| `pesan` | `text` | Isi pesan |

RLS aktif tanpa policy, sehingga pengunjung tidak bisa membaca
pesan. Policy `insert` dibuat di Minggu 15.

## Tabel `skills`

Daftar keahlian Riza Maulana.

| Kolom | Tipe | Keterangan |
| --- | --- | --- |
| `id` | `int8` | Primary key, nomor otomatis 1, 2, 3, ... |
| `created_at` | `timestamptz` | Waktu baris dibuat, terisi otomatis dengan `now()` |
| `nama` | `text` | Nama keahlian |
| `level` | `text` | Junior, Menengah, Mahir, atau Senior |

RLS aktif. Policy `Pengunjung boleh membaca keahlian`: peran `anon`
boleh `select` semua baris.
