// let arr = [10, 5, 100, 50, 1000, 500]

// let newArr = arr.sort((a, b) => { return a - b })

// a - b => postive, a>b => swapping
// a - b => negative, a<b => no swapping


// a - b => 10 - 5 => 5 => [5,10,100,30,6,2]
// a - b => 10 -100 => -90 => [5,10,100,30,6,2]
// a - b => 100 - 30 => 70 => [5,10,100,30,6,2]
// [5,10,30,6,2]

// console.log(newArr);

//Descending
// b - a => postive, b>a => swapping
// b - a => nagative, b<a => no swapping

let newArr = [10, 20, 30, 1, 4, true, "100A"]

let descendingSort = newArr.sort((a, b) => { return b - a })

// b - a => 20  - 10 => 10 => [20,10,30,1,4,true,"100"]
// b - a => 30  - 10 => 20 => [20,30,10,4,1,true,"100"]
// b - a => ture - 1 => 1 - 1 => 0 [20,30,10,4,1,true,"100"]
//b - a => "100" - true => 100 - 1 => 90 => [20,30,10,4,1,"100",true]

//b - a => "100A" - true => NaN - => [10,20,30,1,4,true,"100A"]

console.log(descendingSort);

//Some & Every 

let arr1 = [1, 2, 3, 4, 5, 6]

let value = arr1.some((element, index, Array) => {
    return element % 2 == 0
});//Any one is true output is ture

let value1 = arr1.every((element, index, Array) => {
    return element % 2 == 0
})//Any one is flase output is flase

console.log(value, value1);
