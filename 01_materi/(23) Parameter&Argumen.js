// Parameter adalah variabel yang ditulis didalam kurung pada saat function dibuat, digunakan untuk menampung nilai yang dikirim saat function dipanggil

// Argument nilai yang dikirimkan ke parameter saat function dipanggil

// contoh =

function plus(a, b) /*Parameter*/ {
    return a + b;
}
let a = parseInt(prompt("masukkan angka pertama"))
let b = parseInt(prompt("masukkan angka kedua"))
let hasil = plus(a * a * a, b * b * b) //Argument,bisa juga dikasih operasi matematik setelah prompt dirubah menjadi number(rumus kubus)
alert("hasil nilai adalah " + hasil)

{ //contoh dalam argumen kita juga dapet menggunakan nama function =
    function pertama(a, b) {
        return a + b;
    }

    function kedua(x, y) {
        return x * y;
    }
    let hasil = kedua(pertama(1, 2), pertama(3, 4)) // 3 x 7 = 21
    console.log(hasil)
}

// lalu gimana jika parameter atau argumennya tidak sesuai?

// jika parameter lebih sedikit dari argument maka argument kelebihannya akan diabaikan, contoh =

{
    function tambah(a, b) {
        return a + b;
    }
    let result = tambah(10, 20, 30) //maka yang 30 akan diabaikan
    console.log(result)
}

// lalu jika parameter lebih banyak dari argument, maka parameter kelebihanya akan di isi undifned
{
    function tambah(a, b, c) {
        return a + b;
    }
    result = tambah(10, 20) //maka yang ke tiga akan undifined
    console.log(result)
}

// khusus dalam JS ada variable khusus yang namanya arguments (array yang berisi nilai yang dikirimkan saat fungsi dipanggil) contoh =

{
    function tambah(a, b) {
        return a + b;
    }
    let result = tambah(10, 20, 30) //nah katanya akan diabaikan, tapi diabaikan hanya untuk function, tapi semua argument ini yang dikirim ke parameter sebenarnya ditampung kedalam variable arguments tadi
    console.log(result)
}
// contoh lebih detail
{
    function tambah() {
        return arguments;
    }
    let result = tambah(10, 20, 30, "hi", false) // semua nilai di argument akan diabaikan oleh function tapi masih masuk ke arguments di return
    console.log(result) // kalo kita log maka ada urutan index beserta dengan isinya dari argument di variable result
}
// digunakan jika user memasukkan lebih dari parameter, dan dari pada kita menuliskan parameter kedalam function berulang kali, mending kita gunakan yang namanya arguments =

{
    function plus() {
        let result = 0
        for (let i = 0; i < arguments.length; i++) {
            result += arguments[i]
        } // dia akan melooping tiap elemen yang ada pada arguments dan menjumlahkannya pada variable result, sehingga saat kita return
        return result;
    }
    let test = plus(1, 2, 1.3, 5); // maka akan otomatis di tambahkan
    console.log("test " + test)
}