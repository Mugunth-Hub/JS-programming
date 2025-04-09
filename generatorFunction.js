// function* generatorFunction() {
//     yield "First value"
//     yield "Second value"
//     yield "Third value"
//     return "Final value"
// }
// let generator = generatorFunction()

// console.log(generator.next().value);

// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);

function* url() {
    yield "https:/"
    yield "www.mugu.com"
    yield "home page"
}

let orgin1 = url()

console.log (orgin1.next().value);
console.log (orgin1.next().value);
console.log (orgin1.next().value);