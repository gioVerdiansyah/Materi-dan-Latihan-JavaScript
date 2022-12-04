// 1 export sebelum deklarasi
export let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];
export function sayHello(user) {
    alert(`Hello, ${user}!`);
} // no ; at the end

// 2 export selain dari deklarasi
function sayHi(user) {
    alert(`Hello, ${user}!`);
}

function sayBye(user) {
    alert(`Bye, ${user}!`);
}

export { sayHi as hi, sayBye as bye }; //memiliki nama sendiri di export

// 3 export default
export default function user(name) {
    alert(name);
}