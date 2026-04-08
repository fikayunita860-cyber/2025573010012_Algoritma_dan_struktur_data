// 1. Fungsi pangkat (rekursif)
function pangkat(basis, eksponen) {
  if (eksponen === 0) return 1;
  return basis * pangkat(basis, eksponen - 1);
}

// 2. Fungsi balikString (rekursif)
function balikString(str) {
  if (str.length <= 1) return str;
  return str[str.length - 1] + balikString(str.slice(0, -1));
}

// 3. Fungsi cekPalindrom
function cekPalindrom(str) {
  const balik = balikString(str);
  return str === balik;
}

// 4. Testing
console.log("\n=== Pangkat ===");
console.log(pangkat(2, 3)); // 8
console.log(pangkat(5, 2)); // 25

console.log("\n=== Balik String ===");
console.log(balikString("halo")); 

console.log("\n=== Palindrom ===");
const kata = ["katak", "civic", "level", "halo"];

kata.forEach(k => {
  console.log(`${k} -> ${cekPalindrom(k)}`);
});