

document.addEventListener("DOMContentLoaded", function () {
    const cartIcon = document.getElementById("top");
    const subTotal = document.querySelector(".rowww");
    const Total = document.getElementById("total");
    const reset = document.querySelector(".delete");
    const submit = document.querySelector(".complete-butt");
    const tax = document.getElementById("tax");
    const delivery = document.getElementById("delivery")
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
        const note = item.querySelector(".tot");
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
        if (cartCount === 0) {
            alert("Your cart is empty!");
            return;
        }

        const taxAmount = subTotalAmount * 0.10;
        const totalAmount = subTotalAmount + taxAmount;

        alert("Order Submitted!");
        console.log("Subtotal: " + formatPrice(subTotalAmount));
        console.log("Tax (10%): " + formatPrice(taxAmount));
        console.log("Total: " + formatPrice(totalAmount));

        cartCount = 0;
        subTotalAmount = 0;

        items.forEach(function (item) {
            const counting = item.querySelector(".result");
            const note = item.querySelector(".tot");
            counting.textContent = 0;
            if (note) note.textContent = formatPrice(0);
        });

        cartIcon.textContent = cartCount;
        updateCurrency();
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
        updateCurrency();
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
        const taxAmount = subTotalAmount * 0.05;
        const deliveryAmount = subTotalAmount * 0.10;
        const totalAmount = subTotalAmount + taxAmount + deliveryAmount;
    
        subTotal.textContent = formatPrice(subTotalAmount);
        tax.textContent = formatPrice(taxAmount);
        delivery.textContent = formatPrice(deliveryAmount);
        Total.textContent = "Total: " + formatPrice(totalAmount);
    }
});
