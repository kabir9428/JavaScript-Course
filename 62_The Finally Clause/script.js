const f = ()=>{
  try{
    let a = 0;
    // console.log(program);
    console.log("Program ran successfully");
    return;
  }
  catch(err){
    console.log("This is an error");
    console.log(p);
  }
  finally{
    //if finally is not present here then this below statement cannot run.  
    console.log("I am a good boy");
  }
}
f();
console.log("End");