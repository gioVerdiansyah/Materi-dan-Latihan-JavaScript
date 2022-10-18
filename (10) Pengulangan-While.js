// While adalah pengulangan, contoh kalian ingin membuat Hello world sama sebanyak 10 kali misalnya
// kan kalau melakukannya tinggal tulis sebanyak 10 kali tapi itu terlalu repot dan melelahkan apalagi jika 100 kali gimana?

// cara menggunakan while cukup tulis aja lalu syntaxnya :
// while(kondisi) {
//     aksi
// }

// selama kondisi di dalam kurung itu bernilai true maka lakukan aksi yang ada di blok kurung kurawal tersebut 
// contohnya saya tulis aja begini:

// while (true) {
//     console.log("Hello world")
// }

// WARNING: INFINITY LOOP, akan membuat browser lag
// jika dalam whilenya bernilai false maka aksi tidak akan pernah dijalankan

// tapi kita bisa menghentikannya lewat kondisi :

let ulangi = true;

while (ulangi) {
    alert("Perulangan While")
    ulangi = confirm("Ulangi Lagi?") // maka ini akan mengganti variable ulangi di atas jika oke akan masih true tapi kalo cancle maka akan menghasilkan nilai false dan akan selesai dari looping whilenya
}

// yang kedua kita bisa hentikan lewat program itu sendiri :
// contoh:

// nilai awal
// while (kondisi terminasi) {

// aksi

// increment / decrement
// }

let nilaiAwal = 1;

while (nilaiAwal <= 10) {

    console.log("perulangan while ke " + nilaiAwal + "x")

    nilaiAwal++;
    // increment / decrement itu artinya ++ atau --
}
// perbedaan dengan for adalah return dari increment / decrement berada di dalam kurung kurawal setelah aksi