//! # Manipulasi Element

// element.innerHTML
// Merubah isi dari sebuah tag yang kita seleksi
const h1 = document.getElementById("judul");
h1.innerHTML =
  "<h2 class='h2'>Di ubah oleh <span style='color:yellow'>JS</span></h2>";

// element.style.<property>
// Merubah style dari element ynag kita seleksi
const p1 = document.getElementsByTagName("p")[0];
p1.style.color = "red";

// element.setAttribute (set get remove)
// Memanipulasi attribute dari element yang kita seleksi bisa mengubah atau menambah attribute
const sectionA = document.getElementById("a");
sectionA.setAttribute("style", "background-color:#eaeaea;");

const get = sectionA.getElementsByTagName("a")[0];
console.log(get.getAttribute("href")); //maka mendapatkan link anchornya

const remove = sectionA.getElementsByTagName("a")[0];
remove.removeAttribute("id"); //menghapus attribute id di href

// element.classList. add() remove() toggle() item() contains() replace()
// Memanipulasi attribute class dari element yang di seleksi
const p2 = sectionA.getElementsByClassName("p2")[0];

// add() menambahkan
p2.classList.add("add");

// remove() menghapus
p2.classList.remove("test");

// toggle() menambah jika belum punya menghapus jika sudah punya
p2.classList.toggle("toggle");

// item() mengetahui class yang dimaksud
console.log(p2.classList.item(2)); // menggunakan urutan index

// contains() mengecek apaka ada class yang dimaksud
console.log(p2.classList.contains("test"));

// replace() mengganti class yang di maksud dengan class baru
p2.classList.replace("toggle", "saklar");

//! # Manipulasi Node
// Memungkinkan kita untuk menambah, menghapus, atau mengganti Node

// untuk membuat satu element beserta isinya maka kita harus membuat tag nya lalu di isi dengan text nya

// * menambahkan paragraf baru di akhir section A
// document.createElement() membuat element
const newP = document.createElement("p"); //membuat elemen

// document.createTextNode() menambahkan atau mengganti text pada element
const textForP = document.createTextNode("Paragraf Baru"); // isi teks

// node.appendChild() menambahkan tag dan text ke dalam...
newP.appendChild(textForP); //menggabungkan kedua element dan text
// simpan di akhir section A
sectionA.appendChild(newP);

// node.insertBefore() menambahkan tag dan text sebelum ... ke dalam...
// * menambahkan li baru sebelum li kedua section B
const newLi = document.createElement("li");
newLi.innerText = "item baru"; //bisa dengan cara ini

const ul = document.querySelector("section#b ul"); //tangkap parent
const li2 = ul.querySelector("li:nth-child(2)"); //tangkap sebelum apa
ul.insertBefore(newLi, li2); //menambahkan tag ini sebelum tag ini

// parentNode.removeChild() menghapus element beserta isinya
// * menghapus element anchor
const anchor = sectionA.getElementsByTagName("a")[0];
sectionA.removeChild(anchor);

// parentNode.replaceChild()
const replaceP = document.createElement("h3");

replaceP.innerText = "diganti dengan replaceChild";
const p3 = sectionA.getElementsByTagName("p")[2];

sectionA.replaceChild(replaceP, p3); //node baru, replace yang mana?

//! # Manipulasi Node (Method baru)
// parentNode.append() menambahkan elemen di akhir parent
// parentNode.prepend() menambahkan elemen di awal parent
// childNode.before() men3ambahkan elemen sebelum...
// childNode.after() menambahkan elemen setelah...
// childNode.remove() menghapus elemen
// childNode.replaceWith() mengganti elemen
