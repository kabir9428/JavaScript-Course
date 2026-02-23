let num = [1, 2, 3, 4, 5,6, 7, 8, 9];
let num_more = [11, 12, 13, 14, 15, 16, 17, 18, 19];
let num_even_more = [211, 212, 213, 214, 215, 216, 217, 218, 219];
// console.log(num.length);
delete num[0];
// console.log(delete num[0]);
// console.log(num.length);

// let newArray = num.concat(num_more, num_even_more);
// console.log(newArray);

//Sort Method - Modifies the original Array
// let compare = (a, b) => { //it sort the array in ascending order
//   return a - b;
// };
// let compare = (a, b) => { //it sort the array in descending order
//   return b - a;
// };
let num1 = [551, 22, 3, 14, 5, 6, 7, 8, 229];
// num1.reverse();
// console.log(num1);
// num1.sort();
// console.log(num1);
num1.sort(compare); 
console.log(num1);

// num1.splice(2, 4, 1021, 1022, 1023, 1024); 
// console.log(num1);
// let deletedValues = num1.splice(2, 4, 1021, 1022, 1023, 1024);
// console.log(deletedValues);
// console.log(typeof deletedValues);


// console.log(num1.slice(3, 5));
// let newArray = num1.slice(3); 
// console.log(newArray);