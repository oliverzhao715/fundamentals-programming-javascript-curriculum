
// Problem 1
// Use a while loop to print the word "JavaScript" 4 times.
let j = 0;
while (j < 4) {
    console.log("JavaScript")
    j = j + 1;
}


// Problem 2
// Use a while loop to print the even numbers from 2 to 12 (inclusive).
let j2 = 2;
while (j2 < 14) {
    console.log(j2)
    j2 = j2 + 2;
}


// Problem 3
// Ask the user to input a positive number.
// Use a while loop to count up from 0 to that number (inclusive), printing each number.
const prompt = require("prompt-sync")();
let input2 = prompt("Give me a number:")
let j3 = 0;
while (j3 < input2) {
    console.log(j3)
    j3 = j3 + 2;
}


// Problem 4
// Ask the user to enter a starting number greater than 10.
// Use a while loop to count down by 5 each time until the number is less than 0.
// Ask the user to enter a starting number greater than 10
const prompt2 = require("prompt-sync")();
let input3 = prompt("Give me a number:")
let input4 = prompt("Enter a starting number greater than 10:");
let number = parseInt(input4, 10);

// Ensure the user actually entered a number greater than 10
while (isNaN(number) || number <= 10) {
    input = prompt("Invalid input. Please enter a number GREATER than 10:");
    number = parseInt(input4, 10);
}

// Use a while loop to count down by 5 each time until the number is less than 0
while (number >= 0) {
    console.log(number);
    number -= 5;
}


// Problem 5
// Create a list of your three favorite animals.
// Use a while loop to print each animal with the text "is awesome!" after it.
// Create a list of your three favorite animals
const favoriteAnimals = ["Capybara", "Red Panda", "Orca"];

// Initialize a counter to track the current index in the list
let index = 0;

// Use a while loop to print each animal with the text "is awesome!" after it
while (index < favoriteAnimals.length) {
    console.log(`${favoriteAnimals[index]} is awesome!`);
    index++; // Move to the next animal in the list
}