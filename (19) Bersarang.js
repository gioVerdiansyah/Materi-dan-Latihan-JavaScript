// misalnya kita ingin membuat bingtang menggunakan tanda "*", kan kita bisa saja membuat console.log lalu mengisi nya dengan tanda bintang seingga membentuk bintang, tapi gimana kalo mencetaknya banyak? pasti cape maka disinilah kita menggunakan pengulangan

// Contoh:

for (let i = 0; i < 5; i++) {
    console.log("*")
}
// nah ternyata stringya tidak berjejeran ke kanan, gimana caranya? Gimana kalau kita menggunakan string kosong agar bisa kekanan? dengan mendeklarasikan variable dengan string kosong lalu digabungkan dengan operator concat (+)




{
    let s = ""

    for (let i = 0; i < 5; i++) {
        s += "*" // s = s + "*";
    }
    console.log(s)
}
//nah sekarang tampil bintangnya 5 berjejer


// nah gimana kalau mau kebawah? gampang saja tinggan tambahin s += "\n"

{
    let s = ""

    for (let i = 0; i < 5; i++) {
        s += "*" // s = s + "*";
        s += "\n"
    }
    console.log(s)
}

// sekarang gimana setiap baris ada bintangnnya 5? lalu turun 5 x 5
{
    let s = ""

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            s += "*"
        }
        s += "\n"
    }
    console.log(s)
}

// gimana kalau sekarang saya pengen bintangnya satu di baris pertama, lalu bintangnya dua di baris kedua dan sampai nilai yang ditentukan

{
    let s = "";
    for (var i = 0; i < 5; i++) {
        for (var j = 0; j <= i; j++) {
            s += "*"
        }
        s += "\n"
    }
    console.log(s)
} {
    let s = "";
    for (var i = 10; i >= 0; i--) {
        for (var j = 0; j < i; j++) {
            s += "*"
        }
        s += "\n"
    }
    console.log(s)
}



// document.writeln("<br> <br>")
{
    {
        let t = "";
        for (var i = 0; i < 7; i++) {
            for (var j = 0; j <= i; j++) {
                t += "*"
            }
            t += "<br>"
        }
        document.writeln(t)
    }

    // document.writeln("<br>")

    {
        let k = "";
        for (var q = 5; q >= 0; q--) {
            for (var l = 0; l <= q; l++) {
                k += "*"
            }
            k += "<br>"
        }
        document.writeln(k)
    }
}