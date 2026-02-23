// const hello = require("./module1");
// hello.hello();
// hello.ahello("Shivani");
// hello.ahello("Garima");
// hello.ahello("Aishwarya");
// hello.ahello("Nikita");

// const {hello, ahello} = require("./module1"); // common js
import harry, {hello, ahello} from "./module2.js";
hello();
ahello("Shivani");
ahello("Garima");
ahello("Aishwarya");
ahello("Nikita");
harry();