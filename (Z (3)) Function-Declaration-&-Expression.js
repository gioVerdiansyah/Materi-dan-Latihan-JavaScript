// Function Declaration

// function inditifier (parameter opt) {
//     function body
// }

// keywoard function lalu namanya dan dalam kurung parameter (opsional) lalu kurung kurawal untuk menulis body functionnya, contoh =

function pesan(nama) {
    alert("hello " + nama);
}



// Function Expression
// function indirifier opt (parameter opt) {
//     function body
// }

// jadi function expression ini boleh aja tidak punya nama. contoh =

let tampilPesan = function(nama) {
        alert("hello " + nama)
    } // sekarang disimpan menggunakan variabel





// Function Declaration
// -Lebih fleksibel (dapat ditulis dimana pun) = kita dapat membutnya sebelum / sesudah di pemanggilan function
//   -karena konsep Hoisting = dimana deklarasi sebuah function itu disimpan dahulu didalam memory
// -mudah dipahami oleh pemula



// Functiion Expression
// -Harus didefinisikan dahulu sebelum dipanggil
// -lebih powerfull :
//   -Sebagai closure
//   -Sebagai argument untuk function lain
//   -IIFE (Immediately Invoked Function Expression)