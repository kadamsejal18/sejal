//q.1
/*for (let i = 1; i < 11; i++) {
    console.log(i);

}
//q.2
for (let i = 2; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }

}
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}
//q.3
let a = "sejal kadam";
let rev = "";

for (let i = a.length - 1; i >= 0; i--) {
    console.log(rev += a[i]);

}
//Q.4 multiplication table
for (let i = 1; i <= 10; i++) {
    //console.log(5*i);
    console.log(`5 x ${i} = ${5 * i}`)
}
//Q.5 sum of 1 to 100 
let sum = 0;
for (let i = 0; i < 101; i++) {
    console.log(sum += i);

}
//q.6 divisible by 3
for (let i = 1; i < 51; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }

}
//q.7
/*let a = prompt("give a number: ");
a = Number(a);
for (let i = 1; i <= a; i++) {
    if (i % 2 === 0) {
        console.log("even" + i)

    } else {


        console.log("odd" + i)
    }
}*/
//q.8 divisible 3and 5
/*for (let i = 1; i < 101; i++) {
    if (i % 3 === 0 && i % 5 == 0) {
        console.log("divisible by 3 and 5 is :" + i);
    }

}
//q.9 sum of 2 array
let d = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let b = 0;
for (let i = 0; i < d.length; i++) {
    b += d[i];

}
console.log(b);
//q.10 Use continue to skip a specific number
for (let i = 0; i < 50; i++) {

    if (i === 25 || i === 30) {
        continue;
    }
    console.log(i);
}*/
//q.11Guess number game – use while to ask until correct
/*let correctnumber = 56;
let guess;
while (guess !== correctnumber) {
    guess = Number(prompt("give the guess !"));
    if (guess < correctnumber) {
        console.log("your guess is very low !");

    } else if (guess > correctnumber) {
        console.log("your guess is very high !");

    } else {
        console.log("you got it !");
    }
}*/
//Q.12 Pattern: Print triangle using *
/*let n=5;
for (let i = 1; i < n; i++) {
    let row="";
    for (let j = 1; j <=n-i; j++) {
        row+=" ";
    }
    for(let k=1;k<=2*i-1;k++){
        row+="*"
    
    }
    console.log(row);
}*/
//Q.13 right angle triangle
/* let n=7;
 for(let i=1;i<n;i++){
     row=""
 
 for(let j=1;j<=i;j++){
     row+="*";
 }
 console.log(row)
}*/
//q.14
/*let n=7;
for (let i=1;i<=n;i++){
    let row="";
    for (let j = 1; j <= n-i; j++){
      row+=" ";
    }for(let k=1;k<=i;k++){
        row+="*";
    }
    console.log(row);
}*/
//q.15 print first 5 odd number only
/*let count = 0;
for (let i = 1; i < 101; i++) {
    if (i % 2 === 1) {
        console.log(i);
        count++;
        if (count === 5) {
            break;
        }


    }
}*/
//q.16 count the digit
let num=12456;
let count =0;
while (num>0) {
    num=Math.floor(num/10);
   count++;
}
    console.log(count);