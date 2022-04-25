# Template Literals

Are strings that allow embedded expressions. they use backticks as shown.


let name = "Kyendy";
console.log(`Hello I'm, ${name}`);
//Prints: Hello I'm Kyendy

console.log(`I am ${6+6} years old`);
---------------------------------------------------------------------------------

# String Interpolation

Is the process of evaluating string literals containing one or more placeholders (expressions, variables, etc).
Performed using template literals: text ${expression} text.

let height = 169;

'Kyendy is '+ height + ' cm tall.'; //String concatenation
`Kyendy is $height cm tall`; //String interpolation
---------------------------------------------------------------------------------

# Variables

Used whenever there’s a need to store a piece of data.
Contain data that can be used in the program or elsewhere.
They ensure code reusablity since they can be used to replace the same value in multiple places.


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
  
# Undefined

This is a primitive value that represents lack of defined value.


var a;

console.log(a); //Prints undefined.
---------------------------------------------------------------------------------
# Declaring variables

var, let and const are the keywords to use when declaring variables.
let - is used when the variable is changeable or can be reassigned 
const - is used when we declare a variable with a constant value.

var age;
let weight;
const numberOfCars = 20;
---------------------------------------------------------------------------------
# Let Keyword
let -  creates a local variable in JavaScript & can be re-assigned.
Initialization during the declaration of a let variable is optional.
NB; will contain undefined if nothing is assigned to it.

let count; 
console.log(count); // Prints: undefined
count = 20;
console.log(count); // Prints: 20
---------------------------------------------------------------------------------
# const Keyword
const - used to declare a constant variable.
It must have an assignment.
Any attempt of re-assigning a const variable will result in JavaScript runtime error.

const numberOfColumns = 5;
numberOfColumns = 10;
// TypeError: Impossible assignment to constant variable.
---------------------------------------------------------------------------------
# String Concatenation
Multiple strings can be concatenated together using the + operator. 

let service = 'credit card';
let month = 'May 29th'; 
let displayText = 'Your ' + service  + ' bill is due on ' +  month + '.';
 
console.log(displayText);
// Prints: Your credit card bill is due on May 29th.
---------------------------------------------------------------------------------
# Control Flow
Control flow is the order in which statements are executed in a program.
Statements are to be read from left-to-right, top-to-bottom in a prog.
Control structures such as conditionals (if statements and the like) alter control flow by only executing blocks of code if certain conditions are met.
They allow a prog to make decisions about which code is executed as the prog runs.
---------------------------------------------------------------------------------
# Logical Operator ||
Checks two values and returns a boolean.
If one or both values are true, it returns true, else returns false.
A 	      B 	    A || B
false 	false 	false
false 	true 	  true
true  	false 	true
true  	true  	true
---------------------------------------------------------------------------------
# Ternary Operator
Allows for a compact syntax in the case of binary decisions.
It accepts a condition followed by a ? operator, and then two expressions separated by a :.
If the condition evaluates to truthy, the first expression is executed, otherwise, the second expression is executed.

let price = 20.5;
let day = "Monday";
 
day === "Monday" ? price -= 1.5 : price += 1.5;
