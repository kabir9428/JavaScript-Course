let a = {
  name1 : "Harry",
  language : "JavaScript"
}
// console.log(a);

let p = {
  run: () =>{
    alert("run");
  }
}

p.__proto__ = {
  name2 : "Jackie"
};

a.__proto__ = p;
a.run();
console.log(a.name2);