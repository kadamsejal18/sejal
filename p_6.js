//bmi calculateor
function bmi(weight, height) {
    const bmi = weight / (height * height);
    return bmi;
}
console.log(bmi(12, 3));
//create a greet function with default name
function greet(s = "sejal", d = "dob") {
    return s + d;

}
console.log(greet());
//sum all numbers using rest
function sum(...Number) {
    return Number.reduce((total, num) => total + num)
}
console.log(sum(1, 2, 3, 5, 4, 6));
//2nd method
function sums(...params) {
    let total = 0;
    for (let num of params) {
        total = total + num;

    }
    return total;
}
console.log(sums(12, 56, 89, 78, 5, 6, 6, 6, 6, 6, 6, 6,));
//create a closure counter function
function counter() {
    let c = 0;
    return function () {
        c++;
        console.log(c);

    };

}
let o = counter();
o();
o();
//write a function that returns another function
function call() {
    let a = "all dance";
    return function (m) {
        console.log(`we can ${a} with ${m}`);

    }
}
let inner = call();
inner();
inner("krishna");
//use a function to log even numbers in array
function seju() {
    let s = [12, 23, 15, 14];
    for (let num of s) {
        if (num % 2 == 0) {
            console.log(`even number is ${num}`);
        } else {
            console.log(`odd number is ${num}`);
        }
    }
}
seju();
//create a pure function to add tax
function tax(amount,rate) {
return amount+(amount*rate/100);
}
let total=tax(15,10);
console.log(`Total amount including tax: ₹${total}`);
//use iife to show welcome message
(function name() {
    console.log("welcome to new journey.")
})();
//write a discount calculator (HOF style)
function calculator() {
    return function(price,percentage){
        console.log(price*percentage)
    };
}
const discount=calculator();
discount(12,23);
//make a touPPerCase transform using hof
function transform(){
    let k="sejal"
    return function(){
        return k.toUpperCase();
    };

}
let f=transform();
console.log(f());