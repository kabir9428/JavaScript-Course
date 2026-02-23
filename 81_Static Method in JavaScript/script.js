class Animal{
  constructor(name){
    this.name = Animal.capitalize(name);
  }
  walk(){
    alert("Animal "+ this.name + " is walking");
  }
  static capitalize(name){
    return name.charAt(0).toUpperCase() + name.slice(1, name.length); //can also use name.substr(1, name.length)
  }
}

j = new Animal("jack");
j.walk();