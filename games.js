
const randomNumber = Math.floor(Math.random() * 5) + 1;
let attempts = 0;


let points = parseInt(localStorage.getItem("points"));


if (isNaN(points) || points === 0) {
    points = 0;
    localStorage.setItem("points", points);
}

document.getElementById("pointsDisplay").textContent = "Points: " + points + "";

function resetPoints() {
    points = 0;
    localStorage.setItem("points", points);
    document.getElementById("pointsDisplay").textContent = "Points: " + points + "";
}


function checkGuess() {
    const userGuess = parseInt(document.getElementById("guess").value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 5) {
        document.getElementById("message").textContent = "* Please enter a valid number between 1 and 5.";
        document.getElementById("message").style.color = "tomato";
        document.getElementById("game1").style.boxShadow = "10px 10px 10px 0px red";
        return;
    }

    attempts++;

    if (userGuess === randomNumber) {
        document.getElementById("message").textContent = `Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts. +500 Points!`;
        document.getElementById("message").style.color = "lightgreen";
        document.getElementById("game1").style.boxShadow = "10px 10px 10px 0px rgb(0, 152, 56)";
        points += 500;
        console.log(points);

     
        localStorage.setItem("points", points);

        setTimeout(function() {
            location.href = "../games.html";
        }, 1500);
    } else {
        document.getElementById("message").style.color = "white";
        document.getElementById("game1").style.boxShadow = "10px 10px 10px 0px rgb(0, 125, 209)";
        document.getElementById("message").textContent = "Try another number!";
    }
}