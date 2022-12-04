// `` Tipe data string dalam JavaScript digunakan untu merepresentasikan data tektual `` tektual/plain text
// untuk menuliskan string pada JavaScript yang perlu kita lakukan hanya membungkus data / nilai kita menggunakan tanda kutib 

// ""
// ''

// kalian bisa menggunakan kutib dua atau satu doang, tapi inget harus konsisten!

// contoh penggunaannya adalah:

console.log("Sofyan")
console.log('verdi')

// nah gimana kalo kita suatu saat memerlukan kutib dua dan satu sekaligus? contoh:

// console.log('"Gerakan Pungut Sampah" pada hari jum'at')  nah maka akan error Uncaught SyntaxError: missing ) after argument list

// nah ini tidak bisa begitupun kutib satu diganti kutib dua pun, JS menganggap kutibnya berakhir di kata jum' dan JS tidak memahami apa arti kata at' 


// Nah yang kita butuhkan adalah escape character 
// ini berfungsi untuk menampilkan sebuah character yang di interpretasikan berbeda dalam sebuah bahasa pemrograman 

// jadi yang perlu kita lakukan adalah memberi tanda
// \" 
// atau 
// \'

document.writeln('\"Gerakan Pungut Sampah\" pada hari jum\'at');

document.writeln("<br>")



// Escape Character:
// \0   karakter NULL
// \'   '
// \"   "
// \\   \
// \n   new line atau baris baru
// \t   tab\spasi
// \b   backspace
// uXXXX   unicode contoh:

document.writeln("\u00A9")
document.writeln("\u00AE")
document.writeln("\u00B1")
document.writeln("\u00B5")
document.writeln("\u2122")

document.writeln("<br>")

// Concatenation / konkatenasi (+)

// kita juga bisa membandingkan dua buah string dengan menggunakan operator ==

document.writeln("Sofyan Verdi" == "sofyan verdi") //akan mengecek 2 string itu berbeda atau tidak, hati-hati besar kecilnya juga akan di bandingkan

document.writeln("<br>")



//  .lenght ini bisa digunakan untuk menghitung panjang karakter huruf contoh:

document.writeln("Sofyan Verdiansyah".length) // 18

document.writeln("<br>")

// ini juga bisa digunakan untuk variable contoh:


let nama = "Sofyan Verdi"

document.writeln(nama.length) //jumlah karakter di variable nama adalah 12

// perlu di ingat .lenght ini juga menghitung spasi