document.addEventListener("DOMContentLoaded", function() {
    let emailInfo = document.getElementById("email");
    let password = document.getElementById("password");
    let remindBox = document.querySelector(".box");
    let button = document.getElementById("button");

    button.addEventListener("click", function() {
        let email = emailInfo.value
        let pass = password.value
        let rememberMe = remindBox.checked

        console.log("Email:", email);
        console.log("Password:", pass);
        console.log("Remember Me:", rememberMe);
        let alertMessage = " logging in"
        
        let customAlert = document.getElementById("customAlert")
        let messageSpan = document.getElementById("alertMessage")
        messageSpan.textContent = alertMessage
        customAlert.style.display = "block"

        setTimeout(function() {
            customAlert.style.display = "none";
        }, 10000)
        })

})