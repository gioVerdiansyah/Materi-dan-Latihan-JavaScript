// EVENT onSubmit
// Kita akan menambahkan sebuah fitur unik, yakni munculnya sebuah kalimat di bawah tombol button.
// Kita hanya perlu menambahkan event listener pada elemen form.


const submitAction = document.getElementById('formDataDiri')

submitAction.addEventListener('submit', function(event) {
    const inputNama = document.getElementById('inputNama').value;
    const inputDomisili = document.getElementById('inputDomisili').value;
    const hiddenMessage = 'Halo ' + inputNama + ', bagaimana cuacanya di ' + inputDomisili + '?';

    document.getElementById('messageAfterSubmit').innerText = hiddenMessage;
    event.preventDefault();
});
// Penggunaan object event (terkecuali argument pada parameter) telah usang (deprecated). Solusinya, kamu bisa menambahkan parameter event atau e (penamaan tidak paten), yang mana object event akan tersimpan pada argument tersebut, sehingga kita dapat menggunakannya sesuai kebutuhan.

// Kode di atas akan mengambil nilai yang sudah di-input oleh user. Caranya adalah memanggil properti value dari masing-masing elemen input pada form. Lalu, input akan dimasukkan ke sebuah string dengan sebuah format khusus yang akan ditampilkan ke layar