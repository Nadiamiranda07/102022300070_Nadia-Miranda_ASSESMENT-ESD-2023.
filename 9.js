function analisisNakal(daftarAnak) {
    let jumlahPenyebutan = {};

    // Menghitung jumlah penyebutan setiap nama anak
    daftarAnak.forEach(namaAnak => {
        jumlahPenyebutan[namaAnak] = (jumlahPenyebutan[namaAnak] || 0) + 1;
    });
    let namaAnakNakal = Object.keys(jumlahPenyebutan).sort((a, b) => jumlahPenyebutan[b] - jumlahPenyebutan[a]);


    console.log(namaAnakNakal);
    if (namaAnakNakal.length === 1) {
        console.log(`${namaAnakNakal[0]} Nakal`);
    } else if (namaAnakNakal.length === 2) {
        console.log(`${namaAnakNakal[0]} dan ${namaAnakNakal[1]} Nakal`);
    } else {
        console.log("Semuanya anak baik");
    }
}
let daftarAnak1 = ["Bagas", "Dimas", "Bagas", "Bagas", "Indra", "Gilang", "Gilang", "Hana", "Fajar", "Fajar"];
analisisNakal(daftarAnak1);
