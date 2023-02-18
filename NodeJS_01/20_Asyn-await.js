//! Async-await
// Pembahasan terakhir mengenai asynchronous process kali ini adalah penggunaan syntax async-await. Apa itu?

// Seperti yang kita tahu, penulisan kode asynchronous sedikit berbeda dengan proses synchronous. Contohnya, untuk mendapatkan nilai coffee dari sebuah proses asynchronous, kita tidak dapat melakukannya dengan teknik seperti ini:
{
    const getCoffee = () => {
        return new Promise((resolve, reject) => {
            const seeds = 100;
            setTimeout(() => {
                if (seeds >= 10) {
                    resolve("Kopi didapatkan!");
                } else {
                    reject("Biji kopi habis!");
                }
            }, 1000);
        })
    }

    function makeCoffee() {
        const coffee = getCoffee(); // async process menggunakan promise
        console.log(coffee);
    }

    makeCoffee();

    // Melainkan harus seperti ini:
    { //Promise
        function makeCoffee() {
            getCoffee().then(coffee => {
                console.log(coffee);
            });
        }

        makeCoffee();
    } { //Callback
        function makeCoffee() {
            getCoffee(function(coffee) {
                console.log(coffee);
            })
        }

        makeCoffee();
    }
}
// Namun, sejak ES8 (ECMAScript 2017) kita dapat menuliskan asynchronous process layaknya synchronous process dengan bantuan keyword async dan await.

// Fitur async/await sebenarnya hanya syntactic sugar. Itu berarti secara fungsionalitas bukanlah sebuah fitur baru dalam JavaScript. Namun, hanya gaya penulisan baru yang dikembangkan dari kombinasi penggunaan Promise dan generator (pembahasan mengenai generator bisa Anda pelajari di sini). Sehingga, async/await ini tidak dapat digunakan jika tidak ada Promise.

// Lantas bagaimana cara menggunakan async/await ini? Pada contoh kode sebelumnya, mari kita lihat juga fungsi getCoffee() dan bagaimana ia mengembalikan promise.


const getCoffee = () => {
    return new Promise((resolve, reject) => {
        const seeds = 100;
        setTimeout(() => {
            if (seeds >= 10) {
                resolve("Kopi didapatkan!");
            } else {
                reject("Biji kopi habis!");
            }
        }, 1000);
    })
}

// Untuk mendapatkan nilai dari fungsi getCoffe() menggunakan .then()
const makeACoffee = () => {
    getCoffee().then(coffee => {
        console.log(coffee);
    })
}
makeACoffee();

// Asyn-await memungkinkan kita untuk menulisakan proses Synchronous. kira-kira seperti ini kodenya:

// karena fungsi makeCoffeeAsyn() sekarang menangani proses asynchronous, maka fungsi  tersebut juga menjadi fungsi asynchronous. Tambahkan async sebelum deklarasi fungsi untuk membuatnya menjadi asynchronous.

async function makeACoffeeAsync() {
    // fungsi getCoffee() merupakan object Promise. Untuk menunggu fungsi getCoffee() yang berjalan secara asynchronous, tambahkan keyword await sebelum pemanggilan fungsi getCoffee().

    const coffee = await getCoffee();
    console.log(coffee);
}
makeACoffeeAsync();

// Keyword async digunakan untuk memberitahu JavaScript supaya menjalankan fungsi makeACoffeeAsync() secara asynchronous. Lalu, keyword await digunakan untuk menghentikan proses pembacaan kode selanjutnya sampai fungsi getCoffee() mengembalikan nilai promise resolve.

// Walaupun await menghentikan proses pembacaan kode selanjutnya pada fungsi makeCoffee, tetapi ini tidak akan mengganggu proses runtime sesungguhnya pada JavaScript (global). Karena fungsi makeCoffee berjalan secara asynchronous, kita tidak dapat menggunakan await tanpa membuat function dalam scope-nya berjalan secara asynchronous.



//! Handle onRejected using async-await
// Perlu jadi catatan bahwa await hanya akan mengembalikan nilai jika promise berhasil dilakukan (onFulfilled). Lantas bagaimana jika promise gagal dilakukan (onRejected)? Caranya cukup sederhana. Kembali lagi kepada prinsip synchronous code. Kita dapat menangani sebuah eror atau tolakan dengan menggunakan try...catch.

// Ketika menggunakan async/await, biasakan ketika mendapatkan resolved value dari sebuah promise, untuk menempatkannya di dalam blok try seperti ini:

async function makeACoffeeAsyncWithTryCatch() {
    try {
        const coffee = await getCoffee();
        console.log(coffee);
    } catch (rejectedReason) {
        console.log(rejectedReason);
    }
}
makeACoffeeAsyncWithTryCatch();



//! Chaining Promise using async-await
// Pertanyaan selanjutnya adalah bagaimana melakukan promise berantai bila menggunakan async/await? Jawabannya adalah sama seperti ketika kita mendapatkan nilai dari function yang berjalan secara synchronous.

// Dengan pendekatan async-await, maka kode mesin kopi kita akan menjadi seperti ini:

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

async function makeEspresso() {
    try {
        await checkAvailability().then((value) => console.log(value));
        await checkStock();
        await Promise.all([boilWater(), grindCoffeeBeans()]);
        const coffee = await brewCoffee();
        console.log(coffee);
    } catch (rejectedReason) {
        console.log(rejectedReason);
    }
}
makeEspresso();

// hanya menampilkan prosesnya saja
// jika ingin menampilkan pesan resolved maka tambahkan method then untuk mendapakan value resolved-nya