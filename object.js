// let userProfile ={
//     userName : " Mugu " ,
//     age :  23 ,
//     hairColor : " tan ", 
//     eyeColor : " brown ", 
//     eat : function(){
//         console.log(" i will go for race ")
//         return("With black car ")
//     }
// }

// console.log(  userProfile.eat() );
// let raceType = userProfile.eat();
// console.log( raceType );

// let vehicle = {
//     "vehicle": "4-wheeler",
//     "price": "34000",
//     fuelType: "petrol",
//     "seaterType": ["two", "three", "four"]
// }
// console.log(vehicle.vehicle);
// console.log(vehicle["vehicle"]);
// console.log(vehicle["fuelType"]);
// console.log(vehicle["seaterType"][2]);

//Shorthan Assigned Property
//Dynamic Property 

let UName = "mugu"
let age = 23

let dynamicProp = "employeeId"
let person1 = {
    UName ,
    age ,
    [dynamicProp] : "IFSC1779",
    ["dynamicProp"] : "IFSC17779"
}
console.log(person1.UName,person1.age,person1.dynamicProp,person1[dynamicProp]);
