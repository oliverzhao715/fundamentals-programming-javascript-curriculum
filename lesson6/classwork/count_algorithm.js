let animals = ["dog", "cat", "tiger", "lion", "cat", "wolf"]
    console.log (animals)

let counter = 0;
for (let i = 0; i < animals.length; i++) {
    let item = animals[i];
    if (item == "cat") {
            counter = counter + 1;
    }
}
console.log(counter, "cats")

let numbers = [14, 1, 50, 4, 20, 12];
counter = 0;
for (let i = 0; i < numbers.length; i++) {
    let item = numbers[i];
    if (item < 10) {
        counter = counter +1;
    }
}
console.log(counter, "numbers above 10")  