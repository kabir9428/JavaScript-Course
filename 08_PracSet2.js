const prompt = require('prompt-sync')({sigint: true});
//Problem 1
let age = prompt("Enter your age: ");
age = Number.parseInt(age);

// if (age < 0) {
//   console.log("This is an invalid age"); 
// }
// else if (age > 10 && age < 20) {
//   console.log("Your age is lies between 10 and 20");
// }
// else{
//   console.log("You are above 20");
// }

//Problem 2
// switch(age) {
//   case 1:
//     console.log("you are a kid you cannot drive");
//     break;    
//   case 18:
//     console.log("You can think of drive after 18");
//     break;
//   case 20:
//     console.log("You can drive as you are above 18");
//     break;
//   default:
//     console.log("This is an invalid age...");
// }
// console.log("Done");

//Problem 3
// let num = prompt("Enter a number: ");
// num = Number.parseInt(num);

// if (num % 2 == 0 && num % 3 == 0) {
//   console.log("The Number is divisible by 2 and 3");
// } else{
//   console.log("The number is not divisible by 2 and 3");
// }

//Problem 4
// let num1 = prompt("Enter a number: ");
// num1 = Number.parseInt(num1);

// if (num1 % 2 == 0 || num1 % 3 == 0) {
//   console.log("The Number is divisible by either 2 or 3");
// } else{
//   console.log("The number is not divisible either by 2 or 3");
// }

//Problem 5
console.log(age > 18 ? "You can Drive" : "You cannot Drive");