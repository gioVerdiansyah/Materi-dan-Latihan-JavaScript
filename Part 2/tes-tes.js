// let Name;
// let ulang = true;

// while (ulang) {
//     function namaKu() {
//         Name = prompt('Masukkan nama:');

//         if (Name == null || Name == "") {
//             alert('masukkan nama tod')
//             namaKu()
//             return
//         }
//         alert(`Hello ${Name}!!!`)

//     }
//     namaKu()
//     ulang = confirm('Ulangi?')
// }

let evenNumber = [];

for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        evenNumber.push(i)
    }
}

console.log(evenNumber)

// mengkalikan value dari JPY dengan variabel priceInJPY
const priceInJPY = 5000;
const currency = new Map([
    ['USD', '14000'],
    ['JPY', '131'],
    ['SGD', '11000'],
    ['MYR', '3500']
]);
const priceInIDR = currency.get('JPY') * priceInJPY;

// *    - Mengembalikan nilai terkecil antara a atau b.
// *    - Bila nilai keduanya sama, maka kembalikan dengan nilai a
function minimal(a, b) {
    if (a < b) {
        return a
    } else if (b < a) {
        return b
    } else if (a = b) {
        return a
    }
}

//  *    - Mengembalikan nilai dari hasil perkalian a sebanyak b (fungsi kuadrat).
function power(a, b) {
    return a ** b
}