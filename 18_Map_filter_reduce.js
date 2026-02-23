let arr = [45, 23, 21];

// map isliye use krte ha kyuki hume ek new array chaiye hota h
// and for each loop isliye use krte h jb hume array ke har ek element pr kuch operation ya unne print krwana hota h
// let a = arr.map((value, index, array)=>{ //same thing we can do with for each loop.
//   console.log(value, index, array);
//   return value + index;
// });
// console.log(a);
// console.log(arr); //it doesn't modifies the original array

// Array filter method
// let arr2 = [45, 23, 21, 0, 3, 5];
// let a2 = arr2.filter((a)=>{
//   return a<10;
// });
// console.log(a2, arr2);//it doesn't modifies the original array

//Array reduce method
let arr3 = [1, 2, 3, 5, 2, 1];
// let newarr3 = arr3.reduce((kabir1, kabir2)=>{
//   return kabir1 + kabir2;
// });
// we can also do it as. 
const reduce_func = (h1, h2) => {
  return h1 + h2;
};
let newarr3 = arr3.reduce(reduce_func);
console.log(newarr3);
// console.log(typeof newarr3); //number