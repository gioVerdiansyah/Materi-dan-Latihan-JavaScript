// Manipulasi array

{
    // 1. Menambah isi array

    let arry = ["A", 1, true]
        // kalau ingin menampilkan array kedalam console kan tinggal panggil aja nama arraynya tapi itu dalam bentuk object,biar lebih jelas = 
    console.log(arry); //0 1 2 itu adalah urutan indexnya

    //nah gimana jika awalnya arrayny awalnya kosong?

    {
        let arry = []
        arry[0] = "A"
        arry[1] = 1
        arry[2] = true
            // kalau kita panggil akan sama seperti tadi

        console.log(arry)
    }
    //kalau kalian menggunakan cara ini maka kalian harus hafal nama indexnya beserta isinya
    //jika kalian misalnya langsung menulis index [4] maka index ke 3 diisi undifined
}

{
    // 2. Menghapus isi array

    let arry = ["verdi", "nofa", "sofyan"] //contoh kita ingin membuat index ke 1 undifined
    arry[1] = undefined
        //kalau kita console.log sekarang maka index ke 1 akan undifined
    console.log(arry)
        // nilainya tidak hilang tapi berubah menjadi undifined
}

{
    // 3. menampilkan dengan cara yang lebi baik (bukan seperti object tadi), membutuhkan looping

    let arry = ["verdi", "nofa", "sofyan", "dodi"]

    for (let i = 0; i < arry.length /*otomatis dari panjang arraynya*/ ; i++) {
        console.log("Nama mahasiswa ke-" + (i + 1) /*mulainya dari 1*/ + " : " + arry[i] /*isi dari array dengan variabelnya for,jadi dia akan memanggil nama dari array sesuai urutan*/ )
    }
}




// METHOD PADA ARRAY
// lenght = panjang array
// join = menggabungkan seluruh isi array dan mengubahnya menjadi string
// push, pop, shift, unshift = digunakan untuk menambah/menghapus elemen array
// slice, splice = slice artinya mengiris digunakan untuk mengambil beberapa bagian pada array untuk menjadi array yang baru, splice artinya menyambung / menambal
// foreach, map = kita bisa melakukan sesuatu pada elemen-elemen pada arraynya
// sort = mengurutkan array
//filter, find = digunakan untuk mencari elemen pada array



{ //Spread
    const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

    console.log(...favorites);
    // fitur ini digunakan untuk menyebarkan nilai array atau lebih tepatnya iterable object menjadi beberapa elemen
    // Spread operator dapat digunakan untuk menggabungkan dua buah array ke dalam array baru. Jika tidak menggunakan spread operator ini maka hasilnya akan seperti ini:
    const others = ["Cake", "Pie", "Donut"];
    const allFavorites = [favorites, others];

    console.log(allFavorites);

    /* output
    [
      [ 'Seafood', 'Salad', 'Nugget', 'Soup' ],
      [ 'Cake', 'Pie', 'Donut' ]
    ]
    */

    // Nilai array tidak akan tergabung. Alih-alih menggabungkan nilainya, variabel allFavorites menjadi array baru yang menampung dua array di dalamnya. Nah, lantas bagaimana jika kita mencoba menggunakan spread operator?
    const favorites1 = ["Seafood", "Salad", "Nugget", "Soup"];

    const allFavorites1 = [...favorites1, ...others];

    console.log(allFavorites1);

    /* output
    [ 'Seafood', 'Salad', 'Nugget', 'Soup', 'Cake', 'Pie', 'Donut' ]
    */
    //    Yup, dengan menggunakan spread operator nilai dua array tersebut berhasil tergabung.

    // Selain array, spread operator juga bisa digunakan untuk object literals. Hal ini memungkinkan kita dapat menggabungkan beberapa object dengan kode yang lebih ringkas.
    const obj1 = { firstName: 'Obi-Wan', age: 30 };
    const obj2 = { lastName: 'Kenobi', gender: 'M' };

    const newObj = {...obj1, ...obj2 };

    console.log(newObj);

    /* output
    { firstName: 'Obi-Wan', age: 30, lastName: 'Kenobi', gender: 'M' }
    */
}

{ //join
    let arry = ["verdi", "nofa", "sofyan"];
    console.log(arry.join(" - "))
        // mirip dengan Spread namun pada value join bisa di isi dengan string sebagai pembatas antara nama data yang lain
        //hasilnya akan = verdi - nofa - sofyan
        //bukan lagi object yang seperti tadi, nah ini bagus
        //untuk menggantikan komanya, dalam kurung join bisa ditulis ("-") atau di tulis spasi doang agar tidak ada spasinya
}




{ // push and pop = mendorong / memasukkan elemen baru di AKHIR elemen arraynya

    { // push

        let arry = ["verdi", "nofa", "sofyan"];
        arry.push("Dodol", "joni")
        console.log(arry.join(" - "))
            //maka dodol dan joni sudah masuk di akhir arraynya
            //push juga bisa langsung banyak elemen
    }

    { // pop

        let arry = ["verdi", "nofa", "sofyan"];
        arry.pop()
        console.log(arry.join(" - "))
            //maka elemen sofyan akan hilang
            // kalau ingin menghapus beberapa elemen harus satu satu!
    }
}



{
    //Unshift and shift = sama seperti push dan pop tapi bekerja untuk elemen PERTAMA pada arraynya

    { // unshift

        let arry = ["verdi", "nofa", "sofyan"];
        arry.unshift("Dodol", "joni")
        console.log(arry.join(" - "))
            //maka dodol dan joni sudah masuk di awal arraynya
    }


    { // shift

        let arry = ["verdi", "nofa", "sofyan"];
        arry.shift()
        console.log(arry.join(" - "))
            //maka elemen verdi akan hilang
    }
}


// SHIFT & POP ini benar-benar menghilangkan elemennya bukan merubahnya benjadi undifined



{ //slice dan splice


    { //splice(indexAwal, mauDihapusBerapa(opt), DitambahElemenBaruBerapa(opt))

        let arry = ["verdi", "nofa", "sofyan"];
        //misal kita mau menyambung kata galih ada setelah nofa, maka indexnya adalah 2

        arry.splice(2, 0, "galih", "siti")
            //bisa lebih dari satu nilai, lalu 2 iu dimulai dari index ke berapa
        console.log(arry.join(" - "))

        //contoh lagi =
        {
            let arry = ["verdi", "nofa", "sofyan"];

            arry.splice(1, 2, "dody")
                //dimulai dari index 1(verdi), lalu menghapus 2 elemen(nofa dan sofyan),lalu menambah kan elemen dody
            console.log(arry.join(" - "))
        }
    }



    { //slice(indexAWAL,indexAKHIR)
        let arry = ["verdi", "nofa", "sofyan", "dody", "galih"];
        //misal kita mau menghilangkan semua selain nofa dan sofyan, maka dimulainya dari index 1 sampai 3, tetapi index 3nya(dody) ngga terbawa
        let arry2 = arry.slice(1, 3)
        console.log(arry2.join(" - "))

        // ingat slice itu menghasilkan array baru makanya harus ditampung
    }
}




{ //forEach(untuk setiap elemen)
    console.log("\n versi forloop")

    let angka = [1, 2, 3, 4, 5, 6, 7, 8]
        //kalau menggunakan for :
    for (let i = 0; i < angka.length; i++) {
        console.log(angka[i])
    }

    //menggunakan foreach
    console.log("\n versi forEach")

    angka.forEach(function(x) {
        console.log(x)
    });
    //artinya untuk setiap angka pada array lakukan fungsi berikut

    // nah artinya kita ngga bisa menggunakan index awalnya dong?, kita bisa menggunakannya dengan cara :


    let nama = ["sofyan", "vedi", "dody"]

    nama.forEach(function(e, i) {
            console.log("Mahasiswa yang ke-" + (i + 1) + " dengan nama: " + e)
        })
        //maka yang i ini mengacu ke angka dan yang e ini mengacu ke nama

}



console.log("\n menggunakan map =");


{ //map, ini lebih baik dari forEach karena ini mengembalikan array sedangkan forEach ngga


    let angka = [1, 2, 3, 4, 5]

    console.log("\n versi forEach :")

    angka.forEach(function(e) {
        console.log(e)
    })

    // kalau forEach kita ganti map maka akan sama aja

    console.log("\n versi map dan dikalikan 2 :")

    let angka2 = angka.map(function(e) {
        return e * 2;
        //maka seluruh elemen di variable angka akan direturn lalu dikalikan dua
        //lalu disimpam di variable angka2
    })
    console.log(angka2.join(" - ") + "\n \n")

    //kalau digantikan menggunakan forEach maka ngga mau, error karena forEach tidak mendukung pengembalian array
}




{ //sort, contoh kita mempunyai array object yang tidak tersusun rapi maka akan tersusun
    let angka = [1, 3, 5, 4, 2]

    console.log("sebelum pakai sort \n" + angka.join(" - "))
    angka.sort()
    console.log("setelah pakai sort \n" + angka.join(" - "))

    //tapi misal kalian punya angka 1,10,2,20,3,5,4
    //kan kita maunya 1,2,3,4,5,10,20
    // tapi malah 1,10,2,20,3,4,5
    //nah ini hati-hati karena sort ini mengurutkan nilai awalnya

    // jika mau membuatnya benar maka harus menggunakan function =
    {
        let angka = [1, 10, 20, 3, 5, 4, 2]

        console.log("sebelum pakai sort dan function \n" + angka.join(" - "))
        angka.sort()
        console.log("setelah pakai sort tanpa function \n" + angka.join(" - "))
        angka.sort(function(a, b) {
            return a - b;
        });
        console.log("setelah pakai sort dan function \n" + angka.join(" - "))
    }
}



console.log("\n menggunakan filter dan find")


{ //filter, mengembalikan banyak nilai

    {
        let angka = [1, 10, 20, 3, 5, 4, 2]
        let angka2 = angka.filter(function(n) {
                return n == 5;
            })
            //apakah ada angka 5 didalamnya? kalau ada variable angka2 ini akan berisi angka 5 berbentuk array
        console.log(angka2.join(" - "))
    }

    {
        let angka = [1, 10, 20, 3, 5, 4, 2]
        let angka2 = angka.filter(function(n) {
            return n == 7;
        })
        console.log(angka2)
            //jika tidak ada maka akan mengenbalikan array kosong []
    }

    {
        let angka = [1, 10, 20, 3, 5, 4, 2]
        let angka2 = angka.filter(function(n) {
            return n > 4;
            //maka akan menampilkan angka array 10,20,5
        })
        console.log(angka2.join(" - "))
            // filter ini juga bisa mencari nilai yang lebih besar dari yang disebutkan
    }
}



{ //find, mengembalikan 1 nilai 

    let angka = [1, 10, 20, 3, 5, 4, 2]
    let angka2 = angka.find(function(n) {
        return n > 4;
        //jika find maka ini tidak bisa mengembalikan banyak nilai seperti filter, jadi cuma bisa menyebutkan 1 nilai (10)
    })
    console.log(angka2)
        //kalau pakai find maka tidak bisa menggunakan join, karena join ini menggabungkan array
}



// sebenarnya masih banyak lagi, kunjungi aja di web developer mozila.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array