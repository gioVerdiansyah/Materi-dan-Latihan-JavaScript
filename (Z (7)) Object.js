// Object ini mirip dengan array pada js
// "kumpulan nilai,yang memiliki nama"
// namun perbedaannya adalah urutannya nama bukan index

// kenapa object?
// perbedaan
{
    // tanpa object
    let namaMhs = "sofyan verdi"
    let umurMhs = 21
    let lulus = true
    let IPSemester = [2.90, 3.10, 3.25, 2.88, 3.04]

    // gimana kalau kita pengen punya data untuk menghitung IPK nya? bisa saja menggunakan function 
    function IPKumulatif(IPSemester) {
        let total = 0
        for (let i = 0; i < IPSemester.lenght; i++) {
            total + IPSemester[i]
        }
        return total / IPSemester.lenght;
    };
}
// nah kalau ada banyak mahasiswa pasti repot harus tulis satu satu
{
    let mahasiswa = ['sofyan verdi', true, [2.90, 3.10, 3.25, 2.88, 3.04]];

    function IPKumulatif(IPSemester) {
        let total = 0
        for (let i = 0; i < IPSemester.lenght; i++) {
            total + IPSemester[i]
        }
        return total / IPSemester.lenght;
    };
    IPKumulatif(mahasiswa[2])
}

// menggunakan object

{
    let mahasiswa = {
            nama: "sofyan Verdi",
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
        //nama,umur,dll itu adalah indexnya

    // cara memanggilnya :
    mahasiswa.IPKomulatif()
}



// Anatomi object
let orang = {
    nama: "sofyan verdi",
    umur: 21,
    pekerjaan: "web dev",
    ips: [2.90, 3.10, 3.25, 2.88, 3.04],
    alamat: {
        negara: "indonesia",
        provinsi: "jawa timur"
    },
    //diatas adalah nama variabelnya, lalu isinya itu adalah property (dipisahkan dengan koma)
    sapa: function() {
            return "Hi, nama saya " + this.nama +
                "usia saya " + this.umur +
                "pekerjaan saya adalah " + this.pekerjaan
        }
        //function dalam object disebut method
}

// kita juga dapat membuat object dalam object, mirip seperti array

// kalian bisa memanggilnya menggunakan notasi titik. (orang.pekerjaan) atau menggunakan notasi kurung siku [] (orang["umur"])


// ini adalah object Literal, nanti ada juga object Constructor