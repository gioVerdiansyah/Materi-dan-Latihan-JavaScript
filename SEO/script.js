var tampung_array = [];
var src = document.getElementById("src");

function fokus() {
    src.setAttribute("placeholder", "Mau cari apa?");
}

function add() {
    if (src.value !== "") {
        tampung_array.push(src.value);
        src.value = "";
        show();
    }
}
let ul = document.getElementById("tampil");

show();

function show() {
    let styl =
        "list-style-type:none;padding:3px;background-color: aquamarine;list-style-type: decimal;border-radius:5px;display: flex;flex-direction: column-reverse;";
    var output = "";
    if (tampung_array.length === 0) {
        output = "<li>" + "Data_masih_kosong" + "</li>";
    } else tampung_array; {
        for (var i = 0; i < tampung_array.length; i++) {
            output += "<li>" + tampung_array[i] + "</li>";
        }
    }
    ul.innerHTML = output;
    ul.setAttribute("style", styl);
    console.log(output);
}