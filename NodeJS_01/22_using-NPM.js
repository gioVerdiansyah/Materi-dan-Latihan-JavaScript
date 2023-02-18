// Using Package
// Ok. Kita sudah belajar bagaimana memasang package pada project sebagai dependencies. Lalu bagaimana cara menggunakan package tersebut?

// Perlu kita pahami kembali bahwa package yang kita tambahkan ke dalam project sebenarnya adalah module. Itulah kenapa di dalam project kita akan muncul juga folder node_modules. Di dalamnya berisi kode-kode JavaScript yang menyusun suatu package. Jika Anda “berani”, Anda dapat melihat seperti apa kode di dalam package lodash.

// Karena merupakan module, kita bisa menambahkan kode dari package menggunakan keyword import seperti yang telah dipelajari pada materi Module.

// import variableName from 'package-name';
// Sehingga, untuk menggunakan kode dari package lodash yang telah kita pasang, tambahkan kode berikut pada berkas index.js:

// import _ from 'lodash';
// Penamaan menggunakan underscore (_) seperti di atas merupakan standar dari lodash yang perlu kita ikuti.

// Sekarang mari kita lihat bagaimana lodash ini bekerja. Di dalam dokumentasinya, lodash menyebutkan bahwa mereka menyediakan utilitas untuk membuat JavaScript lebih mudah dengan menghilangkan kerumitan ketika menggunakan array, number, object, string, dll.

// Misalnya, untuk menjumlahkan setiap nilai number di dalam array, lakukan dengan cara seperti berikut.
import _ from 'lodash';

{
    const myArray = [1, 2, 3, 4];
    let sum = 0;

    for (let i = 0; i < myArray.length; i++) {
        sum += myArray[i];
    }

    console.log(sum);

    /* output
    10
    */
}
// Atau, kita bisa menggunakan fungsi reduce seperti berikut:


{
    const myArray = [1, 2, 3, 4];
    let sum = myArray.reduce((prev, curr) => {
        return prev + curr;
    });

    console.log(sum);

    /* output
    10
    */
}
// Dengan lodash, kita dapat meringkas kode menjadi seperti ini:

{
    const myArray = [1, 2, 3, 4];
    const sum = _.sum(myArray);

    console.log(sum);

    /* output
    10
    */
}
// Anda bisa mengeksplorasi lebih jauh lagi tentang fitur-fitur dari lodash pada halaman dokumentasinya.