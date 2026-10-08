# Bütçe - Kişisel Finans & Tasarruf Takip (PWA)

Modern, minimalist ve çevrimdışı çalışabilen (PWA) kişisel bütçe, gelir-gider ve birikim takip uygulaması.

---

## 🚀 Vercel'de Yayınlama Rehberi

Bu proje Vercel için sıfır yapılandırmayla (zero-config) otomatik olarak hazırlandı.

### Yöntem 1: GitHub / GitLab / Bitbucket ile Vercel Dashboard (En Kolay)
1. Bu projeyi GitHub hesabınıza yükleyin (Push).
2. [vercel.com](https://vercel.com) adresine gidin ve **"Add New... -> Project"** seçeneğine tıklayın.
3. GitHub reponuzu seçin.
4. Vercel, `vercel.json` dosyasını otomatik algılayacak:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. **"Deploy"** butonuna basın. Birkaç saniye içinde siteniz canlı yayına geçecektir!

---

### Yöntem 2: Vercel CLI ile Terminalden Tek Komut
Bilgisayarınızın terminalinde proje dizinindeyken:
```bash
npx vercel
```
veya doğrudan canlı yayına almak için:
```bash
npx vercel --prod
```
Sorulan sorulara varsayılan (Enter) yanıtları vererek birkaç saniye içinde deploy edebilirsiniz.

---

## 📱 Özellikler
- **PWA Desteği:** iOS Safari ve Android Chrome'da ana ekrana eklenebilir, tam ekran uygulama olarak çalışır.
- **Hızlı Gider Ekle:** Modal açmadan tek satırdan tutar, kategori ve açıklama girerek anında kayıt.
- **Gruplandırılmış Görünüm:** Liste, Kategori ve Aylık özet görünümleri.
- **Birikim & Hedefler:** Hedefe yönelik tasarruf takibi ve ilerleme çubuğu.
- **Karanlık / Aydınlık Mod:** Sistem temasına uyumlu veya manuel zen arayüz.
- **Güvenli & Çevrimdışı:** Veriler cihazınızın LocalStorage belleğinde saklanır.
