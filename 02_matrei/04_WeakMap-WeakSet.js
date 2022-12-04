// WeakMap & WeakSet
// WeakMap merupakan varian dari Map yang mendukung garbage collection. Garbage collection adalah proses di mana interpreter JavaScript mengambil kembali memori yang tidak lagi “dapat dijangkau” dan tidak dapat digunakan oleh program [3]. Garbage collection di JavaScript dilakukan secara otomatis dan bukan menjadi urusan dari developer.

// Yang dimaksud weak dalam WeakMap adalah referensi terhadap nilai yang disimpan. Apabila suatu nilai yang disimpan di WeakMap sudah tidak terjangkau atau tidak bisa lagi diakses, maka referensi ke memorinya akan dihapus.

// Berikut ini adalah beberapa hal yang membedakan antara Map dan WeakMap:

// Key dari WeakMap harus berupa object atau array. Nilai primitif tidak bisa digunakan sebagai key karena tidak mendukung garbage collection.
// WeakMap memiliki method get(), set(), has(), dan delete(). Namun, WeakMap tidak termasuk kategori iterable sehingga tidak memiliki method keys(), values(), atau forEach().
// WeakMap juga tidak memiliki property size. Ini karena ukuran WeakMap dapat berubah karena proses garbage collection.
// Masih bingung? Mari kita lihat contoh kode dan perbedaan antara Map dan WeakMap.

{
    let visitsCountMap = new Map(); // Menyimpan daftar user

    function countUser(user) {
        let count = visitsCountMap.get(user) || 0;
        visitsCountMap.set(user, count + 1);
    }

    let jonas = { name: "Jonas" };
    countUser(jonas); // Menambahkan user "Jonas"

    jonas = null; // Data object "Jonas" dihapus

    // delay dibutuhkan untuk menunggu garbage collector bekerja
    setTimeout(function() {
        console.log(visitsCountMap);
    }, 10000)

    /* output
    Map(1) { { name: 'Jonas' } => 1 }
    */
}
// setTimeout merupakan fungsi yang digunakan untuk menunda eksekusi kode yang ada di dalamnya hingga jangka waktu yang ditetapkan. Fungsi setTimeout akan detail dibahas pada modul concurrency.

// Ketika reference objek jonas dihapus dengan mengubahnya menjadi null, seharusnya map tidak lagi menyimpan data user (garbage collected). Namun, kenyataannya data jonas masih tersedia di dalam Map. Artinya, data jonas masih tersimpan di dalam memori sampai kita benar-benar menghapusnya.

// Berbeda jika kita menggunakan WeakMap seperti ini.

let visitsCountMap = new WeakMap();

// Ketika nilai jonas sudah tidak bisa dijangkau, object jonas akan dihapus dari memori termasuk informasi yang disimpan di dalam WeakMap.

{
    const { inspect } = require('util');

    let visitsCountMap = new WeakMap(); // Menyimpan daftar user

    function countUser(user) {
        let count = visitsCountMap.get(user) || 0;
        visitsCountMap.set(user, count + 1);
    }

    let jonas = { name: "Jonas" };
    countUser(jonas); // Menambahkan user "Jonas"

    jonas = null; // Data object "Jonas" dihapus

    // delay dibutuhkan untuk menunggu garbage collector bekerja
    setTimeout(function() {
        console.log(inspect(visitsCountMap, { showHidden: true }));
    }, 10000);

    /* output
      WeakMap {  }
    */
}

// WeakMap tidak dapat dilihat secara langsung menggunakan console.log. Ini merupakan issue yang terjadi pada Node.js (lihat: https://github.com/nodejs/node/issues/19001). Itulah mengapa kami menggunakan fungsi inspect untuk melihat data yang ada di dalam WeakMap.

// Jika hasil output tidak sesuai dengan yang diharapkan pada kode, hal itu disebabkan oleh waktu tunggu yang tidak cukup untuk menunjukkan cara kerja garbage collector. Silakan simak penjelasan pada diskusi berikut: https://www.dicoding.com/academies/256/discussions/156523

// Seperti halnya WeakMap, WeakSet adalah versi weak reference dari Set. Perbedaan antara WeakSet dan Set antara lain:

// WeakSet tidak bisa menyimpan nilai primitif.
// WeakSet bukan iterable dan hanya memiliki method add(), has(), dan delete().
// WeakSet tidak memiliki properti size.