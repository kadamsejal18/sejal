//Create a function that sums any number of values.
function gu(...number) {
    return number.reduce((val1,val2)=> val1+val2,0);
    
}
console.log(gu(45,56));
//Log all arguments passed using rest.
function ki(...args) {
 console.log(args);
    
}
ki(1,2,3,"helo coding journey",true,{name:'sejal',sub:'cybersecurity'});
//Use rest with other fixed parameters.
function jiji(a,b) {
    return a+b;
    
}
console.log(jiji(12.3,56.89898).toFixed(2));