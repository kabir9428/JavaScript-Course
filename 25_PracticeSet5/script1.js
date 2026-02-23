const prompt = require('prompt-sync')({sigint : true});

//Problem 1
let age = prompt("Enter your age: ");
age = Number.parseInt(age);

if (age > 18) {
  alert("You can drive as your age is greater than 18.");
}
else{
  alert("You cannot drive.");
}