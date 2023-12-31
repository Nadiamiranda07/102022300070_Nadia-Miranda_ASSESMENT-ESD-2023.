// Ben adalah seorang entrepreneur yang bergerak di bidang aplikasi. Di suatu waktu, ia membutuhkan satu function yang akan menerima data review aplikasi yang kemudian akan mengembalikan nilai berikut:
// rating terendah, rating tertinggi, dan rata-rata rating
//sebagai seorang developer, bantu ia membuat fungsi tersebut

function analisisReview(dataReview) {
    if (dataReview.length === 0) {
      return null;
    }
  
    let ratingTerendah = dataReview[0];
    let ratingTertinggi = dataReview[0];
    let totalRating = dataReview[0];
  
    for (let i = 1; i < dataReview.length; i++) {
      const rating = dataReview[i];
  
      // Mencari rating terendah
      if (rating < ratingTerendah) {
        ratingTerendah = rating;
      }
  

      if (rating > ratingTertinggi) {
        ratingTertinggi = rating;
      }
  
      // Menambahkan rating untuk menghitung rata-rata
      totalRating += rating;
    }
  
    const rataRataRating = totalRating / dataReview.length;
  
    return [ratingTerendah, ratingTertinggi, rataRataRating];
  }
  

  const dataReview1 = [4.5, 2.0, 1.5, 3.0, 2.5, 4.0, 5.0, 3.5, 2.0, 1.0];
  const dataReview2 = [5, 4, 2.5, 5, 3.6, 1.1, 3.6, 4, 4.2, 1.5];
  
  console.log(analisisReview(dataReview1)); // Output: [1, 5, 2.9]
  console.log(analisisReview(dataReview2)); // Output: [1.1, 5, 3.55]
  