# Setup JSONBin.io untuk Shared Data (Tanpa Backend)

Sistem ini menggunakan JSONBin.io untuk menyimpan data lowongan pekerjaan yang **shared untuk semua user** (bukan per-browser seperti localStorage).

## Langkah Setup:

### 1. Daftar di JSONBin.io
1. Buka https://jsonbin.io/
2. Klik "Sign Up" (gratis)
3. Buat akun atau login dengan GitHub/Google

### 2. Dapatkan API Key
1. Setelah login, buka dashboard
2. Klik "API Keys" di menu
3. Copy "Master Key" (atau buat API key baru)

### 3. Setup Environment Variables
1. Buat file `.env.local` di root project (jika belum ada)
2. Tambahkan:
```env
NEXT_PUBLIC_JSONBIN_API_KEY=your_master_key_here
NEXT_PUBLIC_JSONBIN_BIN_ID=optional_bin_id
```

**Catatan:**
- `NEXT_PUBLIC_JSONBIN_API_KEY` = Master Key dari JSONBin.io (WAJIB)
- `NEXT_PUBLIC_JSONBIN_BIN_ID` = Optional, jika tidak diisi akan dibuat otomatis

### 4. Deploy ke Vercel
1. Di Vercel Dashboard, buka project settings
2. Klik "Environment Variables"
3. Tambahkan:
   - `NEXT_PUBLIC_JSONBIN_API_KEY` = your_master_key_here
   - `NEXT_PUBLIC_JSONBIN_BIN_ID` = (optional)

### 5. Redeploy
Setelah menambahkan environment variables, redeploy project di Vercel.

## Cara Kerja:

- **Dengan JSONBin.io**: Data disimpan di cloud, shared untuk semua user
- **Tanpa JSONBin.io**: Fallback ke localStorage (per-browser, seperti sebelumnya)

## Keuntungan JSONBin.io:

✅ **Gratis** - Free tier cukup untuk penggunaan normal
✅ **Shared Data** - Semua user melihat data yang sama
✅ **No Backend** - Tidak perlu setup server sendiri
✅ **Real-time** - Update langsung terlihat semua user
✅ **Backup** - Data tersimpan di cloud

## Limit Free Tier:

- 10,000 requests/month
- 5MB storage
- Cukup untuk website kecil-menengah

## Troubleshooting:

Jika ada error "JSONBin API key not configured":
1. Pastikan environment variable sudah di-set
2. Restart dev server (`npm run dev`)
3. Untuk production, pastikan sudah di-set di Vercel dan redeploy


