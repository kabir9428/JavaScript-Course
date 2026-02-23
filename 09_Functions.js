function onePlusAvg(x, y){
  return Math.round(1 + (x + y)/2);
};

const sum = (x, y) => {
   return x + y;
};

const hello = () => {
  console.log("Hey how are you, i am fine.");
};

let v = hello();
console.log(v);

console.log(sum(2, 3));

console.log(onePlusAvg(2, 5));