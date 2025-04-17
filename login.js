/*document.addEventListener("DOMContentLoaded", function() {
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
});*/

document.addEventListener("DOMContentLoaded", function () {
  let emailInfo = document.getElementById("email");
  let password = document.getElementById("password");
  let remindBox = document.querySelector(".box");
  let button = document.getElementById("button");

  button.addEventListener("click", function (e) {
    e.preventDefault(); // prevent form from submitting the default way

    let email = emailInfo.value.trim();
    let pass = password.value.trim();
    let rememberMe = remindBox.checked;

    // Construct the payload to send
    const data = {
      email: email,
      password: pass,
    };
    console.log("praise");
    fetch("http://127.0.0.1:8000/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Login failed");
        }
        return response.json();
      })
      .then((result) => {
        // Show success message
        showAlert("Login successful!", true);

        if (rememberMe) {
          localStorage.setItem("email", email);
          localStorage.setItem("token", result.token); // if the backend returns a token
        }

        setTimeout(() => {
          window.location.href = "dashboard.html";
        }, 2000);
      })
      .catch((error) => {
        showAlert("Invalid email or password!", false);
        console.error("Error:", error);
      });
  });

  function showAlert(message, success = true) {
    let customAlert = document.getElementById("customAlert");
    let messageSpan = document.getElementById("alertMessage");

    customAlert.style.backgroundColor = success ? "#328142" : "#b02a2a";
    messageSpan.textContent = message;
    customAlert.style.display = "block";

    setTimeout(() => {
      customAlert.style.display = "none";
    }, 5000);
  }
});
