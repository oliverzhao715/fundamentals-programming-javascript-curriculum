// Problem 1
// Count and print how many times "dog" appears in the list.
let list = ["cat", "dog", "dog", "cat"]
let counter = 0;
for (let i = 0; i < list.length; i++) {
    let item = list[i];
    if (item == "dog") {
            counter = counter + 1;
    }
}
console.log(counter, "dogs")
// Problem 2
// Count and print how many numbers are odd in the list (a number is odd if it's not divisible by 2).



// Problem 3
// Search for "monkey" in the list and print its index if it's found.
let list3 = ["girrafe", "goat", "monkey", "dog", "capybara"]
let found = false;
let index = -1;

for (let i = 0; i < list3.length; i++) {
    if (list3[i] === "monkey") {
        found = true;
        index = i;
        break;
    }
}

if (found === true) {
    console.log("Found monkey at", index);
    
}else{
    console.log("No monkeys in the array");
}

// Problem 4
// Search for 99 in the list and print if it is found.
let list2 = ["97", "98", "99", "100", "101"]
if (list2.includes("99")) {
    console.log("99 was found");
} else {
    console.log("99 was not found");
}


// Problem 5
// Count and print how many numbers are even in the list (a number is odd if it's divisible by 2).
