/*let arr =[1,2,4,5,7]
arr[0]=5666;
console.log(arr,typeof arr);
console.log(arr.length);
console.log(arr[0]);
console.log(arr[2]);
console.log(arr[4]);
console.log(arr.toString());
console.log(arr.join(" and "));
console.log(arr.pop());
console.log(arr.push(100));
console.log(arr);
console.log(arr.shift());
console.log(arr.unshift(0));*/
let numbers = [1, 2, 3, 4, 5];
numbers.splice(1,2);
numbers.splice(1, 3);
numbers.splice(1, 0, 100);
console.log(numbers);