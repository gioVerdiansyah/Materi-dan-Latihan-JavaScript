// Pengkondisian / Percabangan
// keywoard yang pertama kita pelajari adalah :
// if (kondisi) {
//     aksi (akan dilakukan aksi ini jia kondisi nya bernilai true)
// }
// ... (sedangkan jika kondisinya bernilai false maka akan keluar dari kondisi if diatas, dan biasanya akan mengerjakan else if atau else doang, ini akan di bahas nanti)

// contoh:

let angka = prompt("masukkan angka 1");

if (angka == 1) {
    alert("Anda memasukkan angka 1") //tetapi maka anda memasukkan selain angka 1 atau huruf maka if yang ini tidak akan di kerjakan
        // kalau dibawah if tidak ada apa apa maka program alert akan selsai, beda lagi jika ditambahkan else if atau else, contoh:
} else {
    alert("Anda tidak memasukkan angka 1") // maka jika anda tidak memasukkan angka satu maka else ini yang akan dikerjakan
}

// if Expression ini juga bisa digunakan lebih kecil atau semacamnya, contoh

let Pengkondisian = prompt("Masukkan angka!")

if (Pengkondisian < 5) {
    alert("Anda memasukkan angka kurang dari 5") //ini jika anda memasukkan angka kurang dari 5
} else if (Pengkondisian > 5) {
    alert("Anda memasukkan angka lebih dari 5") //ini jika anda memasukkan angka lebih besar dari 5
} else {
    alert("Anda tidak memasukkan sebuah angka") //ini jika anda tidak memasukkan sebuah angka
} // jika anda memasukkan angka 5 maka akan di anggap else karena di if dan else if tidak ada sama dengan 5 atau setara dengan 5 di kodisi

// if ini juga bisa digunakan untuk mengecek bilangan genab atau bukan

let genabAtauTidak = prompt("Masukkan angka!")

if (genabAtauTidak % 2 == 0) {
    alert("Anda memasukkan angka genab :" + genabAtauTidak)
} else {
    alert("Anda memasukkan angka ganjil :" + genabAtauTidak)
}