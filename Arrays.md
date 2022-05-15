# Arrays

Arrays are a list of ordered data. They hold items of any type of data.

They are created using square brackets with individual elememts sepereated by commas.
-----------------------------------------------------------------------------------------

# Property .length
.length property of JS array indicates the number of elements an array contains.

const no = [1, 2, 3, 4];

no.length //4
-----------------------------------------------------------------------------------------
# Index
Elements in an array are arranged by index values, from 0 as the first index.

We can access elements by their index using the array name and the index in square brackets

// Accessing na element

const array = [1, 2, 3, 4];

console.log(array[0]); // 1

coneole.log(array[3]); //4
-----------------------------------------------------------------------------------------
# Method .push()
.push() method can be used to add elements to the end of an array.
It modifies the original array and returns the new length of the array.

// Adding elements

const add = ['Kyendy', 'Mauwi'];

add.push('Kenya');

// Adding multiple elements
const add = ['Kyendy', 'Mauwi'];

add.push('Nairobi', 'Kenya', 'East Africa');
-----------------------------------------------------------------------------------------
# Method .pop()
.pop() method is used to remove elements from an array and retrurns the element.

const add = ['Kyendy', 'Mauwi'];

const add =  add.pop(); // 'Mauwi'

console.log(add); // ['Kyendy']
-----------------------------------------------------------------------------------------
# Mutable 
JS arrays are mutable; their values can be changed.

Even when declared const, the contrents can be manipulated by reassigning values using .push or .pop methods

const names = ['Alice', 'Bob'];
 
names.push('Carl');
// ['Alice', 'Bob', 'Carl']
-----------------------------------------------------------------------------------------
