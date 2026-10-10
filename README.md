# 📐 2D Geometry Calculator

Aplikasi kalkulator geometri 2 dimensi (*2D Geometry Calculator*) interaktif berbasis JavaScript untuk menghitung luas dan keliling bangun datar (Persegi, Segitiga, Lingkaran, dan Jajaran Genjang).

---

## 🎯 Konsep Pembelajaran RPL / Pemrograman Web

1. **Object Data Mapping & Dynamic Rendering:**
   Menggunakan struktur data objek JavaScript untuk menyimpan konfigurasi bentuk, bidang input, dan rumus kalkulasi yang dirender secara dinamis ke DOM.
2. **Modular Math Calculation:**
   Penerapan konstanta `Math.PI` serta metode `toFixed()` untuk membulatkan angka desimal pada kalkulasi lingkaran.
3. **Tab Navigation Pattern:**
   Penerapan antarmuka berbasis *tabs* untuk berpilih kategori tanpa perlu memuat ulang halaman (*zero page refresh*).

---

## 📂 Struktur Folder Proyek

```text
├── index.html       # Tab pemilih bangun datar, container form dinamis, dan kartu hasil
├── style.css        # Desain Neobrutalism, warna pop cerah, dan layout fleksibel
└── script.js        # Konfigurasi geometri, handler tab, dinamisasi DOM, & logika rumus
