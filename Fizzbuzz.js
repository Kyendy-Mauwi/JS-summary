/*
FizzBuzz is a task where the programmer is asked to print numbers from 1 to 100, but here’s the catch; 
multiple of three should print “Fizz” and similarly print “Buzz” for multiples of 5 and lastly print “FizzBuzz” for multiples of three and five. 
*/

// for loop that iterates over a variable i that increments up to 100
for (var i = 1; i < 101; i++) {
    if (i % 15 == 0) console.log("FizzBuzz"); // We check 15 first as all numbers divisible by 3 & 5 would divide 15 and an if condition IF the output is true.
    else if (i % 3 == 0) console.log("Fizz"); // Similarly, we repeat it for 3 and 5 using else if.
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i); // And in case none of the conditions are true we use else to output the integer in this case i. This repeats until the loop ends. 
}
