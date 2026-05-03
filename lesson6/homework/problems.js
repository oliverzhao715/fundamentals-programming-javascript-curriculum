// Problem 1
// Count and print how many times "Alex" appears in the list.
let names = ["Fred", "Steve", "Alex", "Alex", "Bob", "Joe"]
    console.log ("The names of your best friends this semester are as follows:", names)

let counter = 0;
for (let i = 0; i < names.length; i++) {
    let item = names[i];
    if (item == "Alex") {
            counter = counter + 1;
    }
}
console.log("The name Alex was featured", counter, "times.")

// Problem 2
// Search for "elephant" in the list and print if it's found.
let animals = ["Elephant", "Honey Badger", "Axolotl", "Capybara", "Fennec Fox", "Elephant", "Elephant", "Narwhal", "Quokka", "Red Panda", "Platypus", "Sloth"]
 console.log ("Your favorite animals of this semester are as follows:", animals)

let counter2 = 0;
for (let i = 0; i < animals.length; i++) {
    let item = animals[i];
    if (item == "Elephant") {
            counter2 = counter2 + 1;
    }
}
console.log("'Elephant' was found", counter2, "times.")


// Problem 3
// Count and print how many scores are 100.
let scores = ["68", "74", "100", "85", "52", "91", "77", "45", "88", "70", "100"]
console.log("Your test scores for the semester are as follows:", scores)

let counter3 = 0;
for (let i = 0; i < scores.length; i++) {
    let item = scores[i];
    if (item == "100") {
        counter3++;
    }
}
console.log("You aced a test", counter, "times.")


// Problem 4
// Search for the color "blue" in the list and print its index if it's found.
let targetColor = 'Blue';
let colors = ['aqua', 'black', 'blue', 'fuchsia', 'gray', 'green','lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red', 'silver', 'teal', 'white', 'yellow'];
console.log("The colors used in your art this semester are as follows:", colors)

let counter4 = 0;
for (let i = 0; i < colors.length; i++) {
    let item = colors[i];
    if (item == "blue") {
            counter4 = counter4 + 1;
    }
}
console.log("Blue was found", counter4, "times.")

// Problem 5
// Count and print how many temperatures in the list are below zero.
let temperatures = ["-1", "0", "12", "22", "37", "45", "100", "-2", "45", "12"];
console.log("The temperatures this semester are as follows:", temperatures)
let count = 0;

for (let t of temperatures) {
  if (t < 0) {
    count++;
  }
}

console.log("The temperature was below zero", count, "times.");

