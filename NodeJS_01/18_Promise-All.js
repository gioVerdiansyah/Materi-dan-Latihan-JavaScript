//! Promise All
// Pada materi sebelumnya kita belajar bagaimana promise dapat menangani situasi di mana terdapat asynchronous process yang saling membutuhkan untuk melaksanakan tugasnya. Lalu bagaimana jika kita ingin menjalankan banyak promise sekaligus tanpa memedulikan urutan? Bukankah concurrency memungkinkan kita melakukan banyak proses bersamaan agar lebih efisien?

// Ketika pergi ke sebuah kedai kopi bersama rekan kerja, kita biasanya memesan kopi secara bersamaan. Meskipun kopi yang kita pesan berbeda, tak jarang pelayanan mengantarkan pesanan bersamaan. Nah, pada kasus inilah pelayan menggunakan teknik Promise.all().

// Method Promise.all() dapat menerima banyak promise dalam bentuk array pada parameternya. Kemudian method tersebut akan mengembalikan nilai seluruh hasil dari promise dalam bentuk array.

// Contohnya seperti berikut.

import { firstPromise, secondPromise, thirdPromise } from './19_exportPromises.js';

const promises = [firstPromise(), secondPromise(), thirdPromise()];

Promise.all(promises)
    .then(resolvedValue => {
        console.log(resolvedValue);
    });

/* output
[ 'first promise', 'second promise', 'third promise' ]
*/




// ! khasus
const checkAvailability = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!state.isCoffeeMachineBusy) {
                resolve("Mesin kopi siap digunakan.");
            } else {
                reject("Maaf, mesin sedang sibuk.");
            }
        }, 1000);
    });
};

const state = {
    stock: {
        coffeeBeans: 200,
        water: 1000,
    },
    isCoffeeMachineBusy: false,
}

const checkStock = () => {
    return new Promise((resolve, reject) => {
        state.isCoffeeMachineBusy = true;
        setTimeout(() => {
            if (state.stock.coffeeBeans >= 25 && state.stock.water >= 250) {
                resolve("Stok cukup. Bisa membuat kopi.");
            } else {
                reject("Stok tidak cukup!");
            }
        }, 1500);
    });
};


// Pada kasus mesin kopi, kita bisa menambahkan proses untuk memanaskan air dan menggiling biji kopi.

const brewCoffee = () => {
    console.log("Membuatkan kopi Anda...")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Kopi sudah siap!")
        }, 2000);
    });
};

const boilWater = () => {
    return new Promise((resolve, reject) => {
        console.log("Sedang memasak air...");
        setTimeout(() => {
            resolve("Air sudah siap digunakan!");
        }, 2000);
    })
}

const grindCoffeeBeans = () => {
    return new Promise((resolve, reject) => {
        console.log("Sedang menggiling biji kopi...");
        setTimeout(() => {
            resolve("bubuk kopi siap digunakan!");
        }, 1000);
    })
}

// Keduanya dapat berjalan bersamaan. Kita akan memanfaatkan Promise.all() untuk menjalankan kedua fungsi di atas sebelum fungsi brewCoffee(). Ubah kode fungsi makeEspresso() menjadi seperti berikut.

const makeEspresso = () => {
    checkAvailability()
        .then((value) => {
            console.log(value);
            return checkStock();
        })
        .then((value) => {
            console.log(value);
            const promises = [boilWater(), grindCoffeeBeans()];

            return Promise.all(promises);
        })
        .then((value) => {
            console.log(value)
            return brewCoffee();
        })
        .then((value) => {
            console.log(value);
        })
        .catch((rejectedReason) => {
            console.log(rejectedReason);
        });
}

makeEspresso();


// Ketika kode di atas dieksekusi, kita perlu menunggu dua(2) detik untuk proses boilWater dan grindCoffeeBeans(durasi terlama dari promise yang dijalankan dari Promise.all()).Ini menunjukkan bahwa semua promise di dalam Promise.all() berjalan bersamaan dan menunggu sampai semua proses di dalamnya selesai dijalankan.

// Yang perlu kita perhatikan, urutan nilai yang dihasilkan oleh method ini sesuai dengan promise yang kita tentukan pada parameternya.

/* output
 [ 'Air panas sudah siap!', 'Bubuk kopi sudah siap!' ]
/*/
//! Nilai dari boilWater akan tetap berada di posisi pertama, meskipun proses ini membutuhkan waktu lebih lama.