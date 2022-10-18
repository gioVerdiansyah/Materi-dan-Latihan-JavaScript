// if (genabAtauTidak % 2 == 0) {
//     alert("Anda memasukkan angka genab :" + genabAtauTidak)
// }else {
//     alert("Anda memasukkan angka :" + genabAtauTidak)
// }


// contoh khasus adalah diatas
// bagaimana jika user tidak memasukkan angka misalnya huruf atau bahkan menekan cancel, maka jelas akan mengarah ke else

// nah gimana dong menanganinya?
// disinilah kita memerlukan yang namanya : else if
// ini digunakan ketika ada kondisi lain, seperti khasus di atas

// if (kondisi) {
//     aksi 1
// }else if (kondisi 2) {
//     aksi 2
// } else {
//     aksi 3, ini jika semua kondisi di atas tidak ada yang true
// }

// jadi sekarang menjadi :

let genabAtauTidak = prompt("Masukkan angka!")


if (genabAtauTidak % 2 === 0) {
    alert("Anda memasukkan angka genab :" + genabAtauTidak)
} else if (genabAtauTidak % 2 === 1) {
    alert("Anda memasukkan angka ganjil :" + genabAtauTidak)
} else {
    alert("Yang anda masukkan bukan sebuah angka!!!")
} // maka selain itu yang dimasukkan oleh user pasti bukan angka!
// sama dengan harus 3 karena biar dibandingkan satu tipe juga