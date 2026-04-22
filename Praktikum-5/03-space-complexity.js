function jumlahArray(arr) { 
    let total = 0;             // hanya 1 variabel tambahan 
    for (const x of arr) total += x; 
    return total; 
} 
function duplikasiArray(arr) { 
    const baru = [];           // array baru tumbuh seiring arr 
    for (const x of arr) baru.push(x * 2); 
    return baru; 
}
function faktorialRekursif(n) { 
    if (n <= 1) return 1; 
    return n * faktorialRekursif(n - 1); // n frame di call stack 
} 
function faktorialIteratif(n) { 
    let hasil = 1; 
    for (let i = 2; i <= n; i++) hasil *= i; // hanya 2 variabel 
    return hasil; 
} 
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];  
console.log('Jumlah array   :', jumlahArray(arr));          
console.log('Duplikasi array:', duplikasiArray(arr));        
console.log('Faktorial 10 rekursif :', faktorialRekursif(10)); 
console.log('Faktorial 10 iteratif :', faktorialIteratif(10));
function hitungUnik(arr) { 
    const seen = new Set(); // Set tumbuh hingga n elemen
      for (const x of arr) seen.add(x); 
    return seen.size; 
}  
const dataAcak = [1,2,3,2,1,4,5,3,6,4,7]; 
console.log('Elemen unik:', hitungUnik(dataAcak)); 

console.log('\n=== Latihan-2 ===');
function cariPasanganLambat(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [arr[i], arr[j]];
            }
        }
    }
    return null;
}
function cariPasanganCepat(arr, target) {
    const set = new Set();

    for (let i = 0; i < arr.length; i++) {
        const selisih = target - arr[i];
        if (set.has(selisih)) {
            return [selisih, arr[i]];
        }
        set.add(arr[i]);
    }
    return null;
}
function ukurWaktu(fn, arr, target) {
    const start = Date.now();
    const hasil = fn(arr, target);
    const end = Date.now();
    console.log(`${fn.name} -> hasil:`, hasil, `| waktu: ${end - start} ms`);
}

const arrTest = [2, 7, 11, 15];
const targetTest = 9;

ukurWaktu(cariPasanganLambat, arrTest, targetTest);
ukurWaktu(cariPasanganCepat, arrTest, targetTest);
const arrBesar = Array.from({ length: 50000 }, () => Math.floor(Math.random() * 100000));
const targetBesar = -1;

ukurWaktu(cariPasanganLambat, arrBesar, targetBesar);
ukurWaktu(cariPasanganCepat, arrBesar, targetBesar);