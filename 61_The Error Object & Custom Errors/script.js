try{
  let age = prompt("Enter your age:");
  age = Number.parseInt(age);
  // harry
  // console.log(harry);
  // throw new ReferenceError("Harry is not good");
  if (age > 150) {
    throw new ReferenceError("This is probably not true");
  }
}
catch(err){
  console.log(err.name);
  console.log(err.message);
  console.log(err.stack);
}