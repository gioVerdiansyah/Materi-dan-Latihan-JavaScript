// Boolean adalah
// `` Sebuah tipe data yang digunakan untuk mempresentasikan logika true atau false ``

// Boolean ini sudah ada bahkan sebelum JavaScript ini ada, Boolean juga hampir ada di semua bahasa pemrograman.
// Boolean pertama kali diciptakan oleh George Boole pada tahun 1954.


// Biasanya Boolean ini digunakan pada statement pengkondisian, untu menentukan aksi yang berbeda dan mengatur alur kendali program.
// Boolean memiliki dua buah nilai yaitu : true dan false
// contoh:

let A = 10;

document.writeln(A < 20) //hasilnya true


document.writeln("<br>")

// tidak hanya angka boolean juga dapat dihasilkan oleh perbandingan srting

document.writeln("Sofyan Verdi" == "sofyan verdi") // false karena besar kecil huruf tidak sama 

document.writeln("<br>")

// nanti pada prakteknya untuk menghasilkan nilai boolean di source code kita, kita juga bisa menggunakan sebuah fungsi dari JavaScript yang namanya Boolean(nilai)

// nilai yang kita simpan tadi kita di masukkan kedalam kurung buka dan tutup, contoh:

document.writeln(Boolean(10 < 20)) // sama-sama true

document.writeln("<br>")

// Kita juga bisa dapat memasukkan satu nilai saja (integer) 
// Boolean(10)

document.writeln(Boolean(10)) //true
document.writeln("<br>")

//  bahkan jika memasukkan string:

document.writeln(Boolean("Sofyan")) //true
document.writeln("<br>")


// tapi jika kita memasukkan angka 0

document.writeln(Boolean(0)) //false
document.writeln("<br>")

// lalu gimana jika angkanya minus?

document.writeln(Boolean(-1)) //true?

// ini karena nilai-nilai pada JavaScript itu sebenarnya menyimpan nilai true atau false didalamnya? ini disebut dengan nilai:

// truthy atau falsy, perbedaanya:

// true        false
// non-zero      0
// "string"     ""
// object      undifined
// arrays       null
// functions    NaN

document.writeln("<br>")

// pengertian undifined dan null

// undifined adalah sebuah tipe yang dihasilkan ketika kita mendeklarasikan sebuah variable tapi belom mengisikan nilainya contoh:

let x

document.writeln(x) //undifined

document.writeln("<br>")



// sedangkan null adalah nilai kosong yang bisa kita berikan pada sebuah variable, contoh:

let y = null;

document.writeln(y)