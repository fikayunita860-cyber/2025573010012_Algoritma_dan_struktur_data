// 1. Data Mahasiswa
const dataMahasiswa = [
  { nama: "Fika", nilai: 85 },
  { nama: "Ara", nilai: 70 },
  { nama: "Bilqis", nilai: 90 },
  { nama: "Siti", nilai: 60 },
  { nama: "Amara", nilai: 75 },
  { nama: "Dilla", nilai: 95 }
];

// 2. Function hitungStatistik
function hitungStatistik(arrMahasiswa) {
  const hasil = arrMahasiswa.reduce((acc, curr) => {
    acc.total++;
    acc.jumlahNilai += curr.nilai;
    acc.tertinggi = Math.max(acc.tertinggi, curr.nilai);
    acc.terendah = Math.min(acc.terendah, curr.nilai);
    return acc;
  }, {
    total: 0,
    jumlahNilai: 0,
    tertinggi: -Infinity,
    terendah: Infinity
  });

  hasil.rataRata = hasil.jumlahNilai / hasil.total;
  return hasil;
}

// 3. Function filterLulus
function filterLulus(arrMahasiswa, batasLulus) {
  return arrMahasiswa.filter(mhs => mhs.nilai >= batasLulus);
}

// 4. Function tambahGrade
function tambahGrade(arrMahasiswa) {
  return arrMahasiswa.map(mhs => {
    let grade;
    if (mhs.nilai >= 90) grade = "A";
    else if (mhs.nilai >= 80) grade = "B";
    else if (mhs.nilai >= 70) grade = "C";
    else if (mhs.nilai >= 60) grade = "D";
    else grade = "E";

    return { ...mhs, grade };
  });
}

// 5. Menjalankan semua function
const statistik = hitungStatistik(dataMahasiswa);
const lulus = filterLulus(dataMahasiswa, 75);
const denganGrade = tambahGrade(dataMahasiswa);

// 6. Output
console.log("=== Statistik ===");
console.log(statistik);

console.log("\n=== Mahasiswa Lulus ===");
lulus.forEach(mhs => {
  console.log(`${mhs.nama} - ${mhs.nilai}`);
});

console.log("\n=== Dengan Grade ===");
denganGrade.forEach(mhs => {
  console.log(`${mhs.nama} - ${mhs.nilai} (${mhs.grade})`);
});