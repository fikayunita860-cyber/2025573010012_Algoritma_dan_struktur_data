class Pasien {
    constructor(id, nama, prioritas, waktuDaftar) {
        this.id = id;
        this.nama = nama;
        this.prioritas = prioritas;
        this.waktuDaftar = waktuDaftar;
    }
}

class AntrianRS {
    constructor() {
        this.antrianDarurat = [];
        this.antrianBiasa = [];
    }

    daftar(pasien) {
        if (pasien.prioritas === 'darurat') {
            this.antrianDarurat.push(pasien);
        } else {
            this.antrianBiasa.push(pasien);
        }
    }

    layani() {
        let pasien;

        if (this.antrianDarurat.length > 0) {
            pasien = this.antrianDarurat.shift();
        } else if (this.antrianBiasa.length > 0) {
            pasien = this.antrianBiasa.shift();
        } else {
            console.log('Tidak ada pasien dalam antrian');
            return;
        }

        console.log(
            `Melayani: ${pasien.id} - ${pasien.nama} (${pasien.prioritas})`
        );
    }

    tampilkanAntrian() {
        console.log('\n=== Antrian Darurat ===');
        this.antrianDarurat.forEach(p =>
            console.log(`${p.id} - ${p.nama}`)
        );

        console.log('\n=== Antrian Biasa ===');
        this.antrianBiasa.forEach(p =>
            console.log(`${p.id} - ${p.nama}`)
        );
    }
}

const rs = new AntrianRS();

const namaPasien = [
    'Andi', 'Budi', 'Citra', 'Dina', 'Eko',
    'Fani', 'Gita', 'Hadi', 'Indah', 'Joko'
];

for (let i = 0; i < 10; i++) {
    const prioritas = Math.random() < 0.4 ? 'darurat' : 'biasa';

    rs.daftar(
        new Pasien(
            i + 1,
            namaPasien[i],
            prioritas,
            new Date()
        )
    );
}

rs.tampilkanAntrian();

console.log('\n=== Proses Pelayanan ===');

while (
    rs.antrianDarurat.length > 0 ||
    rs.antrianBiasa.length > 0
) {
    rs.layani();
}