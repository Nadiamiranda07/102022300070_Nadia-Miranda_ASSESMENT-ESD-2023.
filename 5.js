function hitungKombinasiUsername(nama) {
    const namaKecil = nama.toLowerCase().replace(/\s/g, ''); 
    const panjangNama = namaKecil.length;
    const panjangMaxUsername = 6;
  
    let jumlahKombinasi = 0;
  
    for (let panjangUsername = 1; panjangUsername <= panjangMaxUsername; panjangUsername++) {
  
      jumlahKombinasi += permutasi(panjangNama, panjangUsername);
    }
  
    return jumlahKombinasi;
  }
  function faktorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * faktorial(n - 1);
    }
  }
  
  function permutasi(n, r) {
    return faktorial(n) / faktorial(n - r);
  }
  
  const nama = "Naip Lovyu";
  const jumlahKombinasi = hitungKombinasiUsername(nama);
  
  console.log("Jumlah kombinasi username yang mungkin:", jumlahKombinasi);
  