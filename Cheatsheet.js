#Console.log()
/*
console.log() method is used to log or print messages to the console. 
It can also be used to print objects and other informatin to the screen.
*/

console.log('Hi there!');
// Prints: Hi there!
---------------------------------------------------------------------------

#Numbers
/*
These are a primitive data type.
They consist of all integers and floating point numbers.
*/

let amount = 6; //interger
let price = 6.99; //floating point number
---------------------------------------------------------------------------

#String.length
/*
```.length``` property of a string returns the number of caharacters that make up the string.
*/

let message = 'Hey there 😉!';
console.log(message.length);
// Prints: 11

console.log('Kyendy'.length);
// Prints: 5
---------------------------------------------------------------------------
  
#Data Instances
/*
A program keeps track of a new peice of data in an instance of the data type.
An instance is an individual case of a data type.
*/
---------------------------------------------------------------------------
  
#Booleans
/*
Are primitive data types, they can either be ```true``` or ```false```.
*/

let goToWork = true;
let haveDinner = false;
---------------------------------------------------------------------------
  
#Math.random
/*
Is a func that returns floating-point random numbers in the range 0 (included) to 1 (not included)
*/

console.log(Math.random());
// Prints: 0 - 0.9
---------------------------------------------------------------------------
  
#Math.floor
/*
Is a function that returns the largest integer less than or equal to the given number
*/

console.log(Math.floor(5.95));
//Prints; 5
---------------------------------------------------------------------------
  
#Null
/*
Is a primitive data type that presents intentional absence of value
*/

let x = null;
---------------------------------------------------------------------------
  
#Strings
/*
Are primitive data types.
Are a grp od characters surrounded by single or double quotes.
*/

let location = 'Nairobi, Kenya';
let location = "Nairobi, Kenya";
---------------------------------------------------------------------------
  
#Arithmetic Operators
/*
+ addition, - subtraction, * multiplication, / division & % modulo
*/

5 + 5 //addition
100 - 70 //subtraction
6 * 4 //multiplication
20 / 5 //division
90 % 3 //mudulo
---------------------------------------------------------------------------
  
#Remainder / Modulo Operator
/*
Returns the # that remains after the right-hand # divides into the left-hand number as many times as it evenly can.
*/

const wksInYr = Math.floor(365/7);
// cals # of wks in a year, rounds down to nearest integer

const daysLeftOver = 365 % 7 ;
// cals the # of days left over after 365 is divded by 7

console.log("A year has " + wksInYr + " wks and " + daysLeftOver + " days");
---------------------------------------------------------------------------
  
#Assignment Operators
/*
 assign values to the left operand based on the values of the right operand. 
*/

   
+= addition assignment
-= subtraction assignment
*= multiplication assignment
/= division assignment

let # = 200;
//both statements will add 20
# = # + 20;
# += 20;

console.log(#);
//prints: 220

