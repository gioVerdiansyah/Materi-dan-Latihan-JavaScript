// Control Flow atau alur kendali dari sebuah program, apa itu?
// kita liat dulu ini:

// Normal Flow atau alur normal, maksudnya:
// ``apabila program kita meiliki lebih dari satu statement, maka statement tersebut akan dieksekusi dari atas ke bawah atau dari ke kiri ke kanan``

// contoh program:

alert("Halo")
alert("nama")
alert("saya")
alert("Sofyan");
alert("Verdi")

// atau contoh seperti ini:

let input = prompt("masukkan input")

alert("input yang anda masukkan adalah " + input)

// jika kita punya 2 buah statement seperti ini maka akan dieksekusi dari atas ke bawah, meski statement akan berhenti dulu di prompt dan menunggu sampai user selesai menulisakn sesuatu, setelah user menekan oke maka program akan lanjut berjalan untuk mengeksekusi statement berikutnya

// kalau control flow kita bisa tak dari atas ke bawah atau kiri ke kanan, bisa saja ita mengatur alurnya tidak lurus dari atas ke bawah karena mungkin aja ada baris program atau statement yang tidak ingin kita eksekusi karena hal tertentu

// untuk melakukan hal tersebut kita membutuhkan yang namanya:
// pengulangan dan pengondisian
// nah dua hal tersebut yang nantinya dapat mengatur alur program kita, kita bahas satu satu



// -Pengulangan loop / iteration = ini adalah sebuah konsep untuk mengerjakan atau mengeksekusi sebuah statement yang sama lebih dari satu kali atau berulang

// Pengulangan di JS ada banyak yaitu:
// -for
// -while
// -do while

// akan dibahas nanti 

// contohnya kita ingin mengulang 1 statement menjadi mengulang beberapa kali, contoh"

alert("awal dari perulangan")

for (let i = 1; i <= 5; i++) {
    alert("Hello world ke " + i)
}
alert("akhir dari perulangan")

// -Pengkondisian / percabangan ini adalah sebuah keadaan dimana program kita bisa memilih eksekusi statemeny yang berbeda berdasarkan kondisi yang diberikan

// misalnya jika kita memberi nilai true maka kita mengeksekusi statement 1 lalu jika false maka akan mengeksekusi statement 2
// pengkondisian sendiri ada beberapa syntax sendiri:

// -if
// -if.. else
// -if.. else if.. else
// -switch

let angka = prompt("Masukkan angka")

if (angka % 2 === 0) {
    alert("angka ini (" + angka + ") adalah genab")
} else if (angka % 2 === 1) {
    alert("angka ini (" + angka + ") adalah ganjil")
} else {
    alert("(" + angka + ") bukan sebuah angka")
}