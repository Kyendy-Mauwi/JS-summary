# Loops

**A loop is a programming tool that is used to repeat a set of instructions. Iterate is a generic term that means “to repeat” in the context of loops. A loop will continue to iterate until a specified condition, commonly known as a stopping condition, is met.**
___________________________________________________________________________________

# While Loop
Creates a loop that is executed as long as a specified condition is true. It will continue to run until the conditino is false.
The condition specified before the loop determine when the loop should stop.

while (condition) {

  // code block to be executed
  
}
 
let i = 0;
 
while (i < 5) {    

  console.log(i);
  
  i++;
}
________________________________________________________________________________
# For Loop
A for loop declares looping instructions, with three important pieces of information separated by semicolons ;:

👉 The initialization defines where to begin the loop by declaring (or referencing) the iterator variable

👉 The stopping condition determines when to stop looping (when the expression evaluates to false)

👉 The iteration statement updates the iterator each time the loop is completed

for (let i = 0; i < 4; i += 1) {

  console.log(i);
  
};
 
// Output: 0, 1, 2, 3

________________________________________________________________________________
# Reverse Loop
A **for loop** can iterate in reverse by initializing the loop variable to the starting value, testing or when the variable hits the ending value and decrementing the loop variable at each iteration.

const items = ['apricot', 'banana', 'cherry'];
 
for (let i = items.length - 1; i >= 0; i -= 1) {

  console.log(`${i}. ${items[i]}`);
  
}
 
// Prints: 2. cherry

// Prints: 1. banana

// Prints: 0. apricot
________________________________________________________________________________
# Do…While Statement
A do...while statement creates a loop that executes a block of code once, checks if a condition is true, and then repeats the loop as long as the condition is true. They are used when you want the code to always execute at least once. The loop ends when the condition evaluates to false.

x = 0

i = 0
 
do {
  x = x + i;
  
  console.log(x)
  
  i++;
  
} while (i < 5);
 
// Prints: 0 1 3 6 10
