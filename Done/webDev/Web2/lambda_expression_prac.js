function printHello() {
    console.log("hello")
}

let a = printHello()
let a2 = function() {
    console.log("world")
}

let a3 = () => {
    console.log("lambda")
}

console.log('start')

setTimeout(a, 1000)
setTimeout(a2, 1000)
setTimeout(a3, 1000)

setTimeout(() => {console.log("anonym")}, 1000)
console.log('fin')