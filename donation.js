

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
    const closeMenu = document.getElementById("close-menu");

    // Toggle the menu on and off when the hamburger icon is clicked
    menuToggle.addEventListener("click", function () {
        navMenu.classList.add("active");
        closeMenu.style.display = "block";  // Show the close icon
    });

    // Close the menu when the close icon is clicked
    closeMenu.addEventListener("click", function () {
        navMenu.classList.remove("active");
        closeMenu.style.display = "none";  // Hide the close icon
    });
// });











// document.addEventListener("DOMContentLoaded", function() {
    let foodList = document.getElementById("food-list");
    let amount = document.querySelector("input");  
    let unitList = document.getElementById("unit-list");
    let radioBox = document.querySelectorAll("input[type='radio']");  
    let button = document.getElementById("button");

    button.addEventListener("click", function() {
        let food = foodList.value;  
        let amt = amount.value;  
        let unit = unitList.value;  

        let radio;
        for (let i = 0; i < radioBox.length; i++) {
            if (radioBox[i].checked) {
                radio = radioBox[i].value;  
                break;
            }
        }

        console.log("Food:", food);
        console.log("Amount:", amt);
        console.log("Unit:", unit);
        console.log("Radio:", radio);

        let alertMessage = "successful"
        alert(alertMessage);
    });
});

