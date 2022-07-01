let masukkinNama;

function repeat() {
    masukkinNama = prompt("masukkin nama dulu dong")
    if (masukkinNama === null || masukkinNama == "") {
        alert("masukkin nama luwh!")
        repeat()
        return
    }
    alert("Hallo " + masukkinNama)
}
repeat()



function ulangi() {
    let i = prompt("sudah NT berapa kali hari ini bro?")
    if (i >= 10) {
        alert("Waah pasti berat ya bro, sampai NT " + i + "x")
    } else if (i !== "" && i !== null && i <= 5) {
        alert("Waah lu masih mending cuma NT " + i + "x")
    } else if (i !== Number || i === null || i == "") {
        alert("Masukin angka bego")
        ulangi()
        return
    }
    let g = 1;
    console.log("Hallo " + masukkinNama)
    console.log("")
    while (g <= i) {
        console.log("NICE TRY " + g + "x hari ini:v")
        g++;
    }
    console.log("")
    if (i >= 10) {
        console.log("wiih ngeri juga sampai " + i)
    } else {
        console.log("Waah lu masih mending cuma NT " + i + "x")
    }
    console.log("Tetap hidup " + masukkinNama + " walau NT mulu wkwk")

}
ulangi()