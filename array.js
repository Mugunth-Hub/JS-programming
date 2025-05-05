let vehicle = ["car","bike","bus","van"];

console.log(vehicle);

console.log(vehicle[0]);
console.log(vehicle[1]);
console.log(vehicle[2]);
console.log(vehicle.length);

console.log(vehicle[vehicle.length-1]);

let sample = [ 1,"two",true,null,undefined];

// Array constructor

let newArray = new Array();

newArray[0] = "First"
newArray[1] = "second"
newArray[2] = "third"
newArray[3] = "fourth"

console.log( newArray );
console.log( newArray.length );

//Dense & Spare Array

let denseArray = [1,2,3] //Contiguos Memory

//formula = baseAddress + (index * size)
//            1004 + (0*4)=1004

let spaeseArray = [ 10,20,30,40]// Hash table or Hash map
console.log(spaeseArray);

