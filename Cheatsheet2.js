#Template Literals
/*
Are strings that allow embedded expressions. they use backticks as shown.
*/

let name = "Kyendy";
console.log(`Hello I'm, ${name}`);
//Prints: Hello I'm Kyendy

console.log(`I am ${6+6} years old`);
---------------------------------------------------------------------------------

#String Interpolation
/*
Is the process of evaluating string literals containing one or more placeholders (expressions, variables, etc).
Performed using template literals: text ${expression} text.
*/

let height = 169;

'Kyendy is '+ height + ' cm tall.'; //String concatenation
`Kyendy is $height cm tall`; //String interpolation
---------------------------------------------------------------------------------

#Variables
/*
Used whenever there’s a need to store a piece of data.
Contain data that can be used in the program or elsewhere.
They ensure code reusablity since they can be used to replace the same value in multiple places.
*/

const euro = '£';
let income = 100000;

console.log(euro + income + ' is more than avg income.');
/*Prints :£100000 is more than avg income.
OR
*/
let name = "Kyendy";
const lost = false;
var earning = 10000;

console.log(name, lost, earning);
//Prints: Kyendy, false, 10000
---------------------------------------------------------------------------------
  
#Undefined
/*
This is a primitive value that represents lack of defined value.
*/

var a;

console.log(a); //Prints undefined.
---------------------------------------------------------------------------------
#Declaring variables
/*
var, let and const are the keywords to use when declaring variables.
let - is used when the variable is changeable or can be reassigned 
const - is used when we declare a variable with a constant value.
*/

var age;
let weight;
const numberOfCars = 20;
---------------------------------------------------------------------------------
 
