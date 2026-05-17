// Problem 1
// Write a function that returns the number 42 and print the result.
function getAnswer() {
    return 42;
}

console.log(getAnswer());



// Problem 2
// Write a function that returns "penguin" and print the result.
function getAnimal() {
    return "penguin";
}

console.log(getAnimal());



// Problem 3
// Create a variable for a fruit, then print it.
// Modify it inside a function and print it again.
let fruit = "apple";
console.log("Original fruit:", fruit);

function changeFruit() {
    fruit = "banana";
}

changeFruit();
console.log("Modified fruit:", fruit);



// Problem 4
// Write a function that takes two parameters: first_name and last_name.
// The function should return a string that combines the first and last names separated by a space.
function combineNames(first_name, last_name) {
    // Creating a separate variable and using the + operator to join strings
    let full_name = first_name + " " + last_name;
    return full_name;
}

console.log(combineNames("Fred", "Jefferson idk what to call the guy"));



// Problem 5
// Write a function called calculate_perimeter that takes two parameters: length and width.
// The function should return the perimeter of a rectangle (2 * (length + width)).
function calculate_perimeter(length, width) {
    return 2 * (length + width);
}

console.log(calculate_perimeter(5, 10));