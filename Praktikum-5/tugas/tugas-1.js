// Fungsi A: Intersection dari dua array
// Versi O(n²) menggunakan nested loop
function intersectionO_n2(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j] && !result.includes(arr1[i])) {
        result.push(arr1[i]);
      }
    }
  }
  return result;
}

// Versi O(n) menggunakan Set
function intersectionO_n(arr1, arr2) {
  let set2 = new Set(arr2);
  let result = new Set();
  
  for (let i = 0; i < arr1.length; i++) {
    if (set2.has(arr1[i])) {
      result.add(arr1[i]);
    }
  }
  
  return Array.from(result);
}

// Fungsi B: Kelompok anagram dari array string
// Sortir setiap kata sebagai key
function groupAnagrams(arr) {
  let anagramMap = {};
  
  for (let word of arr) {
    // Sortir huruf dalam kata untuk dijadikan key
    let sorted = word.split('').sort().join('');
    
    if (!anagramMap[sorted]) {
      anagramMap[sorted] = [];
    }
    anagramMap[sorted].push(word);
  }
  
  return Object.values(anagramMap);
}

// Fungsi C: Cek dua elemen yang jumlahnya sama dengan kuadrat elemen ketiga
// Versi O(n³)
function hasPerfectSquareSumO_n3(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = 0; k < arr.length; k++) {
        if (k !== i && k !== j) {
          let sum = arr[i] + arr[j];
          let square = arr[k] * arr[k];
          if (sum === square) {
            return true;
          }
        }
      }
    }
  }
  return false;
}

// Versi O(n log n)
function hasPerfectSquareSumO_nlogn(arr) {
  // Sortir array
  let sorted = arr.sort((a, b) => a - b);
  
  // Untuk setiap elemen k, cari pasangan i,j dengan i+j = k²
  for (let k of arr) {
    let target = k * k;
    let left = 0, right = sorted.length - 1;
    
    while (left < right) {
      let sum = sorted[left] + sorted[right];
      
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

// Test Fungsi A
console.log('=== Fungsi A: Intersection ===');
console.log('O(n²):', intersectionO_n2([1, 2, 3, 4], [3, 4, 5, 6]));
console.log('O(n):', intersectionO_n([1, 2, 3, 4], [3, 4, 5, 6]));

// Test Fungsi B
console.log('\n=== Fungsi B: Group Anagrams ===');
console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));

// Test Fungsi C
console.log('\n=== Fungsi C: Perfect Square Sum ===');
console.log('O(n³):', hasPerfectSquareSumO_n3([1, 2, 3, 4, 5]));
console.log('O(n log n):', hasPerfectSquareSumO_nlogn([1, 2, 3, 4, 5]));