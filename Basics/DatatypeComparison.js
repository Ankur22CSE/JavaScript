"use strict"
/*Type coercion in JavaScript refers to the process of automatically converting a value from one data type to another
  to make an operation or comparison work. This happens implicitly when JavaScript encounters values of different types
   in contexts where it expects them to be the same type.
*/
/* == is called loose equality: It perform type coercion
   === is called strict equality: It doesn't perform type coercion
*/
console.log("----- String conveted to number for comparison------");
console.log("45" > 40);
console.log("------Comparison of NULL----- ");
console.log(null > 0);
//null == 0 performs equality coercion but does not consider null equivalent to 0.
console.log(null == 0);
console.log(null >= 0);
//The value "null" is converted to 0 when used in a numeric comparison
console.log(null <= 0);

console.log("----------Comapring with Undefined-------------- ");
// The relational comparison algorithm attempts to convert undefined to a number, but it results in NaN (Not a Number)
console.log(undefined == 0);
console.log(undefined >= 0);
console.log(undefined < 0);
// undefined == undefined is true (because the values are the same type and value).
// undefined === undefined is true (strict equality also matches type and value).
// undefined == null is true (because == loosely considers null and undefined as equal).
// undefined === null is false (strict equality checks type and value, and undefined is not the same type as null).
console.log(undefined == null);
 
// NaN is not equal to itself.
console.log("NaN is equal to itself: ",NaN == NaN);