// Comparison operators are used to compare two values and return a boolean (true or false)
console.log(5 > 3);  // Greater than
console.log(5 < 3);  // Less than
console.log(5 >= 3);  // Greater than or equal to
console.log(4 <= 4); // Less than or equal to
console.log(5 === 5);  // Strict equality: checks if the values are equal and of the same type
console.log(0 == false);  // Loose equality: checks if the values are equal, but does not check the type
console.log(0 !== false); // Strict inequality: checks if the values are not equal or not of the same type
console.log(5 != 3);  // Loose inequality: checks if the values are not equal, but does not check the type

// You can also compare variables:
let a = 10;
let b = 7;
console.log(a > b);
console.log(a === b);

console.log("apple" === "apple"); 
console.log("Apple" === "apple");  // String comparison is case-sensitive
console.log("apple" !== "banana");
console.log("bat" > "cat");  // String comparison is based on Unicode values of characters
console.log("dog" < "zebra");