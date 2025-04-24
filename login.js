document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const loginButton = document.getElementById("button");

  loginButton.addEventListener("click", async function (event) {
    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    if (!email || !password) {
      showAlert("Please enter both email and password.", false);
      return;
    }

    loginButton.disabled = true;
    loginButton.innerText = "Logging in...";

    try {
      const response = await fetch(
        "https://farmfoodhub-backend.onrender.com/api/login/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        showAlert("Login successful!", true);
        console.log("Login Response Data:", data);
        // Save auth data
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.role);

        // Redirect based on user role
        const userRole = (localStorage.getItem("role") || "").toUpperCase();
        setTimeout(() => {
          switch (userRole) {
            case "FARMER":
              window.location.href = "farmersDashboard.html";
              break;
            case "CONSUMER":
              window.location.href = "consumerDash.html";
              break;
            case "FOODBANK":
              window.location.href = "foodBankDashbord.html";
              break;
            default:
              showAlert("Unknown role. Contact support.", false);
          }
        }, 1500);
      } else {
        showAlert(data.detail || "Login failed. Try again.", false);
      }
    } catch (error) {
      console.error("Login error:", error);
      showAlert("Network error. Please try again later.", false);
    } finally {
      loginButton.disabled = false;
      loginButton.innerText = "Sign in";
    }
  });

  function showAlert(message, success = true) {
    const customAlert = document.getElementById("customAlert");
    const messageSpan = document.getElementById("alertMessage");
    customAlert.style.backgroundColor = success ? "#328142" : "#b02a2a";
    messageSpan.textContent = message;
    customAlert.style.display = "block";

    setTimeout(() => {
      customAlert.style.display = "none";
    }, 4000);
  }
});
