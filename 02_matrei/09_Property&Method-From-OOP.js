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
    class Mail {
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
    class Mail {
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

    Mail.sendMessage('hallo', 'penerima@dicoding.com');
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
    function Mail(params1, params2, /*....*/ ) {
        this.yourPropertyName = params1;
        // do something here
    }
    // Contoh penerapannya sebagai berikut:

    // cara 1
    class Mail {
        constructor(author) {
            this.from = author;
            console.log('is instantiated', author);
        };
    }


    // cara 2
    function Mail(author) {
        this.from = author;
        console.log('is instantiated', author);
    }
    // Dari contoh constructor di atas, maka cara pemanggilannya menjadi seperti di bawah ini:

    // const mail1 = new Mail("emailku@dicoding.com");
    // Karena JavaScript bukan bahasa dengan dukungan static type maka sebenarnya kita dapat melakukan instansiasi dengan parameter sesuka kita:

    const mail1 = new Mail(085000111222); // misalkan untuk SMS
    const mail2 = new Mail("emailku@dicoding.com"); // misalkan untuk Email
}