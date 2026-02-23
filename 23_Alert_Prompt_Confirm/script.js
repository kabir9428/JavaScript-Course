const prompt = require("prompt-sync")({ sigint: true });

alert("hello your script works");
let a = prompt("Enter a here", "578");
a = Number.parseInt(a);
alert("You entered a of type " + (typeof a));

let write = confirm("do you want to allow me to write");

if (write) {
  document.write(a);
} 
else{
  document.write("Please allow me to write");
}