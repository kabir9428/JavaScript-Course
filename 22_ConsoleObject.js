console.log("console");
console.info("info");
console.warn("warn");
console.error("err");
console.assert("err" !=false);
console.assert("err" ==false);

console.time("forLoop");
for (let i = 0; i < 5; i++) {
  console.log(223);
}
console.timeEnd("forLoop");

console.time("whileLoop");
let i = 0;
while (i < 500) {
  console.log(223);
  i++;
}
console.timeEnd("whileLoop");