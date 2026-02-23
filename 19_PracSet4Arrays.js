const prompt = require("prompt-sync")({ sigint: true });
//Problem 1
let num = [1, 2, 4, 66, 33, 50, 20];

// for (let i = 0; i < 4; i++) {
//     let num1 = prompt("Enter number: ");
//     num1 = Number.parseInt(num1);
//     num.push(num1);
// }
// console.log(num);

// for (let item of num){
//   console.log(item);
// }
//Problem 2
// while (true) {
//   let num1 = prompt("Enter number: ");
//   if (num1) {
//     num1 = Number.parseInt(num1);
//     num.push(num1);
//   } else {
//     break;
//   }
// }
// console.log(num);
//  or
// let a;
// do{
//   a = prompt("Enter number: ");
//   a = Number.parseInt(a);
//   num.push(a);
// }while(a != 0);
// console.log(num);

//Problem 3
// let n1 = num.filter((RohitSahariya) => {
//   if (RohitSahariya % 10 == 0) {
//     return RohitSahariya;
//   }
// });
// console.log(n1);

// const a = (item)=>{
//   return item % 10 == 0
// };
// let b = num.filter(a);
// console.log(b);

// const oldArr = (element)=>{
//    return element * element;  
// };
// let arr = num.map(oldArr);
// console.log(arr);

// or
// let n = num.filter((RohitSahariya) => {
//     return RohitSahariya % 10 == 0;
// });
// console.log(n);

//Problem 4
// let sq = num.map((Yash) => {
//   return Yash * Yash;
// });
// console.log(sq);

//Problem 5
// let n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let num2 = prompt("Enter a Number You want to calculate the factorial of: ");
// num2 = Number.parseInt(num2);

// let fact = n.reduce((n1, n2) => {
//    return n1 * n2;
// });
// console.log(fact);

let n = prompt("How much array length you want: ");
let num1 = [1];
console.log(`Enter elements of array from 1 till ${n}.`);
for(let i=0; i<n; i++){
  // let number = prompt(`Enter ${i+1} here: `);
  // number = Number.parseInt(number);
  // num1.push(number);
  num1[i] = i+1;
}

let factorial = num1.reduce((n1, n2)=>{
   return n1 * n2;
});
console.log(`The factorial of ${n} is:  ${factorial}`)