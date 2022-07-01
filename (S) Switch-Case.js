// Pengkondisian / percabangan switch
// sekaligus Pengkondisian terakhir

// penggunaannya mirip dengan if dan else, kan kalau if else dan else if:

// if (kondisi) {
//     aksi 1
// }else if (kondisi 2) {
//     aksi 2
// }else if (kondisi 3) {
//     aksi 3
// }else if (kondisi 4) {
//     aksi 4
// } ...
//   else {
//     aksi default
// }

// jika kita punya kondisi satu jika kondisi tersebut bernilai true maka akan dikerjakan dan jika false maka akan keluar dari kondisi tersebut dan akan mencari kondisi yang true dan jika tidak ada akan masuk ke bagian terakhir else
// kita juga bisa butuh banyak else if jika kita butuh 



// Dengan menggunakan switch fungsinya mirip tapi yang membedakan adalah kondisinya dimana switch itu tidak memiliki kondisi yang banyak, kondisinya hanya satu lalu akan mengecek hasil dari kondisinya, contonya seperti ini:

// switch (ekspresi) {
//     case "nilai 1":
//     aksi 1
//     break;

//     case "nilai 2":
//     aksi 2
//     break;

//     case "nilai n":
//     aksi n
//     break;

//     default:
//     aksi default
//     break;
// }

// ekspresi bukan sebuah kondisi yang nantinya akan menghasilkan sebuah nilai yang dibatasi oleh kurung kurawal, lalu didalamnya mengecek dengan casa atau khasus-khasus hasil dari ekspresinya, misalnya jika casenya nilai dari ekspresinya itu nilai satu string maka maka jalankan aksi satu, lalu setelah aksinya kita harus menambahkan keywoard break untuk menghentikan case, setelah aksi dikerjakan maka keluar dari case tersebut.
// jika case satu tidak terpenuhi maka akan mencari sampai ketemu, jika tidak ketemu maka akan masuk ke default atau di if else adalah else

// perbedaanya


// if expression:
let angka = prompt("masukkan angka!");
let y = Number(angka) // ini akan mengkonversi menjadi angka, karena pormpt itu defaultnya string meski yang di masukkan angka atau boolean


if (angka == y && angka !== "") { // ini hanya akan membandingkan identitas namun yang pasti jika user memasukkan huruf dia akan ke else karena huruf itu buka Number baik identitas maupun tipe
    alert("anda memasukkan angka: " + angka)
} else if (angka === "") {
    alert("anda tidak memasukkan apa-apa")
} else if (angka === null) {
    alert("anda menekan cancel")
} else {
    alert("anda tidak memasukkan sebuah angka!")
}


// switch case:
let number = prompt("masukkan angka dalam perulangan switch case")

switch (number) {
    case y:
        alert("anda memasukkan angka: " + number)
        break;

    case "":
        alert("anda tidak memasukkan apa-apa")
        break

    case null:
        alert("anda menekan cancel")
        break;

    default:
        alert("anda tidak memasukkan sebuah angka!")
            // tidak usah memakai break juga tidak apa-apa karena default ini sudah akhir
}

// kekurangan switch case ini adalah tidak bisa memasukkan sebuah kondisi harus nilainya langsung! dan lebih banyak tapi memang lebih mudah dibaca

// contoh lagi kita mau mengecek apakah makanan atau minuman itu sehat atau tidak:

let item = prompt("pilih makanan atau minuman \n (cth: nasi,daging,susu,hamburger,softdrink)")

switch (item) {
    case "nasi":
        alert("makanan / minuman yang anda pilih sehat")
        break

    case "daging":
        alert("makanan / minuman yang anda pilih sehat")
        break

    case "susu":
        alert("makanan / minuman yang anda pilih sehat")
        break

    case "hamburger":
        alert("makanan / minuman yang anda pilih kurang sehat")
        break

    case "softdrink":
        alert("makanan / minuman yang anda pilih kurang sehat")
        break

    default:
        alert("anda tidak memilih makanan di atas!")
}

// kalau ngga ada breaknya, misalnya user memilih nasi,maka setelah case "nasi" dipilih tampilkan alert lalu di dia jalan ke case berikutnya, lalu jika di case berikutnya ada break dia akan berhenti dan keluar dari switch

// sebenernya bisa lebih simpel dan sedikit:

let items = prompt("pilih makanan atau minuman \n (cth: nasi,daging,susu,hamburger,softdrink)")

switch (items) {
    case "nasi":
    case "daging":
    case "susu":
        alert("makanan / minuman yang anda pilih sehat")
        break

    case "hamburger":
    case "softdrink":
        alert("makanan / minuman yang anda pilih kurang sehat")
        break

    default:
        alert("anda tidak memilih makanan di atas!")
}

// jadi jika user memilih daging misalnya maka jika aksinya sama berulang kali bisa menggunakan aksi yang terakhir meski bukan milik si susu tersebut

// sederhananya jika user memilih nasi maka di case akan memilih nasi karena di nasi tidak ada apa-apa maka akan lanjut ke daging dan di daging juga tidak ada apa-apa maka akan lanjut ke susu, susu ada apa? ternyata ada alert("makanan / minuman yang anda pilih sehat") dan bertemu break maka akan keluar dari case dan keluar dari switch