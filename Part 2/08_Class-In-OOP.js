// Class
// Class adalah hal yang sangat penting dalam pemrograman berorientasi objek. Hal itu karena class menyediakan informasi tentang suatu object. Jadi dapat dikatakan object adalah instance dari sebuah class. Class sendiri dalam paradigma OOP secara teknis merupakan sebuah blueprint dalam mendefinisikan karakteristik dari sebuah objek. Sebagai contoh, misalkan terdapat blueprint untuk mendefinisikan objek Mail. Yang mana sms dan postman adalah object dari class Mail.

// Nama Class	               Mail
// Karakteristik	           pengirim, penerima, isi pesan
// Kapabilitas/aksi	           kirim pesan, terima pesan

// Di dalam sebuah class, dapat terdiri dari properti dan method. Properti merupakan karakteristik dari class, sedangkan method adalah kapabilitas atau kemampuan yang dimiliki oleh class.


// Nah, untuk penulisan class di JavaScript sendiri bisa menggunakan dua cara, yakni melalui sintaks function ataupun class.

// Mari kita lihat dulu cara membuat class menggunakan sintaksis function.

// Nah, untuk penulisan class di JavaScript sendiri bisa menggunakan dua cara, yakni melalui sintaks function ataupun class.

// Mari kita lihat dulu cara membuat class menggunakan sintaksis function.

// function: Tanpa pendekatan Prototype

function Mail() {
    this.from = "pengirim@dicoding.com",
        this.sendMessage = function(msg, to) {
            console.log(`you send: ${msg} to ${to} from ${this.from}`);
        }
};
// pemanggilan

const mail1 = new Mail();
mail1.sendMessage('hallo', 'penerima@dicoding.com');

/**
output:
you send: hallo to penerima@dicoding.com from pengirim@dicoding.com
**/



{ // function: Menggunakan pendekatan Prototype

    function Mail() {
        this.from = 'pengirim@dicoding.com';
    };

    Mail.prototype.sendMessage = function(msg, to) {
        console.log(`you send: ${msg} to ${to} from ${this.from}`);
    };

    // pemanggilan

    const mail1 = new Mail();
    mail1.sendMessage('hallo', 'penerima@dicoding.com');

    /**
    output:
    you send: hallo to penerima@dicoding.com from pengirim@dicoding.com
    **/
}