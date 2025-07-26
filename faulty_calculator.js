let randomNumber = Math.random();
console.log("Random number generated: " + randomNumber);
let a = prompt("Enter first number:");
let b = prompt("Enter second number:");
let operator = prompt("Enter operator (+, -, *, /):");
a = Number(a);
b = Number(b);
let result;
let isFaulty = randomNumber < 0.1; // Simulating a faulty calculator with a 50% chance
if (isFaulty) {
switch (operator) {
        case "-":
            result = a + b;
            break;
        case "+":
            result = a - b;
            break;
        case "/":
            result = a * b;
            break;
        case "*":
            result = a / b;
            break;
        default:
            result = "Invalid operator!";
    }
 console.log("Faulty result");
} else {
    // Correct behavior
    switch (operator) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "*":
            result = a * b;
            break;
        case "/":
            result = a / b;
            break;
        default:
            result = "Invalid operator!";   
    }
    console.log("Correct result");
}
alert("The result is: " + result);

/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong operation 10% of the times


/*let random = Math.random()
console.log(random)
let a = prompt("Enter first number")
let c = prompt("Enter operation")
let b = prompt("Enter second number")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}



if (random > 0.1) {
    // Perform correct calculation
    console.log(`The result is ${a} ${c} ${b}`)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
    
}

else {
    // Perform wrong calculation
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`) 

}*/