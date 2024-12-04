"use strict"
let a,b,c;
b="1213";
c="op39";
console.log("Type of a: ",typeof(a)," and a=",a);
console.log("Type of b: ",typeof(b)," and b=",b);
console.log("Type of c: ",typeof(c)," and c=",c);

console.log("-----------------------");

let x,y,z;
x=Number(null);
y=Number(b);
z=Number(c);
console.log("Type of x: ",typeof(x)," and x=",x);
console.log("Type of y: ",typeof(y)," and y=",y);
console.log("Type of z: ",typeof(z)," and z=",z);

console.log("***********************");

let l=String(123);
console.log("Type:",typeof(l)," and l=",l );

let m=Boolean("Tiger");
console.log("Type:",typeof(m),"and m=",m);
// 1-> true ; 0-> false
// ""->fals ; "elle"->true

console.log("^^^^^^^^^^Sum or Concatenation^^^^^^^^^^^^^");
console.log("1"+2);
console.log(1+"2");
console.log(1+2+"3");
console.log(1+"2"+3+4);

console.log("..............Boolean...................");
console.log(-true);
console.log(-"9");
console.log(+"y");