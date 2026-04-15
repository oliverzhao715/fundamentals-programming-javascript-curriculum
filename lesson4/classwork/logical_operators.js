const prompt = require("prompt-sync")();

let age = Number(prompt("How old are you? "));
let has_ticket = prompt("Do you have a movie ticket? (yes/no) ");

// AND: both conditions must be true
if (age >= 13 && has_ticket === "yes") {
    console.log("You can enter the PG-13 movie.");
} else {
    console.log("Sorry, you can't enter.");
}
console.log("Movie check is complete.");

let has_pass = prompt("Do you have a bus pass? (yes/no) ");
let has_coins = prompt("Do you have coins to pay? (yes/no) ");

// OR: at least one condition is true
if (has_pass === "yes" || has_coins === "yes") {
    console.log("You can ride the bus.");
} else {
    console.log("You can't ride the bus.");
}
console.log("Bus check is complete.");

let homework_done = prompt("Did you do your homework? (yes/no) ");

// NOT: flips true to false and false to true
if (!(homework_done === "yes")) {
    console.log("Go finish your homework!");
} else {
    console.log("Nice job! You're all done.");
}
console.log("Homework check complete.");

// You can combine multiple logical operators.
let finished_homework = true;
let is_weekend = false;
let parent_said_yes = true;

// ! first, && second, || is last.
if (finished_homework && (is_weekend || parent_said_yes)) {
    console.log("You can play games.");
}
