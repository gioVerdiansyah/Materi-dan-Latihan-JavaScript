// kita akan mengelola data angkot yang ada setelah manipulasi array

// pengelolaan angkot
// -sopir
// -trayek
// -kas
// -penumpang
//   -penumpang naik
//   -penumpang turun

console.log("cara penggunaan \n angkot1.penumpangNaik('namanya') \n angkot.penumpangTurun('namanya yang mau turun,bayar berupa angka)")

function Angkot(sopir, trayek, penumpang, kas) {
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function(namaPenumpang) {
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }
    this.penumpangTurun = function(namaPenumpang, bayar) {
        if (this.penumpang.length === 0) {
            console.log("Angkot masih kosong!")
            return this.penumpang;
        }
        for (let i = 0; i < this.penumpang.length; i++) {
            if (this.penumpang[i] == namaPenumpang) {
                this.penumpang[i] = namaPenumpang + " telah turun";
                this.kas += bayar;
                return this.penumpang
            } else if (i == this.penumpang.length - 1) {
                console.log("Nama " + namaPenumpang + " tidak ada didalam angkot")
                return penumpang;
            }

        }
    }
}

var angkot1 = new Angkot("Verdi", ["Balereja", "Madiun"], [], 0);
var angkot2 = new Angkot("Sofyan", ["Balereja", "Nganjuk"], [], 0);


// cara menggunakanya =
// angkot1.penumpangNaik('namanya')