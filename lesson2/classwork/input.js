const prompt = require("prompt-sync")();

 //promt always returns a string
let input = prompt("Gimme a number:");
console.log(input);

let number = Number(input); //(CAPITALIZATION MATTERS)
console.log(number + 1);











