// // Add
// let a = 10;
// let b = 20;
// console.log("Sum:", a + b);


// //Find even or odd
// let num = 27;

// if (num % 2 === 0) {
//   console.log("Even number");
// } else {
//   console.log("Odd number");
// }


// //Find largest of three numbers
// let aa = 10, bb = 25, cc = 15;
// let largest = Math.max(aa, bb, cc);
// console.log("Largest:", largest);


// //Factorial
// let num = 5;
// let fact = 1;

// for (let i = 1; i <= num; i++) {
//   fact *= i;
// }

// console.log("Factorial:", fact);


// //Multiplication table
// let num = 5;

// for (let i = 1; i <= 10; i++) {
//   console.log(num + " x " + i + " = " + (num * i));
// }


// //Sum of first N numbers
// let n = 10;
// let sum = 0;

// for (let i = 1; i <= n; i++) {
//   sum += i;
// }

// console.log("Sum:", sum);


// //Reverse a number
// let num = 1234;
// let reversed = 0;

// while (num > 0) {
//   reversed = reversed * 10 + (num % 10);
//   num = Math.floor(num / 10);
// }

// console.log("Reversed:", reversed);


// //Check prime number
// let num = 7;
// let isPrime = true;

// for (let i = 2; i < num; i++) {
//   if (num % i === 0) {
//     isPrime = false;
//     break;
//   }
// }

// console.log(isPrime ? "Prime" : "Not Prime");


// //Power of a number
// let base = 2;
// let exponent = 3;

// console.log("Power:", base ** exponent);


// //Average of numbers
// let numbers = [10, 20, 30, 40];
// let total = 0;

// for (let i = 0; i < numbers.length; i++) {
//   total += numbers[i];
// }

// console.log("Average:", total / numbers.length);


// //Fibonacci series
// let n = 10;
// let a = 0, b = 1;

// for (let i = 0; i < n; i++) {
//   console.log(a);
//   let temp = a + b;
//   a = b;
//   b = temp;
// }


// //Check Armstrong number
// let num = 153;
// let original = num;
// let sum = 0;

// while (num > 0) {
//   let digit = num % 10;
//   sum += digit ** 3;
//   num = Math.floor(num / 10);
// }

// console.log(sum === original ? "Armstrong" : "Not Armstrong");



// //Count digits in a number
// let num = 12345;
// let count = 0;

// while (num > 0) {
//   count++;
//   num = Math.floor(num / 10);
// }

// console.log("Digits:", count);



// //Find smallest number in array
// let numbers = [12, 5, 8, 3, 20];
// let smallest = Math.min(...numbers);

// console.log("Smallest:", smallest);



// //Sum of digits
// let num = 1234;
// let sum = 0;

// while (num > 0) {
//   sum += num % 10;
//   num = Math.floor(num / 10);
// }

// console.log("Sum of digits:", sum);



// //Generate random number (1–100)
// let randomNum = Math.floor(Math.random() * 100) + 1;
// console.log("Random number:", randomNum);



// //Check palindrome number
// let num = 121;
// let original = num;
// let reversed = 0;

// while (num > 0) {
//   reversed = reversed * 10 + (num % 10);
//   num = Math.floor(num / 10);
// }

// console.log(original === reversed ? "Palindrome" : "Not Palindrome");



// //Find GCD (Greatest Common Divisor)
// let a = 24, b = 36;

// while (b !== 0) {
//   let temp = b;
//   b = a % b;
//   a = temp;
// }

// console.log("GCD:", a);



// //Find LCM
// let a = 12, b = 15;
// let lcm = (a * b) / gcd(a, b);

// function gcd(x, y) {
//   while (y !== 0) {
//     let temp = y;
//     y = x % y;
//     x = temp;
//   }
//   return x;
// }

// console.log("LCM:", lcm);


 //Find square root
 let num = 64;
 console.log("Square root:", Math.sqrt(num));







