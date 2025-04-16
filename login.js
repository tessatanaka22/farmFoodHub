
document.addEventListener("DOMContentLoaded", function() {
    let emailInfo = document.getElementById("email");
    let password = document.getElementById("password");
    let remindBox = document.querySelector(".box");
    let button = document.getElementById("button");

    button.addEventListener("click", function() {
        let email = emailInfo.value;
        let pass = password.value;
        let rememberMe = remindBox.checked;

        console.log("Email:", email);
        console.log("Password:", pass);
        console.log("Remember Me:", rememberMe);

        if (email === "user@example.com" && pass === "password123") {
            let alertMessage = "Login successful!";
            
        
            if (rememberMe) {
                localStorage.setItem("email", email);
                localStorage.setItem("password", pass);
            }

            let customAlert = document.getElementById("customAlert");
            let messageSpan = document.getElementById("alertMessage");
            messageSpan.textContent = alertMessage;
            customAlert.style.display = "block";

            setTimeout(function() {
                window.location.href = "dashboard.html";  
            }, 2000);

        } else {
            let alertMessage = "Invalid email or password!";
            let customAlert = document.getElementById("customAlert");
            let messageSpan = document.getElementById("alertMessage");
            messageSpan.textContent = alertMessage;
            customAlert.style.display = "block";

            setTimeout(function() {
                customAlert.style.display = "none";
            }, 5000);
        }

        setTimeout(function() {
            customAlert.style.display = "none";
        }, 10000);
    });
});