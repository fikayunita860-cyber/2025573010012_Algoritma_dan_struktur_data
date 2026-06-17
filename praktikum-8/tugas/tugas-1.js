// HashMap dengan Linear Probing + Tombstone + Resize

class HashMapLinearProbing {
    constructor(size = 7) {
        this.kapasitas = size;
        this.table = new Array(size);
        this.ukuran = 0;

        // marker khusus untuk delete (tombstone)
        this.TOMBSTONE = { deleted: true };
    }

    // hash function sederhana
    _hash(key) {
        let hash = 0;
        const PRIME = 31;

        for (let i = 0; i < Math.min(key.length, 100); i++) {
            hash = (hash * PRIME + key.charCodeAt(i)) % this.kapasitas;
        }

        return hash;
    }

    // load factor
    _loadFactor() {
        return this.ukuran / this.kapasitas;
    }

    // resize otomatis
    _resize() {
        const oldTable = this.table;

        this.kapasitas *= 2;
        this.table = new Array(this.kapasitas);
        this.ukuran = 0;

        for (const item of oldTable) {
            if (item && item !== this.TOMBSTONE) {
                this.set(item.key, item.value);
            }
        }
    }

    // SET (linear probing)
    set(key, value) {
        if (this._loadFactor() > 0.7) {
            this._resize();
        }

        let idx = this._hash(key);

        while (
            this.table[idx] &&
            this.table[idx] !== this.TOMBSTONE &&
            this.table[idx].key !== key
        ) {
            idx = (idx + 1) % this.kapasitas;
        }

        if (!this.table[idx] || this.table[idx] === this.TOMBSTONE) {
            this.ukuran++;
        }

        this.table[idx] = { key, value };
    }

    // GET
    get(key) {
        let idx = this._hash(key);
        let start = idx;

        while (this.table[idx]) {
            if (
                this.table[idx] !== this.TOMBSTONE &&
                this.table[idx].key === key
            ) {
                return this.table[idx].value;
            }

            idx = (idx + 1) % this.kapasitas;
            if (idx === start) break;
        }

        return undefined;
    }

    // DELETE (pakai tombstone)
    delete(key) {
        let idx = this._hash(key);
        let start = idx;

        while (this.table[idx]) {
            if (
                this.table[idx] !== this.TOMBSTONE &&
                this.table[idx].key === key
            ) {
                this.table[idx] = this.TOMBSTONE;
                this.ukuran--;
                return true;
            }

            idx = (idx + 1) % this.kapasitas;
            if (idx === start) break;
        }

        return false;
    }

    has(key) {
        return this.get(key) !== undefined;
    }

    // ambil semua key
    keys() {
        const result = [];
        for (const item of this.table) {
            if (item && item !== this.TOMBSTONE) {
                result.push(item.key);
            }
        }
        return result;
    }

    // ambil semua value
    values() {
        const result = [];
        for (const item of this.table) {
            if (item && item !== this.TOMBSTONE) {
                result.push(item.value);
            }
        }
        return result;
    }

    // info distribusi
    info() {
        let terisi = 0;

        for (const item of this.table) {
            if (item && item !== this.TOMBSTONE) {
                terisi++;
            }
        }

        console.log("=== Linear Probing Info ===");
        console.log("kapasitas:", this.kapasitas);
        console.log("ukuran:", this.ukuran);
        console.log("load factor:", (this.ukuran / this.kapasitas).toFixed(2));
        console.log("slot terisi:", terisi);
    }

    // tampilkan isi tabel
    print() {
        console.log(this.table);
    }
}

// ================= DEMO =================
const map = new HashMapLinearProbing();

console.log("=== INSERT DATA ===");

['javascript', 'python', 'java', 'c++', 'rust', 'go', 'typescript', 'kotlin']
.forEach((lang, i) => map.set(lang, i + 1));

console.log("get(java):", map.get('java'));
console.log("get(kotlin):", map.get('kotlin'));

console.log("has(python):", map.has('python'));

map.delete('java');

console.log("setelah delete java:", map.has('java'));

console.log("keys:", map.keys());
console.log("values:", map.values());

map.info();
map.print();