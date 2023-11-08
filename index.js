function login() {
    var username = document.getElementById("username").value;
    var idade = document.getElementById("idade").value;
    var gmail = document.getElementById("gmail").value;
    var password = document.getElementById("password").value;

    if (username === "" || idade === "" || gmail === "" || password === "") {
        document.getElementById("login-bg").style= "box-shadow: 10px 10px 10px 0px darkred;"
        document.getElementById("alert").textContent = "* Fill all the spaces";
        return;
    }

    if (!gmail.includes("@gmail.com")) {
        document.getElementById("alert").textContent = "* Insert a valid email !";
        return;
    }

    localStorage.setItem("username", username);
    localStorage.setItem("idade", idade);
    localStorage.setItem("gmail", gmail);
    localStorage.setItem("password", password);
    localStorage.setItem("points", 0);
    document.getElementById("login-bg").style= "box-shadow: 10px 10px 10px 0px rgb(0, 152, 56);"
    document.getElementById("alert").textContent=""
    setTimeout(function() {
        location.href = "home.html";
    }, 1500);
}







document.addEventListener("DOMContentLoaded", function () {
    var storedUsername = localStorage.getItem("username");
    var storedIdade = localStorage.getItem("idade");
    var storedGmail = localStorage.getItem("gmail");
    var storedPassword = localStorage.getItem("password");
    

    if (storedUsername && storedIdade && storedGmail && storedPassword) {
        document.getElementById("displayName").textContent = "@" + storedUsername;
        document.getElementById("displayIdade").textContent = storedIdade;
        document.getElementById("displayGmail").textContent = storedGmail;
        document.getElementById("displayPassword").textContent = storedPassword;
    }
});

document.addEventListener("DOMContentLoaded", function () {
    var storedUsername = localStorage.getItem("username");
    if (storedUsername) {
        document.getElementById("welcome").textContent = "Welcome " + storedUsername + " !";
    }
});





function send() {
    var fisrtName = document.getElementById("first_name").value;
    var lastName = document.getElementById("last_name").value;
    var message = document.getElementById("message").value

    if (fisrtName === "" || lastName === "" || message === "") {
        document.getElementById("carta").style= "box-shadow: 10px 10px 10px 0px darkred;"
        document.getElementById("alert").textContent = "* Fill all the spaces";
        return;
       
    }
    
  
    document.getElementById("carta").style= "box-shadow: 10px 10px 10px 0px green"
    document.getElementById("alert").style="color:Lightgreen"
    document.getElementById("alert").textContent="Message send sucssesfuly!"
    setTimeout(function() {
        location.href = "home.html";
    }, 1500);
}

function reset() {
    username.value = "";
    idade.value = "";
    gmail.value = "";
    password.value = "";
    fisrtName.value="";
    lastName.value="";
    message.value="";
}





/*games*/

const randomNumber = Math.floor(Math.random() * 5) + 1;
let attempts = 0;


let points = parseInt(localStorage.getItem("points"));





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

