// Scope / lingkup variable
// bagaimana sebuah variable dapat diakses dalam program
// ada dua jenis scope, yang pertama adalah block scope(global) dan function scope(lokal)


let i = 2; //ini disebut sebagai global scope(bisa digunakan oleh program mana pun)

if (i % 2 == 0) {
    var genab = true; //ini hanya berlaku menggunakan keywoard var selain var maka error
}

if (genab) {
    console.log('genab')
}
//tidak error karena JS itu menganut function scope

// contoh lain =

// function test() {
//     var a = 2
// }
// test()
// console.log(a)

//error karena variable a hanya bisa di gunakan dalam function test itu saja
// jika kita memasukkan consolenya ke function maka bisa diakses




// contoh lagi kita punya =

let a = 1;

function test() {
    let a = 2
    console.log(a); // maka yang akan di akses ini dulu, tetapi jika ingin mengakses a kita bisa menuliskan console.log(window.a)
}
test()




let b = 1;

function test1() {
    //name conflict karena mempunyai kesamaan nama variable dengan global dan scope
    var b = 2
}
test1()
console.log(b) // jelas yang akan diakses b yang global




// contoh khasus =

{
    var c = 1;

    function test2() {
        c = 2; //maka ini menggantikan nilai si c sehingga sekarang nilai di adalah 2, ini terjadi karena menggunakan syntax VAR
    }
    test2()
    console.log(c)
}


// tapi gimana jika cuma c doang?

{ // var a; dari JS sendiri, ini akan mengotori global scope atau kita menggunakan "use strict"
    function test2() {
        c = 2;
    }
    test2()
    console.log(c) // tetep ditulis padahal c didalam scope, nah ini karena JS seolah olah membuat var a sendiri karena tidak ada yang medeklarasikan
}


// contoh lagi =

{
    let a = 1

    function test(a) {
        console.log(a) // hasilnya adalah 2 karena parameternya sudah di isi oleh argument 2
            //perlu diingat, Argument ini tetap akan menjadi local scope meskipun kita tidak menuliskan keywoard var
    }
    test(2) //jika kita menuliskan a maka hasilnya adalah satu
}

// agar tidak bingung kita bisa membuat scope menggunakan kurung kurawal untuk membedakan
{
    // isi disini ...
}
// agar tidak tertukar oleh scope lain!