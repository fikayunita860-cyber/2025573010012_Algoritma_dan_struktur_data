class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    // O(1)
    push(value) {
        this.stack.push(value);

        if (
            this.minStack.length === 0 ||
            value <= this.getMin()
        ) {
            this.minStack.push(value);
        }
    }

    // O(1)
    pop() {
        if (this.stack.length === 0) return null;

        const value = this.stack.pop();

        if (value === this.getMin()) {
            this.minStack.pop();
        }

        return value;
    }

    // O(1)
    peek() {
        return this.stack[this.stack.length - 1];
    }

    // O(1)
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}

// ===== Pengujian =====

const ms = new MinStack();

ms.push(5);
ms.push(3);
ms.push(7);
ms.push(2);

console.log("getMin() =", ms.getMin()); // 2

ms.pop();
console.log("getMin() =", ms.getMin()); // 3

ms.pop();
console.log("getMin() =", ms.getMin()); // 3