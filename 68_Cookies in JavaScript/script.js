console.log(document.cookie)
document.cookie = "name=kabir112221321" //set cookie
document.cookie = "name2=kabir4421321"
document.cookie = "name=kabir111"
// console.log(document.cookie)
let key = prompt("enter your key");
let value = prompt("enter your value");
document.cookie = `${encodeURIComponent(ke00y)}=${encodeURIComponent(value)}`;
// decodeURIComponent(key); work in browser key - with semicolon put in decode then it works
console.log(document.cookie)