// let hobbies = ["Driving","Cricket","Football","VollyBall"]
// let hobbies1 = ["Writer" ,"Reader"]

// let newArr = [...hobbies,...hobbies1]

// console.log(newArr);

let empDetails = {
    empId: "MCQ1779",
    role: "frontEnd Developer",
    empName: "Mugu",
}
let team2 = { ...empDetails, empId: "MAC9771", empSalary: 24000 }
console.log(team2);

//Rest Parameter or Rest Operator 

function restParams(a,b,...arr) {
    console.log(a,b,arr);

}
restParams(1,2,3,4,5,6)

