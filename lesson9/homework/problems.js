
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
let input = prompt
let j3 = 0;
while (j3 < ) {
    console.log(j2)
    j2 = j2 + 2;
}


// Problem 4
// Ask the user to enter a starting number greater than 10.
// Use a while loop to count down by 5 each time until the number is less than 0.
// core game logic for a text-input shooter
const input = document.getElementById('game-input');
const target = { word: "FIRE", active: true };

input.addEventListener('keyup', (e) => {
    // Check if the user typed the target word and pressed Enter
    if (e.key === "Enter") {
        if (input.value.toUpperCase() === target.word) {
            shootTarget();
            input.value = ''; // clear input after shot
        }
    }
});

function shootTarget() {
    console.log("Target destroyed!");
    // logic to remove target from screen and add score
}



// Problem 5
// Create a list of your three favorite animals.
// Use a while loop to print each animal with the text "is awesome!" after it.
