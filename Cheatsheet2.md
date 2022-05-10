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

let price = 22.5;

let day = "Monday";
 
day === "Monday" ? price -= 1.5 : price += 1.5;
---------------------------------------------------------------------------------
# else Statement
An else block can be added to an if block or series of if-else if block and the else block will be executed only when the if condition fails.

const isTaskCompleted = false;
 
if (isTaskCompleted) {

  console.log('Task completed');
  
} else {

  console.log('Task incomplete');
  
}
---------------------------------------------------------------------------------
# Logical Operator &&
The logical AND operator && checks two values and returns a boolean. If both values are true, then it returns true.
If one or both of the values is false, then it returns false.

true && true;      // true

1 > 2 && 2 > 1;    // false

true && false;     // false

4 === 4 && 3 > 1;  // true
---------------------------------------------------------------------------------
# switch Statement
The switch statements provide a means of checking an expression against multiple case clauses. If a case matches, the code inside that clause is executed.
The case clause should finish with a break keyword. If no case matches but a default clause is included, the code inside default will be executed.

NB; if break is ommitted from the block of a case, the switch stmnt will continue to check against case values until a break is encountered or the flow is broken.

const food = 'salad';
 
switch (food) {
  case 'oyster':
    console.log('The taste of the sea 🦪');
    break;
  case 'pizza':
    console.log('A delicious pie 🍕');
    break;
  default:
    console.log('Enjoy your meal');
}
 
// Prints: Enjoy your meal
---------------------------------------------------------------------------------
# if Statement
An if statement accepts an expression with a set of parentheses:

👉 If the expression evaluates to a truthy value, then the code within its code body executes.

👉 If the expression evaluates to a falsy value, its code body will not execute.

const isMailSent = true;
 
if (isMailSent) {

  console.log('Mail sent to recipient');
  
}

---------------------------------------------------------------------------------
# Logical Operator !
The logical NOT operator ! can be used to do one of the following:

👉 Invert a Boolean value.

👉 Invert the truthiness of non-Boolean values.

let lateToWork = true;

let oppositeValue = !lateToWork;
 
console.log(oppositeValue); 

// Prints: false

---------------------------------------------------------------------------------
# Comparison Operators
Comparison operators are used to comparing two values and return true or false depending on the validity of the comparison:

👉 === strict equal

👉 !== strict not equal

👉 > greater than

👉 >= greater than or equal

👉 < less than

👉 <= less than or equal

1 > 3       // false

3 > 1       // true

250 >= 250  // true

1 === 1     // true

1 === 2     // false

1 === '1'   // false
---------------------------------------------------------------------------------
# else if Clause
After an initial if block, else if blocks can each check an additional condition. An optional else block can be added after the else if block(s) to run by default if none of the conditionals evaluated to truthy.

const size = 10;
 
if (size > 100) {

  console.log('Big');
  
} else if (size > 20) {

  console.log('Medium');
  
} else if (size > 4) {

  console.log('Small');
  
} else {

  console.log('Tiny');
  
}
// Print: Small
---------------------------------------------------------------------------------
# Truthy and Falsy
In JS, values evaluate to true or false when evaluated as Booleans.

👉 Values that evaluate to true are known as truthy

👉 Values that evaluate to false are known as falsy
Falsy values include false, 0, empty strings, null undefined, and NaN. All other values are truthy.
