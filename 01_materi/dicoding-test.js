let firstName = "Sofyan"
let lastName = "Verdiansyah"
let age = 15
let isMarried = false
const module = {
    firstName,
    lastName,
    age,
    isMarried,
};
console.log(module.firstName)
console.log(module.lastName)
console.log(module.age)
console.log(module.isMarried)
    // ini node js



// condition ? true expression : false expression

const isMember = false;
const discount = isMember ? 0.1 : 0;
console.log('Anda mendapatkan diskon sebesar ' + discount * 100 + '%');

/* Output:
Anda mendapatkan diskon sebesar 0%
*/


let nilai = parseInt(prompt("Masukkan nilai"))


if (nilai >= 90) {
    alert('Selamat! Anda mendapatkan nilai A.')
} else if (nilai >= 80) {
    alert('Anda mendapatkan nilai B.')
} else if (nilai >= 70) {
    alert('Anda mendapatkan nilai C.')
} else if (nilai >= 60) {
    alert('Anda mendapatkan nilai D.')
} else {
    alert('Anda mendapatkan nilai E.')
}

/**
 * TODO:
 * 1. Buatlah fungsi bernama minimal dengan ketentuan berikut:
 *    - Menerima dua buah argumen number, a dan b.
 *    - Mengembalikan nilai terkecil antara a atau b.
 *    - Bila nilai keduanya sama, maka kembalikan dengan nilai a
 *
 *    contoh:
 *    minimal(1, 4) // 1
 *    minimal(3, 2) // 2
 *    minimal(3, 3) // 3
 *
 * 2. Buatlah fungsi bernama power dengan ketentuan berikut:
 *    - Menerima dua buah argumen number, a dan b.
 *    - Mengembalikan nilai dari hasil perkalian a * a sebanyak b (fungsi kuadrat).
 *
 *    contoh:
 *    power(7, 3) // 343
 *    power(3, 3) // 27
 *    power(4, 0.5) // 2
 */


function minimal(a, b) {
    if (a <= b) {
        return a
    } else if (b <= a) {
        return b
    } else { return a }
}
document.writeln(minimal(8, 9) + "<br>")

// membuat kuadrat
{
    function power(a, b) {
        let result = 1;
        if (b < 1) {
            result = a * b
        } else {
            for (let i = 0; i < b; i++) {
                result *= a;
            }
        }
        return result;
    };

    document.writeln(power(13, 2) + "<br>")
} {
    function power(a, b) {
        return a ** b;
    }
    document.writeln(power(12, 2) + "<br>")
} {
    function power(a, b) {
        return Math.pow(a, b);
    }
    document.writeln(power(12, 2) + "<br>")
}
// akhir kuadrat