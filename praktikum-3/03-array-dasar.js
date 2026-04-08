// --- 1. Membuat array ---
const mahasiswa = ['Fika', 'ara', 'Bilqil', 'siti'];
const nilai     = [80, 90, 85, 95];
console.log('=== Array Awal ==='); 
console.log('Mahasiswa:', mahasiswa); 
console.log('Nilai    :', nilai); 
console.log('Jumlah mahasiswa:', mahasiswa.length); 

// --- 2. Mengakses elemen ---
console.log('\n=== Akses Elemen ==='); 
console.log('Elemen pertama :', mahasiswa[0]);      
console.log('Elemen ketiga  :', mahasiswa[2]);      
console.log('Elemen terakhir:', mahasiswa[mahasiswa.length - 1]);

// --- 3. Mengubah elemen ---
mahasiswa[1] = 'Fika Yunita';   
console.log('\nSetelah diubah:', mahasiswa); 
  
// --- 4. Menambah dan menghapus elemen --- 
console.log('\n=== Manipulasi Array ==='); 
mahasiswa.push('Syarfani');           
console.log('Setelah push    :', mahasiswa); 
  
mahasiswa.unshift('Faqrol');       
console.log('Setelah unshift  :', mahasiswa); 
  
const dihapusAkhir = mahasiswa.pop();    
console.log('Dihapus (pop)   :', dihapusAkhir); 
console.log('Setelah pop     :', mahasiswa); 
  
const dihapusAwal = mahasiswa.shift();   
console.log('Dihapus (shift) :', dihapusAwal); 
console.log('Setelah shift   :', mahasiswa); 
  
// --- 5. Mencari elemen --- 
console.log('\n=== Pencarian ==='); 
console.log('Indeks Fika :', mahasiswa.indexOf('Fika')); 
console.log('Ada Ara?    :', mahasiswa.includes('Ara')); 
console.log('Ada Bilqis?    :', mahasiswa.includes('Bilqis')); 
  
// --- 6. Mengiris array dengan slice --- 
const sebagian = nilai.slice(1, 4);  
console.log('\nNilai asli  :', nilai); 
console.log('Slice [1,4] :', sebagian);

// Latihan-3
console.log("=== Latihan-3 Manajemen Dftar Belanja ===");
// 2. buat array daftarBelanja
let daftarBelanja = ["Beras", "Gula", "Minyak", "Telur", "Susu"];

// 3. tampilkan semua isi dengan nomor
for (let i = 0; i < daftarBelanja.length; i++) {
  console.log(`${i + 1}. ${daftarBelanja[i]}`);
}

// 4. tambah 2 item baru
daftarBelanja.push("Kopi");
daftarBelanja.push("Teh");

// 5. hapus item pertama
let itemDihapus = daftarBelanja.shift();
console.log("Item dihapus:", itemDihapus);

// 6. cek apakah 'Susu' ada
let adaSusu = daftarBelanja.includes("Susu");
console.log("Apakah ada Susu?", adaSusu);

// 7. tampilkan jumlah item akhir
console.log("Jumlah item akhir:", daftarBelanja.length);