# Scope
Scope is a concept that refers to where values and functions can be accessed.

Various scopes include:

👉 Global scope (a value/function in the global scope can be used anywhere in the entire program)

👉 File or module scope (the value/function can only be accessed from within the file)

👉 Function scope (only visible within the function),

👉 Code block scope (only visible within a { ... } codeblock)

function myFunction() {
  
  var pizzaName = "Volvo";
  
  // Code here can use pizzaName
  
}
 
// Code here can't use pizzaName

