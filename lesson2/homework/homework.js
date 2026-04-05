// Homework Problem 1
// Ask the user for two numbers.
// Print their quotient and remainder on separate lines.
const prompt = require("prompt-sync")();

// promt always returns a string

let divisor = prompt("Gimme a divisor:");
let number1 = Number(divisor); //(CAPITALIZATION MATTERS)

let dividend = prompt("Gimme a dividend:");
let number2 = Number(dividend);

let quotient = divisor / dividend;
let remainder = divisor % dividend;

console.log("Quotient is: ", (divisor - remainder) / dividend);
console.log("Remainder is: ", remainder);

// Homework Problem 2
// Ask the user for their favorite animal and favorite color.
// Print a sentence combining them like: "A blue tiger would be awesome!"
let faveanimal = prompt("What's your favorite animal?:");

let favecolor = prompt("What's your favorite color?:");

console.log("A(n) " + favecolor + " " + faveanimal + " would be awesome!");

// Homework Problem 3
// Use a for loop to print all the even numbers from 0 to 10 (including 10).



// Homework Problem 4
// Ask the user how many push-ups they can do.
// Multiply it by 7 and print how many they could do in a week.
let pushupnum = prompt("How many push-ups can YOU do in a day?:");
console.log("So that means you can do about " + pushupnum * 7 + " push-ups in a week!")


// Homework Problem 5
// Use a for loop to print the square of each number from 1 to 6.
// (Example: 1*1=1, 2*2=4, etc.)
