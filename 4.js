function cekDuplikat(data) {
    var number = {};

    for (var k = 0; k < data.length; k++) {
        var angka = data[k];
        if (number[angka]) {
            return true;
        }
        number[angka] = true;
    }

    return false;
}

var dataInput = [20, 1, 3, 2, 4, 6, 8, 5, 7, 9, 11, 13, 15, 10, 12, 14, 16, 18, 20, 17, 19];
var hasil = cekDuplikat(dataInput);
console.log(hasil);
