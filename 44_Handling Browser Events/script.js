let x = function(e){
  // console.log(e); //it is an object
  console.log(e.target);
  console.log(e.type, e.clientX, e.clientY);
  // alert("Hello World1!");
};

btn.addEventListener('click', x);  

// let y = function(e){
//   alert("Hello World2!");
// };

// btn.addEventListener('click', y);       

// let a = prompt("wht is your favourite number?");

// if (a == "2") {
//   btn.removeEventListener('click', x);
// }