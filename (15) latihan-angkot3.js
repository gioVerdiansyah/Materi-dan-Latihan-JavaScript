let jumlahAngkot = 10
let sedangBeroperasi = 6


for (let nilaiAngkot = 1; nilaiAngkot <= jumlahAngkot; nilaiAngkot++) {

    if (nilaiAngkot <= sedangBeroperasi) {
        document.writeln("Angkot No." + nilaiAngkot + " Sedang beroperasi dengan baik <br>")
    }
    // nilai angkot berawal dari satu karena kurang dari sedang beroperasi (6) maka akan increment dari fornya
    else if (nilaiAngkot >= sedangBeroperasi) {
        document.writeln("Angkot No." + nilaiAngkot + " Sedang tidak beroperasi <br>")
    }
    // ini akan berulangan nilaiAngkot = 1 maka, apakah nilaiAngkot(1) kurang dari dari jumlahAngkot (10) maka true, akan masuk ke pengulangan if dan else if, yang pertama masuk ke if, apakah 1 kurang dari 10 true maka akan keluar dan karena fornya masih bernilai true maka akan masuk ke perulangan lagi, di if hanya sampai 6=6, maka akan keluar dan karena fornya masih true maka akan di lakukan pengulanan berikutnya, karena ifnya sudah tidak true maka akan dikerjakan else if sampai bernilai true lalu jika sudah false seperti if maka akan keluar dan jika variable nilaiAngkot sudah dipenuhi oleh perulangan yang ada didalam for maka for otomatis tidak akan dikerjakan dan akan berhenti.

    // jika bingung bisa menggunakan else saja dan konsinya dihapus, akan sama aja
}
// increment di for sebagai perulangan untuk if atau else if di dalam fornya itu sendiri