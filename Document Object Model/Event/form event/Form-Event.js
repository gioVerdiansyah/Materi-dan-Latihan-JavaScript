// EVENT onInput
// Event onInput akan dijalankan setiap kali kita menulis atau menghapus apa pun pada sebuah field input yang memiliki event listener tersebut. Berkas HTML yang telah ditunjukkan di materi sebelumnya, field untuk mengisi nama panggilan (tag input dengan id inputNama) memiliki batas 15 karakter. Kita ingin membuat sebuah event handler, yang mana ketika menulis nama, akan ditampilkan sisa karakter yang dapat dituliskan oleh user.

// Kita akan menggunakan event onInput untuk memeriksa setiap kali menulis atau menghapus karakter. Ingat ya, karena nanti kita menggunakan method addEventListener(), maka versi string event onInput untuk dimasukkan ke parameter pertama method tersebut adalah “input”.

// Untuk mengimplementasi fitur tersebut, kita harus menambahkan event listener pada input yang memiliki id dengan nilai “inputNama” dan memperbarui teks setiap kali kita menulis atau menghapus karakter baru.

document.addEventListener('DOMContentLoaded', function() {
    const inputMaxLengthOnload = document.getElementById('inputNama').maxLength;
    document.getElementById('sisaKarakter').innerText = inputMaxLengthOnload;

    document.getElementById('inputNama').addEventListener('input', function() { //bisa juga diganti click, saat mau mengisi field
        const jumlahKarakterDiketik = document.getElementById('inputNama').value.length;
        const jumlahKarakterMaksimal = document.getElementById('inputNama').maxLength;
        // document.getElementById('notifikasiSisaKarakter').style.visibility = 'inherit'; bisa begini tapi kita menggunakan method onFocus

        console.log('jumlahKarakterDiketik : ', jumlahKarakterDiketik);
        console.log('jumlahKarakterMaksimal : ', jumlahKarakterMaksimal);
        const sisaKarakterUpdate = jumlahKarakterMaksimal - jumlahKarakterDiketik;

        document.getElementById('sisaKarakter').innerText = sisaKarakterUpdate.toString();

        if (sisaKarakterUpdate == 0) {
            document.getElementById('sisaKarakter').innerText = 'Batas karakter tercapai!'
        } else if (sisaKarakterUpdate <= 5) {
            document.getElementById('notifikasiSisaKarakter').style.color = 'red';
        } else {
            document.getElementById('notifikasiSisaKarakter').style.color = 'black'
        }
    });
    // Kode di atas akan memeriksa jumlah karakter yang diperbolehkan dan didapatkan dari pengurangan atribut maxLength pada elemen <input> dengan jumlah karakter pada atribut value milik elemen <input> itu sendiri.

    // Jumlah karakter akan terus diperbarui selama kita mengetik atau menghapus karakter baru. Kondisi if dengan else if dibuat sekadar untuk memberikan variasi terhadap pesan jumlah karakter sisa yang ingin ditampilkan.

    document.getElementById('inputNama').addEventListener('focus', function() {
        console.log('inputNama: focus')
        document.getElementById('notifikasiSisaKarakter').style.visibility = 'inherit'
    });
    // Kode di atas akan menyembunyikan pesan sisa karakter ketika kita mulai melakukan proses penulisan (fokus) pada elemen <input id="inputNama">.

    document.getElementById('inputNama').addEventListener('blur', function() {
        console.log('inputNama: blur');
        document.getElementById('notifikasiSisaKarakter').style.visibility = 'hidden';
    });


    //     Event onChange memiliki perilaku yang sama dengan onInput, yakni akan terjadi jika terdeteksi adanya perubahan nilai yang dimasukkan. Perbedaannya terletak pada “kapan” event ini terjadi.

    // Pada onInput, event akan terjadi setiap kali nilai yang diinput mengalami perubahan (contohnya penambahan atau pengurangan karakter). Sedangkan pada onChange, event akan terjadi setelah elemen tersebut tidak menjadi fokus lagi alias kita tidak berinteraksi dengannya lagi lalu akan diperiksa apakah ada perubahan atau tidak. Perbedaan keduanya akan tampak saat kita mempraktikkannya.

    // Fitur yang ingin kita tambahkan adalah jika kita menulis captcha dengan benar, tombol “Submit Data” bisa ditekan. Bagaimana cara menambahkan event handler onChange pada elemen <input> untuk captcha? Simak uraiannya di bawah ini:

    document.getElementById('inputCaptcha').addEventListener('change', function() {
        console.log('inputCaptcha: change');
        const inputCaptcha = document.getElementById('inputCaptcha').value;
        const submitButtonStatus = document.getElementById('submitButton');

        if (inputCaptcha === 'PRNU') {
            submitButtonStatus.removeAttribute('disabled');
        } else {
            alert('Captcha yang Anda masukkan belum tepat :(');
            submitButtonStatus.setAttribute('disabled', '');
        }
    });

    // Kode di atas akan memeriksa apakah kita memasukkan teks yang sesuai dengan captcha-nya. Jika sesuai, tombol “Submit Data” menjadi aktif. Namun, perlu diperhatikan bahwa melalui event onChange, kita harus lebih dulu “mengalihkan” fokus ke elemen lain atau bisa juga dicapai dengan hanya menekan tombol “Enter” pada keyboard. Sehingga, walaupun penulisan kita sudah sesuai dengan yang ada di captcha, event onChange tidak akan terjadi sampai kita menekan tombol “Enter” atau “mengalihkan” fokus ke elemen lain.

    // Meskipun demikian, tombol masih bisa ditekan ketika input tidak sesuai captcha selama kita langsung menekan tombolnya. Untuk memperbaiki kesalahan, tambahkan kode berikut di akhir elemen 

    document.getElementById('formDataDiri').addEventListener('submit', function(event) {
        const inputCaptcha = document.getElementById('inputCaptcha').value;
        if (inputCaptcha === !'PRNU') {
            alert('Captcha Anda belum tepat :(');
            document.getElementById('submitButton').setAttribute('disabled', '');
        }
        event.preventDefault();
    });

    // Pada berkas HTML di atas, kita sudah memiliki bagian form yang dihiasi dengan kata kunci “copy”. Tugas kita kali ini adalah menambahkan event listener untuk event onCopy. Sedangkan fungsi event handler-nya hanyalah memunculkan sebuah dialog box alert yang berisi pesan “Anda telah men-copy sesuatu...”.

    document.getElementById('inputCopy').addEventListener('copy', function() {
        alert('Anda telah men-copy sesuatu di inputCopy')
    })

    //     Event onPaste tergolong dalam kelompok clipboard events seperti yang kita bahas sebelumnya. Event ini akan terjadi ketika melakukan operasi paste pada elemen yang sudah kita beri event listener untuk event onPaste.

    // Pada berkas HTML di atas, kita juga sudah memiliki bagian form yang dihiasi dengan kata kunci “paste”. Tugas kali ini mirip dengan apa yang telah kita lakukan pada event onCopy. Kita hanya membuat fungsi event handler untuk memunculkan sebuah dialog box alert yang berisi pesan “Anda telah mem-paste sebuah teks...”.

    document.getElementById('inputPaste').addEventListener('paste', function() {
        alert('Anda telah men-paste sesuatu di inputPaste')
    });
});