// Latihan function dan array

// Pengelolaan Penumpang
// -Penumpang naik
//   -tpenumpangNaik()
// -Penumpang turun
//   -penumpangTurun()


// penumpangNaik()

// -Menerima 2 buah parameter:
//    -namaPenumpang
//    -arrayPenumpang

// Rules
// -jika angkot kosong penumpang naik duduk di kursi pertama
// -penumpang berikutnya duduk dikursi selanjutnya secara berurutan
// -jika ada kursi kosong (karena penumpang turun),penumpang yang naik berikutnya duduk dikursi kosong tadi
// -asumsi kursi tidak akan penuh dan akan bertambah terus jika ada penumpang naik
// -nama penumpang tidak boleh sama, untuk menghindari kebingungan ketika nanti penumpang turun



let penumpang = []

let penumpangNaik = function(namaPenumpang, penumpang) {
    //jika angkot kosong
    if (penumpang.length == 0) {
        //tambah penumpang diawal array
        penumpang.push(namaPenumpang)
            // kembalikan isi array dan keluar dari function
        return penumpang;
    } else {
        //telusuri seluruh ursinya dari awal
        for (let i = 0; i < penumpang.length; i++) {
            //jika ada kursi kosong
            if (penumpang[i] == undefined) {
                // tambah penumpang di kursi tsb
                penumpang[i] = namaPenumpang
                    //kembalikan isi array dan keluar dari function
                return penumpang;
            }
            //jika sudah ada nama yang sama
            else if (penumpang[i] == namaPenumpang) {
                //tampilkan isi pesan kesalahan
                console.log("Nama " + namaPenumpang + " sudah ada di dalam angkot")
                    //kembalikan isi array dan keluar dari function
                return penumpang;
            }
            //jika seluruh kursi terisi
            else if (i == penumpang.length - 1) {
                //tambah penumpang diakhir arrah
                penumpang.push(namaPenumpang);
                //kembalikan isi array dan keluar dari function
                return penumpang
            }
        }
    }
}




//hapusPenumpang()

// -2 parameter
//   -namaPenumpang
//   -arrayPenumpang

// Rules
// -jika angkot kosong, tampilkan pesan bahwa angkot kosong
// -jika penumpang yang namanya sesuai, hapus nama penumpang pada array dengan memberi nilai undifined
// -jika tidak ada penumpang yang namanya sesuai, tampilkan pesan kesalahan

let penumpangTurun = function(namaPenumpang, penumpang) {
    //jika angkot masih kosong
    if (penumpang.length == 0) {
        console.log("Angkot masih kosong!")
        return penumpang;
    } //ketika sudah ada isinya
    else { // jika ada nama penumpangnya
        for (let i = 0; i < penumpang.length; i++) {
            if (penumpang[i] == namaPenumpang) {
                penumpang[i] = undefined
                return penumpang;
            } //jika tidak ada
            else if (i == penumpang.length - 1) {
                console.log("Nama " + namaPenumpang + " tidak ada didalam angkot")
                return penumpang;
            }
        }
    }
}


console.log("cara menggunakannya \n penumpangNaik(\"namanya\", penumpang) \n penumpangTurun(\"namanya\", penumpang)")