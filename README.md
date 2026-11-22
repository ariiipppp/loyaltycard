# NORTHMAN — Digital Loyalty & POS System (Vercel Ready)

Paket siap deploy ke **Vercel** (mendukung tampilan responsif **HP & Laptop**).

## Struktur Folder
- `public/index.html` — Aplikasi Web lengkap (Pelanggan, Kasir POS + Pendaftaran Member Baru, Admin, & Pengalih Ukuran Layar HP/Laptop).
- `api/wa.js` — Serverless Function Vercel untuk mengirim pesan WhatsApp otomatis tanpa mengekspos token API di browser.
- `vercel.json` — Konfigurasi routing Vercel.
- `package.json` — Metadata proyek.

## Cara Deploy ke Vercel
1. Ekstrak file ZIP ini dan upload ke repository **GitHub** (atau drag & drop folder ke Vercel).
2. Buka [vercel.com](https://vercel.com), klik **Add New Project**, lalu pilih repository Anda.
3. (Opsional) Jika ingin mengaktifkan WhatsApp otomatis, buka **Project Settings > Environment Variables** di Vercel dan tambahkan:
   - `WA_API_URL` = `https://api.fonnte.com/send`
   - `WA_API_TOKEN` = `token_gateway_wa_anda`
4. Klik **Deploy**.

## PIN Default Staf
- **Kasir POS**: `KASIR123`
- **Admin**: `ADMIN123`
(Dapat diubah langsung melalui menu **Admin** setelah login).
