// Paradigma Functional Programming
// Paradigma Functional Programming adalah paradigma pemrograman di mana proses komputasi didasarkan pada fungsi matematika murni. Functional Programming (selanjutnya akan kita singkat menjadi FP) ditulis dengan gaya deklaratif yang berfokus pada “what to solve” dibanding “how to solve” yang dianut oleh gaya imperatif.

// Sebagai gambaran buat Anda yang belum tahu apa itu deklaratif dan imperatif lebih jauh, silakan simak contoh kode berikut.

{
    const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

    const newNamesWithExcMark = [];

    for (let i = 0; i < names.length; i++) {
        newNamesWithExcMark.push(`${names[i]}!`);
    }

    console.log(newNamesWithExcMark);

    /* output:
       [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
    */
}


// Contoh kode di atas merupakan salah satu gaya penulisan kode imperatif. Di mana proses pengisian nilai array baru (newNames) berdasarkan array lama (names) dilakukan secara manual. Inilah maksud dari “how to solve”, di mana kita perlu memikirkan bagaimana cara melakukan perulangannya (for); kapan perulangannya harus berhenti (i < names.length); bagaimana cara memasukkan nilai baru ke dalam array (newNamesWithExcMark.push). Huft, sangat melelahkan!

// Lantas bagaimana dengan gaya deklaratif? Mari kita lihat kode dengan fungsi yang sama namun dengan gaya deklaratif.

{
    const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

    const newNamesWithExcMark = names.map((names) => `${names}?`);

    // atau sama saja:
    // function(names) {
    //      return `${names}?`;
    // }

    console.log(newNamesWithExcMark);

    // method map sendiri menerima callback function
    // callback functionnya menerima sampe 3 parameter, berupa element, index, array
    // nah disitu km memetakan setiap elemennya, dengan menambahkan tanda ?

    // callback functionnya itu menerima 3 parameter
    // 1. elemen
    // 2. index
    // 3. array
    // dibagian ini names.map((names) => ${names}?);

    // km memetakan semua nama, menjadi nama?
    // kamu memetakan semua nama yang yang ada di array names

    // diatas adalah elemen
    //! index: names.map((names, idx) => Index ke-${idx} namanya ${names}?);

}


// Kesan apa yang pertama Anda rasakan ketika melihat kode di atas? Coba bandingkan dengan kode sebelumnya, tentu ini jauh lebih mudah dibaca dan ringkas. Yap! Inilah yang disebut dengan gaya deklaratif. Kita tidak perlu pusing untuk memikirkan cara manual untuk mencapai sebuah tujuan. Tidak ada proses looping manual; Tidak perlu tahu kapan harus berhenti dari looping; Kita cukup fokus pada “what to solve” alias apa yang ingin kita selesaikan atau capai.

// JavaScript sendiri merupakan bahasa pemrograman yang mendukung paradigma FP. Banyak Higher-Order Function (kita akan bahas detail tentang ini nanti) yang bisa kita manfaatkan sebagai utilitas, salah satunya fungsi array map() di atas.

// Namun FP bukan hanya sekedar menggunakan High-Order Function bawaan saja. Untuk memahami paradigma FP secara mendalam, kita perlu tahu dulu konsep-konsep apa saja yang ada di dalamnya.