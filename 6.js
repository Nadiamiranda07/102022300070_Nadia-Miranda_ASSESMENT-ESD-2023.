
const menu = [
    { nama: 'Ayam Goreng Krispi', tipe: 'Makanan', harga: 15000 },
    { nama: 'Ayam Puk Puk (Bukan di Geprek)', tipe: 'Makanan', harga: 13000 },
    { nama: 'Ayam Bakar', tipe: 'Makanan', harga: 20000 },
    { nama: 'Es Teh', tipe: 'Minuman', harga: 5000 },
    { nama: 'Es Jeruk', tipe: 'Minuman', harga: 7000 }
  ];
  
  
  function hitungBiayaPesanan(pesanan) {
    let totalBiaya = 0;
  
    pesanan.forEach(item => {
      const menuItem = menu.find(m => m.nama === item.nama);
      const hargaSatuan = menuItem ? menuItem.harga : 0;
      let biayaItem = hargaSatuan * item.jumlah;
  
    
      if (menuItem) {
        biayaItem += menuItem.tipe === 'Makanan' ? (biayaItem * 0.05) : (biayaItem * 0.03);
      }
  
      totalBiaya += biayaItem;
    });
  
    totalBiaya += totalBiaya * 0.15;
  
    return totalBiaya;
  }
  

  const pesananRehan = [
    { nama: 'Ayam Bakar', jumlah: 2 },
    { nama: 'Es Teh', jumlah: 1 }
  ];
  
  const pesananAmba = [
    { nama: 'Ayam Puk Puk (Bukan di Geprek)', jumlah: 1 },
    { nama: 'Es Teh', jumlah: 3 }
  ];
  
  const pesananFaiz = [
    { nama: 'Ayam Goreng Krispi', jumlah: 1 },
    { nama: 'Ayam Puk Puk (Bukan di Geprek)', jumlah: 1 },
    { nama: 'Ayam Bakar', jumlah: 1 },
    { nama: 'Es Teh', jumlah: 1 },
    { nama: 'Es Jeruk', jumlah: 1 }
  ];
  
  const biayaRehan = hitungBiayaPesanan(pesananRehan);
  const biayaAmba = hitungBiayaPesanan(pesananAmba);
  const biayaFaiz = hitungBiayaPesanan(pesananFaiz);
  
  console.log('Biaya Rehan Whangsap: Rp ' + biayaRehan.toLocaleString());
  console.log('Biaya Amba Roni: Rp ' + biayaAmba.toLocaleString());
  console.log('Biaya Faiz Ngawi: Rp ' + biayaFaiz.toLocaleString());
  