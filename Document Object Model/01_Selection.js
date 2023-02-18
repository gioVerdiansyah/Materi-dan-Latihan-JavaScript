// Contoh
const head = document.head; //<head></head>

// jika ingin spesifik misal h1 maka kita harus menggunaka method

// selection

// document.getElementById(''); -> Node
const title = document.getElementById("judul");
// manipulasi
title.style.color = "red"; //maka akan ada style inline pada tag ini saat di browser
title.style.backgroundColor = "#aeaeae"; //penulisannya camel case
title.innerText = "Verdi nih boz";

// document.getElementsByTagName(''); -> (HTMLCollection)
const paragraph = document.getElementsByTagName("p"); //array
for (let i = 0; i < paragraph.length; i++) {
    if (paragraph[i] === paragraph[2]) {
        paragraph[2].style.backgroundColor = "red";
    } else {
        paragraph[i].style.backgroundColor = "lightblue";
    }
}

const h1 = document.getElementsByTagName("h1")[0]; //meski hanya 1 namun tetap bentuknya adalah HTMLCollection, [0] adalah memilih yang indexnya hanya ke 0
h1.style.fontSize = "55px";

// document.getElementsByClassName(''); -> (HTMLCollection)
const p1 = document.getElementsByClassName("p1")[0];
p1.innerHTML = "ini diubah oleh JS";

// document.getElementsByName(''); -> NodeList
const input = document.getElementsByName("inputku")[0]; // menyeleksi element dari name="" nya (biasanya untuk input)
input.addEventListener("focus", function() {
    input.setAttribute("placeholder", "You click this!");
});

// document.querySelector(''); -> Node
// Makna dari query sendiri adalah menanyakan, lalu selector, selectornya sendiri sama dengan CSS
// misal:
// #b p
// section#b ul li:nth-child(2)
// dll

const p4 = document.querySelector("#b p");
p4.style.color = "green";

const li2 = document.querySelector("section#b ul li:nth-child(2)");
li2.style.backgroundColor = "orange";

// jika kita meselect element yang lebih dari 1 maka querySelector ini hanya akan meselect element pertama saja

// jika ingin meselect semua maka kita harus menggunakan method ini:
// document.querySelectorAll(''); -> (NodeList)

const semuaLi = document.querySelectorAll("li");
for (i = 0; i < semuaLi.length; i++) {
    semuaLi[i].innerText = "ini di ubah oleh JS dengan for loop ke-" + i;
}

// Node root
// secara default Node root ya adalah document, nah kita bisa mengubah scope pencariannya:
const sectionB = document.getElementById("b");
const P4 = sectionB.getElementsByTagName("p")[0];
// maka hanya mencari di section B saja
P4.style.backgroundColor = "yellow";