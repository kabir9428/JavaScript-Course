let arr = [3, 4, 8, 9, 12, 6]
// Destructuring
// let [a, b, c, d, ...rest] = arr
//No need to do this
// let a = arr[0]
// let b = arr[1]
// console.log(a, b, c, d, rest);
// let [a, , b, ...rest] = arr
// console.log(a, b, rest);
// let {a, b} = {a:1, b:2};
// console.log(a, b);

// Spread Operator - converting array to object
let arr1 = [3, 4, 8]
let obj1 = {...arr1};
console.log(obj1);

function sum(v1, v2, v3){
  return v1 + v2 + v3;
}

console.log(sum(...arr1));

let obj2 = {
  name : "Harry",
  company : "XYZ",
  address : "ABCD"
}

console.log({...obj2, name: "John wick", company: "PQRS"});
console.log({...obj2, name: "John wick", company: "PQRS", id: 1472322});
// This will print the obj2 without changing any values
console.log({name: "John wick", company: "PQRS", ...obj2});