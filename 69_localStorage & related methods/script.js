let key = prompt("Enter key you want to set");
let value = prompt("Enter value you want to set");

localStorage.setItem(key ,value);
console.log(`The value at ${key} is ${localStorage.getItem(key)}`);

if(key == 'red' || key == 'blue'){
  localStorage.removeItem(key);
}

if(key == 0){
  localStorage.clear();
}
// all below code work in browser
// localStorage.length
// localStorage.key(1);

//we can get and set values like an object
localStorage.one = 1;
alert(localStorage.one);
delete localStorage.one;

JSON.stringify(Object); //convert an object into string
JSON.parse(string); //convert a valid string into an object
