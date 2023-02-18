const { averageExams, isStudentPassExam } = require('../4_gradeCalculations');
 
// Integration test dapat dijalankan ataupun ditulis bersamaan dengan unit test. Sehingga kita dapat melakukan grouping dari contoh kode diatas menjadi sebagai berikut:
describe('grade calculations', () => {
    // Dari contoh di atas, kita dapat melihat bahwa test case tersebut sesuai ekspektasi. Selain itu, kita juga dapat membuat multiple case dengan membuat tes yang lain, misalnya dengan kode berikut:
    test('it should return exact average', () => {
        const listValueOfExams = [80, 100, 100, 80];
        expect(averageExams(listValueOfExams)).toEqual(90);
    });
 
    /**
     * Integration testing
     */
    test('it should return exam passed status', () => {
        const listValueOfExams = [80, 100, 100, 80];
        expect(isStudentPassExam(listValueOfExams, 'Budi')).toEqual(true);
    })
 
 
    test('it should return exam failed status', () => {
        const listValueOfExams = [50, 40, 70, 80];
        expect(isStudentPassExam(listValueOfExams, 'Budi')).toEqual(false);
    })
})


// Untuk menjalankan kode pengujian tersebut, dapat menjalankan perintah runner yang sudah kita buat sebelumnya.    npm run test