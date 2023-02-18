// Set
// Struktur data yang akan kita bahas berikutnya adalah Set. Set sederhananya merupakan kumpulan nilai (set of values). Hal yang membedakan Set dengan struktur data yang lain adalah data pada Set tidak berurutan dan juga tidak diindeks. Selain itu, data di dalam Set juga bersifat unik dan tidak ada duplikasi. Perhatikan contoh deklarasi Set di bawah ini:

const numberSet = new Set([1, 4, 6, 4, 1]);

console.log(numberSet);

/* output
Set(3) { 1, 4, 6 }
*/

// Pada kode di atas terdapat beberapa angka yang duplikat, yaitu angka 1 dan 4. Secara otomatis Set akan membuang angka yang sama, sehingga nilai yang tersimpan adalah {1, 4, 6}.

// Untuk menambahkan data ke dalam Set kita bisa memanfaatkan fungsi add().

const numberSet_ = new Set([1, 4, 6, 4, 1]);
numberSet_.add(5);
numberSet_.add(10);
numberSet_.add(6);

console.log(numberSet_);

/* output
Set(5) { 1, 4, 6, 5, 10 }
*/

// Fungsi add() hanya menerima satu argumen. Jika Anda memasukkan array, maka array tersebut akan dianggap sebagai satu elemen sendiri. Nilai yang duplikat akan diabaikan.

const number_Set = new Set([1, 4, 6, 4, 1]);
number_Set.add(5);
number_Set.add(10);
number_Set.add(6);

number_Set.delete(4);

console.log(number_Set);

/* output
Set(4) { 1, 6, 5, 10 }
*/

// Ingat bahwa Set tidak memiliki urutan atau index, sehingga argumen yang dimasukkan ke dalam fungsi delete adalah nilai yang ingin dihapus, bukan index-nya.