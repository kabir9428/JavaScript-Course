// Problem 1 , 2, 5

class Complex{
  constructor(real, imag){
    this.real = real;
    this.imag = imag;
  }

  printComplex(){
    console.log(`Complex number: ${this.real} + ${this.imag}i`);
  }

  addComplex(num){
    this.real = this.real + num.real;
    this.imag = this.imag + num.imag;
  }

  get real(){
    return this._real;
  }

  get imag(){
    return this._imag;
  }

  set imag(newImag){
    this._imag = newImag;
  }

  set real(newReal){
    this._real = newReal;
  }
}

a = new Complex(2, 3);
console.log(a.real, a.imag);
a.real = 10;
a.imag = 10;
b = new Complex(4, 5);
// a.printComplex();
a.addComplex(b);
console.log(`${a.real} + ${a.imag}i`);


//Problem 3
// class Human{
//   constructor(name, favfood){
//     this.name = name;
//     this.favfood = favfood; 
//   }

//   walk(){
//     console.log(this.name + " Human is walking");
//   }
// }

// class Student extends Human{
//   walk(){
//     console.log(this.name + " Student is walking");
//   }
// }

// let o = new Student("Harry", "Bhindi");
// o.walk();

// console.log(o instanceof Human); // Problem 4