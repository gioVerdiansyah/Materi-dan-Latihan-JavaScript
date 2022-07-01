let nilaiAwal = 1;

while (nilaiAwal <= 10) {

    console.log("Angkot No. " + nilaiAwal + " beroprasi dengan baik.")

    nilaiAwal++;
}

console.log("akhir dari angkot dan awal dari perbaikan program angkot tersebut")

// Tabel Penelusuran atau perbaikan program 

// dari pada kita menggunakan nama variable nilai awal lebih baik menggunakan nama variable yang sesuai dengan khasus kita yaitu angkot dan menambah variable jumlah angkot


let jumlaAngkot = 10;
let noAngkot = 1;

while (noAngkot <= jumlaAngkot) {

    console.log("Angkot No. " + noAngkot + " beroprasi dengan baik.")

    noAngkot++;
}

// nomor 10 dalam while juga bisa diganti dengan nama variable jumlahAngkot


// Menggunakan Table Penelusuran trace table / dry-run test

// Program di atas kita adalah khasusnya, kita punya variable jumlahAngkot dan noAngkot

// untuk membuat tabel penelusuran kita cukup tuliskan nama-nama variable yang nilainya ada kemungkinan berubah saat pengulangan 

// noAngkot   noAngkot<=jumlahAngkot?                 output
//     1               true             Angkot No. 1 beroperasi dengan baik
//     2               true             Angkot No. 2 beroperasi dengan baik
//     3               true             Angkot No. 3 beroperasi dengan baik
//    ...                        
//     10              true             Angkot No. 10 beroperasi dengan baik
//     11              false            keluar dari perulangan!!