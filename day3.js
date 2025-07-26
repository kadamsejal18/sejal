function nice(name) {
    console.log("Hello " + name + ", have a nice day!");
    console.log("Hey" + name + ", how are you?");
    console.log("Goodbye " + name + ", see you soon!");
    console.log("Take care " + name + ", stay safe!");
}
function sum(a, b,c=3) {
    return a + b+c;
}
result = sum(2, 3);
result2 = sum(2, 3, 4);
result3 = sum( 3, 4, 5); // Extra argument ignored
console.log("Result of sum(2, 3): " + result);
console.log("Result of sum(2, 3, 4): " + result2);
console.log("Result of sum(3, 4, 5): " + result3);
const func1 = (x)=> {
    return x * x;
}
func1(5);
func1(66);
func1(100);