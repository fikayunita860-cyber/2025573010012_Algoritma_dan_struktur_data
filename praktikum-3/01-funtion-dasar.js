// --- 1. Function tanpa parameter dan tanpa return ---
function sapa() {
    console.log('Halo! Selamat datang di praktikum javaScript.');
}
sapa();                
sapa();                

// --- 2. Function dengan parameter ---
function sapaNama(nama) {
    console.log('Halo, ${Fika}! Selamat belajar.');
}
sapaNama('fika');
sapaNama('khaira');

// --- 3. Function dengan beberapa parameter dan return vulue ---
function tambah(angka1, angka2) {
    const hasil = angka1 +angka2;
    return hasil; 
}
const hasilPenjumlahan = tambah(10, 25); 
console.log('10 + 25 =', hasilPenjumlahan); 
console.log('7 + 13 =', tambah(7, 13));    
  
// --- 4. Function dengan default parameter --- 

function hitung(nilai, pengali = 2) { 
    return nilai * pengali; 
} 
console.log(hitung(5));        
console.log(hitung(5, 3));   
  
// --- 5. Scope variabel --- 
const pesanGlobal = 'Saya ada di mana saja';  
function cekScope() { 
    const pesanLokal = 'Saya hanya ada di dalam function ini'; 
    console.log(pesanGlobal);   
    console.log(pesanLokal);   
} 
  
cekScope(); 
console.log(pesanGlobal);  

// latihan-1
console.log("=== Latihan-1 Function Kalkulator Lengkap ===");
// 2. kurang
function kurang(a, b) {
  return a - b;
}

// 3. kali
function kali(a, b) {
  return a * b;
}

// 4. bagi
function bagi(a, b) {
  if (b === 0) {
    console.log("Error: tidak bisa membagi dengan nol");
    return null;
  }
  return a / b;
}

// 5. kalkulator
function kalkulator(a, operator, b) {
  if (operator === "+") {
    return tambah(a, b);
  } else if (operator === "-") {
    return kurang(a, b);
  } else if (operator === "*") {
    return kali(a, b);
  } else if (operator === "/") {
    return bagi(a, b);
  } else {
    console.log("Operator tidak dikenal");
    return null;
  }
}

// 6. pengujian
console.log(kalkulator(8, "+", 2));
console.log(kalkulator(8, "-", 2));
console.log(kalkulator(8, "*", 2));
console.log(kalkulator(8, "/", 2));
console.log(kalkulator(8, "/", 0));