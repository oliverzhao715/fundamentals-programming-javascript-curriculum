let nums = [1, 2, 3];

let biggest = nums[0];
for (let i = 0; i < nums.length; i++) {
    let item = nums[i];
    if (item > biggest) {
        biggest = item;
    }
}
console.log("The biggest item is:", biggest);