 {
     console.log("\n Destructuring Object");
     // Destructuring Object & Array
     // Literasi object dan array adalah dua hal yang paling banyak digunakan dalam mengelola data di JavaScript. JSON (JavaScript Object Notation) merupakan format data paling populer yang digunakan dalam transaksi data saat ini.

     [{
             "id": 14,
             "title": "Belajar Fundamental Aplikasi Android",
             "author": "Google ATP"
         },
         {
             "id": 51,
             "title": "Belajar Membuat Aplikasi Android untuk Pemula",
             "author": "Google ATP"
         },
         {
             "id": 123,
             "title": "Belajar Dasar Pemrograman Web",
             "author": "Dicoding Indonesia"
         },
         {
             "id": 163,
             "title": "Belajar Fundamental Front-End Web Development",
             "author": "Dicoding Indonesia"
         }
     ]
     // Jika kita lihat pada struktur JSON di atas, kita dapat menyimpulkan struktur tersebut dibangun dari array dan object. Karena kedua hal ini banyak digunakan untuk mengelola data pada JavaScript untuk memudahkan developer, ES6 menambahkan fitur untuk destructuring object dan array.

     // Apa sebenarnya destructuring object dan array itu? Destructuring dalam JavaScript merupakan sintaksis yang dapat mengeluarkan nilai dari array atau properties dari sebuah object ke dalam satuan yang lebih kecil.

     // Secara tidak sadar mungkin kita pernah melakukan destructuring. Namun, sebelum ES6 hal tersebut dilakukan dengan cara seperti ini:

     const profile = {
         firstName: "John",
         lastName: "Doe",
         age: 18
     }

     const firstName = profile.firstName
     const lastName = profile.lastName
     const age = profile.age

     console.log(firstName, lastName, age)

     /* output:
     John Doe 18
     */
 }



 { // Destructuring Object
     // Penulisan sintaksis destructuring object pada ES6 menggunakan object literal ({ }) di sisi kiri dari operator assignment
     const profile = {
         firstName: "John",
         lastName: "Doe",
         age: 18
     }

     const { firstName, lastName, age } = profile;

     console.log(firstName, lastName, age);


     //     Pada contoh di atas tanda kurung kurawal merepresentasikan object yang akan didestrukturisasi. Di dalamnya terdapat firstName, lastName, dan age yang merupakan variabel untuk menyimpan nilai properti dari object profile. Kita juga perlu perhatikan penamaan variabelnya. Pastikan penamaannya sama seperti properti object-nya. Melalui nama variabel inilah nilai-nilai properti object akan dimasukkan secara otomatis. Sehingga variabel firstName akan berisikan nilai profile.firstName, lastName akan berisikan nilai profile.lastName, begitu juga dengan variabel age akan berisikan nilai profile.age.

     // Dalam destructuring object, kita bisa menentukan salah satu nilai yang ingin kita desktrukturisasikan. Sehingga kita tidak perlu membuat variabel sebanyak properti yang dimiliki objeknya, contohnya:

     // const { lastName } = profile;
 }

 { // Destructuring Assignment
     // Pada contoh sebelumnya, kita telah melakukan destructuring object pada deklarasi variabel. Namun, pada kasus tertentu mungkin kita perlu melakukannya pada variabel yang sudah dideklarasikan.

     const profile = {
         firstName: "John",
         lastName: "Doe",
         age: 18
     }

     let firstName = "Dimas";
     let age = 20;

     // menginisialisasi nilai baru melalui destructuring object
     ({ firstName, age } = profile);

     console.log(firstName);
     console.log(age);

     /* output:
     John
     18
     */

     // Saat melakukan destructuring assignment, kita perlu menuliskan destructuring object di dalam tanda kurung. Jika tidak menuliskan tanda kurung, tanda kurung kurawal akan membuat JavaScript mengira kita membuat block statement, sementara block statement tidak bisa berada pada sisi kiri assignment.
 }

 { // Default Values
     // Ketika kita mendestruksikan objek dan menetapkan variabel dengan nama yang bukan merupakan properti dari objek, maka nilai dari variabel tersebut menjadi undefined. Contohnya:

     const profile = {
         firstName: "John",
         lastName: "Doe",
         age: 18
     }


     const { firstName, age, isMale } = profile;

     console.log(firstName)
     console.log(age)
     console.log(isMale)

     /* output:
     John
     18
     undefined
     */

     // Alternatifnya, kita bisa secara opsional mendefinisikan nilai default pada properti tertentu jika tidak ditemukan. Untuk melakukanya, tambahkan tanda assignment (=) setelah nama variabel dan tentukan nilai default-nya seperti ini:

     {
         const profile = {
             firstName: "John",
             lastName: "Doe",
             age: 18
         }


         const { firstName, age, isMale = 'belum nikah coy' } = profile;

         console.log(firstName)
         console.log(age)
         console.log(isMale)

         /* output:
         John
         18
         false
         */
     }
 }

 { // Assigning to Different Local Variable Names
     // Sampai saat ini kita tahu bahwa untuk melakukan destrukturisasi object pada variabel lokal, kita perlu menyeragamkan penamaan variabel lokal dengan properti object-nya. Namun, sebenarnya dalam proses destrukturisasi object kita bisa menggunakan penamaan variabel lokal yang berbeda. ES6 menyediakan sintaksis tambahan yang membuat kita dapat melakukan hal tersebut. Penulisannya mirip seperti ketika kita membuat properti beserta nilainya pada object.

     // Contohnya seperti ini:

     const profile = {
         firstName: "John",
         lastName: "Doe",
         age: 18
     }

     const { firstName: localFirstName, lastName: localLastName, age: localAge } = profile;

     console.log(localFirstName);
     console.log(localLastName);
     console.log(localAge);


     /* output:
     John
     Doe
     18
     */
 }

 {
     console.log("\n Destructuring Array");
     // Destructuring Array
     // Destructuring array serupa dengan destructuring object. Object menggunakan tanda kurung kurawal { } sedangkan array menggunakan tanda kurung siku [ ]. Perbedaan lainnya adalah destructuring array bekerja berdasarkan posisi daripada penamaan propertinya. Berikut contoh dari destructuring array pada ES6:

     const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

     const [firstFood, secondFood, thirdFood, fourthFood] = favorites;

     console.log(firstFood);
     console.log(secondFood);
     console.log(thirdFood);
     console.log(fourthFood);

     /* output:
     Seafood
     Salad
     Nugget
     Soup
     */

     // Kode di atas merupakan contoh proses destructuring array. Di dalam array favorites terdapat 4 (empat) nilai string yang masing-masing nilainya dimasukkan ke variabel lokal firstFood, secondFood, thirdFood, dan fourthFood. Nilai dari array yang dimasukkan ke variabel lokal dipilih berdasarkan posisi di mana ia dideklarasikan pada array.

     // const [firstFood, secondFood, thirdFood, fourthFood] = favorites;
     // Sebenarnya kita bebas untuk menentukan nama dari variabel lokal. Yang terpenting adalah urutan ketika deklarasi variabelnya saja.

     // Kita juga bisa memilih nilai pada index tertentu untuk destrukturisasi pada array. Contohnya, jika ingin mengambil nilai ketiga dari array, kita tidak perlu menyiapkan variabel lokal untuk menampung nilai array pertama, kedua, atau pun keempat. Kita bisa melakukannya dengan membiarkan index array yang tidak kita inginkan tetap kosong (tanpa menulis variabel lokal). Lebih lanjut, tanda koma (,) tetap diperlukan untuk menunjukkan posisi index-nya seperti ini:

     const favorite = ["Seafood", "Salad", "Nugget", "Soup"];

     const [, , index] = favorite;

     console.log("\n" + index);

     /* output:
     Nugget
     */
 }

 { //  Destructuring Assignment
     // Kita juga bisa melakukan destructuring assignment pada array. Namun, tidak seperti object, kita tidak perlu membungkusnya dengan tanda kurung. Contohnya seperti berikut:

     const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

     let myFood = "Ice Cream";
     let herFood = "Noodles";

     [myFood, herFood] = favorites;

     console.log(myFood);
     console.log(herFood);

     /* output:
     Seafood
     Salad
     */

     //  Array destructuring assignment sangat berguna ketika kita hendak menukar nilai antara dua variabel. Sebelum ES6, untuk melakukan hal ini kita menggunakan cara manual menggunakan algoritma sorting seperti ini:

     var a = 1;
     var b = 2;
     var temp;

     console.log("\nSebelum swap");
     console.log("Nilai a: " + a);
     console.log("Nilai b: " + b);

     temp = a;
     a = b;
     b = temp;

     console.log("Setelah swap");
     console.log("Nilai a: " + a);
     console.log("Nilai b: " + b);

     /* output
     Sebelum swap
     Nilai a: 1
     Nilai b: 2
     Setelah swap
     Nilai a: 2
     Nilai b: 1
     */


     //  Untuk melakukan pertukaran nilai, kita membutuhkan variabel penengah. Pada contoh kode di atas menggunakan variabel temp. Variabel penengah dibutuhkan untuk menyimpan data sementara pada variabel yang akan ditukar. Hal ini menjadi kurang efektif karena kita harus membuat variabel baru yang sebenarnya hanya bersifat sementara.

     // Dengan array destructuring assignment, kita bisa menukar nilai variabel dengan mudah tanpa membuat variabel tambahan.

     let x = 1;
     let y = 2;

     console.log("\nSebelum swap");
     console.log("Nilai x: " + x);
     console.log("Nilai y: " + y);

     [x, y] = [x, y] // menetapkan nilai a dengan nilai b dan nilai b dengan nilai a.

     console.log("Setelah swap");
     console.log("Nilai x: " + x);
     console.log("Nilai y: " + y);
 }

 { //  Default Values
     // Ketika melakukan destructuring array, tetapi terdapat variabel yang posisinya tidak dapat terjangkau oleh array, maka variabel tersebut akan bernilai undefined. Contohnya:

     const favorites = ["Seafood"];
     const [myFood, herFood] = favorites

     console.log("\n" + myFood);
     console.log(herFood);

     /* output:
     Seafood
     undefined
     */

     // Sama seperti object, pada destructuring array kita juga dapat memberikan nilai default pada variabel yang tidak dapat terjangkau oleh array, sehingga nilai pada variabel tidak akan menjadi undefined.

     {
         const favorites = ["Seafood"];

         const [myFood, herFood = "Salad"] = favorites

         console.log(myFood);
         console.log(herFood);

         /* output:
         Seafood
         Salad
         */
     }
 }