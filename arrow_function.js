//convert a normal function to an arrow function
const greet=() => {
    console.log("gigi");
};
greet();
//Call the function without passing country.
let country=(a="india") => {
      return a;
};
console.log(country());
//Return an object from an arrow function.
const gr=() => ({
namee:"sejal",
roll_no:"12052"
});
console.log(gr());
//Use arrow inside setTimeout(). Explain this behavior.
const  time=() => {
setTimeout(()=>{
    console.log("This message apperar after 2 second.")

},2000);
    return "delayed message....";
};
console.log(time());
//Arrow function with multiple parameters.
let fu =(a=12,b=56)=>{
return a*b;
}
console.log(fu());
//Arrow function with no parameters.
let ju =()=>{
return "hii";
}
console.log(ju());
//Use arrow function inside .map() to double each item.