function cekUrutanKedatangan(urutan) {
    // Daftar urutan yang benar
    const urutanBenar = ['Ningguang', 'Hutao', 'Xiao', 'Childe'];

    for (let i = 0; i < urutan.length; i++) {
        if (urutan[i] !== urutanBenar[i]) {
            return `Yanfei menyimpulkan bahwa ${urutan[i]} mungkin yang mengambil kue tersebut!`;
        }
    }

    return 'Semua tamu bersikeras bahwa mereka tidak mengambil kue. Misteri belum terpecahkan.';
}

const urutanKedatangan = ['Ningguang', 'Hutao', 'Xiao', 'Childe'];
console.log(cekUrutanKedatangan(urutanKedatangan));
