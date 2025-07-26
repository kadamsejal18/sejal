//Q1
/*console.log("10"+1);//101
console.log("10"-1);//9
console.log(true+false);//1
console.log(!!"Sheryians");//true*/
//Q.2
/*let str ="42";
let num = +str;
console.log(num);*/
//Q.3
/*let age = 17;
let msg = age >= 18 ? "Adult" : "Minor";
console.log(msg);*/
//Q.4
/*let a = 12;
let b = 14;
function calc(a, b, operator) {
switch (operator) {
    case "+":
        console.log(a+b);
        break;

        case "-":
        console.log(a-b);
        break;

        case "*":
        console.log(a*b);
        break;

        case "/":
        console.log(a/b);
        break;

        case "%":
        console.log(a%b);
        break;

        case "**":
        console.log(a**b);
        break;


    default:
        console.log("invalid calculatio");
        break;
}
}
calc(a,b,"*");*/
//Q.5
let marks = 82;
if (marks >=100) {
console.log("Excellent");
}else if(marks>=75){
    console.log("Good");
}
else if(marks>=65){
    console.log("Average");
}
else if(marks>=45){
    console.log("pass");

}
else {
console.log('Failed');
}
