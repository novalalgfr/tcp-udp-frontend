# Frontend — Socket App

Frontend aplikasi Socket App berbasis **Next.js (TypeScript)** dengan styling neo-brutalist menggunakan Tailwind CSS dan komponen dari [RetroUI](https://retroui.dev).

---

## Struktur Folder

```
frontend/
├── app/
│   ├── layout.tsx          # Root layout: setup font global
│   ├── globals.css
│   ├── page.tsx            # Landing page
│   ├── register/
│   │   └── page.tsx        # Halaman registrasi
│   ├── login/
│   │   └── page.tsx        # Halaman login
│   ├── verify/
│   │   └── page.tsx        # Halaman verifikasi email (?token=xxx)
│   ├── upload/
│   │   └── page.tsx        # Halaman upload file (TCP)
│   └── stream/
│       └── page.tsx        # Halaman streaming video (UDP)
│
├── components/
│   ├── retroui/
│   │   ├── Button.tsx      # Komponen Button
│   │   ├── Input.tsx       # Komponen Input
│   │   └── Label.tsx       # Komponen Label
│   ├── auth/
│   │   ├── register-form.tsx
│   │   └── login-form.tsx
│   ├── file/
│   │   ├── upload-form.tsx
│   │   └── file-list.tsx
│   └── stream/
│       ├── video-list.tsx
│       └── video-player.tsx
│
├── lib/
│   ├── utils.ts            # Helper: cn() untuk className
│   └── api.ts              # Semua fungsi fetch ke backend Flask
│
└── .env.local              # URL backend
```

---

## Requirement

- Node.js 18+
- npm / yarn / pnpm

---

## Setup & Menjalankan

### 1. Masuk ke folder frontend

```bash
cd frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Buat file `.env.local`

Buat file `.env.local` di dalam folder `frontend/` dengan isi:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

> **Penting:** Next.js hanya membaca `.env.local` saat server dev di-start. Kalau file ini baru dibuat atau diedit setelah `npm run dev` sudah jalan, wajib restart dev server supaya perubahan terbaca.

### 4. Jalankan dev server

```bash
npm run dev
```

Aplikasi bisa diakses di [http://localhost:3000](http://localhost:3000).

---

## Halaman

| URL | Keterangan |
|---|---|
| `/` | Landing page, navigasi ke fitur utama |
| `/register` | Form registrasi akun baru |
| `/login` | Form login |
| `/verify?token=xxx` | Halaman verifikasi email (dibuka dari link di email) |
| `/upload` | Upload file ke server lewat TCP |
| `/stream` | Pilih & tonton video dari server lewat UDP |

---

## Catatan

- Pastikan **backend Flask sudah jalan** di `localhost:5000` sebelum membuka aplikasi di browser, karena semua request API diarahkan ke sana.
- Status login disimpan di `localStorage` (`user_email`) — ini pendekatan sederhana untuk kebutuhan tugas, bukan autentikasi production-grade.
- Halaman `/upload` dan `/stream` bisa diakses tanpa login dari URL langsung — proteksi route belum diimplementasikan di level middleware Next.js.
- Video untuk streaming **tidak** berasal dari hasil upload user. Video harus disiapkan manual di folder `backend/storage/videos/` oleh developer/server.
