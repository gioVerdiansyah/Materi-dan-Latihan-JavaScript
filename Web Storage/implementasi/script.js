  //inisialiasi variabel untuk menampung elemen dokumen
  const localTotalVictoryField = document.getElementById('local-total-victory-field');
  const localMaximumAttemptField = document.getElementById('local-maximum-attempt-field');
  const destroyDataButton = document.getElementById('destroy-data-button');
  const playButton = document.getElementById('play-button');
  const beforeGameDisplay = document.getElementById('before-game-display');
  const duringGameDisplay = document.getElementById('during-game-display');
  const afterGameDisplay = document.getElementById('after-game-display');
  const answerButton1 = document.getElementById('answer-1-button');
  const answerButton2 = document.getElementById('answer-2-button');
  const answerButton3 = document.getElementById('answer-3-button');
  const sessionUserAnswerField = document.getElementById('session-user-answer-field');
  const sessionUserWrongAnswerField = document.getElementById('session-user-wrong-answer-field');
  const sessionTrueAnswerField = document.getElementById('session-true-answer-field');
  const sessionUserAttemptsField = document.getElementById('session-user-attempts-amount-field');

  //inisialisasi fungsi untuk menghasilkan jawaban permainan
  function getAnswer() {
      let answer = '123'.split('');
      for (let i = 0; i < answer.length; i++) {
          let j = Math.floor(Math.random() * (i + 1));
          let tmp = answer[i];
          answer[i] = answer[j];
          answer[j] = tmp;
      }
      return answer.join('');
  }
  //   Variabel-variabel yang bisa kita gunakan untuk berinteraksi dengan DOM.
  //   Sebuah fungsi getAnswer() yang berfungsi untuk menghasilkan kombinasi dari angka "1", "2", dan "3". Kombinasi tersebut akan menjadi jawaban untuk permainan tebak angka.
  //   Variabel-variabel yang menampung key untuk session storage maupun local storage.

  //inisialiasi key untuk session storage
  const sessionAnswerKey = 'SESSION_ANSWER';
  const sessionUserAttemptsKey = 'SESSION_USER_ATTEMPTS';
  const sessionUserIsPlayingKey = 'SESSION_USER_IS_PLAYING';

  //inisialisasi key untuk local storage
  const localTotalVictoryKey = 'LOCAL_TOTAL_VICTORIES_PLAYED';
  const localMaximumAttemptsKey = 'LOCAL_MAXIMUM_ATTEMPTS';


  //   Selanjutnya mari kita tambahkan sebuah event listener "load" pada objek window. Sehingga, ketika berkas HTML sudah selesai ditampilkan, kita akan mengecek apakah item pada session storage maupun local storage sudah dibuat atau belum:


  window.addEventListener('load', function() {
      if (typeof(Storage) !== 'undefined') {
          // inisialisasi semua item web storage yang kita akan gunakan jika belum ada
          if (sessionStorage.getItem(sessionAnswerKey) === null) {
              sessionStorage.setItem(sessionAnswerKey, '');
          }
          if (sessionStorage.getItem(sessionUserAttemptsKey) === null) {
              sessionStorage.setItem(sessionUserAttemptsKey, 0);
          }
          if (sessionStorage.getItem(sessionUserIsPlayingKey) === null) {
              sessionStorage.setItem(sessionUserIsPlayingKey, false);
          }
          if (localStorage.getItem(localTotalVictoryKey) === null) {
              localStorage.setItem(localTotalVictoryKey, 0);
          }
          if (localStorage.getItem(localMaximumAttemptsKey) === null) {
              localStorage.setItem(localMaximumAttemptsKey, 0);
          }
      } else {
          alert('Browser yang Anda gunakan tidak mendukung Web Storage');
      }
  });


  //   Kode di atas dimulai dari proses memeriksa apakah browser yang digunakan mendukung fitur web storage. Jika tidak, ia akan menampilkan sebuah alert dialog box. Sedangkan jika browser mendukung fitur web storage, kode JavaScript akan mengecek apakah setiap item ada atau tidak. Jika belum ada, buat item dengan memanggil sessionStorage.setItem() untuk session storage dan localStorage.setItem() untuk local storage.


  sessionUserAttemptsField.innerText = sessionStorage.getItem(sessionUserAttemptsKey);
  localTotalVictoryField.innerText = localStorage.getItem(localTotalVictoryKey);
  localMaximumAttemptField.innerText = localStorage.getItem(localMaximumAttemptsKey);

  //   Kode di atas akan menampilkan nilai yang tersimpan pada item session storage untuk elemen stats pada Game Session Stats dan item local storage untuk elemen stats pada Local Stats. Sehingga, stats akan menampilkan nilai yang tersimpan pada masing-masing item storage ketika halaman web ditampilkan.

  playButton.addEventListener('click', function() {
      sessionStorage.setItem(sessionAnswerKey, getAnswer());
      sessionStorage.setItem(sessionUserIsPlayingKey, true);
      beforeGameDisplay.setAttribute('hidden', true);
      duringGameDisplay.removeAttribute('hidden');
  });

  //   Tombol ini memiliki dua fungsionalitas yakni menghasilkan angka yang harus ditebak melalui fungsi getAnswer() dan menyimpannya pada session storage dengan key sessionAnswerKey. Fungsionalitas kedua adalah mengubah layout pada kumpulan elemen "Game Board".

  //   Elemen ini sebenarnya mengandung 3 layout berbeda, di mana hanya 1 saja yang ditampilkan berdasarkan skenario tertentu. Layout-layout disembunyikan melalui atribut hidden. Jika ingin dimunculkan, atribut tersebut perlu dihilangkan dengan method removeAttribute(), sementara layout sebelumnya disembunyikan dengan method setAttribute(). Sehingga, jika tombol "Bermain" ditekan, maka layout pada elemen "Game Board" akan berubah.


  answerButton1.addEventListener('click', function() {
      sessionUserAnswerField.innerText += '1';
      if (sessionUserAnswerField.innerText.length == 3) {
          checkAnswer(sessionUserAnswerField.innerText);
      }
  });

  answerButton2.addEventListener('click', function() {
      sessionUserAnswerField.innerText += '2';
      if (sessionUserAnswerField.innerText.length == 3) {
          checkAnswer(sessionUserAnswerField.innerText);
      }
  });

  answerButton3.addEventListener('click', function() {
      sessionUserAnswerField.innerText += '3';
      if (sessionUserAnswerField.innerText.length == 3) {
          checkAnswer(sessionUserAnswerField.innerText);
      }
  });

  //   Setiap event listener dari ketiga tombol tersebut kurang lebih memiliki fungsionalitas yang sama, yakni menambahkan angka ke dalam kombinasi tebakan user berdasarkan tombol yang ditekan.

  //   Pada setiap event listener tombol-tombol di atas, kita bisa melihat bahwa jika input tebakan dari user sudah sepanjangan 3 karakter, sebuah fungsi yang bernama checkAnswer() akan dipanggil. Karakter tebakan dari user akan dimasukkan ke fungsi tersebut sebagai parameter.

  function checkAnswer(userGuess) {
      const answer = sessionStorage.getItem(sessionAnswerKey);
      if (userGuess == answer) {
          duringGameDisplay.setAttribute('hidden', true);
          afterGameDisplay.removeAttribute('hidden');
          sessionTrueAnswerField.innerText = answer;
          updateScore();
      } else {
          const previousAttemptAmount = parseInt(sessionStorage.getItem(sessionUserAttemptsKey));
          sessionStorage.setItem(sessionUserAttemptsKey, previousAttemptAmount + 1);
          sessionUserAttemptsField.innerText = sessionStorage.getItem(sessionUserAttemptsKey);
          sessionUserAnswerField.innerText = '';
          sessionUserWrongAnswerField.innerText = userGuess;
      }
  }

  //   Fungsi checkAnswer akan menjalankan kode yang berbeda berdasarkan kondisi apakah user berhasil menebak angka yang tepat sesuai di session storage sebelumnya.

  // Jika user salah menebak, stats pada Game Session Stats akan menghitung jumlah masukan tebakan yang salah. Kemudian halaman web akan menampilkan informasi tebakan kita salah.

  function updateScore() {
      const sessionAttemptsValue = parseInt(sessionStorage.getItem(sessionUserAttemptsKey));
      const localAttemptsValue = parseInt(localStorage.getItem(localMaximumAttemptsKey));
      if (sessionAttemptsValue > localAttemptsValue) {
          localStorage.setItem(localMaximumAttemptsKey, sessionAttemptsValue);
          localMaximumAttemptField.innerText = sessionAttemptsValue;
      }
      const previousTotalVictoryAmount = parseInt(localStorage.getItem(localTotalVictoryKey));
      localStorage.setItem(localTotalVictoryKey, previousTotalVictoryAmount + 1);
      localTotalVictoryField.innerText = localStorage.getItem(localTotalVictoryKey);
  }

  //   Namun, jika tebakan user sudah sama dengan jawaban yang dihasilkan pada sistem yang tersimpan pada session storage, tampilan elemen Game Board akan berubah. Tampilan elemen gameboard akan memberitahu user bahwa ia telah menebak dengan tepat. Selain itu, stats pada local stats akan juga ikut diperbarui.

  window.addEventListener('beforeunload', function() {
      sessionUserAnswerField.innerText = '';
      sessionUserWrongAnswerField.innerText = '';
      sessionStorage.setItem(sessionUserAttemptsKey, 0);
      sessionUserAttemptsField.innerText = sessionStorage.getItem(sessionUserAttemptsKey);
  });

  //   Dengan menambahkan event listener untuk event "beforeunload", browser kita akan menghapus dan mengonfigurasi semua nilai dari item-item session storage kembali ke nilai awal. Sehingga, jika user melakukan proses refresh/reload halaman, permainan yang belum selesai akan dihapus. Jika user ingin bermain lagi, ia harus menekan tombol "Bermain".




  destroyDataButton.addEventListener('click', function() {
      sessionStorage.removeItem(sessionAnswerKey);
      sessionStorage.removeItem(sessionUserAttemptsKey);
      sessionStorage.removeItem(sessionUserIsPlayingKey);
      localStorage.removeItem(localTotalVictoryKey);
      localStorage.removeItem(localMaximumAttemptsKey);
      alert('Mohon me-refresh halaman ini kembali');
  });