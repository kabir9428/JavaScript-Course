const prompt = require('prompt-sync')({sigint : true});

let number = Math.floor(Math.random() * 100) + 1;
let chances = 0;
let score;
let num;

while(true){
  num = prompt("Guess the Number: ");
  num = Number.parseInt(num);

  if (num > number) {
    console.log("The number is greater than the original Number");
    console.log("Guess again!");
  }
  else if (num < number) {
    console.log("The number you guessed is less than the original number");
    console.log("Guess again!");
  }
  else {
    console.log("You guessed it right, well done!");
    chances++;
    break;
  }
  chances++;
}
score = 100 - chances;
console.log("You have Achieved ",score, " score");
