// Fungsi bantu: ukur waktu eksekusi 
function ukurWaktu(label, fn) {
    const mulai = Date.now();
    fn();
    const selesai = Date.now();
    console.log(`${label}: ${selesai - mulai} ms`);
}
const N = 100.000; // ukuran data: 100 ribu 
// --- Algoritma A: O(n) — loop satu kali --- 
function jumlahkanLinear(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) total += i;
    return total;
}
// --- Algoritma B: O(1) — rumus matematika --- 
function jumlahkanRumus(n) {
    return n * (n + 1) / 2;
}
// --- Algoritma C: O(n²) — loop bersarang --- 
function cariPasangan(arr) {
    const pasangan = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 10) pasangan.push([arr[i], arr[j]]);
        }
    }
    return pasangan;
}
const data = Array.from({ length: 5000 }, (_, i) => i);
console.log('=== Perbandingan Waktu Eksekusi ===');
ukurWaktu('O(1)  jumlahkanRumus  ', () => jumlahkanRumus(N));
ukurWaktu('O(n)  jumlahkanLinear ', () => jumlahkanLinear(N));
ukurWaktu('O(n²) cariPasangan    ', () => cariPasangan(data));
console.log('\nHasil sama?', jumlahkanLinear(100) === jumlahkanRumus(100));

console.log('\n=== Latihan-1 ===');
function fnA(n) {
    return n * 2;
}
function fnB(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++)
        {
            
        }
    }
}
function fnC(n) {
    for (let i = 1; i < n; i *= 2) { }
}

function fnD(arr) {
    arr.forEach(x => {
        arr.forEach(y => {
            arr.forEach(z => { });
        });
    });
}
function hitungKompleksitas(n, fn, useArray = false) {
    const start = Date.now();

    if (useArray) {
        const arr = Array.from({ length: n }, (_, i) => i);
        fn(arr);
    } else {
        fn(n);
    }
    const end = Date.now();
    console.log(`Waktu eksekusi (${fn.name}) untuk n=${n}: ${end - start} ms`);
}
const n = 1000;
hitungKompleksitas(n, fnA);
hitungKompleksitas(n, fnB);
hitungKompleksitas(n, fnC);
hitungKompleksitas(n, fnD, true);