// const sayHello = () => console.log("Hello"); console.log("Hi") //but not recommended so because it decreses redability 

// sayHello();

// const sayHello = (name) => console.log("Hello "+ name); 

// sayHello("Harry");

const sayHello = name =>{
  console.log("Greeting "+ name);
  console.log("Hi");
} 

sayHello("Harry");

// const sayHello = name => console.log("Hello "+ name); 

// sayHello("Harry");

// const sayHello = name, greeting => console.log(greeting + " "+ name); //syntax error
// sayHello("Harry", "Good Morning");


// const sayHello = (name, greeting) => console.log(greeting + " "+ name); 

// sayHello("Harry", "Good Morning");

// const x = {
//   name: "Harry",
//   role: "Js Developer",
//   exp: 30,
//   show: function(){
//     let that = this;
//     // console.log(this);
//     setTimeout(function(){
//       console.log(`The name is ${that.name}\nThe role is ${that.role}`);
//     }, 2000);
//   }
// }
// console.log(x.name, x.exp);
// x.show();

const x = {
  name: "Harry",
  role: "Js Developer",
  exp: 30,
  show: function(){
    setTimeout(()=>{ //Lexical this
      console.log(`The name is ${this.name}\nThe role is ${this.role}`);
    }, 2000);
  }
}
x.show();