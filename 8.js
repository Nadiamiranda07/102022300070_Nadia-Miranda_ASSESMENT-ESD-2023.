const produk = [
    { nama: 'TV', kategori: 'elektronik', harga: 1000 },
    { nama: 'headphone', kategori: 'elektronik', harga: 200 },
    { nama: 'baju', kategori: 'fashion', harga: 50 },
    { nama: 'gitar', kategori: 'musik', harga: 300 },
    { nama: 'sepatu', kategori: 'olahraga', harga: 80 },
    { nama: 'kamera', kategori: 'elektronik', harga: 600 }
  ];
  
  const pelanggan = [
    { nama: 'Rina', minat: ['elektronik', 'musik'], beli: ['TV', 'headphone'] },
    { nama: 'Budi', minat: ['fashion', 'musik'], beli: ['baju', 'gitar'] },
    { nama: 'Hartono', minat: ['olahraga', 'elektronik'], beli: ['sepatu', 'kamera'] }
  ];
  
  function rekomendasiProduk(pelanggan) {
    const rekomendasi = {};
  
    pelanggan.forEach(p => {
      p.minat.forEach(minat => {
        produk.forEach(prod => {
          if (prod.kategori === minat && !p.beli.includes(prod.nama)) {
            if (!rekomendasi[p.nama]) {
              rekomendasi[p.nama] = [];
            }
            rekomendasi[p.nama].push(prod.nama);
          }
        });
      });
    });
  
    return rekomendasi;
  }
  
  // Menampilkan rekomendasi produk untuk setiap pelanggan
  const rekomendasiRina = rekomendasiProduk([pelanggan[0]]);
  const rekomendasiBudi = rekomendasiProduk([pelanggan[1]]);
  const rekomendasiHartono = rekomendasiProduk([pelanggan[2]]);
  
  console.log("Rekomendasi Rina:", rekomendasiRina.Rina);
  console.log("Rekomendasi Budi:", rekomendasiBudi.Budi);
  console.log("Rekomendasi Hartono:", rekomendasiHartono.Hartono);
  