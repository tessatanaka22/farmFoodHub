document.addEventListener("DOMContentLoaded", function() {
    let fullName = document.getElementById("name");
    let emailEl = document.getElementById("contact");
    let passwordEl = document.getElementById("password");
    let passwordCheck = document.getElementById("password-check");
    let box = document.querySelector(".box");
    let submit = document.getElementById("button");

    submit.addEventListener("click", function(event) {
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
            console.log("fullName:", full);
            console.log("Email:", email);
            console.log("PasswordEl:", pass);
            console.log("box checked:", boxChecked);
            alert("Account created")
        }
    });
});