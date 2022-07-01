// Refactoring adalah sebuah proses mengubah kode agar menjadi lebih 'baik' tanpa mengubah fungsionalitasnya

// Kenapa?
// Redability = kemudahan dalam membaca program
// DRY (Don't Repeat Yourself) = penggunaan var yang berlebihan
// Testability = agar mudah saat melakukan pengetesan
// Performance = penulisan yang baik dapat meningkatkan performa program
// Maintainability = bagaimana agar code mudah dikelola


{
    function volumeKubus(a, b) {
        let volumeA = a * a * a
        let volumeB = b * b * b

        let total = volumeA + volumeB;
        return total;
    }
    let result = volumeKubus(prompt("masukkan sisi pertama kubus"), prompt("masukkan sisi kedua kubus"))

    alert("Hasil dari sisi kubus tersebut adalah: " + result)
}



// contoh kode sebelumnya adalah itu, bagaimana kalau kita singkat menjadi =


{
    function volumeKubus(a, b) {
        return a * a * a + b * b * b; // jadi ini akann mereturn a dikalikan 3 kali lalu di tambah dengan b yang di kalikan dengan 3 kali juga
    }
    let result = volumeKubus(prompt("masukkan sisi pertama kubus"), prompt("masukkan sisi kedua kubus"))

    alert("Hasil dari sisi kubus tersebut adalah: " + result)
}

// cara menentukannya adalah melihat mana variable yang tidak dibutuhkan di bisa di tampung di suatu tempat