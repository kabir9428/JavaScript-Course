let n = "Harry\"";
console.log(n.length);

// console.log(n.toUpperCase());
// console.log(n.toLowerCase());
// console.log(n.slice(2, 4));
// console.log(n.slice(2));

// let s = "Harry bhai";
// console.log(s.replace("Har", "pe"));

// let friend = "Naman";
// let friend1 = "Harry";
// console.log(friend.concat(" is a friend of ", friend1, " ok"));
// let friend2 = "      Meena       ";
// console.log(friend2.trim());
let fr = "Shivika";
fr[4] = "o"; //This is not possible 
console.log(fr); //Original strings cannot be changed, because Strings are immutable.
// for (key in fr) {
//     console.log(fr[key]);
//   }