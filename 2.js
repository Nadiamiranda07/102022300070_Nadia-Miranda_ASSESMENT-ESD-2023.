function cekPalindrom(kalimat) {
  
    kalimat = kalimat.replace(/\s/g, "").toLowerCase();
    
    
    if (kalimat === kalimat.split("").reverse().join("")) {
        return "eureeka!";
    } else {
        return "suka blyat";
    }
}

console.log(cekPalindrom("Angsa"));           
console.log(cekPalindrom("KataK"));           
console.log(cekPalindrom("kasur empuk"));    
console.log(cekPalindrom("Aku Suka Kamu"));   
console.log(cekPalindrom("Ibu Ratna antar ubi."));  
