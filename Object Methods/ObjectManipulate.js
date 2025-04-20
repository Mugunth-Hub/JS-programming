// let person = {
//     pName: "Spatz",
//     pAge: 14
// }
// console.log(person);

// let arr = [1,2,3,4]
// console.log(arr);


// Object.create

// let newObj = Object.create(person)
// newObj.location = "TamilNadu"
// console.log(newObj.__proto__);
// console.log(Object.getPrototypeOf(newObj));

// // console.log(newObj.pAge);
// // console.log(newObj);


// // Object.assign

// let person1 = {
//     id : "WWE79",
//     name1 : "Spatz"
// }

// let newObject1 = Object.assign( person1, { role : "frontEnd Developer", salary : 18000} )
// console.log(person1);
// console.log(newObject1);



// Object.entries // object to arr literal

let employee = {
    eName : "Spatz",
    eRole : " BackEnd Developer "
}
let multiArr = Object.entries(employee)
multiArr.push(["Name","Sco dob"])
console.log(multiArr);


// Object.fromEntries arr to object literal

let normalObj = Object.fromEntries( multiArr)
console.log(normalObj);


// Object.keys

let onlyKey = Object.keys(normalObj)
console.log(onlyKey);


// Object.values

let onlyValue = Object.values(normalObj)
console.log(onlyValue);


// Object.freeze

let newObj1 = {
    id : 1
}
Object.freeze(newObj1)
newObj1.name1 = "JavaScript"
newObj1.id = "1234"
console.log(newObj1);


// Object.isFrozen

console.log(Object.isFrozen(newObj1));
