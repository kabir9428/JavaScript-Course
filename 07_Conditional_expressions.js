const prompt = require('prompt-sync')({sigint : true});
let age = prompt("Hey whats your age: ");

age = Number.parseInt(age);
// if (age < 0) {
//   console.log("This is an invalid age");
// }
// else if (age < 9) {
//   console.log("You are a kid you cannot even think of driving");
// }
// else if (age < 18 && age >= 9) {
//   console.log("You are a kid and you can think of driving after 18");
// }
// else{
//   console.log("You can drive as you are above 18");
// }
// console.log("done");

switch(age) {
  case 1:
    console.log("you are a kid you cannot drive");
    break;    
  case 18:
    console.log("You can think of drive after 18");
    break;
  case 20:
    console.log("You can drive as you are above 18");
    break;
  default:
    console.log("This is an invalid age...");
}
console.log("Done");