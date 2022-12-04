// membuat tanpa this


// cara 1 - function declaration
function hallo() {
    console.log("hallo function biasa")
}
hallo();

// cara 2 - object literal
let obj = {};
obj.halo = function() {
    console.log("hallo object literal")
}
obj.halo()


// cara 3 - construcctur
function Object() {
    console.log("hallo function constructor")
}
new Object();

// hasilnya sama tetapi konteks atau cara membuatnya berbeda, yang pasti memiliki kekurangan dan kelebihan tersendiri






// KONSEP this
// adalah sebuah keyword sepesial yang secara otomatis didefinisikan pada setiap function 

console.log(this);
console.log(window === this);
//maka ini mengarah ke this window

// contoh lebih detai :

var angka = 10; //kalau let akan undifined
console.log(this.angka);
// atau this ini sama saja menggantikan object window
console.log(window.angka);


// contoh menggunakannya pada function-function diatas



// cara 1 - function declaration
function hallo() {
    console.log(this)
    console.log("hallo function biasa menggunakan this")
}
this.hallo();
// this mengembalikan object global



// cara 2 - object literal
{
    let obj = { a: 10, nama: "sofyan verdi" };
    obj.halo = function() {
        console.log(this); // yang dikembalikan maka yang objnya
        console.log("hallo object literal menggunakan this")
    }
    obj.halo();
    // sekarang dia mengembalikan object yang bersangkutan(object diatas)
}

// cara 3 - construcctur

function Object() {
    console.log(this)
    console.log("hallo function constructor")
}
new Object();
// akan mengembalikan objectnya
// jadi this mengembalikan object yang baru dibuat