const firstPromise = () => {
    return new Promise((resolve, reject) => {
        resolve("first promise");
    })
}
const secondPromise = () => {
    return new Promise((resolve, reject) => {
        resolve("second promise");
    })
}
const thirdPromise = () => {
    return new Promise((resolve, reject) => {
        resolve("third promise");
    })
}

export { firstPromise, secondPromise, thirdPromise };