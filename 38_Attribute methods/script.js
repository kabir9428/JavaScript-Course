
let first = document.getElementById("first");
let a = first.getAttribute("class");
console.log(a);
console.log(first.hasAttributes("class"));
console.log(first.hasAttributes("style"));
// first.setAttribute("hidden", "true");
first.setAttribute("class", "true sachin");
first.removeAttribute("class");
console.log(first.attributes);

//Accessing the user defined Attributes(Custom attributes)
console.log(first.dataset);
console.log(first.dataset.game);
console.log(first.dataset.player);