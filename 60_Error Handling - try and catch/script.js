setTimeout(()=>{
  console.log("Hacking wifi... Please wait...");
},1000);

// try{ //try catch works synchronously
//   console.log(Rahul);
// }
// try{
//   setTimeout(()=>{
//     console.log(Rahul); // error will not handled
//   }, 100)
// }
try{
  setTimeout(()=>{
    try{
      console.log(Rahul); // error will handled
    } catch(err){

    }
  })
}
catch(error){ //error ki jagah kuch bhi likh skte ha
  console.log(error);
}
setTimeout(()=>{
  console.log("Fetching username and password... Please wait...");
},2000);

setTimeout(()=>{
  console.log("Hacking Rahul's facebook id... Please wait...");
},3000);

setTimeout(()=>{
  console.log("Username and password of Rahul (+917773727282) fetched... Please wait...");
},4000);