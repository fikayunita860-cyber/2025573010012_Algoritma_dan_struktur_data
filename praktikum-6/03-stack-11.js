class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
// ======================================
// LINKED LIST
// ======================================

class LinkedList {

    constructor() {
        this.head = null;
        this.length = 0;
    }
    // Tambah di depan
    prepend(data) {

        const newNode = new Node(data);

        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }
    // Hapus data paling depan
    removeFirst() {
        if (!this.head) {
            return null;
        }
        const removed = this.head.data;

        this.head = this.head.next;

        this.length--;

        return removed;
    }

    // Ambil data paling depan
    getFirst() {

        if (!this.head) {
            return null;
        }

        return this.head.data;
    }

    // Cek kosong
    isEmpty() {
        return this.length === 0;
    }

    // Jumlah data
    size() {
        return this.length;
    }

    // Print linked list
    print() {

        if (!this.head) {
            console.log("[Kosong]");
            return;
        }

        let current = this.head;
        let result = "";

        while (current) {

            result += `[${current.data}]`;

            if (current.next) {
                result += " → ";
            }

            current = current.next;
        }

        console.log(result);
    }
}
// ======================================
// STACK
// ======================================

class Stack {

    constructor() {

        // Komposisi LinkedList
        this.list = new LinkedList();
    }

    // Push = prepend
    push(data) {
        this.list.prepend(data);
    }

    // Pop = hapus head
    pop() {
        return this.list.removeFirst();
    }

    // Lihat data teratas
    peek() {
        return this.list.getFirst();
    }

    // Cek kosong
    isEmpty() {
        return this.list.isEmpty();
    }

    // Jumlah data
    size() {
        return this.list.size();
    }
    // Print stack
    print() {

        console.log("TOP");

        this.list.print();

        console.log("BOTTOM");
    }
}
// ======================================
// TEST STACK
// ======================================

const stack = new Stack();

console.log("=== PUSH ===");

stack.push("A");
stack.push("B");
stack.push("C");
stack.push("D");

stack.print();

console.log("\n=== PEEK ===");
console.log(stack.peek());

console.log("\n=== POP ===");
console.log(stack.pop());

stack.print();

console.log("\n=== SIZE ===");
console.log(stack.size());

console.log("\n=== EMPTY ===");
console.log(stack.isEmpty());


// ======================================
// SIMULASI UNDO REDO
// ======================================

console.log("\n=== SIMULASI UNDO ===");

const actions = [
    "Menulis Judul",
    "Menambah Paragraf",
    "Menghapus Kata",
    "Mengubah Warna"
];

const undoStack = new Stack();

// Push semua aksi
for (let action of actions) {

    console.log("Action :", action);

    undoStack.push(action);
}

console.log("\nIsi Stack:");
undoStack.print();

console.log("\nUndo 2 kali:");

console.log("Undo :", undoStack.pop());
console.log("Undo :", undoStack.pop());

console.log("\nStack Setelah Undo:");
undoStack.print();