// Rekursif adalah sebuah fungsi yang memanggil dirinya sendiri, conthnya didalam function memanggil dirinya sendiri sampai menghasilkan sebuah nilai

// contohnya =

// function tes(){
//     return tes(); nah ini akan melooping disini terus
// }
// tes()

// contoh kita mau membuat looping
console.log("Menggunakan looping")
for (let i = 5; i >= 1; i--) {
    console.log(i)
}

console.log("\n")

// nah bisa saja seperti ini tapi kita bisa melakukannya menggunakan rekursif =

{
    function angka(n) {
        console.log(n);
        return angka(n - 1); // maunya jika kita memberi nilai 5 masuk ke fungsi lalu return kurang satu sampai habis tapi malah ngga ada abisnya, awalnya memang benar memanggil dari 5 sampai 0, tapi karena kita ngga membatasi maka si rekursif akan looping sampai tidak bisa di load lagi
    }
    // angka(5)
}
// nah untuk itu kita harus memberi kondisi berhentinya, kondisi berhentiny itu dinama i

// Base Case
{
    console.log("Menggunakan rekursif")

    function tes(n) {
        if (n === 0) { //Base Case
            return
        }
        console.log(n)
        tes(n - 1)
    }
    tes(5)
}


console.log("\n")

// Faktorial 5! = 5 x 4 x 3 x 2 x 1

// versi looping =
function faktorialLoop(value) {
    let result = 1;
    for (let i = value; i > 0; i--) {
        result *= i
    }
    return result
}
console.log("faktorial dengan looping nilai : 4 \n" + faktorialLoop(4))



// menggunakan rekursif

function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
console.log("faktorial dengan rekursif nilai : 5 \n" + factorial(5) + "\n")




// atau = 

function Faktorial(n) {
    if (n === 1) {
        return 1
    } else {
        return n * Faktorial(n - 1)
    }
}
console.log("faktorial dengan rekursif2 nilai : 6 \n" + Faktorial(6))



// Rekursif
// semua looping bisa dibuat rekursif, tapi tidak sebaliknya seperti diatas

// Implementasi rekursif
// -Menggantikan looping
// -Fibonacci
// -Pencarian dan penelusuran pada struktur data list dan tree
// -Bahasa pemrograman yang tidak memiliki pengulangan (Haskell,Erlang,Prolog,dll)
// -dll