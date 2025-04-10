// let arr = [10, 20, 30, 40]

// // console.log(arr[0]);

// let length = arr.length

// // console.log(length);


// for (let i = 0; i < length; i++) {
//     console.log( arr[i] );

// }

// //String

// let str = "Javascript"

// for( let i=0; i<str.length; i++ ){
//     console.log(str[i]);

// }


//iterateObject
//ForOfLoops


// let arr = [10, 100, 1000, 10000]

// for (let val of arr) {
//     console.log(val);
// }

// let str = "Javasacript"

// for (let char of str) {
//     console.log(char);

// }

// function* genFunction(){
//     yield 1
//     yield 2
//     yield 3
// }

// let iterator = genFunction()

// for( let val of iterator){
// console.log( val );
// }


//ForIn Loop

// let person1 = {
//     uName: "Mugu",
//     hobbies: ["Cricket", "Racing", "Football"],
//     familyDetails: {
//         totalMembers: 3,
//         siblings: ["a", "b", "c"]
//     },
//     walk() {
//         console.log("Im going to home");

//     }

// }
// for (let key in person1) {
//     console.log(person1[key]);

// }

// let arr = [120, 130, 140, 150];
// for (let key in arr) {
//     console.log(arr[key]);

// }

let str = " ECMA Script"

for(let key in str ){
    console.log(key+1);
    
}
