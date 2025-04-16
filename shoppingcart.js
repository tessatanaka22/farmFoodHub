// document.addEventListener("DOMContentLoaded", function () {
//       const cartIcon = document.getElementById("top");
//     const subTotal = document.querySelector(".rowww");
//     const Total = document.getElementById("total");
//     const reset = document.querySelector(".delete")
//     const submit = document.querySelector(".complete-butt")  
//       let cartCount = 0;
//     let subTotalAmount = 0;

//     const items = document.querySelectorAll(".item");

//     items.forEach(function (item) {
//         const minus = item.querySelector(".minus");
//         const added = item.querySelector(".plus");
//         const counting = item.querySelector(".result");
//         const note = item.parentElement.querySelector(".tag");
//         const itemPrice = parseFloat(item.getAttribute("data-price"));
//         let count = 0;

//         added.addEventListener("click", function () {
//             count += 1;
//             cartCount += 1;
//             subTotalAmount += itemPrice;

//             counting.textContent = count;
//             cartIcon.textContent = cartCount;
//             if (note) note.textContent = "$" + (count * itemPrice).toFixed(2);
//             subTotal.textContent = "$" + subTotalAmount.toFixed(2);
//             Total.textContent = "$" + (subTotalAmount + 6).toFixed(2);
//         });

//         minus.addEventListener("click", function () {
//             if (count > 0) {
//                 count -= 1;
//                 cartCount -= 1;
//                 subTotalAmount -= itemPrice;

//                 counting.textContent = count;
//                 cartIcon.textContent = cartCount;
//                 if (note) note.textContent = "$" + (count * itemPrice).toFixed(2);
//                 subTotal.textContent = "$" + subTotalAmount.toFixed(2);
//                 Total.textContent = "$" + (subTotalAmount + 6).toFixed(2);
//             }
//         });
//     });
//     submit.addEventListener("click", function () {
//         alert("Order Submitted!");

//         const sub = "$" + subTotalAmount.toFixed(2);
//         const tot = "$" + (subTotalAmount + 6).toFixed(2);

//         console.log("Subtotal: " + sub);
//         console.log("Total: " + tot);

//         cartCount = 0;
//         subTotalAmount = 0;

//         items.forEach(function (item) {
//             const counting = item.querySelector(".result");
//             const note = item.querySelector(".tot");
//             counting.textContent = 0;
//             if (note) note.textContent = "$0.00";
//         });

//         cartIcon.textContent = cartCount;
//         subTotal.textContent = "$" + subTotalAmount.toFixed(2);
//         Total.textContent = "$0.00";
//         });
// });




document.addEventListener("DOMContentLoaded", function () {
    const cartIcon = document.getElementById("top");
    const subTotal = document.querySelector(".rowww");
    const Total = document.getElementById("total");
    const reset = document.querySelector(".delete");
    const submit = document.querySelector(".complete-butt");  
    let cartCount = 0;
    let subTotalAmount = 0;

    const exchangeRates = {
        usd: 1,    
        ngn: 1600, 
        ced: 16,   
    };

    let currentCurrency = 'usd'; 

    const currencySelect = document.getElementById('unit');
    currencySelect.addEventListener('change', function () {
        currentCurrency = this.value;
        updateCurrency();
    });

    const items = document.querySelectorAll(".item");

    items.forEach(function (item) {
        const minus = item.querySelector(".minus");
        const added = item.querySelector(".plus");
        const counting = item.querySelector(".result");
        const note = item.parentElement.querySelector(".tag");
        const itemPrice = parseFloat(item.getAttribute("data-price"));
        let count = 0;

        added.addEventListener("click", function () {
            count += 1;
            cartCount += 1;
            subTotalAmount += itemPrice;

            counting.textContent = count;
            cartIcon.textContent = cartCount;
            if (note) note.textContent = formatPrice(count * itemPrice);
            updateCurrency();
        });

        minus.addEventListener("click", function () {
            if (count > 0) {
                count -= 1;
                cartCount -= 1;
                subTotalAmount -= itemPrice;

                counting.textContent = count;
                cartIcon.textContent = cartCount;
                if (note) note.textContent = formatPrice(count * itemPrice);
                updateCurrency();
            }
        });
    });

    submit.addEventListener("click", function () {
        alert("Order Submitted!");
        const sub = formatPrice(subTotalAmount);
        const tot = formatPrice(subTotalAmount + 6); 

        console.log("Subtotal: " + sub);
        console.log("Total: " + tot);

        cartCount = 0;
        subTotalAmount = 0;

        items.forEach(function (item) {
            const counting = item.querySelector(".result");
            const note = item.querySelector(".tot");
            counting.textContent = 0;
            if (note) note.textContent = formatPrice(0);
        });

        cartIcon.textContent = cartCount;
        subTotal.textContent = "Subtotal: " + formatPrice(subTotalAmount);
        Total.textContent = "Total: " + formatPrice(subTotalAmount + 6);
    });

    reset.addEventListener("click", function () {
        cartCount = 0;
        subTotalAmount = 0;

        items.forEach(function (item) {
            const counting = item.querySelector(".result");
            const note = item.querySelector(".tot");
            counting.textContent = 0;
            if (note) note.textContent = formatPrice(0);
        });

        cartIcon.textContent = cartCount;
        subTotal.textContent = "Subtotal: " + formatPrice(subTotalAmount);
        Total.textContent = "Total: " + formatPrice(subTotalAmount + 6);
    });

    function formatPrice(amount) {
        if (currentCurrency === 'usd') {
            return "$" + amount.toFixed(2);
        } else if (currentCurrency === 'ngn') {
            return "₦" + (amount * exchangeRates.ngn).toFixed(2);
        } else if (currentCurrency === 'ced') {
            return "C" + (amount * exchangeRates.ced).toFixed(2);
        }
    }

    function updateCurrency() {
        subTotal.textContent = "Subtotal: " + formatPrice(subTotalAmount);
        Total.textContent = "Total: " + formatPrice(subTotalAmount + 6); // Adding fixed shipping fee
    }
});