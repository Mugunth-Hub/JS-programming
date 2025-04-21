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

let person = {
    name1: "Mugunth",
    role: "under1000Pilot",
    hobbies: {
        cricket: "t20 player",
        football: "60 mins",

    }

}
let person2 = {...person,hobbies:{...person.hobbies}}
person.role = "pilot"
person.hobbies.cricket = "ODI player "
console.log(person,person2);

let person3 = JSON.stringify(person)
console.log(person3);



