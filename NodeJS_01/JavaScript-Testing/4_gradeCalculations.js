const averageExams = (valuesExam) => {
    const numberValidation = valuesExam.every(exam => typeof exam === 'number');
    if (!numberValidation) throw Error('please input number');

    const sumValues = valuesExam.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sumValues / valuesExam.length;
};

const isStudentPassExam = (valuesExam, name) => {
    const minValues = 75;
    const average = averageExams(valuesExam);

    if (average > minValues) {
        console.log(`${name} pass the exams`);
        return true;
    } else {
        console.log(`${name} fail the exams`);
        return false;
    }
};

module.exports = { averageExams, isStudentPassExam };

// Kode di atas terdapat 2 fungsi:

// averageExams : Menghitung rata-rata nilai siswa dari sebuah inputan berupa daftar angka dalam bentuk array.
// isStudentPassExam : Melakukan kalkulasi apakah seorang siswa lulus ujian atau tidak berdasarkan nilai rata-rata yang didapatkan (bergantung pada fungsi averageExams).
// Dari kedua contoh kode di atas, kita akan melakukan simulasi pengujian unit test & integration test.

// Penulisan kode pengujian dapat dilakukan dengan memulai kerangka testcase yang sudah kita singgung diatas.


//! Apa yang akan diuji?
// Fungsi menghitung rata-rata.
// Fungsi untuk mengecek apakah seorang siswa lulus ujian.
// Ekspektasi yang diharapkan?
// Menghasilkan nilai yang sesuai dari inputan.
// Inputan harus berupa angka.
// Menghasilkan hasil kelulusan iya/tidak pada siswa dengan nilai kriteria tertentu.
// Setelah kita menuliskan contoh kode gradeCalculations.js, hal yang perlu dilakukan  pada penulisan kode pengujian menggunakan jest adalah sebagai berikut:

// Simpan script test dalam sebuah folder bernama __tests__.
// 1 file test untuk 1 lingkup perintah dengan format namaScopeFunctions.test.js.