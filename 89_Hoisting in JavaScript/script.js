// Following Two lines will run successfully due to hosting
// console.log(a);
// Hosting are asked in Interviews many times.
// let a;
// console.log(a); // Error - cannot use 'a' without initialization 
// const a;
// console.log(a);
// greet();
// function greet(){
//   console.log("Good Morning");
// }

// var a = 9;
// console.log(a);

//This is converted into this in JS
// console.log(a);
// var a = 9;
// console.log(a);

// var a; // Declaration hosted to the top but inialization is not
// console.log(a);
// a = 9;
// console.log(a);

// const a = 9; // same as let
// console.log(a);

// greet1();
// const greet1 = ()=>{
//   console.log("good morning");
// }

//Function expressions and class expressions are not Hoisted
// greet2();
// let greet2 = function(){ //error
//   console.log("good morning");
// }

greet3();
var greet3 = function(){ //same for var also error
  console.log("good morning");
}
// Hoisting not occur in let and const.

// Hoisting is an unknown or overlooked behavior of JavaScript. If a developer doesn't understand hoisting,programs may contain bugs (errors). To avoid bugs,always declare all variables at the beginning of every scope.
// Since this is how JavaScript interprets the code,it is always a good rule.  