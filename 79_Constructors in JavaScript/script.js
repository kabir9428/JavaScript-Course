class Employee{
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

e = new Programmer();
e.login();
e.requestleaves(3);