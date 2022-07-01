let seluruhAngkot = 10
let angkotYangBeroperasi = 6


for (let nilaiAngkot = 1; nilaiAngkot <= seluruhAngkot; nilaiAngkot++) {

    if (nilaiAngkot <= angkotYangBeroperasi) {
        document.writeln("Angkot No." + nilaiAngkot + " Sedang beroperasi dengan baik <br>")
    } else if (nilaiAngkot === 8) {
        document.writeln("Angkot No." + nilaiAngkot + " Sedang lembur <br>")
    } else {
        document.writeln("Angkot No." + nilaiAngkot + " Sedang tidak beroperasi <br>")
    }
}

// ini akan berulangan nilaiAngkot = 1 maka, apakah nilaiAngkot(1) kurang dari dari seluruhAngkot (10) maka true, akan masuk ke pengulangan if dan else if, yang pertama masuk ke if, apakah 1 kurang dari 10 true maka akan keluar dan karena fornya masih bernilai true maka akan masuk ke perulangan lagi, di if hanya sampai 6=6 (ini dari var angkotYangBeroperasi), maka akan keluar dan karena fornya masih true maka akan di lakukan pengulanan berikutnya, karena ifnya sudah tidak true maka akan dikerjakan else if, apakah else if sekarang mengadung nilai 7? false maka akan masuk ke else, dan nilai 8 di if adalah false maka akan di cek apakah di else if mengandung (sama dengan satu tipe) nilai 8 true maka akan dikerjakan aksi yang ada di else if, dan sekarang nilai 9-10 masuk ke else karena if dan else if tidak mengandung nilai tersebut

document.writeln("<br> BREAK!!!, Latihan Angkot 5 <br> <br>")



// sekarang latihannya adalah angkot 10 juga ikutan lembur.
// mungkin saja kalian bisa menambahkan else if lagi tapi itu kurang efektif maka :
let semuaAngkot = 10
let angkotBeroperasi = 6


for (let noAngkot = 1; noAngkot <= semuaAngkot; noAngkot++) {

    if (noAngkot <= angkotBeroperasi) {
        document.writeln("Angkot No." + noAngkot + " Sedang beroperasi dengan baik <br>")
    } else if (noAngkot === 8 || noAngkot === 10) { // kalian bisa menambahkan operator logika OR, kalau AND maka logikanya akan salah kan bacanya "jika noAngkot = 8 DAN noAngkotnya = 10" jadi ngga mungkin ada angkot yang nomornya 2 (8 dan 10), jadi hasilnya tidak akan pernah tercapai
        document.writeln("Angkot No." + noAngkot + " Sedang lembur <br>")
    } else {
        document.writeln("Angkot No." + noAngkot + " Sedang tidak beroperasi <br>")
    }
}


document.writeln("<br> BREAK!!!, Latihan Angkot 6 <br> <br>");
// sekarang di nomor 5 sedang lembur, kalau kalian pakai OR di else if kan no 5 sudah di kerjakan di if duluan maka yang ada di else if tidak akan dikerjakan, karena sudah dikerjakan dulu.

// jadi di sini kalian baru pakai operator logika AND
{
    let seluruhAngkot = 10
    let angkotYangBeroperasi = 6


    for (let noAngkot = 1; noAngkot <= seluruhAngkot; noAngkot++) {

        if (noAngkot <= angkotYangBeroperasi && noAngkot !== 5) { // maka noAngkot ke 5 menjadi false
            document.writeln("Angkot No." + noAngkot + " Sedang beroperasi dengan baik <br>")
        } else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5) { // nah ini artinya no 5 ditampung di else if agar tidak bablas ke else
            document.writeln("Angkot No." + noAngkot + " Sedang lembur <br>")
        } else {
            document.writeln("Angkot No." + noAngkot + " Sedang tidak beroperasi <br>")
        }
    }
}