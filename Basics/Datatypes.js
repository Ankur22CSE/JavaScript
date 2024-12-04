"use strict"
// Primitive Datatypes: String, Number, null, undefined ,Symbols, BigInt, Boolean

let varA="String", varB;
varA=234; // Number data type represents both integer and floating-point numbers
varA=23.45;
varA=true;
varA=Symbol("Aura++");
console.log(varA);
// Each SYMBOL is unique and Immutable. Even if you create two symbols with the same characters(description), they are different values.
// Strings are not unique but Immutable. But they can be altered by concatenation and slicing.

varA=BigInt("737239713931830131310331");// Bigint represent whole numbers greater than 253
varA=2821219102912092n;
console.log("BigInt: "+varA);
// Dynamically Typed : JavaScript Variables are not bound to a specific data type.

console.log(varB); //A variable that has been declared but not initialized with a value is automatically assigned the undefined value.
//  It means the variable exists, but it has no value assigned to it.

// Non-primitive