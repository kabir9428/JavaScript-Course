//Problem 1
// const a = async(text) =>{
//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       resolve(text);
//     }, 2000);
//   })
// }

//IIFE
// (
//   async()=>{
//   let text = await a("Hello1");
//   console.log(text);
//   text = await a("World");
//   console.log(text);
//   }
// )()

//Problem 2
// function sum(a, b, c){
//   return a + b + c;
// }

// let x = [1, 3, 5, 7]
// console.log(sum(...x)) //Spread syntax

//Problem 3
// const a = async(text, n=2) =>{
//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       resolve(text);
//     }, 1000 * n);
//   })
// }

// (
//   async()=>{
//   let text = await a("I am resolving after 1 second", 1);
//   console.log(text);
//   text = await a("I am resolving after 4 seconds", 4);
//   console.log(text);
//   }
// )()

//Problem 4
function simpleInterest(p, r, t){
  return (p * r * t)/100;
}

console.log(simpleInterest(1000, 5, 1))