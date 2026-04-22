// --- 1. Membuat object literal ---
const mahasiswa = {
    nama   : 'Fika Yunita',
    umur   : 18,
    jurusan: 'Teknik Informatika',
    ipk    : 3.70,
    aktif  : true,
};
// --- 2. Mengakses proprty ---
console.log('=== Akses Property ==='); 
console.log('Nama    :', mahasiswa.nama);          
console.log('Jurusan :', mahasiswa['jurusan']);
// Bracket notation berguna jika key disimpan di variabel 
const keyYangDicari = 'ipk'; 
console.log('IPK     :', mahasiswa[keyYangDicari]);

// --- 3. Menambah dan mengubah property --- 
mahasiswa.email  = 'fikayunita860@gmail.com';   
mahasiswa.umur   = 19; 
console.log('\nSetelah diubah:', mahasiswa); 
  
// --- 4. Menghapus property --- 
delete mahasiswa.aktif; 
console.log('Setelah delete:', mahasiswa); 
  
// --- 5. Menambahkan method ke object --- 
const dosen = { 
    nama         : 'Muhammad Reza Zulman,S.ST.,M.Sc', 
    mataKuliah   : 'Praktikum Algoritma dan Struktur Data', 
    pengalaman   : 10,   // tahun

     // method: function di dalam object 
     perkenalan() {
         // 'this' merujuk ke object dosen itu sendiri 
        return `Halo, saya ${this.nama}, mengajar ${this.mataKuliah}.`; 
    },
     statusSenior() { 
        if (this.pengalaman >= 10) { 
            return `${this.nama} adalah dosen senior.`; 
        } 
        return `${this.nama} adalah dosen junior.`; 
    } 
}; 
  
console.log('\n=== Method Object ==='); 
console.log(dosen.perkenalan());
console.log(dosen.statusSenior()); 
  
// --- 6. Iterasi key-value dengan for...in --- 
console.log('\n=== Iterasi Object ==='); 
for (const key in dosen) { 
    if (typeof dosen[key] !== 'function') {  
        console.log(`  ${key}: ${dosen[key]}`); 
    } 
} 
  
// Object.keys(), Object.values(), Object.entries() 
console.log('Keys  :', Object.keys(mahasiswa)); 
console.log('Values:', Object.values(mahasiswa))

// Latihan-1
console.log('\n=== Latihan-1 ===');
// 2. Membuat object buku
const buku = {
  judul: "Laskar Pelangi",
  pengarang: "Andrea Hirata",
  tahunTerbit: 2005,
  harga: 100000,
  tersedia: true,
  // 3. Method info()
  info: function () {
    return `Judul: ${this.judul}, Pengarang: ${this.pengarang}, Tahun: ${this.tahunTerbit}, Harga: ${this.harga}, Tersedia: ${this.tersedia}`;
  },
  // 4. Method diskon(persen)
  diskon: function (persen) {
    return this.harga * (1 - persen / 100);
  }
};
// Contoh penggunaan
console.log(buku.info());
console.log("Harga setelah diskon 10%:", buku.diskon(10));
// 5. Array koleksiBuku
const koleksiBuku = [
  {
    judul: "Laskar Pelangi",
    pengarang: "Andrea Hirata",
    tahunTerbit: 2005,
    harga: 100000,
    tersedia: true,
    info() {
      return `Judul: ${this.judul}, Pengarang: ${this.pengarang}`;
    }
  },
  {
    judul: "Bumi",
    pengarang: "Tere Liye",
    tahunTerbit: 2014,
    harga: 90000,
    tersedia: false,
    info() {
      return `Judul: ${this.judul}, Pengarang: ${this.pengarang}`;
    }
  },
  {
    judul: "Negeri 5 Menara",
    pengarang: "Ahmad Fuadi",
    tahunTerbit: 2009,
    harga: 85000,
    tersedia: true,
    info() {
      return `Judul: ${this.judul}, Pengarang: ${this.pengarang}`;
    }
  }
];
// 6. forEach menampilkan semua info buku
koleksiBuku.forEach(b => {
  console.log(b.info());
});
// 7. filter buku yang tersedia
const bukuTersedia = koleksiBuku.filter(b => b.tersedia === true);

console.log("Buku yang tersedia:");
bukuTersedia.forEach(b => console.log(b.judul));