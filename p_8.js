//object 
//Q.1 Create an object for a book (title, author, price)
let a = {
    title: "The Jungle BOok",
    author: "Rudyard kipling's",
    price: "$15",
};
console.log(a);
//Q.2 Access properties using both dot and bracket
let b = {
    title: "The Jungle BOok",
    author: "Rudyard kipling's",
    price: "$15",
};
console.log(b.author);
console.log(b['price']);
//Q.3 Write a nested object (user with address and location)
/* let d = {
    title: "The Jungle BOok",
    c: {
        author: "Rudyard kipling's",
        price: "$15",
        e: {
            ch: "lion",
            ch2: "mogli",

        },
    },
}
console.log(d.c.e.ch2);*/
//Q.4 Destructure name and age from a student object
let student={
    name:"seju",
    age:19,
course:"BCA"
};
let {name,age}=student;
console.log(name);
//console.log({[age]:45});
//Destructuring in JavaScript extracts values from objects or arrays into separate variables.It does not change the original values unless you explicitly assign new values.
//Q.5 Loop through keys and values of an object
let student1={
    name:"seju",
    age:19,
course:"BCA"
};
/*for(let s in student1){
console.log(s,student1[s]);
}*/
//Q.6 Convert object to array using Object.entries()
// console.log(Object.entries(student1));
//Q.7 Copy an object using spread operator
//let g={...student1};
//console.log(g);
//Q.8 Create a deep copy of an object with nested structure
let role="writer"
let d = {
    title: "The Jungle BOok",
    c: {
        author: "Rudyard kipling's",
        price: "$15",
        e: {
            ch: "lion",
            ch2: "mogli",

        },

[role]:"sun",
},
}
let obj=JSON.parse(JSON.stringify(d));
//Q.9 Use optional chaining to safely access deep values
let role1="writer"
let d1 = {
    title: "The Jungle BOok",
    c1: {
        author: "Rudyard kipling's",
        price: "$15",
        e1: {
            ch1: "lion",
            ch21: "mogli",

        },

[role1]:"sun",
},
}
//console.log(d1.c1?.e1?.ch21);
//Q.10 Use a variable as a key using computed properties
console.log({[role1]:"suu"});