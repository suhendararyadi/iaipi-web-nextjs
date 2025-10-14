# Favicon Setup Instructions

## Current Issue
Favicon masih menampilkan logo Vercel default karena:
1. File favicon belum di-generate dari logo.jpeg
2. Format JPEG tidak optimal untuk favicon
3. Next.js membutuhkan file favicon dalam format khusus

## Solution Required

### Step 1: Convert Logo to Favicon
Anda perlu convert `/public/images/logo.jpeg` ke format favicon menggunakan salah satu cara:

#### Option A: Online Converter (Recommended)
1. Visit: https://favicon.io/favicon-converter/
2. Upload: `/public/images/logo.jpeg`
3. Download hasil ZIP
4. Extract dan copy files ke `/public/`:
   - favicon.ico
   - favicon-16x16.png
   - favicon-32x32.png
   - apple-touch-icon.png

#### Option B: Using ImageMagick (Command Line)
```bash
# Install ImageMagick jika belum ada
brew install imagemagick  # macOS
# atau
sudo apt-get install imagemagick  # Linux

# Convert logo.jpeg ke PNG dengan berbagai ukuran
cd public/images
magick logo.jpeg -resize 16x16 ../favicon-16x16.png
magick logo.jpeg -resize 32x32 ../favicon-32x32.png
magick logo.jpeg -resize 180x180 ../apple-touch-icon.png
magick logo.jpeg -resize 32x32 ../favicon.ico
```

#### Option C: Manual dengan Photoshop/GIMP
1. Open logo.jpeg
2. Resize ke 32x32px (maintain aspect ratio, add padding if needed)
3. Save as PNG: favicon-32x32.png
4. Repeat untuk ukuran: 16x16, 180x180
5. Save one as ICO format untuk favicon.ico

### Step 2: Verify Files
Pastikan files berikut ada di folder `/public/`:
- ✅ favicon.ico
- ✅ favicon-16x16.png
- ✅ favicon-32x32.png
- ✅ apple-touch-icon.png

### Step 3: Clear Browser Cache
Setelah files ready:
1. Hard refresh browser: Ctrl+Shift+R (Windows) atau Cmd+Shift+R (Mac)
2. Clear browser cache completely
3. Close dan reopen browser
4. Check favicon harus berubah

### Step 4: Verify
Visit http://localhost:3000 dan check:
- Browser tab harus tampilkan logo IAIPI
- Bookmark harus tampilkan logo IAIPI
- Mobile home screen harus tampilkan logo IAIPI

## Current Status
- ✅ Layout.js sudah diupdate dengan favicon paths yang benar
- ⏳ Favicon files belum di-generate (perlu manual conversion)
- ⏳ Browser cache perlu di-clear setelah files ready

## Quick Commands
```bash
# Check if favicon files exist
ls -la public/favicon*.* public/apple-touch-icon.png

# After adding files, rebuild
npm run build

# Test locally
npm run dev
```

## Alternative: Use PNG Directly
Jika tidak bisa convert, bisa gunakan PNG langsung:
1. Copy logo.jpeg ke logo.png (convert to PNG first)
2. Update layout.js untuk point ke /images/logo.png
3. Kurang optimal tapi akan berfungsi

## Notes
- Browser sangat aggressive cache favicon
- Kadang perlu tutup semua tabs dan restart browser
- Private/Incognito mode bisa membantu test
- Production deploy di Vercel akan refresh cache otomatis
