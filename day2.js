/*let a=10;
let b =15;
let c = 20;
let d = a + b + c;
console.log(d);
console.log("Hello World");
console.log(typeof d);*/
//Q.2
/*for (let i = 0; i <=3; i++) {
    let a=10;
    let b =15;              
    let c = 20;
    let d = a + b + c;
    console.log(d);
    console.log("Hello World");
    console.log(typeof d);
    console.log("Code is running... " + i);
    console.log("Code is also running... " + i);
    console.log("Code is looking like a wow... " + i);
    console.log("This is iteration number: " + i);
    console.log("End of iteration: " + i);
}*/
//Q.3
/*
let cn = 43;
let i = null;

while (i != cn) {
    i = prompt("Enter a number:");
    i = Number(i);
    if (i != cn) {
        console.log("Try again");
    }
}

console.log("You have entered the correct number");
*/
//Q.4
const mean=
    (a, b, c) => {
        return (a + b + c) / 3;
    };
    console.log(mean(10, 20, 30));
console.log(mean(5, 15, 25));