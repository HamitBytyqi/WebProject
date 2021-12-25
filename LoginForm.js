var emailRegex = /^\w+([._-]?\w+)*@[a-z]+[-]?[a-z]*\.[a-z]{2,3}/;
var passwordRegex = /^[A-Z][a-z]+\d{3}$/;

var loginButton = document.getElementById("login");
var emailMsg = document.getElementById("emailMessage");
var passwordMsg = document.getElementById("passwordMessage");

loginButton.addEventListener("click",function(event){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;


  
        if(email == ""){
            emailMsg.innerText = "Enter an email"
            event.preventDefault();
            }
            else{
                if(emailRegex.test(email)){
                }else{
                    emailMsg.innerText = "Enter a valid email"
                    event.preventDefault();
                }
            }
            if(password == ""){
                passwordMsg.innerText = "Enter password"
                event.preventDefault();
                }
                else{
                    if(passwordRegex.test(password)){
                    }else{
                        passwordMsg.innerText = "Password must: \n Start with uppercase \n End with 3 numbers"
                        event.preventDefault();
                    }
                }
})
____