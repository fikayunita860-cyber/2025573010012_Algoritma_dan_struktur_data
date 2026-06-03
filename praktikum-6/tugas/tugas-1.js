// File: tugas/tugas-1.js

// =========================
// Class Node
// =========================
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

// =========================
// Class DoublyLinkedList
// =========================
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null; // Pointer ke node terakhir
    this.length = 0;
  }

  // =========================
  // append(data)
  // Menambah data di akhir list
  // Big O: O(1)
  // Karena langsung menggunakan pointer tail
  // =========================
  append(data) {
    const newNode = new Node(data);

    // Jika list kosong
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Hubungkan node baru ke tail lama
      newNode.prev = this.tail;
      this.tail.next = newNode;

      // Pindahkan tail ke node baru
      this.tail = newNode;
    }

    this.length++;
  }

  // =========================
  // prepend(data)
  // Menambah data di awal list
  // Big O: O(1)
  // =========================
  prepend(data) {
    const newNode = new Node(data);

    // Jika list kosong
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;

      this.head = newNode;
    }

    this.length++;
  }

  // =========================
  // insertAt(index, data)
  // Menambah node pada index tertentu
  // Big O: O(n)
  // Karena harus traversal mencari posisi
  // =========================
  insertAt(index, data) {
    if (index < 0 || index > this.length) {
      console.log("Index tidak valid");
      return;
    }

    // Jika di awal
    if (index === 0) {
      this.prepend(data);
      return;
    }

    // Jika di akhir
    if (index === this.length) {
      this.append(data);
      return;
    }

    const newNode = new Node(data);
    let current = this.head;
    let count = 0;

    // Cari posisi
    while (count < index) {
      current = current.next;
      count++;
    }

    // Sisipkan node
    const previous = current.prev;

    previous.next = newNode;
    newNode.prev = previous;

    newNode.next = current;
    current.prev = newNode;

    this.length++;
  }

  // =========================
  // delete(data)
  // Menghapus node berdasarkan data
  // Big O: O(n)
  // Karena harus mencari node terlebih dahulu
  // =========================
  delete(data) {
    if (!this.head) {
      console.log("List kosong");
      return;
    }

    let current = this.head;

    while (current) {
      if (current.data === data) {

        // Jika node adalah head dan tail
        if (this.head === this.tail) {
          this.head = null;
          this.tail = null;
        }

        // Jika node adalah head
        else if (current === this.head) {
          this.head = current.next;
          this.head.prev = null;
        }

        // Jika node adalah tail
        else if (current === this.tail) {
          this.tail = current.prev;
          this.tail.next = null;
        }

        // Jika node di tengah
        else {
          current.prev.next = current.next;
          current.next.prev = current.prev;
        }

        this.length--;
        return;
      }

      current = current.next;
    }

    console.log("Data tidak ditemukan");
  }

  // =========================
  // reverse()
  // Membalik linked list
  // Big O: O(n)
  // Karena harus mengunjungi semua node
  // =========================
  reverse() {
    let current = this.head;
    let temp = null;

    // Tukar next dan prev setiap node
    while (current) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;

      current = current.prev;
    }

    // Tukar head dan tail
    temp = this.head;
    this.head = this.tail;
    this.tail = temp;
  }

  // =========================
  // printForward()
  // Menampilkan data dari depan
  // Big O: O(n)
  // =========================
  printForward() {
    let current = this.head;
    let result = "";

    while (current) {
      result += current.data + " <-> ";
      current = current.next;
    }

    console.log(result + "null");
  }

  // =========================
  // printBackward()
  // Menampilkan data dari belakang
  // Menggunakan pointer tail
  // Big O: O(n)
  // =========================
  printBackward() {
    let current = this.tail;
    let result = "";

    while (current) {
      result += current.data + " <-> ";
      current = current.prev;
    }

    console.log(result + "null");
  }
}

// =========================
// Contoh Penggunaan
// =========================
const dll = new DoublyLinkedList();

console.log("=== Append ===");
dll.append(10);
dll.append(20);
dll.append(30);
dll.printForward();

console.log("\n=== Prepend ===");
dll.prepend(5);
dll.printForward();

console.log("\n=== Insert At ===");
dll.insertAt(2, 15);
dll.printForward();

console.log("\n=== Delete ===");
dll.delete(20);
dll.printForward();

console.log("\n=== Print Backward ===");
dll.printBackward();

console.log("\n=== Reverse ===");
dll.reverse();
dll.printForward();

// ======================================================
// Pembuktian append() adalah O(1)
// ======================================================
/*
Method append() langsung menambahkan node ke belakang
menggunakan pointer tail tanpa perlu traversal.

Langkah yang dilakukan:
1. Buat node baru
2. Hubungkan node baru ke tail lama
3. Geser tail ke node baru

Semua langkah dilakukan dalam jumlah tetap
dan tidak bergantung pada panjang linked list.

Maka kompleksitas waktunya adalah:

Big O = O(1)
*/