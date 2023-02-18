//! Reusable Function
// Dengan menerapkan konsep-konsep yang ada di dalam paradigma FP, fungsi yang Anda buat akan bersifat reusable. Karena fungsi yang Anda buat merupakan pure function, ia tidak akan dipengaruhi ataupun mempengaruhi keadaan di/dari luar. Hal ini tentu membuat fungsi dapat digunakan berkali-kali tanpa khawatir mendapatkan hasil di luar ekspektasi Anda.

// Pada materi kali ini kita tidak berfokus untuk membuat banyak reusable function di JavaScript. Kami percaya, dengan memahami konsep functional programming secara matang, Anda dapat membuatnya sendiri sesuai kebutuhan.

// Alih-alih membuatnya sendiri, kita akan coba membahas dan menggunakan beberapa reusable function yang sudah ada di JavaScript. Khususnya beberapa Higher-Order Function yang dimiliki array, seperti map, filter, dan forEach.


//! Array Map
// Fungsi array.map() merupakan fungsi bawaan dari array yang sangat berguna dan banyak sekali digunakan. Fungsi ini dapat dipanggil dari sebuah data bertipe array dan menerima satu buah callback function.

['Harry', 'Ron', 'Jeff', 'Thomas'].map(() => {});
// Callback function tersebut akan dipanggil sebanyak jumlah panjang array dan akan memiliki akses pada index array sesuai dengan iterasinya.

['Harry', 'Ron', 'Jeff', 'Thomas'].map((name) => {});
// Seperti yang Anda ketahui di awal, fungsi map akan mengembalikan array baru. Nilai tiap item pada array yang dikembalikan, dihasilkan dari kembalian callback function-nya. Karena callback function dapat mengakses item array, biasanya developer menggunakannya untuk menghasilkan nilai baru.

const newArray = ["Harry", "Ron", "Jeff", "Thomas"].map(names => { return `${names}!` });
console.log(newArray); //['Harry!', 'Ron!', 'Jeff!', 'Thomas!']


//! Array Filter
// Sama seperti array.map(), fungsi array.filter() merupakan fungsi bawaan dari data yang bertipe array di JavaScript. Sesuai namanya, fungsi ini sangat berguna untuk melakukan proses penyaringan (filtering) terhadap nilai array yang ada. Bila Anda memiliki kasus di mana Anda ingin menghilangkan beberapa item di array berdasarkan spesifikasi tertentu, fungsi ini sangatlah cocok Anda gunakan.

// Cara kerja fungsi ini mirip seperti array.map(). Namun, callback function dari fungsi ini harus mengembalikan boolean. Di mana nilai boolean ini digunakan untuk menentukan apakah item array lolos saring atau tidak.

// Sama seperti fungsi map(), fungsi filter() juga akan mengembalikan array yang telah disaring dalam bentuk array baru.

// Contoh penggunaan ketika Anda ingin menghilangkan seluruh nilai false pada array:


const truthyArray = [1, '', 'Hallo', 0, null, 'Harry', 14].filter((item) => Boolean(item));
// 

console.log(truthyArray);

/**
 * output:
 * [ 1, 'Hallo', 'Harry', 14 ]
 * 
 */


// Contoh lain, penggunaan filter untuk menyaring array dari objek siswa yang layak mendapatkan beasiswa berdasarkan nilai skor yang didapat.

const students = [{
        name: 'Harry',
        score: 60,
    },
    {
        name: 'James',
        score: 88,
    },
    {
        name: 'Ron',
        score: 90,
    },
    {
        name: 'Bethy',
        score: 75,
    }
];

const eligibleForScholarshipStudents = students.filter((student) => student.score > 85);

console.log(eligibleForScholarshipStudents);

/**
 * output:
 * [ { name: 'James', score: 88 }, { name: 'Ron', score: 90 } ]
 * 
 */



//! Array Reduce
// Sama seperti array.map(), array.reduce() adalah fungsi bawaan dari data yang bertipe array yang digunakan untuk mengeksekusi fungsi reducer pada setiap elemen array dan hanya mengembalikan output satu nilai saja.

// arr.reduce(callback(accumulator, currentValue, [currentIndex], [array]), [initialValue])

// [...] adalah opsional parameter
// Callback function dari fungsi ini dapat diolah untuk manipulasi data currentValue dan menyimpannya pada accumulator. Selain itu, fungsi reduce juga memiliki nilai awal yang dapat didefinisikan pada bagian initialValue.

// Contoh penggunaannya misalkan ketika kita ingin menjumlahkan total nilai siswa:


const siswa = [{
        name: 'Harry',
        score: 60
    },
    {
        name: 'James',
        score: 88,
    },
    {
        name: 'Ron',
        score: 90,
    },
    {
        name: 'Bethy',
        score: 75,
    }
];

const totalScore = siswa.reduce((acc, student) => acc + student.score, 0);

console.log(totalScore);

/**
 * output:
 * 313
 * 
 */



//! Array some
// array.some() merupakan fungsi bawaan dari array yang cukup sering digunakan. Fungsi ini akan menghasilkan nilai boolean.

// arr.some(callback(element, [index], [array]), [thisArg])

//? [...] adalah opsional parameter
// Nilai yang dihasilkan didasarkan pada pernyataan apakah ada setidaknya satu dari deretan nilai dalam array tersebut lolos berdasarkan kriteria yang kita tuliskan dalam callback function.

// Contoh penggunaannya misalkan kita ingin mengetahui apakah dalam deretan angka terdapat angka genap.

const array = [1, 2, 3, 4, 5];
const even = array.some(element => element % 2 === 0);
console.log(even);



//! Array find
// Mirip dengan array.some(), array.find() sesuai namanya digunakan untuk mencari apakah di dalam deretan nilai terdapat nilai yang sesuai dengan kriteria yang kita definisikan pada callback function. 

// Yang membedakan array.find() dengan array.some(), find akan menghasilkan satu nilai dari elemen yang pertama kali ditemukan berdasarkan kriteria tertentu dan akan menghasilkan nilai undefine bila tidak ada kriteria yang terpenuhi pada item array.

// arr.find(callback(element, [index], [array]), [thisArg]);

// [...] adalah opsional parameter
// Sebagai contoh, misalkan kita akan mencari siswa dengan nama `James`.

const anggota = [{
    name: "Harry",
    score: 80
}, {
    name: "James",
    score: 88
}, {
    name: "Ron",
    score: 90
}];

const cariJames = anggota.find(anggota => anggota.name === "James");
console.log(cariJames);



//! Array sort
// array.sort() merupakan fungsi bawaan dari array yang berguna untuk melakukan pengurutan nilai dari sebuah deretan nilai. Secara default, fungsi sort akan mengubah semua nilai dalam deretan menjadi bentuk string dan mengurutkannya secara ascending.

// arr.sort([compareFunction])

// [...] adalah opsional parameter
// Contoh sederhananya adalah sebagai berikut:

const months = ['March', 'Jan', 'feb', 'Dec'];
months.sort(); //mengurutkan huruf pertama sesuai urutan abjad
console.log(months);
// ['Dec', 'Jan', 'March', 'feb']

const angka = [1, 1000, 30, 4, , 101, 101];
angka.sort(); //mengurutkan angka sesuai dengan pecahan paling banyak
console.log(angka);
// [1, 1000, 101, 101, 30, 4]

// bisa juga dengan penulisan   const months = ['March', 'Jan', 'feb', 'Dec'].sort();


// Contoh pengurutan di atas didasarkan pada pengurutan bentuk tipe data string. Oleh karena itu, ketika kita ingin mengurutkan sesuai dengan kriteria yang kita inginkan (berdasarkan tanggal ataupun berdasarkan nilai siswa) maka kita perlu membuat compare function tersendiri.

const array1 = [1, 30, 4, 1000];

const compareNumber = (a, b) => {
    return a - b;
};
const sorting = array1.sort(compareNumber);
console.log(sorting);

/**
output
[ 1, 4, 30, 1000 ]
**/


// Pada compare function, fungsi akan membandingkan 2 nilai yang akan menghasilkan 3 result yaitu negatif (-), 0, dan positif (+).

// Jika, negative maka `a` akan diletakkan sebelum `b`
// Jika, positive maka `b` akan diletakkan sebelum `a`
// Jika, 0 maka tidak ada perubahan posisi.



//! Array every
// array.every() merupakan fungsi bawaan dari array yang digunakan untuk mengecheck apakah semua nilai dari sebuah array sesuai dengan kriteria yang didefinisikan. Kembalian dari array.every() adalah nilai Boolean.

// arr.every(callback(element, [index], [array])
// Sebagai contoh, kita akan mengecek apakah seorang siswa telah lulus semua uji materi:

const scores = [70, 85, 90];
const minimumScore = 65;

const examPassed = scores.every(score => score >= 75);
console.log(examPassed);

/**
output
true
**/



//! Array forEach
// Array forEach merupakan fungsi bawaan dari array yang berfungsi untuk memanggil fungsi callback pada setiap iterasi index array. Berbeda dari fungsi array lain yang sudah kita bahas, fungsi ini tidak mengembalikan nilai apa pun. Jadi fungsi ini secara harfiah hanya berfungsi untuk memanggil fungsi callback-nya saja, tak lebih dari itu.

// Melalui fungsi ini, Anda dapat mengubah sintaks perulangan berdasarkan jumlah array secara imperatif menjadi deklaratif.


const names = ["Harry", "Ron", "Jeff", "thomas"];

// cara imperatif
for (let i = 0; i < names.length; i++) {
    console.log(`Hello, ${names[i]}`);
}

// cara deklaratif
names.forEach(name => {
    console.log(`Hello, ${name}!`)
})