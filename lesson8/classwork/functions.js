function make_greeting() {
    let greeting = "hello world";
    return greeting;
}


let message = make_greeting();
console.log(message);



function build_face() {
    let face = ":D";
    return face;
}
let gooberguy = build_face();
console.log("Meet Gooberguy:", gooberguy)


function personalized_greeting(name) {
    let greeting = "hello " + name;
    return greeting;
}

console.log(personalized_greeting("Fred"));

function rectangle_area(length, width) {
    let area = length * width;
    return area;
}
console.log("the area of a 5x3 rectangle is", rectangle_area(5, 3));