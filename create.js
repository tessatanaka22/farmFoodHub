document.addEventListener("DOMContentLoaded", function () {
  let fullName = document.getElementById("name");
  let emailEl = document.getElementById("contact");
  let passwordEl = document.getElementById("password");
  let passwordCheck = document.getElementById("password-check");
  let box = document.querySelector(".box");
  let submit = document.getElementById("button");

  submit.addEventListener("click", function (event) {
    event.preventDefault();

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

      let existingUser = localStorage.getItem(email);
      if (existingUser) {
        alert("An account with this email already exists!");
      } else {
        let accountInfo = {
          fullName: full,
          email: email,
          password: pass,
          rememberMe: boxChecked,
        };
        localStorage.setItem(email, JSON.stringify(accountInfo));

        alert("Account created successfully!");
        window.location.href = "login.html";
      }
    }
  });
});
