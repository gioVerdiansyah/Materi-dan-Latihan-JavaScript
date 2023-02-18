// Lalu untuk mengimpor nilainya kita dapat menggunakan keyword import … from seperti berikut ini:

import coffeeStock from "./5_ES6_Module.js";
// Berbeda dengan gaya Node.js, kita gunakan keyword import ketika mendeklarasikan variabel yang di-import. Kita juga menggunakan keyword from untuk menentukan lokasi berkas JavaScript-nya.

// Ketika menggunakan export default, kita dapat menggunakan penamaan apa saja saat mendeklarasikan variabel untuk menyimpan nilai yang diimpor.

// import stock from "./5_ES6_Module";
// Hal tersebut aman untuk dilakukan karena dengan menggunakan export default dapat dipastikan hanya satu nilai yang diekspor pada satu berkas JavaScript.

// Setelah kita berhasil mendapatkan nilai yang diekspor,kita dapat menggunakan nilainya layaknya variabel lokal.

const displayStock = stock => {
    for (const type in stock) {
        console.log(type);
    }
}

displayStock(coffeeStock);


// ada error karena berkas JavaScript yang kita buat tidak dianggap sebagai module. Saat ini, fitur ES6 module tidak secara default diaktifkan. Pesan eror di atas menyebutkan dua cara bagaimana mengaktifkan ES6 module. Dua cara tersebut adalah menambahkan properti pada package.json atau dengan mengubah ekstensi .js menjadi .mjs. Mari kita gunakan cara pertama yang lebih sederhana.




// Lalu untuk mendapatkan nilai yang diekspor melalui named export, kita gunakan destructuring object.

import { coffeeStock, isCoffeeMachineReady } from './5_ES6_Module';

console.log(coffeeStock);
console.log(isCoffeeMachineReady);

//! Karena named import menggunakan teknik destructuring object untuk mendapatkan nilai, maka pastikan penamaan variabel sesuai dengan nama variabel yang diekspor.

// Namun, jika kita tetap ingin mengubah penamaan variabel dari named import, kita bisa melakukannya dengan menambahkan keyword as setelah penamaan variabelnya.

// import { coffeeStock as stock, isCoffeeMachineReady } from './5_ES6_Module';