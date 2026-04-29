// Fungsi A: O(1)
// Big O: O(1) - Operasi hanya dilakukan satu kali
function fnA(n) {
  return n * 2;
}

// Fungsi B: O(n²)
// Big O: O(n²) - Loop nested dua tingkat
function fnB(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {}
  }
}

// Fungsi C: O(log n)
// Big O: O(log n) - Nilai i dikalikan 2 setiap iterasi
function fnC(n) {
  for (let i = 1; i < n; i *= 2) {}
}

// Fungsi D: O(n³)
// Big O: O(n³) - Loop nested tiga tingkat
function fnD(arr) {
  arr.forEach((x) => {
    arr.forEach((y) => {
      arr.forEach((z) => {});
    });
  });
}

function hitungKompleksitas(n, fn) {
  const start = Date.now();
  fn(n);
  const end = Date.now();
  return end - start;
}

const n = 1000;

console.log("Pengukuran Kompleksitas dengan n=" + n);
console.log("================================");

console.log("\nFungsi A (O(1)):");
console.log("Waktu: " + hitungKompleksitas(n, fnA) + "ms");

console.log("\nFungsi C (O(log n)):");
console.log("Waktu: " + hitungKompleksitas(n, fnC) + "ms");

console.log("\nFungsi B (O(n²)):");
console.log("Waktu: " + hitungKompleksitas(n, fnB) + "ms");

console.log("\nFungsi D (O(n³)):");
const arr = Array.from({ length: n }, (_, i) => i);
console.log("Waktu: " + hitungKompleksitas(n, () => fnD(arr)) + "ms");// FUNGSI A: ARRAY INTERSECTION - O(n²) Brute Force
function intersectionBruteForce(arr1, arr2) {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j] && !result.includes(arr1[i])) {
        result.push(arr1[i]);
      }
    }
  }
  return result;
}

// FUNGSI A: ARRAY INTERSECTION - O(n) Optimized dengan Set
function intersectionOptimized(arr1, arr2) {
  const set2 = new Set(arr2);
  const result = [];
  const seen = new Set();

  for (let num of arr1) {
    if (set2.has(num) && !seen.has(num)) {
      result.push(num);
      seen.add(num);
    }
  }
  return result;
}

// FUNGSI B: GROUP ANAGRAMS - O(n * k log k)
function groupAnagrams(words) {
  const map = new Map();

  for (let word of words) {
    const sorted = word.split("").sort().join("");

    if (!map.has(sorted)) {
      map.set(sorted, []);
    }
    map.get(sorted).push(word);
  }

  return Array.from(map.values());
}

// FUNGSI C: TWO SUM EQUALS THIRD - O(n³) Brute Force
function twoSumEqualsThirdBruteForce(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      for (let k = 0; k < arr.length; k++) {
        if (i !== j && i !== k && j !== k && arr[i] + arr[j] === arr[k]) {
          return true;
        }
      }
    }
  }
  return false;
}

// FUNGSI C: TWO SUM EQUALS THIRD - O(n log n) Optimized
function twoSumEqualsThirdOptimized(arr) {
  if (arr.length < 3) return false;

  const sorted = [...arr].sort((a, b) => a - b);

  for (let k = 0; k < sorted.length; k++) {
    const target = sorted[k];
    let left = 0;
    let right = sorted.length - 1;

    while (left < right) {
      if (left === k) left++;
      if (right === k) right--;

      if (left >= right) break;

      const sum = sorted[left] + sorted[right];
      if (sum === target) {
        return true;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  return false;
}

// TESTING

console.log("=".repeat(70));
console.log("TEST FUNGSI A: ARRAY INTERSECTION");
console.log("=".repeat(70));
const arr1A = [1, 2, 3, 4, 5];
const arr2A = [3, 4, 5, 6, 7];

console.log(`Array 1: [${arr1A}]`);
console.log(`Array 2: [${arr2A}]`);
console.log(`Hasil: [${intersectionBruteForce(arr1A, arr2A)}]\n`);

const largeArr1 = Array.from({ length: 10000 }, (_, i) => i);
const largeArr2 = Array.from({ length: 10000 }, (_, i) => i + 5000);

console.time("Brute Force O(n²)");
intersectionBruteForce(largeArr1, largeArr2);
console.timeEnd("Brute Force O(n²)");

console.time("Optimized O(n)");
intersectionOptimized(largeArr1, largeArr2);
console.timeEnd("Optimized O(n)");

console.log("\n" + "=".repeat(70));
console.log("TEST FUNGSI B: GROUP ANAGRAMS");
console.log("=".repeat(70));
const words = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(`Input: [${words.map((w) => "'" + w + "'").join(", ")}]`);

const grouped = groupAnagrams(words);
console.log("Output:");
grouped.forEach((group) => {
  console.log(`  [${group.map((w) => "'" + w + "'").join(", ")}]`);
});

const largeWordList = [];
const wordPatterns = ["abc", "bca", "cab", "aaa", "bbb", "xyz", "yzx"];
for (let i = 0; i < 5000; i++) {
  largeWordList.push(wordPatterns[i % wordPatterns.length]);
}

console.time("Group Anagrams");
groupAnagrams(largeWordList);
console.timeEnd("Group Anagrams");

console.log("\n" + "=".repeat(70));
console.log("TEST FUNGSI C: TWO SUM EQUALS THIRD");
console.log("=".repeat(70));
const arr1C = [1, 2, 3, 5, 6];
console.log(`Array: [${arr1C}]`);
console.log(`Brute Force: ${twoSumEqualsThirdBruteForce(arr1C)}`);
console.log(`Optimized: ${twoSumEqualsThirdOptimized(arr1C)}`);

const arr2C = [1, 2, 5, 7, 10];
console.log(`\nArray: [${arr2C}]`);
console.log(`Brute Force: ${twoSumEqualsThirdBruteForce(arr2C)}`);
console.log(`Optimized: ${twoSumEqualsThirdOptimized(arr2C)}`);

const largeArr = Array.from({ length: 500 }, (_, i) => i + 1);

console.time("Brute Force O(n³)");
twoSumEqualsThirdBruteForce(largeArr);
console.timeEnd("Brute Force O(n³)");

console.time("Optimized O(n log n)");
twoSumEqualsThirdOptimized(largeArr);
console.timeEnd("Optimized O(n log n)");

console.log("\n" + "=".repeat(70));