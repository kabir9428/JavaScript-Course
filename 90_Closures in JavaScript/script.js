// Closure is Most asked Interview Question
// message = "Global Global";
// function hello(){
//   let message = "Good Morning";
// {
// let message = "Good Afternoon";
// console.log("Hello " + message);
// }
// console.log(message);
//   let c = function hello2(){
//     console.log("I am c " + message);
//   }
//   return c;
// }

// c = hello();
// c()

// function init(){
//   var name = "Mozilla"; //local variable - lexical environment
//   function displayName(){
//     console.log(name);
//   }
//   name = "Harry"
//   return displayName;
// }
// let c = init();
// c();

function returnFunc() {
  const x = () => {
    let a = 1;
    console.log(a);
    const y = () => {
      // let a = 2;
      console.log(a);
      const z = () => {
        // let a = 3;
        console.log(a);
      };
      z();
    };
    a = 999;
    y();
  };
  return x;
}
// x();
let a = returnFunc(); //a is a Closure
a();

// Closure is a function with its Lexical environment
