// popup box / dialog box adalah sebuah window kecil pada browser kita yang dapat kita munculkan sebagai interaksi yang digunakan agar user dapat berdialog dengan halaman web.

// ada 3 buah popup box yang dapat kita gunakan yaitu:

// -alert
// -prompt
// -confirm

// kita bahas satu satu

// -alert cara membuatnya gampang aja:

alert("Hello word!"); // ini akan muncul 1x pada halaman pertama

// isi dalam popup juga dapat di isi fungsi dan sebagai parameter, alert juga dapat dibuat berkali-kali tapi saat terlalu banyak browser akan memberi saran untuk tidak melihatnya atau diskip aja, jika di klik lalu oke maka halaman tersebut sudah tidak mau memunculkan popup lagi


// -prompt ini fungsinya sama memunculkan windows kecil tapi sekarang tidak hanya tombol oke saja

let nama = prompt("masukkan nama anda"); //contoh, ini biasanya digunakan untuk fungsi

// user setelah memasukkan isi dari popup prompt itu sebenarnya mengandung nilai, supaya kita punya akses ke nilai tersebut makanya prompt ini kita simpan kedalam sebuah variable, supaya nilai yang di imputkan oleh user bisa ditampung

alert("Hallo " + nama);

// -comfirm sama seperti tadi tapi ada pilihan oke atau cancel, comfirm ini digunakan untuk meminta confirmasi oleh user, nah ini kita bisa tentukan apa yeng terjadi jika user menekan oke dan cancel

let tes = confirm(nama + " apakah kamu yakin?")
    // untuk mengecek kita bisa mengecek nilai yang masuk jika oke atau cancel:

alert(tes)

// kalo oke true kalo cancel false

// nah ini bisa dimanfaatkan untuk pengondisian, tapi akan dibahas nanti

if (tes === true) {
    alert("kamu boleh megakses halaman")
} else {
    alert("tolong tekan tombol oke untuk mengakses halaman")
}

// atau seperti ini

alert("selamat datang di alert kedua")

let ulang = true;

while (ulang === true) {
    let jenengMu = prompt("masukkan nama anda:");

    alert("halo " + jenengMu)

    ulang = confirm("ulang lagi?")
}

alert("akhir")