// Array adalah susunan sistematis dari objek-objek yang serupa (inggris)
// Array itu adalah tipe data yang digunaan untuk mendeskripsikan kumoulan elemen (nilai atau variabel), yang tiap-tiap elemennya memiliki index (programming)

// mirip dengan variabel tapi lebih sakti karena bisa menampung lebih dari satu nilai
// perbedaan =


var hari = "senin"
var hari = "selasa"

//nah variabel kedua ini menggantikan variable pertama, nah gimana dong kalo saya ingin membedakan semua hari?

var hari1 = "senin"
var hari2 = "selasa"

//nah ngga efektif banget kalo pengen membuat banyak hari
// solusinya menggunakan array:


var namaNamaHari = ["senin", "selasa", "rabu", "kamis", "jum\'at", "saptu", "minggu"]
    //menuliskannya menggunakan kurung siku lalu di tuliskan nilainya, untuk memisahkannya menggunakan koma


// Kenapa array?
// -Mempermudah pengelolaan nilai / value / data
//   -penelusuran dan pencarian
// -Managemen memori


// Array
// -Variabel jamak, yang mempunyai banyak elemen dan diacu dengan nama yang sama
// -Kumpulan pasangan key dan nilai / key and value pair
// -Key adalah index pada array dengan tipe integer yang dimulai dari 0
// -Array pada JavaScript ini bertipe object
// -Memiliki fungsi / method lenght untuk menghitung jumlah elemen didalamnya
// -Elemen pada array boleh memiliki tipe data yang berbeda


// Key and value pair
let binatang = ["kucing", "kelinci", "monyet", "panda", "koala", "sapi"];
// dimulai dari 0

// atau
let namaBinatang = []
namaBinatang = ["kucing", "kelinci", "monyet", "panda", "koala", "sapi"]

// nah kalau memanggilnya =

console.log(binatang[4]); //maka ini memanggil yang koala

// menampilkan tipe data dari array

console.log(typeof(namaBinatang));

// fungsi / method dalam object

console.log(binatang.length); //menampilkan panjang isi dari array

// Elemen pada array boleh beda tipe

let campuran = ["senin", "selasa", "rabu", 1, 2, 3, 123, false, true]

// array juga bisa menampunng nama fungsi dengan function expression

let myfac = function() {
    console.log("Hello World")
}

let acak = ["string", 123, true, myfac]

// kita juga bisa nyimpan array didalam array

let random = ["teks", 1, true, myfac, [1, 2, 3]]

// lalu bagaimana menampilkan angka 2 ke console?
console.log(random[4][1]) //jika ada array dalam array lagi maka tinggal tambahkan nama pemanggilan [] lalu indexnya