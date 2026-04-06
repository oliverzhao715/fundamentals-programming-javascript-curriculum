const prompt = require("prompt-sync")();
let age = Number(prompt("How old are you? "));
if (age >= 18) {
    console.log("You are eligible to vote!");
} //it would say that if you are older than 18 or 18, you are eligible to vote, but if you typed something that's under 18, then there would be no answer. That includes using anythign other than numbers.

// if/else: choose 1 of 2 paths. ANd also, e equals to the power of. If I type 1e2, then that means 1 * e to the power of 2, or 1 times 100.

let day = Number(prompt("WHat day of the week is this?"));

if (day === "monday") {
    console.log("It's the start of the week!");  
} else if (day === "friday") { // these run sequencially
    console.log("It's almost the weekend!");
} else if (day === "saturday" || "sunday") {  //the double vertical slashes (||) are as an or for this
    console.log("It's the weekend!");
} else {
    console.log("It's a weekday.");
}