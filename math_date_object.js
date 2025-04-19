// Math.abs(x) Absalute

console.log(Math.abs( 50 ));
console.log(Math.abs( -10 ));


// Math.sign(x)

console.log( Math.sign( -10 ));
console.log( Math.sign( 0 ));
console.log( Math.sign( 110 ));


// Math.sqrt(x)

console.log( Math.sqrt( 25 )); // 5*5=25 so output 5 squre


// Math.cbrt(x)

console.log( Math.cbrt( 125 )); //5*5*5=125 so output 5 cube


// Math.pow( base , exponent )

console.log( Math.pow( 6 , 2 )); // 6*6=36 so output is 36


// Math.min(...Values)

let arr = [1,2,3,4,5] // To find minium value
console.log( Math.min( ...arr));


// Math.min(...Values)

let arr1 = [1,2,3,4,5] // To find maximum value
console.log( Math.max( ...arr1 ));


// Math.random()

let randomNum = Math.random()*22 // To find random value
console.log( randomNum.toFixed(3));


// Math.ceil(x) 

console.log( Math.ceil( 4.6 )); // To find next value output is 5


// Math.floor(x)

console.log( Math.floor( 4.6 )); // To find floor value output is 4


// Math.round(x)

console.log( Math.round( 3.4 )); // To find round value 4
console.log( Math.round( 3.6 )); // To find round value 3


// Math.trunc(x)

console.log( Math.trunc( 4.0009999 )); // To convert decimel to number
