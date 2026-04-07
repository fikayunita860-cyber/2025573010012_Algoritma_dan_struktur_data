console.log("=== TUGAS 2: BMI ===");

// 1. Data
const beratBadan = 68;   // kg
const tinggiBadan = 1.72; // meter

// 2. Hitung BMI
let bmi = beratBadan / (tinggiBadan * tinggiBadan);

// 3. Ambil 2 angka di belakang koma
let bmiFix = bmi.toFixed(2);

// 4. Tentukan kategori
let kategori;

if (bmi < 18.5) {
    kategori = "Kurus (Underweight)";
} else if (bmi >= 18.5 && bmi <= 24.9) {
    kategori = "Normal (Ideal)";
} else if (bmi >= 25 && bmi <= 29.9) {
    kategori = "Kelebihan Berat Badan (Overweight)";
} else {
    kategori = "Obesitas (Obese)";
}

// 5. Output
console.log(`Berat: ${beratBadan} kg | Tinggi: ${tinggiBadan} m | BMI: ${bmiFix} | Kategori: ${kategori}`);