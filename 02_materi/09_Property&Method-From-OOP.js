// Property & Method

// Property
// Property adalah atribut dari sebuah objek, property sendiri dapat berupa tipe data primitive--seperti yang sebelumnya dibahas-- bahkan bisa juga berbentuk object dan fungsi. Misalkan isi pesan, list penerima, data pengirim, perintah kirim, dll. Sebagai contoh:

// cara 1
class Mail {
    constructor() {
        this.from = 'pengirim@dicoding.com';
        this.contacts = [];
        this.yourOtherProperty = 'the values';
    }
    sendMessage(msg, to) {
        console.log(`you send: ${msg} to ${to} from ${this.from}`);
        this.contacts.push(to); // menyimpan kontak baru
    };
}

{ // cara 2
    function Mail() {
        this.from = 'pengirim@dicoding.com';
        this.contacts = [];
        this.yourOtherPrototype = 'the values';
    };

    Mail.prototype.sendMessage = function(msg, to) {
        console.log(`you send: ${msg} to  ${to} from ${this.from}`);
        this.contacts.push(to); // menyimpan kontak baru
    };
}
// Contoh class di atas memiliki 3 (tiga) property dan method. Yang perlu diingat, this merupakan representasi bahwasanya variable yang ditunjuk adalah atribute yang bersifat global dan menempel dengan objek tersebut. Sehingga, variabel dapat diakses dari method ataupun property di dalam kelas tersebut dengan menambahkan this di depannya. Sebagai gambaran, kita akan coba ubah kode di atas menjadi seperti berikut ini.
{
    class Mail {
        constructor() {
            this.from = 'pengirim@dicoding.com';
            this.contacts = [];
        }
        sendMessage(msg, to, from) {
            console.log(`you send: ${msg} to ${to} from ${from}`);
            // from di sini merujuk ke `from` parameter, bukan ke `from` dari global value yaitu pengirim@dicoding.com
            this.contacts.push(to);
        };
    }

    const mail1 = new Mail();
    mail1.sendMessage('hallo', 'penerima@dicoding.com', 'aku@gmail.com');

    /**
    you send: hallo to penerima@dicoding.com from aku@gmail.com
    **/
}

// Contoh di atas menunjukan bahwa ketika kita ingin menginisialisasi ataupun mengakses sebuah attribute global dari sebuah kelas, maka harus menggunakan this.attributeName.

// Dalam OOP sendiri, properti dibagi menjadi 2:

// Internal interface : method dan property yang dapat diakses oleh method lain namun tidak bisa diambil/dijalankan di luar kelas tersebut.
// External interface : method dan property yang dapat diakses di luar kelas itu sendiri.
// Sedangkan di dalam JavaScript sendiri terdapat 2 jenis akses identifier untuk sebuah field:

// Public : dapat diakses dari mana pun.
// Private : hanya dapat diakses dari dalam kelas itu sendiri.
// Secara default, semua atribut yang didefinisikan adalah public. Sehingga semua attribute tersebut dapat diakses oleh objek yang telah meng-instansiasi kelas tersebut. Sebagai contoh:

const mail1 = new Mail();
mail1.from; // 'pengirim@dicoding.com'
mail1.sendMessage('hallo', 'penerima@dicoding.com'); // method mengirim pesan
mail1.contacts; // ['penerima@dicoding.com']

// Dari contoh tersebut, bagaimana jika kita ingin mengubah attribute contacts pada class Mail menjadi tidak bisa diakses di luar class atau oleh objek yang menjadi instansiasi class tersebut?

{
    /** 
    cara 1, menggunakan var (hanya dapat digunakan pada penulisan kelas menggunakan statement `function`)
    **/
    var contacts = [];
    // contoh
    function Mail() {
        this.from = 'pengirim@dicoding.com';
        var contacts = [];
    }

    /**
    cara 2, cara ini dapat digunakan pada penulisan kelas menggunakan statement `function` dan `class`
    **/
    this._contacts = []
        // contoh
    class Maix {
        constructor() {
            this._contacts = [];
            this.from = 'pengirim@dicoding.com';
        }
    }

    /** 
    cara 3, menambahkan prefix # , cara ini dapat digunakan pada penulisan kelas menggunakan statement `class` saja 
      **/
    // #contacts = [];
    // contoh
    class Mails {
        // #contacts = []; //code formatter is fucking suck
        constructor() {
            this.from = 'pengirim@dicoding.com';
        }
    }
}


// Dari contoh di atas, ketika kita ingin mengakses attribute contacts secara langsung melalui objek yang menginisiasi maka return-nya adalah undefined. Ketiga cara tersebut juga dapat digunakan pada sebuah method atau function.

const mail = new Mail();

mail.contacts; // undefined

// Catatan:
// Ketahuilah bahwa cara ke-2 bukanlah cara murni yang diusung JavaScript dalam menetapkan atribut private. Namun, cara tersebut merupakan standarisasi penulisan yang biasanya digunakan oleh pengembang software (dengan JS) untuk membedakan variable-variable yang merupakan private variable.

// Sedangkan untuk cara 3, belum sepenuhnya didukung oleh JavaScript engine versi lama. ini merupakan proposal pengembangan JavaScript terkait dengan identifier pada js (https://github.com/tc39/proposal-private-methods).



{ // Class Method
    // Class Method adalah function atau method yang ada di dalam sebuah object. Untuk menggunakannya, sebuah class harus di-instantiate terlebih dahulu menjadi object baru bisa dijalankan. Contoh class mail di atas, kita akan menggunakan method sendMessage maka kita harus meng-instantiate Mail terlebih dahulu.


    const mail1 = new Mail();
    mail1.sendMessage('hallo', 'penerima@dicoding.com');
    /**
    output-nya berhasil:
    you send: hallo to penerima@dicoding.com from pengirim@dicoding.com
    **/
    // Kita tidak dapat langsung mengakses sendMessage tanpa melakukan instansiasi terlebih dahulu, misalkan:

    // Mail.sendMessage('hallo', 'penerima@dicoding.com');
    /**
    output-nya error:
    TypeError: Mail.sendMessage is not a function
    **/
}



{ // Static Method
    // Static method adalah function atau method yang sama seperti class method, akan tetapi untuk mengaksesnya tidak perlu meng-instantiate class. Kita cukup menuliskan nama kelas dan nama method-nya secara langsung (NamaClass.namaMethod()).

    // Sebagai contoh, kita menambahkan sebuah method untuk memeriksa apakah sebuah input adalah nomor handphone:

    class Mail {
        static isValidPhone(phone) {
            return typeof phone === 'number';
        }
    }
    // Dari contoh di atas, kita dapat memanggil fungsi tersebut tanpa membuat instance kelas Mail terlebih dahulu.

    Mail.isValidPhone(089000000000) //true
}

{ // Constructor
    // Ketika kita membuat sebuah objek, adakalanya karakteristik dari blueprint yang kita buat harus sudah didefinisikan bersamaan dengan sebuah objek saat pertama kali diinisiasi. Constructor adalah sebuah method/function yang dijalankan pertama kali ketika object dibuat. Dari contoh kelas yang kita buat sebelumnya, kita akan membuat from sebagai sebuah value yang harus ditulis ketika sebuah objek diinisiasi. Maka dalam JavaScript ada dua cara, yaitu:

    // cara 1, jika kita menggunakan statement class
    class Mail {
        constructor(params1, params2, /*....*/ ) {
            this.yourPropertyName = params1;
            // do something here
        };
    }

    // cara 2, jika kita menggunakan statement function
    function Mails(params1, params2, /*....*/ ) {
        this.yourPropertyName = params1;
        // do something here
    }
    // Contoh penerapannya sebagai berikut:

    // cara 1
    class Maill {
        constructor(author) {
            this.from = author;
            console.log('is instantiated', author);
        };
    }


    // cara 2
    function Maild(author) {
        this.from = author;
        console.log('is instantiated', author);
    }
    // Dari contoh constructor di atas, maka cara pemanggilannya menjadi seperti di bawah ini:

    // const mail1 = new Mail("emailku@dicoding.com");
    // Karena JavaScript bukan bahasa dengan dukungan static type maka sebenarnya kita dapat melakukan instansiasi dengan parameter sesuka kita:

    const mail1 = new Mail(085000111222); // misalkan untuk SMS
    const mail2 = new Mail("emailku@dicoding.com"); // misalkan untuk Email
}



{
    // Properti Getter dan Setter
    // Secara standar, properti di dalam sebuah instance class bersifat mutable atau dapat diubah nilainya. Meskipun kita sudah menetapkan nilai chassisNumber oleh sistem, nyatanya nilai tersebut dapat diubah dengan mudah ketika objek mobil telah dibuat.

    class Car {
        constructor(brand, color, maxSpeed) {
            this.brand = brand;
            this.color = color;
            this.maxSpeed = maxSpeed;
            this.chassisNumber = `${brand}-${Math.floor(Math.random() * 1000)}`;
        }
    }

    const car = new Car('BMW', 'red', 200);
    car.chassisNumber = 'BMW-1';

    console.log(car);

    /* Output:
    Car { brand: 'BMW', color: 'red', maxSpeed: 200, chassisNumber: 'BMW-1' }
    */


    //     Lalu, bagaimana cara memproteksi agar nilai dari properti chassisNumber tidak dapat diubah? Nah, ketika kita berhadapan dengan kasus seperti ini, kita bisa memanfaatkan properti getter dan setter.

    //! Sebelum memecahkan masalah di atas, ketahuilah bahwa ada dua tipe properti, yaitu data property dan accessor property.

    // Data property merupakan properti yang sejauh ini kita lihat, properti yang langsung menampung sebuah nilai di dalam sebuah objek.

    // Sedangkan accessor property merupakan properti yang dikontrol oleh sebuah getter dan setter. Nilai yang didapatkan dari properti tersebut dikontrol oleh method get dan cara menetapkan nilai tersebut dikontrol oleh method set.

    // contoh:

    class User {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }

        get fullName() {
            return `${this.firstName} ${this.lastName}`;
        }

        set fullName(fullName) {
            const [firstName, lastName] = fullName.split(' ');
            this.firstName = firstName;
            this.lastName = lastName;
        }
    }

    // get
    const user = new User('John', 'Doe');
    console.log(user);
    console.log(user.fullName);

    // set
    user.fullName = 'Fulan Fulanah'; //split digunakan
    console.log(user);
    console.log(user.fullName);

    /* Output:
    User { firstName: 'John', lastName: 'Doe' }
    John Doe
    User { firstName: 'Fulan', lastName: 'Fulanah' }
    Fulan Fulanah
    */



    //     Di dalam class User, Anda bisa melihat bahwa terdapat data property firstName dan lastName. Nilai dari properti tersebut ditetapkan via argumen constructor. Selain itu, Anda juga bisa melihat sebuah method get fullName dan set fullname. Method tersebut merupakan accessor property yang mengatur cara akses dari properti fullName.

    // Sebab kita menetapkan getter dan setter untuk properti fullName, maka kita bisa mengakses properti tersebut melalui instance User. Ketika kita coba mendapatkan nilai properti fullName dengan cara user.fullName, method getter akan dijalankan dan nilai yang dikembalikan akan menjadi nilai dari properti tersebut. Begitu juga ketika kita coba menetapkan nilai properti fullName dengan cara user.fullName = “Fulan Fulanah”, kode di dalam method setter akan dijalankan.

    // Catatan penting yang perlu Anda ketahui mengenai getter setter adalah:

    // method getter harus mengembalikan sebuah nilai dan nilai tersebut akan menjadi nilai properti;
    // method setter harus menerima satu argumen yang nilainya diambil dari operand ke dua ketika melakukan assignment operator.
    // Mari kita kembali ke masalah perubahan nilai properti chassisNumber. Bagaimana getter dan setter dapat memproteksi perubahan properti chassisNumber? Di JavaScript, pola yang sering diterapkan untuk memecahkan masalah ini adalah dengan memanfaatkan getter setter sebagai “wrapper” dari properti aslinya. Tujuannya agar getter setter bisa mengontrol akses seperti mendapatkan dan menetapkan nilai properti.

    // Untuk menerapkan pola ini, pertama kita perlu mengubah nama dari properti chassisNumber, misalnya dengan menambahkan tanda garis bawah di depannya menjadi _chassisNumber.

    // class Car {
    //     constructor(brand, color, maxSpeed) {
    //         this.brand = brand;
    //         this.color = color;
    //         this.maxSpeed = maxSpeed;
    //         this._chassisNumber = `${brand}-${Math.floor(Math.random() * 1000)}`;
    //     }
    // }
    // Lalu, kita tetapkan getter dan setter untuk properti chassisNumber. Untuk getter, kita kembalikan dengan nilai properti _chassisNumber.

    class Cars {
        constructor(brand, color, maxSpeed) {
            this.brand = brand;
            this.color = color;
            this.maxSpeed = maxSpeed;
            this._chassisNumber = `${brand}-${Math.floor(Math.random() * 1000)}`;
        }

        get chassisNumber() {
            return this._chassisNumber;
        }
    }
    // Kita tidak ingin nilai chassisNumber dapat diubah sehingga untuk setter properti chassisNumber, cetak saja teks peringatan menggunakan console.log() seperti ini.

    class Carrr {
        constructor(brand, color, maxSpeed) {
            this.brand = brand;
            this.color = color;
            this.maxSpeed = maxSpeed;
            this._chassisNumber = `${brand}-${Math.floor(Math.random() * 1000)}`;
        }

        get chassisNumber() {
            return this._chassisNumber;
        }

        set chassisNumber(chassisNumber) {
            console.log('you are not allowed to change the chassis number');
        }
    }
    // Lantas, ketika kita membuat instance Car, nilai chassisNumber tidak dapat diubah.


    //! Catatan

    // Sebenarnya nilai chassisNumber masih bisa berubah jika kita mengubah langsung melalui properti _chassisNumber. Namun, ketahuilah bahwa mengubah atau mendapatkan nilai properti objek yang diawali dengan tanda underscore tidak direkomendasikan. Alasanya, komunitas JavaScript menyepakati bahwa hal properti yang diberi tanda underscore bukan untuk diakses, alias bersifat privat.

    // JavaScript versi ES2022 hadir dengan fitur private identifier. Dengan fitur tersebut, kita bisa membuat private property. Ini akan memecahkan masalah di atas. Private property akan kami bahas pada materi Member Visibility.
}


//! Method
{
    // Method adalah sebuah fungsi yang berada di dalam sebuah class dan dapat diakses melalui instance Class tersebut. Method biasanya mengindikasikan hal yang dapat dilakukan oleh sebuah class. Bila kita berbicara tentang class Car, method yang ada bisa drive(), reverse(), dan turn(). Jika pada class Mail, method bisa berupa send(), sendLater(), saveAsDraft().

    class Car {
        constructor(brand, color, maxSpeed) {
            this.brand = brand;
            this.color = color;
            this.maxSpeed = maxSpeed;
            this._chassisNumber = `${brand}-${Math.floor(Math.random() * 1000)}`;
        }

        get chassisNumber() {
            return this._chassisNumber;
        }

        set chassisNumber(chassisNumber) {
            console.log('you are not allowed to change the chassis number');
        }

        // Methods
        drive() {
            console.log(`${this.brand} ${this.color} is driving`);
        }

        reverse() {
            console.log(`${this.brand} ${this.color} is reversing`);
        }

        turn(direction) {
            console.log(`${this.brand} ${this.color} is turning ${direction}`);
        }
    }
    // Pemanggilan:
    // const car = new Car("Honda", "White", 150);
    // console.log(car.drive());
    // console.log(car.reverse());
    // console.log(car.turn("Right"));

    class Mail {
        constructor(sender, receiver, subject, body) {
            this.sender = sender;
            this.receiver = receiver;
            this.subject = subject;
            this.body = body;
        }

        // Methods
        send() {
            console.log(`Sending mail from ${this.sender} to ${this.receiver}`);
        }

        sendLater(delay) {
            console.log(`Sending after ${delay} ms`);

            setTimeout(() => {
                this.send();
            }, delay);
        }

        saveAsDraft() {
            console.log('Saving mail as draft');
        }
    }

    const mel = new Mail("Verdi", "Sandi", "Dari Verdi", "Hii");
    console.log(mel.send());
    console.log(mel.sendLater(5000));
    console.log(mel.saveAsDraft())



    //     Method memang kental dengan “kemampuan” yang bisa dilakukan oleh sebuah class, tetapi praktik nyatanya membuat method tidak hanya untuk itu. Method juga biasa dibuat ketika kita perlu mengekstraksi sebuah kode agar lebih mudah untuk dibaca dan method tersebut hanya digunakan untuk kebutuhan internal saja.

    // Contoh, pada class Car, kita menetapkan nilai _chassisNumber dengan nilai random yang ditulis di dalam constructor. Hal itu membuat kode di dalam constructor menjadi sulit dibaca karena dicampuri dengan logika dalam menghasilkan angka acak.

    // Agar kode di dalam constructor lebih rapi, kita bisa membuat method yang digunakan internal yang menampung kode random tersebut. Biasanya method yang hanya digunakan secara internal disebut dengan private dan namanya diawali dengan tanda underscore.

    class CarRefac {
        constructor(brand, color, maxSpeed) {
            this.brand = brand;
            this.color = color;
            this.maxSpeed = maxSpeed;
            this._chassisNumber = this._generateChassisNumber();
        }

        get chassisNumber() {
            return this._chassisNumber;
        }

        set chassisNumber(chassisNumber) {
            console.log('you are not allowed to change the chassis number');
        }

        // Methods
        drive() {
            console.log(`${this.brand} ${this.color} is driving`);
        }

        reverse() {
            console.log(`${this.brand} ${this.color} is reversing`);
        }

        turn(direction) {
            console.log(`${this.brand} ${this.color} is turning ${direction}`);
        }

        _generateChassisNumber() {
            return `${this.brand}-${Math.floor(Math.random() * 1000)}`;
        }
    }
}


//! Member Visibility
// Member visibility bisa disebut juga sebagai hak akses pada sebuah properti dan method di dalam class. Secara default, seluruh properti dan method yang dibuat di dalam class bersifat public, alias dapat diakses di luar dari kode class via instance. Selain public, kita juga bisa membuat properti dan method bersifat private, terutama ketika kita ingin properti atau method tersebut hanya digunakan dalam cakupan kode di dalam class saja (penggunaan internal).

// Di pembahasan sebelumnya, kita sudah mengenal bahwa pemberian tanda underscore pada properti atau method bisa dijadikan sebagai penanda bahwa ia dianggap private. Masalahnya adalah cara tersebut tidak benar-benar memproteksi hak aksesnya. Contoh, pada class Car, kita sudah membuat properti _chassisNumber dan method _generateChassisNumber() dengan tanda underscore. Namun, kedua member tersebut tetap saja masih bisa di akses via instance, bahkan kita bisa mengubah nilainya.
{
    class Car {
    #chassisNumber = null;

        constructor(brand, color, maxSpeed) {
            this.brand = brand;
            this.color = color;
            this.maxSpeed = maxSpeed;
            this.#chassisNumber = this.#generateChassisNumber();
        }

        get chassisNumber() {
            return this.#chassisNumber;
        }

        set chassisNumber(chassisNumber) {
            console.log('you are not allowed to change the chassis number');
        }

        // Methods
        drive() {
            console.log(`${this.brand} ${this.color} is driving`);
        }

        reverse() {
            console.log(`${this.brand} ${this.color} is reversing`);
        }

        turn(direction) {
            console.log(`${this.brand} ${this.color} is turning ${direction}`);
        }

        #generateChassisNumber() {
            return `${this.brand}-${Math.floor(Math.random() * 1000)}`;
        }
    }

    const car = new Car("Mio", "Blue", 155);
    console.log(car.chassisNumber)
}