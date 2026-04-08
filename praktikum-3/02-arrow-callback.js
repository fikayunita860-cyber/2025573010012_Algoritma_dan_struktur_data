// --- 1. Function biasa vs Arrow function --- 
function kuadratBiasa(x) { 
    return x * x; 
} 
  
// Cara baru (arrow function - ekuivalen) 
const kuadrat = (x) => { 
    return x * x; 
}; 
  
// Arrow function ringkas (implicit return) 
const kuadratRingkas = x => x * x; 
  
console.log('=== Perbandingan Penulisan ==='); 
console.log('Biasa    :', kuadratBiasa(5));     
console.log('Arrow    :', kuadrat(5));          
console.log('Ringkas  :', kuadratRingkas(5));   
  
// --- 2. Arrow function dengan beberapa parameter --- 
const luas = (panjang, lebar) => panjang * lebar; 
const salam = (nama, waktu) => `Selamat ${waktu}, ${nama}!`; 
  
console.log('Luas 4x6 :', luas(4, 6)); 
console.log(salam('Fika', 'Pagi')); 
  
// --- 3. Callback: function sebagai argumen --- 
function lakukanOperasi(angka, operasiCallback) { 
    console.log(`Angka awal: ${angka}`); 
    const hasil = operasiCallback(angka); 
    console.log(`Hasil setelah operasi: ${hasil}`); 
} 
  
console.log('\n=== Callback ===');
lakukanOperasi(7, kuadratRingkas);         
lakukanOperasi(10, x => x + 100);         
lakukanOperasi(20, function(x) {            
    return x / 2; 
}); 
  
// --- 4. setTimeout sebagai contoh callback nyata --- 
console.log('\n=== setTimeout (Callback) ==='); 
console.log('Pesan 1: Sebelum timer'); 
  
setTimeout(() => { 
    console.log('Pesan 3: Ini dari dalam setTimeout (setelah 1 detik)'); 
}, 1000);  
  
console.log('Pesan 2: Setelah mendaftarkan timer'); 

// LATIHAN 2
console.log("=== Latihan-2 Pipeline Transformasi Data === ");
// 2. keHurufBesar
const keHurufBesar = (str) => {
  return str.toUpperCase();
};

// 3. tambahSeru
const tambahSeru = (str) => {
  return str + "!!!";
};

// 4. hitungKata
const hitungKata = (str) => {
  return str.split(" ").length;
};

// 5. prosesKalimat
function prosesKalimat(kalimat, transformasiCallback) {
  const hasil = transformasiCallback(kalimat);
  console.log(hasil);
}

// 6. pengujian
const kalimat = "belajar javascript itu menyenangkan";

prosesKalimat(kalimat, keHurufBesar);
prosesKalimat(kalimat, tambahSeru);
prosesKalimat(kalimat, hitungKata);