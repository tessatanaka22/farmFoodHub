document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("create-form");
  const fullName = document.getElementById("name");
  const emailEl = document.getElementById("contact");
  const passwordEl = document.getElementById("password");
  const passwordCheck = document.getElementById("password-check");
  const box = document.querySelector("input[type='checkbox'].box");
  const role = document.getElementById("role");
  const submit = document.getElementById("button");

  submit.addEventListener("click", async function (event) {
    event.preventDefault();

    const full = fullName.value.trim();
    const email = emailEl.value.trim();
    const pass = passwordEl.value;
    const check = passwordCheck.value;
    const boxChecked = box?.checked;
    const selectedRole = role.value;

    // Basic validation
    if (!full || !email || !pass || !check) {
      alert("Please fill in all fields.");
      return;
    }

    if (pass !== check) {
      alert("Passwords do not match! Please re-enter.");
      return;
    }

    if (!selectedRole) {
      alert("Please select a role.");
      return;
    }

    // Disable button to prevent multiple submissions
    submit.disabled = true;
    submit.innerText = "Submitting...";

    const accountInfo = {
      username: full,
      email: email,
      password: pass,
      password2: check,
      role: selectedRole,
    };
    console.log("Username value:", full);
    console.log("Account Info:", accountInfo);

    try {
      const response = await fetch(
        "https://farmfoodhub-backend.onrender.com/api/register/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(accountInfo),
        }
      );

      const responseText = await response.text();

      // Try to parse response as JSON
      let responseData;
      try {
        responseData = JSON.parse(responseText);
      } catch {
        responseData = { detail: responseText };
      }

      if (response.ok) {
        alert("Registration successful!");
        console.log("Success:", responseData);
        window.location.href = "login.html";
      } else {
        console.error("Server Error:", responseData);
        alert(
          "Registration failed: " +
            (responseData.detail || "Please check your input.")
        );
      }
    } catch (error) {
      console.error("Network Error:", error);
      alert("An unexpected error occurred. Please try again later.");
    } finally {
      submit.disabled = false;
      submit.innerText = "Register and continue";
    }
  });
});
