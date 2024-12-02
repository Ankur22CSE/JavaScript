"use strict" //Treats whole code as newer version of the Javascript

let variable1="Java";
// "let" is block-scoped. This means it is accessible only within the block ({ ... }) in which it is declared.
var variable2="Python";
// "var" is function-scoped. This means it is accessible throughout the entire function in which it is declared, regardless of block boundaries.
// WE CAN REDECLARE SAME VARIABLE USING VAR, EVEN IN THE SAME BLOCK 
const variable3="Javascript";
// const is also blocked scope but it cannot be reassigned

console.log("Before Updation-")
console.table([variable1, variable2,variable3]);

variable1="Java Changed";
variable2="Python changed";

console.log("After updation-");
console.table([variable1, variable2, variable3]);

