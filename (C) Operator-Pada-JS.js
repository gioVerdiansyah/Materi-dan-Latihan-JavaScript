// `Operator dalam JavaScript adalah sebuah simbol yang digunakan untuk melakukan operasi`

// OPERATOR

// - aritmatika (matematika) {+, -, *, /, %} (tambah kurang kali bagi dan persen / modulo / sisa bagi)
// - penugasan {=}
// - perbandingan
// - logika
// - string
// - kondisional
// - typeof

// operator-operator ini dapat kita bagi berdasarkan jumlah operandnya.
// operator aritmatika sampai string itu disebut dengan operator binary
// sedangkan operator kondisional itu disebut dengan operator ternary
// dan operator typeof itu disebut dengan operator unary

// BINARY = sebuah operator yang membutuhkan 2 operand
// misalnya: operand1 operator operand2 contoh: 1 + 1

// UNARY = cuma membutuhkan 1 operand 
// misalnya: operator operand atau sebaliknya

// TERNARY = membutukan 3 operand

// Perlu di ingat urutan operator adalah = () * / + -

// contoh operator aritmatika:

document.writeln(3 + 3);

document.writeln("<br>")
document.writeln(1 + 2 * 3 - 4); //jika ingin 5 operasinya dari kiri maka harus di tambahkan kurung untuk mendahulukannya

document.writeln("<br>")
document.writeln((1 + 2) * 3 - 4);
// kalian bisa main-main dengan operatornya tanpa saya menjelaskan satu-satu intinya mirip di dunia nyata

// contoh modulo/sisa bagi

document.writeln("<br>")
document.writeln(10 % 5) // ini artinya 10-5 sampai menjadi 0 tapi kalau angkanya berbeda maka pasti akan ada sisanya contoh:

document.writeln("<br>")
document.writeln(10 % 3)

// operator penugasan atau assigment operatornya adalah tanda =

let assigment = 10 //ini variable yang diberi nilai 10

document.writeln("<br>")
document.writeln(assigment) //maka ini nilainya sama yang kita taruh di variable bernama assigment

// operator penugasan += dll

document.writeln("<br>")
document.writeln(assigment += 8) // maka ini artinya nilai dalam variable di jumplahkan dengan nilai yang kita beri (8)
    // bisa coba-coba sendiri dengan simbol-simbol lainnya


// operator perbandingan / comparasi {== != === !== > < >= <=} ! adalah tidak satu type
// operator perbandingan ini akan menghasilkan nilai boolean (true/false) contoh:

document.writeln("<br>")
document.writeln(10 == 10) //true
document.writeln("<br>")
document.writeln(10 == 20) //false
document.writeln("<br>")
document.writeln(10 !== 20) // true karena ! adalah kebalikan (yang salah menjadi benar dan sebaliknya)
document.writeln("<br>")
document.writeln(10 === '10') // sama dengan 3x artinya membandingkan dengan tipenya sekaligus

document.writeln("<br>");
document.writeln("<br>")



// OPERATOR LOGIKA/logical!!!

// operatornya ada:
// && (AND)
// || (OR)
// ! (NOT)

// contoh

let logical = 14;

document.writeln(logical % 2 == 0) //true
document.writeln("<br>")

document.writeln(logical % 2 == 0 && logical < 10) //false karena nilai var logical lebih besar dari 10 bukan kurang dari, operator AND jika salah satu ada yang false maka hasilnya akan false


document.writeln("<br>")

document.writeln(logical % 2 == 0 || logical < 10) //true karena operator OR ini kebalikannya dari operator AND, jika ada salah satu yang true maka hasilnya akan true


document.writeln("<br>")

document.writeln(!logical < 10) // true karena operator NOT ini membalikkan, yang harusnya false jadi true misalnya

document.writeln("<br>");
document.writeln("<br>")


// OPERATOR STRING + (penggabung)
let oStringA = "indomie";
let oStringB = "ayam";



document.writeln(oStringA + oStringB) //nah kan itu jadi gabung ya, kalo ingin ada spasinya maka:

document.writeln("<br>")

document.writeln(oStringA + " " + oStringB) //sekarang jadi ada spasinya
document.writeln("<br>")
    // nah gimana kalau angka di tamabah string dan sebaliknya?
document.writeln(15 + "15") //maka akan jadi 1515 bukan 30, kalo ada 2 pertambahan angka maka akan di tambahkan dulu lalu digabungkan dengan string, dan dalam type string
document.writeln("<br>")
    // tapi kalo string dulu maka

document.writeln("10" + 10 + 10) // nah maka akan menjadi string semua jika didepannya string duluan

document.writeln("<br>");
document.writeln("<br>")



// KONDISIONAL
// jenis operator ini adalah ternary (3 operand)
// digunakan untuk melakukan pengecekan dalam suatu kondisi dan menentuka nilai yang dihasilkan ketika kodisinya bernilai true atau false

// cara nulisnya gini: (kondisi) ? benar : salah , contoh


if (i = 35 % 2 == 0) {
    document.writeln("genap")
} else {
    document.writeln("ganjil")
}
// ini akan dibahas nanti


document.writeln("<br>")



// TYPEOF
// digunakan untuk mengetahui tipe data apa dari nilai yang kita masukkan nanti kedalamnyacaranya kita cukup menuliskan :
// typeof (operand) ini menggunakan operator unary

document.writeln(typeof(10)) //jelas ini number
document.writeln("<br>")
document.writeln(typeof(false)) //jelas ini boolean