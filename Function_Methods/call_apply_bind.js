// let employee = {
//     eName: "Saptz",
//     eSalary: 1000,
//     introYourself: function (a, b) {
//         console.log(a + b + this.eName);
//     }
// }
// console.log(employee.eName);
// console.log(employee.introYourself(10, 20));


// let eName = "Spatz"
// let employee1 = {
//     eName: "Saptz",
//     eSalary: 1000,
//     introYourself:(a, b)=>{
//         console.log(this.eName);
//     }
// }

// employee1.introYourself(10,20)


let person = {
    pLName: "Thambusamy",
    pName: "Spatz",
}
let person1 = {
    pId: "CT1779",
    pName: "Spatz",
    pLName: "Thambusamy",
    introYourself: function (a, b) {
        console.log(this.pName + " " + this.pLName + (a + b));
        return (a + b)

    }
}

person1.introYourself.call(person, 10, 20);
person1.introYourself.apply(person, [1000, 2000]);

let fun = person1.introYourself.bind(person, 1000, 2000);
console.log(fun());
