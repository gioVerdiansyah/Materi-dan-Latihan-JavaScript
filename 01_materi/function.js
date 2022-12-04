function greeting(name, language) {
    if (language === "indonesia" || language === "inggris") {
        alert("Good Morning " + name + " From " + language);
    } else if (language === "jawa") {
        alert("Monggo " + name + " Saka " + language);
    } else {
        alert("Input hanya tersedia indonesia, inggris, dan jawa");
        return greeting(greeting(prompt("masukkan nama"), prompt("masukkkan bahasamu")))

    }
}

greeting(prompt("masukkan nama"), prompt("masukkkan bahasamu"));