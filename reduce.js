let arr = [1, 2, 3, 4, 5, 6]

// 1 + 2 + 3 + 4 + 5 + 6 => 21

let totalVal = 0;

for (let i = 0; i < arr.length; i++) {
    totalVal = totalVal + arr[i]
}
console.log(totalVal);

let totalVal1 = arr.reduce((accumulator, currentElement, index, array) => { return accumulator + currentElement }, 0)

// 1st => Accumulator + currentElement => 0 + 10 => 10
// 2nd => 1 + 2 => 3 
// 3rd => 3 + 3 => 6 
// 5th => 15 + 6 => 21

console.log(totalVal1);

let employees = [
    { eNmae: "dooby", salary: 10000 },
    { eNmae: "scooby", salary: 20000 },
    { eNmae: "spatz", salary: 30000 },
    { eNmae: "sedes", salary: 40000 },
]

let calcTotalSalary = employees.reduce((acc, cElement) => { return acc + cElement.salary }, 0)
console.log( calcTotalSalary);

