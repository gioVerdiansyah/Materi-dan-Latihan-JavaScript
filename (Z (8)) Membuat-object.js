// ada 2 cara yaitu secara
// Object literal = seperti kemarin
// Function declaration
// Constructor function (keyword new)
// Object.create()


// Membuat object

// 1.Object literal
let mahasiswa1 = {
        nama: "Sofyan Verdi",
        umur: 21,
        lulus: true,
        IPSemester: [2.90, 3.10, 3.25, 2.88, 3.04],
        IPKomulatif: function() {
            let total = 0
            let ips = this.IPSemester;
            for (let i = 0; i < ips.lenght; i++) {
                total += ips[i]
            }
            return total / ips.lenght;
        }
    }
    // jika ada dua mahasiswa kedua maka simpel aja buat variabel kedua
let mahasiswa2 = {
        nama: "sofyan Deny",
        umur: 20,
        lulus: false,
        IPSemester: [2.10, 2.35, 3.00, 3.30, 3.53],
        IPKomulatif: function() {
            let total = 0
            let ips = this.IPSemester;
            for (let i = 0; i < ips.lenght; i++) {
                total += ips[i]
            }
            return total / ips.lenght;
        }
    }
    // tapi jika ada kesamaan nama index tetapi datanya yang berbeda maka harus menggantik satu-satu isi dalam datanya secara manual




// Function Declaration
function objectMahasiswa(nama, umur, lulus, ips) {
    let mhs = {};
    mhs.nama = nama;
    mhs.umur = umur;
    mhs.lulus = lulus;
    mhs.ips = ips;

    return mhs;
}
// nah didalam parameternya kita masukkan nama indexnya, lalu varnya diisi menggunakan index di dalam parameternya

// lalu diisi =

let mhs = objectMahasiswa("sofyan galih", 21, true, [2.90, 3.10, 3.25, 2.88, 3.04]);
// urutannya harus sesuai!

// lalu jika kita ingin membuat mahasiswa berikutnya tinggal buat lagi variabel mhs2 ...
// jadi tak perlu menuliskan functionnya dua kali




// Constructor, khusus untuk membuat object (akan digunakan kedepannya)
//biasanya namanya harus kapital di awal nama (ini hanya untuk membedakan mana yang declaration dan Constructor)

function Mahasiswa(nama, umur, lulus, ips) {
    //anggap saja kalo menggunakan Constructor ada:
    //var this = {};
    this.nama = nama;
    this.umur = umur;
    this.lulus = lulus;
    this.ips = ips;
    //return this
}
// manggilnya =

let mhsConstructor = new Mahasiswa("verdi deny", 22, true, [2.83, 3.12, 3.05, 2.18, 3.20])

// harus ada kata newnya!
// kalau tidak pakai new maka akan undifined. JS mengira kalian memanggil function declaration