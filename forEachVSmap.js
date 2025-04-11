let furits = ["Apple", "WaterMelon", "Banana"]

// furits.forEach(printFurit)

// function printFurit(currentElement, index, totalArray) {
//     console.log(currentElement, index, totalArray);

// }

// furits.map(function (currentElement, index, totalArray) {
//     console.log(currentElement, index, totalArray);
// })

// let newArr = furits.forEach((cElement) => {
//     console.log( cElement.toUpperCase()); //We can modify r update nuse

//     return cElement
// })
// console.log(newArr);

// let newArr1 = furits.map((cElement, index) => {
//     return { id: index + 1, furit: cElement }
// }) //Always return a array  

// console.log(newArr1);

//Chaining method

// let newArr = furits.map(cEle => cEle.toUpperCase()).sort().fill("123")

// console.log(newArr); //Its work cause it always return array

// let newArr1 = furits.forEach(cEle => cEle.toUpperCase()).sort().fill("123")

// console.log(newArr1);// It not cause it will not return any value

//condition based statement
let newArr2 = furits.map( (cEle) => { return cEle=="Apple"} )

console.log(newArr2);

furits.forEach(val => console.log(val=="Apple")
)


