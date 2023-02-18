//! Throwing Errors
// Sekarang kita lihat implementasi try-catch pada kasus yang lebih umum. Perhatikan kode berikut:

let json = '{ "name": "Yoda", "age": 20 }';

try {
    let user = JSON.parse(json);

    console.log(user.name);
    console.log(user.age);
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}
// Pada kode di atas, fungsi JSON.parse akan melakukan parsing atau konversi dari variabel json (String) menjadi sebuah object. Skenario seperti di atas akan banyak kita temui ketika melakukan request ke API.

// Jalankan kode di atas pada text editor Anda. Seharusnya aplikasi berjalan lancar tanpa menimbulkan eror.

// Lalu, bagaimana jika json string tidak sesuai dengan format object JavaScript?

{
    let json = '{ bad json }';

    try {
        let user = JSON.parse(json);

        console.log(user.name);
        console.log(user.age);
    } catch (error) {
        console.log(error.name);
        console.log(error.message);
    }


    /* output
    SyntaxError
    Expected property name or '}' in JSON at position 2
    */
}


// Apabila json tidak sesuai format, maka JSON.parse akan menimbulkan eror. Eror tersebut akan ditangkap oleh blok catch dan kode di dalamnya yang akan dieksekusi.

// Lalu, bagaimana jika json yang didapat adalah seperti ini?

{
    let json = '{ "age": 20 }';

    try {
        let user = JSON.parse(json);

        console.log(user.name); // undefined
        console.log(user.age); // 20
    } catch (error) {
        console.log(error.name);
        console.log(error.message);
    }
    // Secara sintaksis, kode di atas tidak menimbulkan eror, sehingga blok catch akan diabaikan. Namun, tidak adanya properti name pada json sebenarnya sama saja dengan eror karena akan berdampak pada jalannya program kita.


    //! throw
    // Untuk mengatasinya, kita bisa menggunakan throw. Operator ini akan “melemparkan” eror pada program, sehingga eksekusi kode akan masuk pada blok catch. Berikut ini adalah contoh mengimplementasikan throw untuk menimbulkan eror kita sendiri:

    {
        let json = '{ "age": 20 }';

        try {
            let user = JSON.parse(json);

            if (!user.name) {
                throw new SyntaxError("'name' is required.");
            }

            console.log(user.name); // undefined
            console.log(user.age); // 20
        } catch (error) {
            console.log(`JSON Error: ${error.message}`);
        }
    }
}
/* output
JSON Error: 'name' is required.
*/
// Ketika properti user.name tidak memiliki nilai, maka program akan menghasilkan SyntaxError. Di dalamnya kita bisa menentukan pesan yang dapat membantu menjelaskan apa eror yang terjadi.

// Sekarang kita telah mengetahui ada banyak kemungkinan eror yang bisa muncul dalam sebuah program. Tentunya akan sangat membantu jika kita bisa memberikan pesan yang sesuai kepada pengguna atau kepada diri kita sendiri untuk menemukan kesalahan dengan lebih mudah.

// Sekarang anggaplah json sudah sesuai, tetapi ternyata ada eror lain yang terjadi, misalnya karena variabel yang belum terdefinisi.


{
    let json = '{ "name": "Yoda", "age": 20 }';

    try {
        let user = JSON.parse(json);

        if (!user.name) {
            throw new SyntaxError("'name' is required.");
        }

        errorCode;

        console.log(user.name); // Yoda
        console.log(user.age); // 20
    } catch (error) {
        // console.log(`JSON Error: ${error.message}`);
        // Eror berhasil ditangani, tetapi konsol tetap menampilkan pesan “JSON Error”, lantas bagaimana kita bisa menampilkan pesan eror sesuai eror yang muncul?

        // Jawabannya adalah dengan if statement.
        if (error instanceof SyntaxError) {
            console.log(`JSON Error: ${error.message}`);
        } else if (error instanceof ReferenceError) {
            console.log(error.message);
        } else {
            console.log(error.stack);
        }

        // Dengan operator instanceOf, kita bisa mendapatkan tipe dari eror yang terjadi.Dari sana kita bisa membuat percabangan bagaimana cara menangani erornya.
    }
}