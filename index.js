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
