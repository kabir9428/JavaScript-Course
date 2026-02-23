const prompt = require('prompt-sync')({sigint : true});

// const marks = {
//   Harry: 90,
//   Gagan: 88,
//   Alice: 45,
//   Rohit: 99,
//   Erick: 77
// };

//Problem 1
// for (let i = 0; i < Object.keys(marks).length; i++) {
//   console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
// }

//Problem 2
// for (let i in marks) {
  // console.log(i);
//   console.log(marks[i]);
// }

//Problem 3
// let i;
// let correctnum = 9;
// while (i != correctnum) {
//   console.log("Try again");
//   i = prompt("Enter your Number: ");
//   }
// console.log("You have entered a correct number");

//Problem 4
const mean = (a, b, c, d, e) => {
  return (a+b+c+d+e)/5;
};

console.log(mean(2, 5, 6, 7, 8));