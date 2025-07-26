//array
//Q.1 create an array of student names and print each
let a=["aman","sejal","riya","saniya","utk","disha","anuu","tanu","purva","manthu"];
a.forEach(function(va){
    console.log(va);
});
//Q.2 filter even numbers from an array
let b=[2,4,6,8,10,12,14];
let c=b.filter(function(vaa){
//console.log(vaa);
if (vaa%2===0) return true; 
});
console.log(c);
//Q.3 map prices to include GST (18%)
let d=[123,45,56,78,89,20,80,90,100,123456];
let e=d.map(function(v){
return v*1.18;
});
console.log(e);
//2nd option 
let f=[123,45,56,78,89,20,80,90,100,123456];
let g=f.map(function(vv){
let price=vv*1.18;
return parseFloat(price.toFixed(2));
});
console.log(g);
//Q.4 Reduce salaries to calculate total payroll
let salaries=[25000,10000,15000,30000,22000];
let h=salaries.reduce(function(v1,v2){
return (v1+v2);
});
console.log(h);
//Q.5 Find the first student with grade
let i =[30,45,65,90,80,75];
let j=i.find(function(v3){
return v3>=80;
});
if (j>=90){
    console.log("A");
}else if(j>=70){
console.log("B");
}else if (j>=60){
    console.log("c");
}else if(j>=50){
    console.log("D");
}else{
    console.log("you failed !")
}
//Q.6 Write a function to reverse an array
let k=[40,56,25,89,7,9];
let l=k.reverse();
console.log(l);
//Q.7 sort array of ages in ascending order
let m=[59,8,79,56,25,14,43,10,5];
console.log(m.sort((a,b)=>a-b));
//Q.8 Destructure first two element of an array
let n=[100,200,300,400,500,600,700,800,900];
let [o,p,q,r] =n;
console.log(o);
//Q.9 Use some() to check if any student failed
let s=[45,50,65,78,98,58];
let s1=s.some(function(vv3){
return vv3>=98;
});
if (s1>=90){
    console.log("A");
}else if(s1>=70){
console.log("B");
}else if (s1>=60){
    console.log("c");
}else if(s1>=50){
    console.log("D");
}else{
    console.log("you failed !")
}
//Q.10 Use spread to copy and add new item
let t=[1,3,45,56,65,78,98];
let t1=[...t,12];
console.log(t1);