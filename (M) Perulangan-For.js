// For adalah sebuah keywoard lain selain while yang dapat kita gunakan untuk melakukan pengulangan.
// perbedaan while dan for

let nilaiAwal = 1;
while (nilaiAwal <= 10) {
    document.writeln("Perulangan while " + nilaiAwal + "x <br>")
    nilaiAwal++;
}
// di while ada 3 komponen utama di while yaitu
// nilai awal
// kondisi terminasi
// increment atau decrement


document.writeln("<br>")


// untuk menuliskan for keywoardnya adalah for, kerangkanya:

// for(    ;    ;    ) {


// }

// ada tiga bagian di dalam kurung dan di batasi dengan kurung kurawal buka dan tutup atau isi dari aksi

// yang ada dalam kurung kurawal adalah:

// 1 penentuan nilai awal
// 2 penulisan kondisi terminasi
// 3 increment atau decrement
// contoh:

for (let d = 10; d >= 1; d--) { //ini decrement ygy
    document.writeln("Perulangan for " + d + "x <br>")
}