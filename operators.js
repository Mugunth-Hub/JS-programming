/* // Arthematic Operators

console.log( 10 +20 );

console.log( 20 - 5 );

console.log( 10 * 20 );

console.log( 10 / 20 ); //Quotient ==> 0.5

console.log( 10 % 10 ); // Modules -- Remainder ==> 0

console.log( 10 ** 20 ); // Exponential

// Increment - Decrement 

let num = 10;
num = num + 1 // 10 + 1 = 11
console.log( num )

// Increment ( ++ )

let num1 = 15; //16
num1++; // Post Increment ==> num = num + 1 = 15 + 1 = 16
++num1; // pree Increment ==> num = num + 1 = 16 + 1 = 17

console.log( num1 ); 

// // Decrement ( -- )

let num2 = 15; //13
num2--; // Post Increment ==> num = num - 1 = 15 - 1 = 14
--num2; // pree Increment ==> num = num - 1 = 14 - 1 = 13

console.log( num2 );


//  Post Increment 

/*
 1.Substitute
 2.Operation
 3.Increment

 */                                      /*
let num3 = 30;// 32
let num4 = num3++ + num3++; // 30 + 31
// num3 = 32
console.log( num3 , num4)

//Pre Increment
/*
1.Substitute with Increment
2.Operation
 
*/
/*
let newNum = 60;
let newNum1 = ++newNum;
let newNum2 = ++newNum + ++newNum
console.log(newNum,newNum2); // 

//   Pre Decrement & Post Decrement  
let num5 = 10;
let num6 = num5-- + --num5;
console.log( num5 , num6)              */

// Assignment Operator 

// Addition 

// let age1 = 20
// let additionalval = 100;
// age1 = age1 + 20
// age1 += additionalval //40 + 100
// age1 -= 10
// age1 *= 3 // age = age * 2 
// age1/=2 // age = <age/2
// age1%=2
// age1**=2 
// console.log( age1 );

/* // Relational Operator 
console.log(10 < 20); // True Less than 
console.log(20 <= 20); // True Less than or equal  
console.log(40 > 20); // True Greater than 
console.log(20 >= 20); // True greater than or equal  
console.log(20 == '20'); // True Equal To   
console.log(20 === '20'); // False strict Equal To   
console.log(20 === 20); // True  strict Equal To   
console.log(20 != '20'); // False Not Equal To   
console.log(20 !== '20'); // False Strict Not Equal To   */


// Logical operator

// Logical AND ( && )
/*cond1 cond2  Result
  True    True    True
  True    False   False
  False   True    False // Short circuit Evaluation  
  false   False   False
  false   False   False
  */

  // Logical OR ( || )

  /*cond1 cond2  Result
  True    True    True
  True    False   True
  False   True    True 
  false   False   False
  */

  /*let pwd_input = "12345"
  console.log( pwd_input == "12345" || pwd_input == "54321"); */ // true || false

  // Logical NOT ( ! )
  // True is false
  // false is true

  /* // Concatination-Tempalte 
   let str = "Hello"
   let str1 = " Mugu"
   let output = str + str1
   console.log( output);
   console.log(  str + "" +  str1 + " Welcom to GTA"); */

   /* //Template string or template Literal ( `` )
   
   let newStr = `javascript`;

   // string Interpolation - to embed variable expression
   let newStr1 = `${newStr} is a scripting lan`
   console.log( newStr1 )

   let num = 5
   let num1 = 1

   console.log( `${num} * ${num1} = ${num*num1}`)   */

   

   