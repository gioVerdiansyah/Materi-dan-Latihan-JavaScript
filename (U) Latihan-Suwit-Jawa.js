// Susunan/Algoritmh=
let tanya = true

while (tanya) {
    // menangkap pilihan player
    let p = prompt("Pilih: gajah, semut , orang")


    // membangkitkan bilangan random
    let com = Math.random()

    if (com < 0.34) {
        com = "gajah"
    } else if (com >= 0.34 && com < 0.67) {
        com = "orang"
    } else {
        com = "semut"
    }

    let result = ""

    // menentukan rules

    if (p == com) {
        result = "SERI"
    } else if (p == "gajah") {
        result = (com == "orang") ? "MENANG!" : "KALAH"
    } else if (p == "orang") {
        result = (com == "gajah") ? "KALAH!" : "MENANG!"
    } else if (p == "semut") {
        result = (com == "orang") ? "KALAH!" : "MENANG!"
    } else {
        result = "Tidak Memasukkan Sesuai Input!"
    }

    // tampilkan hasil

    alert("Kamu Memilih " + p + " Dan Komputer Memilih " + com + " \n Hasilnya Adalah Kamu: " + result)

    tanya = confirm("Ulangi Lagi?")
}
alert("Terimakasih Sudah Bermain")