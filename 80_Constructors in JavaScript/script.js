class Employee{
  constructor(name){
    console.log(`${name} - Employee's constructor is here`);
    this.name = name;
  }

  login(){
    console.log("Employee has logged in")
  }

  logout(){
    console.log("Employee has logged out");
  }

  requestleaves(leaves){
    console.log(`Employee has requested ${leaves} leaves`);
  }
}

class Programmer extends Employee{
  // constructor(){ //Js Engine automatically creates constructor in child class
  //   super();
  // }
  constructor(name){
    super(name);
    console.log(`${name} - Programmer's constructor is here. This is a newly written constructor`);
  }

  requestCoffee(x){
    console.log(`Employee has requested ${x} coffee`);
  }
  //Method Overriding
  requestleaves(leaves){
    super.requestleaves(4);
    console.log("One extra is granted");
    // console.log(`Employee has requested ${leaves+1} leaves (one extra)`);
    }
}

e = new Programmer("Harry");
e.login();
e.requestleaves(3);