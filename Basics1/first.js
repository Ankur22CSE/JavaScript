console.log("----Learning JavaScript----");
 console.log("______Keyword for Variable______");
/*
    const value can't be changed onces initialised
    A const variable must be initialized at the time of declaration.
*/
const str1="Look Up";

/*  var is the oldest keyword to declare variable
    It has both global scope and functional scope
    we can re-declare a variable under var keyword in the same ScriptProcessorNode
*/ 
var str2="Mango";

/*  let is improved version of var keyword
    It has block level scope
    They can not be re-declared in the same scope
*/
let str3="India";

/*  We can declare a varibale without any keyword but then it will have global scope
    Danger: The variable is created globally, which can cause unintended behavior or bugs in your code
*/
str4="Tata";

//Here we have declared a variable but it is undeclared 
let str5;

console.table([str1,str2,str3,str4,str5]);
