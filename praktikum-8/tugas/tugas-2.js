// ===============================
// 1. subArrayJumlahK(arr, k)
// Prefix Sum + HashMap
// ===============================

function subArrayJumlahK(arr, k) {
    const map = new Map();
    map.set(0, 1);

    let sum = 0;
    let count = 0;

    for (let num of arr) {
        sum += num;

        if (map.has(sum - k)) {
            count += map.get(sum - k);
        }

        map.set(sum, (map.get(sum) || 0) + 1);
    }

    return count;
}

/*
BIG O:
- Time: O(n)
- Space: O(n)

BRUTE FORCE:
- Time: O(n^2)
*/


// ===============================
// 2. karakterPertamaUnik(s)
// ===============================

function karakterPertamaUnik(s) {
    const map = new Map();

    for (let char of s) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    for (let i = 0; i < s.length; i++) {
        if (map.get(s[i]) === 1) {
            return i;
        }
    }

    return -1;
}

/*
BIG O:
- Time: O(n)
- Space: O(1) ~ O(26) jika alfabet kecil

BRUTE FORCE:
- Time: O(n^2)
*/


// ===============================
// 3. topKFrequent(arr, k)
// ===============================

function topKFrequent(arr, k) {
    const map = new Map();

    for (let num of arr) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    // ubah ke array
    const sorted = [...map.entries()]
        .sort((a, b) => b[1] - a[1])
        .map(item => item[0]);

    return sorted.slice(0, k);
}

/*
BIG O:
- Time: O(n log n) (karena sorting)
- Space: O(n)

BRUTE FORCE:
- Time: O(n^2)
*/


// ===============================
// TEST CASE
// ===============================

console.log("=== subArrayJumlahK ===");
console.log(subArrayJumlahK([1, 1, 1], 2)); // 2

console.log("=== karakterPertamaUnik ===");
console.log(karakterPertamaUnik("leetcode")); // 0

console.log("=== topKFrequent ===");
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // [1, 2]