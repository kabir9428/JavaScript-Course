let p1 = new Promise((resolve, reject) =>{
   console.log("Promise is pending");
   setTimeout(() =>{
    console.log("I am a promise and I am fulfilled");
    // console.log("I am a promise and I am rejected");
    resolve(true);
    // reject(new Error("I am an error"));
   }, 5000)
});

let p2 = new Promise((resolve, reject) =>{
  console.log("Promise is pending");
  setTimeout(() =>{
   // console.log("I am a promise and I am fulfilled");
   console.log("I am a promise and I am rejected");
   // resolve(true);
   reject(new Error("I am an error"));
  }, 5000)
});

// console.log(p1, p2);

//To get the value
p1.then((value) =>{
  console.log(value);
})
//To catch the error
// p2.catch((error)=>{ //error handle
//   console.log("Some error occured in p2");
// })

p2.then((value)=>{
  console.log(value);
}, (error)=>{
  console.log(error);
})