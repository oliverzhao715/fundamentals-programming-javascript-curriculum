// Problem 1
// Ask the user to enter a number.
// Print "Even" if the number is divisible by 2, otherwise print "Odd".
const prompt = require('prompt-sync')();
let num1 = prompt("Enter a number: ");
if (num1 % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

// Problem 2
// Ask the user for the day of the week (all lowercase).
// Print "Weekend" if the day is "saturday" or "sunday", else print "Weekday".
let day = prompt("Enter the day of the week (lowercase): ");
if (day === "saturday" || day === "sunday") {
    console.log("Weekend");
} else {
    console.log("Weekday");
}

// Problem 3
// Generate a random number between 1 and 10 (inclusive).
// Ask the user to guess the number.
// Print "Correct!" if the guess matches the random number, else print "Try again!".
let randomNum = Math.floor(Math.random() * 10) + 1;
let guess = prompt("Guess a number between 1 and 10: ");
if (parseInt(guess) === randomNum) {
    console.log("Correct!");
} else {
    console.log("Try again! The number was " + randomNum);
}

// Problem 4
// Ask the user for a positive integer.
// If the number is divisible by 2 and greater than 10, print "Big even number".
// Otherwise print "Number does not meet criteria".
let num4 = prompt("Enter a positive integer: ");
if (num4 % 2 === 0 && num4 > 10) {
    console.log("Big even number");
} else {
    console.log("Number does not meet criteria");
}

// Problem 5
// Ask the user for two numbers.
// Print which number is larger.
// If the numbers are equal, print "Numbers are equal".
let firstNum = Number(prompt("Enter first number: "));
let secondNum = Number(prompt("Enter second number: "));

if (firstNum > secondNum) {
    console.log(firstNum + " is larger");
} else if (secondNum > firstNum) {
    console.log(secondNum + " is larger");
} else {
    console.log("Numbers are equal");
}