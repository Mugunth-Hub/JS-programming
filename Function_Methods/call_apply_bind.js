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
    pLName : "Thambusamy",
    pName : "Spatz",
}
let person1 = {
    pId : "CT1779",
    pName : "Spatz",
    pLName : "Thambusamy",
    introYourself : function(){
        console.log(this.pName + " " + this.pLName);
        
    }
}

person1.introYourself.call(person)