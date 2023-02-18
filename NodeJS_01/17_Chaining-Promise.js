//! Chaining Promises
// Kita sudah tahu buruknya penulisan callback hell. Namun, kita tidak dapat menghindari keadaan di mana proses asynchronous saling bergantung satu sama lain. Untuk menghindari callback hell, salah satu solusinya adalah Promise.

// Dengan promise kita dapat melakukan proses asynchronous secara berantai. Contohnya, ketika kita ingin membuat satu gelas kopi, akan ada beberapa tahapan yang dikerjakan oleh mesin pembuat kopi, seperti memastikan mesin sudah siap, memastikan stok biji kopi dan air cukup, membuat kopi, lalu menuangkannya ke dalam gelas. Tahapan tersebut harus dilakukan secara berurutan.

// Untuk memastikan rangkaian promise berjalan dengan sesuai, kita perlu mengembalikan (return) promise selanjutnya. Contohnya adalah seperti ini:

// function makeEspresso() {
//     checkAvailability()
//         .then((value) => {
//             console.log(value);
//             return checkStock();
//         })
//         .then((value) => {
//             console.log(value)
//             return brewCoffee();
//         })
//         .then((value) => {
//             console.log(value);
//         })
//         .catch((rejectedReason) => {
//             console.log(rejectedReason);
//         });
// }

// makeEspresso();


// Mari kita bedah masing-masing fungsi promise di atas!

// Pertama, mesin akan mengecek status ketersediaan. Jika mesin kopi tidak sibuk, maka promise akan mengembalikan status resolve(“Mesin kopi siap digunakan”). Namun, jika status mesin masih sibuk, maka yang dikembalikan adalah status reject(“Maaf, mesin sedang sibuk”).

const state = {
        stock: {
            coffeeBeans: 200,
            water: 1000,
        },
        isCoffeeMachineBusy: false
    }
    // Kemudian, mesin kopi perlu memastikan bahwa stok biji kopi dan air cukup untuk membuat kopi. Di sini juga kita mengubah status mesin kopi menjadi sibuk.

// Berikut adalah kode untuk fungsi checkAvailability():

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
// Pada kode di atas, kita menggunakan fungsi setTimeout() untuk menyimulasikan proses asynchronous dan menunda proses selama 1 detik (1000 milisecond). Objek untuk menyimpan state dari mesin kopi adalah seperti ini:

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

// Lalu fungsi promise yang terakhir adalah fungsi untuk mencampurkan kopi dan air lalu menghidangkannya ke dalam gelas. Fungsi ini mengembalikan promise dengan status resolve yang membawa nilai “Kopi sudah siap!”.

const brewCoffee = () => {
    console.log("Membuatkan kopi Anda...")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Kopi sudah siap!")
        }, 2000);
    });
};

// Rangkaian proses di atas berjalan berurutan karena kita menggunakan method .then(). Jika kita baca kodenya kurang lebih akan seperti ini: “Untuk membuat espresso lakukan pengecekan ketersediaan mesin, kemudian periksa stok di dalam mesin, kemudian buat kopi.”

// Apabila promise mengalami kegagalan (reject), ia akan ditangani oleh method catch() yang kita tuliskan di akhir. Entah itu disebabkan karena mesin kopi sedang sibuk atau stok bahannya habis.

// penggabungan struktur dari proses :
function makeEspresso() {
    checkAvailability()
        .then((value) => {
            console.log(value);
            return checkStock();
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