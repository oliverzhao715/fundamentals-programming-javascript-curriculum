// Problem 1
// Find and print the sum of all the numbers greater than 25 in the list.
let numbers = [5, -8, 35, -3, 28, 2, 5, 7];

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    let item = numbers[i];
    if (item > 25) {  // Positive means > 0
        sum = sum + item;  // Only if positive, add to running total
    }
}
console.log("The sum of numbers above 25 is:", sum);


// Problem 2
// Find and print the sum of all the numbers less than -10 in the list.
let numbers2 = [5, -2, 35, -18, 6, 2, 5, 7];
let sum2 = 0;
for (let i = 0; i < numbers2.length; i++) {
    let item2 = numbers[i];
    if (item2 < -10) {
        sum2 = sum2 + item2;
    }
}
console.log("the sum of numbers less than -10 is:", sum2);


// Problem 3
// Find and print the biggest number less than 100 in the list.
let numbers3 = [93, 82, 46, 24]

let biggest = numbers3[0];
for (let i = 0; i < numbers3.length; i++) {
    let item = numbers3[i];
    if (item > biggest) {
        and (item < 100)
    }
}
console.log("The biggest item less than 100 is:", biggest);

// Problem 4
// Find and print the biggest number in the list.
let numbers4 = [1, 8, 3, 12, 92, 28];

let biggest2 = numbers4[0];
for (let i = 0; i < numbers4.length; i++) {
    let item2 = numbers4[i];
    if (item2 > biggest2) {
        biggest2 = item2;
    }
}
console.log("The biggest item is:", biggest2);


// Problem 5
// Find and print the total sum of all the numbers in the list.
let numbers5 = [5, -8, 35, -3, 6, 2, 5, 7];

let sum3 = 0;
for (let i = 0; i < numbers5.length; i++) {  
    let item3 = numbers5[i];
    sum2 = sum2 + item3;
}
console.log("The sum is:", sum2);