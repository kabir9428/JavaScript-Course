// const prompt = require("prompt-sync")({sigint : true});
//Syncronous programming - execute in ordered way
// let a = prompt("what is your name?");
// let b = prompt("what is your age?");
// let c = prompt("what is your favourite color?");
// console.log(a + " is " + b + " years old and has " + c + " favourite color.");

// Asynchronous programming
// console.log("start");
// setTimeout(function() {
//   console.log("Hey I am good");
// }, 3000);
// console.log("end");

// Callbacks
// function loadScript(src, callback) {
//   var script = document.createElement("script");
//   script.src = src;
//   script.onload = function () {
//     console.log("Loaded script with SRC: " + src);
//     callback(null, src);
//   };
//   script.onerror = function () {
//     console.log("Error loading script with SRC: " + src);
//     callback(new Error("Src got some error"));
//   };
//   document.body.appendChild(script);
// }

// function hello(error, src) {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   alert("Hello " + src);
// }

// function goodMorning(error, src) {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   alert("GoodMorning " + src);
// }
// loadScript(
//   "https://cdn.jsdelivrbb.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
//   goodMorning
// );

function loadScript(src, callback){
  var script = document.createElement("script");
  script.src = src;
  script.onload = function(){
    console.log("Loaded script with SRC: "+ src);
    callback(null, src);
  }
  script.onerror = function(){
    console.log("Error loaded script with SRC"+ src);
    callback(new Error("SRC got some error"));
  }
  document.body.appendChild(script);
};

function hello(error, src){
  if(error){
    console.log(error);
    return;
  }
  console.log("hello "+ src);
}
loadScript("https://cdn.jsdelivrb.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", hello);

