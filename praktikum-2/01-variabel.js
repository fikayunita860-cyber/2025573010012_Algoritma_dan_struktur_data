// 01-variabel.js
// =============================
// VARIABEL DAN DEKLARASI
// =============================

// --- Deklarasi dengan let (nilai bisa diubah) ---
let nama = 'Fika';
let umur = 18;
let kota = 'Lhokseumawe';

console.log('=== Data Mahasiswa ===');
console.log('Nama :', nama);
console.log('Umur :', umur);
console.log('Kota :', kota);

// --- Mengubah nilai let ---
umur = 19;
console.log('Ulang tahun! Umur sekarang:', umur);

// --- Deklarasi dengan const (nilai TIDAK bisa diubah) ---
const jurusan = 'Teknik Informatika';
const tahunMasuk = 2023; 

console.log('Jurusan    :', jurusan);
console.log('Tahun Masuk :', tahunMasuk);

// --- Coba hapus '//' di baris bawah ini, Lalu jalankan ulang ---
// Jurusan = 'Sistem Informasi'; // --> Ini akan enyebabkan ERROR!