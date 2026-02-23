let promise  = new Promise(function(resolve, reject) {
  // alert("Hello");
  console.log("Hello");
  resolve(56);
})

//we use promise for parallel work 
console.log("Hello One");
setTimeout(function(){
  console.log("Hello Two in 2 seconds");
}, 2000)

console.log("My name is " + "Hello Three");
console.log(promise);