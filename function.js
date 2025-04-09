// var a = 10;
// let b = 20;
// const c = 30;

// function accesGlobalLocalVar() {
//     var a = 101;
//     let b = 202;
//     const c = 303;

//     function innerFunction() {

//         var a = 100;
//         let b = 200;
//         const c = 300;
//         console.log(a + b + c);
//     }
//     innerFunction()
//     console.log(a + b + c);
// }
// accesGlobalLocalVar()
// console.log(a + b + c);

//Function Type
//Named Type
                            /*
function add(uName) {
    console.log(" Named Function" + uName);

}
add(" im a little star")

//Ananomus Function 

let ananFun = function (a, b) {
    console.log(" Ananomus Function " + a * b);
}
ananFun(10, 20);

//Arrow Function 

let fatArrow = (a, b) => console.log(" Arrow Function" + (a * b));

fatArrow(10, 20)

let newFun = name1 => console.log( name1 );
newFun (" Mugu ")

let whyMan = " Mugu "

let returnedFun = wMan => wMan

let finalOutput = returnedFun ( whyMan )

console.log ( finalOutput );          */

// High order Function && callBack function

function function1(){
    console.log(" im a higher order function ")
}
function function2(){
    console.log(" Im a call back function ")
}

function1( function2() )

//function1 ( function2())

function add( callBack,a,b ){
    callBack(100,200)
    console.log( a + b );
}
function subtract(num1 , num2 ){
    console.log( num1 + num2 )
}
add( subtract,20,30)


