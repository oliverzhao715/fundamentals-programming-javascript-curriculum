// Problem 1
// Ask user for two test scores.
// If BOTH scores are at least 50, print "You passed both!"
// Otherwise, print "You failed at least one."



// Problem 2
// Ask user if they brought lunch and water (yes/no).
// If they brought lunch OR water, print "You're somewhat ready."
// If they brought both, print "You're fully ready!"
// If they brought neither, print "You're not ready."
const prompt = require('prompt-sync')();

let a = Number(prompt("Problem 1: Enter score 1: "));
let b = Number(prompt("Problem 1: Enter score 2: "));

if (a >= 50 && b >= 50) {
    console.log("You passed both!");
} else {
    console.log("You failed at least one.");
}

// --- Problem 2 ---
let lunch = prompt("Problem 2: Brought lunch? (yes/no): ");
let water = prompt("Problem 2: Brought water? (yes/no): ").toLowerCase();

if (lunch === "yes" && water === "yes") {
    console.log("You're fully ready!");
} else if (lunch === "yes" || water === "yes") {
    console.log("You're somewhat ready.");
} else {
    console.log("You're not ready.");
}

// --- Problem 3 ---
const num = Number(prompt("Problem 3: Enter a number:"));

if (!(num >= 1 && num <= 10)) {
    console.log("Out of range.");
} else {
    console.log("In range.");
}

// --- Problem 4 ---
const secret = Math.floor(Math.random() * 10) + 1;
const guess = Number(prompt("Problem 4: Guess a number between 1 and 10:"));

if (guess === secret && secret % 2 === 0) {
    console.log("Even match!");
} else if (guess === secret || secret === 5) {
    console.log("Nice try!");
} else {
    console.log("Nope.");
}

// --- Problem 5 ---
const n1 = Number(prompt("Problem 5: Enter first number:"));
const n2 = Number(prompt("Problem 5: Enter second number:"));

const interesting = (n1 % 5 === 0 && n2 % 2 !== 0) || (n2 % 5 === 0 && n1 % 2 !== 0);

if (interesting) {
    console.log("Interesting pair!");
} else {
    console.log("Plain pair.");
}


// Problem 3
// Ask user to enter a number.
// If the number is NOT between 1 and 10 (inclusive), print "Out of range."
// Otherwise, print "In range."



// Problem 4
// Generate a random number between 1 and 10.
// Ask the user to guess.
// If the guess is right AND the number is even, print "Even match!"
// Else if guess is right OR number is 5, print "Nice try!"
// Otherwise, print "Nope."



// Problem 5
// Ask the user for two numbers.
// If one is divisible by 5 AND the other is NOT divisible by 2, print "Interesting pair!"
// Otherwise, print "Plain pair."
