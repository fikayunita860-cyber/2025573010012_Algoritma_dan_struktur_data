class Produk {
  constructor(id, nama, harga, stok) {
    this.id = id;
    this.nama = nama;
    this.harga = harga;
    this.stok = stok;
  }

  info() {
    console.log(this.nama, this.harga, this.stok);
  }

  tersedia() {
    return this.stok > 0;
  }

  jual(jumlah) {
    if (this.stok >= jumlah) this.stok -= jumlah;
  }
}

class ProdukDigital extends Produk {
  constructor(id, nama, harga, stok, ukuranFile, formatFile) {
    super(id, nama, harga, stok);
    this.ukuranFile = ukuranFile;
    this.formatFile = formatFile;
  }

  download() {
    console.log("Download...");
  }

  jual() {
    console.log("Tidak mengurangi stok");
  }
}

class ProdukFisik extends Produk {
  constructor(id, nama, harga, stok, beratGram) {
    super(id, nama, harga, stok);
    this.beratGram = beratGram;
  }

  hitungOngkir(tarif) {
    return (this.beratGram / 1000) * tarif;
  }
}

// contoh
const daftarProduk = [
  new ProdukDigital(1, "Ebook", 50000, 1, 5, "PDF"),
  new ProdukFisik(2, "Mouse", 75000, 10, 300)
];

// forEach
daftarProduk.forEach(p => p.info());

// filter
console.log(daftarProduk.filter(p => p.tersedia()));

// map
console.log(daftarProduk.map(p => p.nama));