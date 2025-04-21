// Deep Copy

// let a = 10;
// let b = a;

// a = 20;
// console.log(a, b);

// let obj1 = {
//     name1: "Spatz",
//     role: "development"
// }

// let obj2 = { ...obj1 }

// obj2.name1 = "spatz"

// console.log(obj1, obj2);


//Shallow Copy

// let person = {
//     name1: "Mugunth",
//     role: "under1000Pilot",
//     hobbies: {
//         cricket: "t20 player",
//         football: "60 mins",

//     }

// }
// let person2 = {...person,hobbies:{...person.hobbies}}
// person.role = "pilot"
// person.hobbies.cricket = "ODI player "
// console.log(person,person2);

// let person3 = JSON.stringify(person)
// let newobj = JSON.parse(person3)
// console.log(newobj);

//  //  Array - Shallow Copy

let arr = [1, 2, 3, [4, 5, 6]]

let arr1 = [...arr]

//Deep Copy

let newArr = JSON.parse(JSON.stringify(arr))

arr[0] = "one"
arr[3][0] = "four"
newArr[3][1] = "Five"
console.log(arr, arr1);
console.log(newArr);





