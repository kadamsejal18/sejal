let marks = 85;

if (marks >= 90) {
    console.log("A");

} else if (marks >= 70) {
    console.log("B");
}
else if (marks >= 60) {
    console.log("C");

} else if (marks >= 50) {
    console.log("C");

}
else if (marks >= 40) {
    console.log("D");

} else if (marks < 30) {
    console.log("F");
}

else {
    console.log("invalid");
}

//Q.2
let choice = 45;
if (choice <= 60) {
    console.log("Paper");
} else if (choice <= 80) {
    console.log("Rock");
} else if (choice <= 100) {
    console.log("Scissors");
} else {
    console.log("draw");
}

/*let player1 = "rock";
let player2 = "scissors";
if ((player1 === "rock" && player2 === "scissors") || (player1 === "paper" && player2 === "rock") || (player1 === "scissors" && player2 === "paper")) {
    console.log("you win !")
} else if (player1 === player2) {
    console.log("It's draw !")
} else {
    console.log("you loss !")
}*/

let player1 = "3";//rock=1 paper=2 scissors=3
let player2 = "2";
if (player1 === player2) {
    console.log("It's Draw !")
} else if ((player1 === "1" && player2 === "3") || (player1 === "2" && player2 === "1") || (player1 === "3" && player2 === "2")) {
    console.log("player1 is win !")

} else {
    console.log("player2 is win !")
}
//Q.3
let isLoggedIn = true;
let isAdmin = false;
if (isLoggedIn && isAdmin) {
    console.log("welcome user !")
} else if (isLoggedIn && !isAdmin) {
    console.log("welcome programer !")
} else if (!isLoggedIn && isAdmin) {
    console.log("welcome seju !")
}
else {
    console.log("Please log in to continue.");
}
//Q.4
let weather = "rainy";
switch (weather) {
    case "summer":
        console.log("It's a hot day !");
        break;

    case "rainy":
        console.log("It's a refreshing day !");
        break;

    case "winter":
        console.log("It's a cold day !");
        break;
    case "spring":
        console.log("It's a pink day !");
        break;
    default:
        console.log("good day !");
        break;
}
//Q.5
let age = 25;
function checkAge(age) {
    if (age > 18) {
        return "Kid";
    } else if (age <= 18) {
        return "Teen";
    } else if (age <= 25) {
        return "Adult";
    } else if (age <= 75) {
        return "Senior";
    } else {
        return "Elderly";
    }
}
console.log(checkAge(age));