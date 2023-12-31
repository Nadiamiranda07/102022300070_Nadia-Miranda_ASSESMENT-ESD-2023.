function hitungKembalian(totalPembayaran, totalBelanja) {
    const pecahanUang = [100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100];
    let kembalian = totalPembayaran - totalBelanja;
    let hasilKembalian = {};

    for (let i = 0; i < pecahanUang.length; i++) {
        const nominal = pecahanUang[i];

        if (kembalian >= nominal) {
            const jumlahPecahan = Math.floor(kembalian / nominal);
            hasilKembalian[nominal] = jumlahPecahan;
            kembalian %= nominal;
        }
    }

    return hasilKembalian;
}

const totalPembayaran1 = 10000;
const totalBelanja1 = 7500;
console.log(hitungKembalian(totalPembayaran1, totalBelanja1));

const totalPembayaran2 = 5000;
const totalBelanja2 = 1100;
console.log(hitungKembalian(totalPembayaran2, totalBelanja2));

const totalPembayaran3 = 178000;
const totalBelanja3 = 90500;
console.log(hitungKembalian(totalPembayaran3, totalBelanja3));
