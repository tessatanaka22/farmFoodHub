document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("create-form");
  let fullName = document.getElementById("name");
  let emailEl = document.getElementById("contact");
  let passwordEl = document.getElementById("password");
  let passwordCheck = document.getElementById("password-check");
  let box = document.querySelector(".box");
  let submit = document.getElementById("button");

  submit.addEventListener("click", async function (event) {
    event.preventDefault();
    console.log("catherine");
    let full = fullName.value;
    let email = emailEl.value;
    let pass = passwordEl.value;
    let check = passwordCheck.value;
    let boxChecked = box.checked;

    if (pass !== check) {
      console.log("Passwords do not match!");
      alert("Passwords do not match! Please re-enter.");
    } else {
      console.log("Full Name:", full);
      console.log("Email:", email);
      console.log("Password:", pass);
      console.log("Remember Me Checked:", boxChecked);

      let accountInfo = {
        username: full,
        email: email,
        password: pass,
        password2: check,
        //rememberMe: boxChecked,
      };
      console.log(accountInfo);
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

        if (response.ok) {
          const result = await response.json();
          alert("Registration successful!");
          console.log(result); // You can redirect or clear the form here
        } else {
          const error = await response.json();
          alert("Registration failed: " + (error.detail || "Unknown error"));
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Something went wrong. Try again later.");
      }

      alert("Account created successfully!");
      window.location.href = "login.html";
    }
  });
});
