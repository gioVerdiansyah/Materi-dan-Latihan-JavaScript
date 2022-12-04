// cara kerja function =
// biasanya kita membuat sebuah input (bahan material) yang nantinya akan masuk ke sebuah function, dan nantinya akan melakukan sesuatu dari input tsb dan nanti akan mengasilkan output.

// Note : Function yang baik hanya mengerjakan 1 hal saja 
// -Blok kode yang dibuat untuk melakukan tugas spesifik
// -dapat dipanggil berulang kali
// -memudahkan kita melakukan penelusuran
// -reusanility

// Contoh khasus kita mau membuat hasil dari volume kedua kubus kubus
// algoritmh :
// 1 harus tau sisi dari masing-masing kubus
// 2 hitung volume dari masing-masing kubus
// 3 jumlahkan hasilnya 
// 4 kembalikan nilainya
// Contoh =
let Repeat = true
while (Repeat) {
    function volumeKubus(a, b) {
        let volumeA = a * a * a
        let volumeB = b * b * b

        let total = volumeA + volumeB;
        return total;
    }
    let result = volumeKubus(prompt("masukkan sisi pertama kubus"), prompt("masukkan sisi kedua kubus"))

    alert("Hasil dari sisi kubus tersebut adalah: " + result)
        // lalu kita juga dapat menggunakan functionnya lagi
    let result1 = volumeKubus(prompt("masukkan sisi pertama kubus"), prompt("masukkan sisi kedua kubus"))

    alert("Hasil dari sisi kubus tersebut adalah: " + result1)
    Repeat = confirm("Ulangi dengan nilai lain?")
}