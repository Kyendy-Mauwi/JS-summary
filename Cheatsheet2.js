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
//Prints :£100000 is more than avg income.
