// function itu adalah kunci utama dari JS yang membuat JS itu powerfull
// function adalah sebuah sub-program / sub-routine yang dapat dipanggil di bagian lain pada program
// merupakan struktur dasar pembentuk dari JS
// disebut juga sebagai prosedur (kumpulan statement untuk melakukan tugas atau menghitung sebuah nilai)
// untuk menggunakannya kita harus membuat dulu lalu memanggilnya 
// termasuk kedalam first-class object


// Kenapa pakai function?

// -reusability(DRY : Do Not Repeat Yourself)
// -Dekomposisi / Abstraksi = menyembunyikan kompleksitas dari program
// -modularitas = akan mudah mencari letak kesalahan program


// Kategori Function

// -Bulit-in Function = fungsi yang sudah dibuatkan oleh JS (misal alert,comfirm,form,dll)
// User-Difined Function = fungsi yang kita buat sendiri (dengan deklarasi / ekpresi)

// User-defined function
// -menggunakan keywoard function
// -nama function (optional)
// -parameter / argument
//    -disimpan dalam ()
//    -boleh lebi dari satu
//    -dipisahkan dengan koma kalau ingin lebih dari satu
// -function body, dibungkus dengan {}
// -dapat mengembalikan nilai (return value)atau tidak

// ada dua pembuatan yaitu dengan:
// function declaration
// function expression


// Function Declaration

function jumlahDuaBilangan(a, b) {
    let total;
    total = a + b;

    return total;
}
alert(jumlahDuaBilangan(10, 20))
alert(jumlahDuaBilangan(100, 200))
alert(jumlahDuaBilangan(1000, 2000))
    // Function Expression

let jmlhDuaBilangan = function(a, b) {
        let total;
        total = a + b;

        return total
    } //tidak ada nama functionnya

// meski tidak ada parameterya harus menyertakan kurung buka dan tutup