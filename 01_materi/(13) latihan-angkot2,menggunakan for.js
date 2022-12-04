// latihan angkot 1-6 berjalan baik, 7-10 rusak

let jmlAngkot = 10;
let angkotBeroperasi = 6;
let noAngkot = 1;

while (noAngkot <= angkotBeroperasi) {
    document.writeln("Angkot No." + noAngkot + " Sedang beroperasi <br>")
    noAngkot++;
}
for (noAngkot = angkotBeroperasi + 1; noAngkot <= jmlAngkot; noAngkot++) {
    document.writeln("Angkot No." + noAngkot + " Tidak beroperasi <br>")
}