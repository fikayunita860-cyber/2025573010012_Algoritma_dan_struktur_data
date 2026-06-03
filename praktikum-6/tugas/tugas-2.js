// File: tugas/tugas-2.js
// =========================
// Class Node
// =========================
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
// =========================
// Membuat Linked List dari Array
// =========================
function buatLinkedList(array) {
  if (array.length === 0) return null;

  let head = new Node(array[0]);
  let current = head;

  for (let i = 1; i < array.length; i++) {
    current.next = new Node(array[i]);
    current = current.next;
  }
  return head;
}
// =========================
// Menampilkan Linked List
// =========================
function printList(head) {
  let current = head;
  let result = "";

  while (current) {
    result += current.data + " -> ";
    current = current.next;
  }
  console.log(result + "null");
}
// =====================================================
// 1. palindromLL(head)
// Mengecek apakah Linked List adalah palindrom
// Hint: konversi ke array
// Big O: O(n)
// =====================================================
function palindromLL(head) {
  let arr = [];
  let current = head;

  // Simpan ke array
  while (current) {
    arr.push(current.data);
    current = current.next;
  }
  // Cek palindrome
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] !== arr[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

// =====================================================
// 2. hapusNDariAkhir(head, n)
// Menghapus node ke-n dari akhir
// Menggunakan two-pointer
// Big O: O(n)
// =====================================================
function hapusNDariAkhir(head, n) {
  let dummy = new Node(0);
  dummy.next = head;

  let fast = dummy;
  let slow = dummy;

  // Geser fast sebanyak n+1 langkah
  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }

  // Geser fast dan slow bersama
  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }

  // Hapus node
  slow.next = slow.next.next;

  return dummy.next;
}
// =====================================================
// 3. tengahLinkedList(head)
// Mengembalikan node tengah
// Jika genap ambil tengah kedua
// Menggunakan fast & slow pointer
// Big O: O(n)
// =====================================================
function tengahLinkedList(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}
// =====================================================
// PENGUJIAN FUNGSI
// Minimal 3 kasus berbeda per fungsi
// =====================================================

console.log("=================================");
console.log("PENGUJIAN palindromLL()");
console.log("=================================");

// Kasus 1
let list1 = buatLinkedList([1, 2, 3, 2, 1]);
printList(list1);
console.log("Palindrome:", palindromLL(list1));

// Kasus 2
let list2 = buatLinkedList([1, 2, 2, 1]);
printList(list2);
console.log("Palindrome:", palindromLL(list2));

// Kasus 3
let list3 = buatLinkedList([1, 2, 3, 4]);
printList(list3);
console.log("Palindrome:", palindromLL(list3));

console.log("\n=================================");
console.log("PENGUJIAN hapusNDariAkhir()");
console.log("=================================");

// Kasus 1
let list4 = buatLinkedList([1, 2, 3, 4, 5]);
printList(list4);

list4 = hapusNDariAkhir(list4, 2);

console.log("Setelah hapus:");
printList(list4);

// Kasus 2
let list5 = buatLinkedList([10, 20, 30]);
printList(list5);

list5 = hapusNDariAkhir(list5, 1);

console.log("Setelah hapus:");
printList(list5);

// Kasus 3
let list6 = buatLinkedList([7, 8]);
printList(list6);

list6 = hapusNDariAkhir(list6, 2);

console.log("Setelah hapus:");
printList(list6);

console.log("\n=================================");
console.log("PENGUJIAN tengahLinkedList()");
console.log("=================================");

// Kasus 1
let list7 = buatLinkedList([1, 2, 3, 4, 5]);
printList(list7);

let tengah1 = tengahLinkedList(list7);
console.log("Node tengah:", tengah1.data);

// Kasus 2
let list8 = buatLinkedList([10, 20, 30, 40]);
printList(list8);

let tengah2 = tengahLinkedList(list8);
console.log("Node tengah:", tengah2.data);

// Kasus 3
let list9 = buatLinkedList([100, 200, 300, 400, 500, 600]);
printList(list9);

let tengah3 = tengahLinkedList(list9);
console.log("Node tengah:", tengah3.data);