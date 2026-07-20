"use strict";
// Any
let value = 10;
console.log(value);
value = "Hello";
console.log(value);
// Unknown
let data = "TypeScript";
if (typeof data === "string") {
    console.log(data.toUpperCase());
}
// Void
function greet() {
    console.log("Welcome");
}
greet();
