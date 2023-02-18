//! Object Composition
// Fitur pewarisan pada class begitu legit dalam memangkas duplikasi kode. Kita tidak perlu repetitif menulis kode yang sama ketika dua class atau lebih memiliki kemampuan yang sama. Namun, apakah pewarisan di JavaScript mampu memecahkan masalah yang lebih kompleks? Mari kita cari tahu.

// Di dunia nyata, ada banyak peran dari seorang Developer, tetapi ada tiga peran yang mungkin Anda sudah familier seperti Front-End Developer, Back-End Developer, DevOps, dan Full-Stack Developer. Semuanya masuk ke dalam kategori Developer dan mereka mampu menulis dan mengubah kode (commit changes). Selain itu, terdapat juga kemampuan yang spesifik terhadap perannya masing-masing, Front-End Developer dapat membangun antarmuka (build UI), Back-End Developer dapat membangun API (build API), dan DevOps mampu men-deploy aplikasi. Peran Full-Stack Developer adalah satu-satunya peran yang mampu melakukan banyak hal, di samping menulis dan mengubah kode, dia mampu membagun antarmuka, membangun API, dan men-deploy aplikasi.

// Jika kita gambarkan skenario di atas dalam konsep OOP, Developer merupakan sebuah superclass; sedangkan Front-End Developer, Back-End Developer, dan DevOps adalah subclass. Struktur dari pewarisan class akan tampak seperti kode di bawah ini.

{
    class Developer {
        constructor(name) {
            this.name = name;
        }

        commitChanges() {
            console.log(`${this.name} is committing changes...`);
        }
    }

    class FrontEndDeveloper extends Developer {
        buildUI() {
            console.log(`${this.name} is building UI...`);
        }
    }

    class BackEndDeveloper extends Developer {
        buildAPI() {
            console.log(`${this.name} is building API...`);
        }
    }

    class DevOps extends Developer {
        deployApp() {
            console.log(`${this.name} is deploying app...`);
        }
    }
}

// Seluruh class sudah terdefinisikan dengan baik, tetapi kurang Full-Stack Developer. Apakah Anda punya ide cara mendefinisikan class FullStackDeveloper yang efektif tanpa ada kode repetitif menggunakan pewarisan?


// ! kurang FullStackDeveloper
// Jika menggunakan pewarisan tentu tidak ada cara selain kita menulis kembali method buildUI(), buildAPI(), dan deployApp() di dalam FullStackDeveloper.
// Cara ini sungguh tidak efektif karena jika terjadi perubahan pada salah satu fungsi, kita perlu mengubahnya di dua tempat.

//? Lalu apa solusinya ?
// Solusinya adalah meninggalkan pewarisan dan gunakan teknik object composition.Jika Anda lihat kembali kode di atas, pewarisan mendorong kita untuk menstrukturkan kode dengan pendekatan peran atau identitas class, yakni Front - End Developer, Back - End Developer, DevOps, dan Full - Stack Developer.Sedangkan object composition, dia tidak memperdulikan peran, melainkan kode distrukturkan berdasarkan kemampuan yang dapat dilakukan, seperti buildUI(), buildAPI(), dan deployApp().

class Developer {
    constructor(name) {
        this.name = name;
    }

    commitChanges() {
        console.log(`${this.name} is committing changes...`);
    }
}

function canBuildUI(developer) {
    return {
        buildUI: () => {
            console.log(`${developer.name} is building UI...`);
        }
    }
}

function canBuildAPI(developer) {
    return {
        buildAPI: () => {
            console.log(`${developer.name} is building API...`);
        }
    }
}

function canDeployApp(developer) {
    return {
        deployApp: () => {
            console.log(`${developer.name} is deploying app...`);
        }
    }
}

// Dengan memecah kode berdasarkan kemampuan, ke depannya kita akan lebih mudah dalam membuat objek dengan peran apa pun, mau Front-End Developer, Back-End Developer, DevOps, Full-Stack, atau peran lain yang membutuhkan kombinasi dari kemampuan-kemampuan yang ada, tanpa ada kode yang repetitif.

// Agar lebih mudah dalam membuat objek, kita bisa membuat sebuah fungsi sebagai object creator dengan mengomposisikan kemampuan-kemampuan yang dibutuhkan. Di JavaScript, kita bisa secara mudah mengomposisikan objek dengan menggunakan method Object.assign().


function createFrontEndDeveloper(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canBuildUI(developer));
}

function createBackEndDeveloper(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canBuildAPI(developer));
}

function createDevOps(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canDeployApp(developer));
}

function createFullStackDeveloper(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canBuildUI(developer), canBuildAPI(developer), canDeployApp(developer));
}


// ! Pemanggilan:
const frontEndDeveloper = createFrontEndDeveloper('Fulan');
frontEndDeveloper.commitChanges();
frontEndDeveloper.buildUI();
console.log(`is ${frontEndDeveloper.name} developer? `, frontEndDeveloper instanceof Developer);

const backEndDeveloper = createBackEndDeveloper('Fulana');
backEndDeveloper.commitChanges();
backEndDeveloper.buildAPI();
console.log(`is ${backEndDeveloper.name} developer? `, backEndDeveloper instanceof Developer);

const devOpsDeveloper = createDevOps('Fulani');
devOpsDeveloper.commitChanges();
devOpsDeveloper.deployApp();
console.log(`is ${devOpsDeveloper.name} developer? `, devOpsDeveloper instanceof Developer);

const fullStackDeveloper = createFullStackDeveloper('Fulanah');
fullStackDeveloper.buildUI();
fullStackDeveloper.buildAPI();
fullStackDeveloper.deployApp();
console.log(`is ${fullStackDeveloper.name} developer? `, fullStackDeveloper instanceof Developer);