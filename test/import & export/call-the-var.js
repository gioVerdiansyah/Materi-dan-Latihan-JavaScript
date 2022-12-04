// 1 import sebelum deklarasi
import { months } from "./module.js";
import { sayHello } from "./module.js";

let nama = prompt("isi nama mu");
console.log(months.join("/"));
sayHello(nama);

// 2 import selain dari deklarasi
//* Kami juga dapat menggunakan as untuk mengimpor dengan nama yang berbeda.
//* Misalnya, mari impor sayHi ke variabel lokal hi untuk singkatnya, dan impor sayBye sebagai bye:

//{
//! import { sayHi as hi, sayBye as bye } from "./module.js"; //memiliki nama sendiri di import

// hi("John"); // Hello, John!
// bye("John"); // Bye, John!
// }

import * as say from "./module.js"; //say hanya untuk nama pencamtuman dari file export

say.hi(nama); // Hello, John!
say.bye(nama); // Bye, John!

// 3 export default hanya ada satu export defaultper file, jadi importtanpa kurung kurawal tahu apa yang harus diimpor.
import user from "./module.js"; // not {User}, just user

user(prompt("name?"));