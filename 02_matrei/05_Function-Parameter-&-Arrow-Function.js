// Parameter dari fungsi dapat berupa tipe data apa pun, mulai dari string, number, object, bahkan fungsi lain.

// Jika parameter dari fungsi adalah sebuah object, kita juga bisa memanfaatkan destructuring object untuk mendapatkan nilainya. Contohnya seperti berikut:

const user = {
    id: 24,
    displayName: 'kren',
    fullName: 'Kylo Ren',
};

function introduce({ displayName, fullName }) {
    console.log(`${displayName} is ${fullName}`);
}

introduce(user);

/* output
kren is Kylo Ren
*/



// Default Parameters
// Fungsi pada JavaScript tidak melakukan pengecekan terhadap jumlah maupun tipe argumen yang dimasukkan ke dalam parameter. Ini berarti kita bisa memasukkan argumen meskipun tidak sesuai dengan parameter yang telah didefinisikan.

function exponentsFormula(baseNumber, exponent) {
    let result = baseNumber ** exponent;
    console.log(`${baseNumber}^${exponent} = ${result}`);
}

exponentsFormula(2);

/* output
2^undefined = NaN
*/

// Seperti yang kita lihat pada contoh kode di atas, ketika argumen lebih sedikit dari parameternya, maka parameter yang tidak terdefinisi akan bernilai undefined. Sebagai solusi jika memungkinkan, kita bisa memberikan nilai default pada parameter. Nilai ini akan digunakan jika kita tidak memasukkan parameter.

{
    function exponentsFormula(baseNumber, exponent = 2) {
        let result = baseNumber ** exponent;
        console.log(`${baseNumber}^${exponent} = ${result}`);
    }

    exponentsFormula(3);

    /* output
    3^2 = 9
    */
}



// Rest Parameter
// Masih ingat dengan spread operator (...)? Jika spread operator menyebarkan array menjadi beberapa elemen berbeda, rest parameter ini adalah kebalikan dari operator tersebut. Penasaran?

// Rest parameter juga dituliskan menggunakan three consecutive dots (...). Dengan rest parameter, kita dapat menggabungkan beberapa elemen menjadi satu array. Tentu teknik ini sangat bermanfaat ketika kita hendak membuat sebuah fungsi dengan parameter yang tidak pasti.

// Sebagai contoh adalah fungsi yang menjumlahkan seluruh nilai argumen seperti berikut:

function sum(...numbers) /*ini parameter */ {
    let result = 0;
    for (let number of numbers) {
        result += number; // di jumlahkan dari semua isi dari argumen
    }
    return result;
}

console.log(sum(1, 2, 3, 4, 5)); // ini argumen

/* output
15
*/

// Arrow Function
// ES6 memperkenalkan fungsi baru yang dinamakan arrow function expression atau lebih dikenal sebagai arrow function. Arrow function mirip seperti regular function secara perilaku, tetapi berbeda dalam penulisannya. Sesuai namanya, fungsi didefinisikan menggunakan tanda panah atau fat arrow ( => ). Tentunya penulisan arrow function ini akan lebih singkat.

// Selain perbedaan sintaksis, terdapat perbedaan perilaku antara arrow function dan regular function. Regular function dapat berupa function declaration dan function expression. Namun, arrow function hanya berupa expression function saja. Itu sebabnya arrow function memiliki nama lengkap “arrow function expression”.

{ // Regular function
    // function declaration
    function sayHello(greet) {
        console.log(`${greet}!`);
    }

    // function expression
    const sayName = function(name) {
        console.log(`Nama saya ${name}`)
    }
}

{ // Arrow function
    // function expression
    const sayHello = (greet) => {
        console.log(`${greet}!`)
    }

    const sayName = (name) => {
        console.log(`Nama saya ${name}`)
    }
}

// Pada arrow function kita tidak perlu menuliskan keyword function setiap membuat fungsi. Kita tetap menuliskan parameter di dalam tanda kurung lalu diikuti dengan tanda panah (=>) sebelum kurung kurawal.

const sayName = (name) => {
        console.log(`Nama saya ${name}`)
    }
    // Apabila fungsi hanya memiliki satu parameter, maka kita bisa menghapuskan tanda kurung seperti berikut:

{
    const sayName = name => {
        console.log(`Nama saya ${name}`)
    }

    sayName("Leia");

    /* output
    Nama saya Leia
     */
}

// Namun, jika kita sama sekali tidak membutuhkan parameter, maka kita tetap menuliskan tanda kurung namun kosong seperti ini:

const sayHello = () => {
    console.log("Selamat pagi semuanya!")
};

sayHello();

/* output
Selamat pagi semuanya!
 */

// Satu hal yang menarik, ketika body dari function hanya terdiri dari satu baris, kita bisa menghapus tanda kurung kurawal. Tentunya ini akan menghemat baris kode yang kita tulis.

{
    const sayName = name => console.log(`Nama saya ${name}`);
    sayName("Leia");

    const sayHello = () => console.log("Selamat pagi semuanya!");
    sayHello();

    /* output
    Nama saya Leia
    Selamat pagi semuanya!
     */
}
// Ketika sebuah fungsi perlu mengembalikan nilai, kita tidak perlu lagi menuliskan return (hanya bekerja untuk fungsi satu baris).

const multiply = (a, b) => a * b;
console.log(multiply(3, 4));

/* output
12
 */