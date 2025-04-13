// document.addEventListener("DOMContentLoaded", function () {
//     const cartIcon = document.getElementById("top");
//     const subTotal = document.querySelector(".rowww");

//     let cartCount = 0;

//     const items = document.querySelectorAll(".item");

//     items.forEach(function (item) {
//         const minus = item.querySelector(".minus");
//         const added = item.querySelector(".plus");
//         const counting = item.querySelector(".result");
//         const note = item.querySelector(".tag");
        
//         const itemPrice = parseFloat(item.getAttribute("data-price"));
//         let count = 0;

//         added.addEventListener("click", function () {
//             count += 1;
//             cartCount += 1;

//             counting.textContent = count;
//             cartIcon.textContent = cartCount;
//             note.textContent = "$" + (count * itemPrice);
//             subTotal.textContent =  note.textContent

//         });

//         minus.addEventListener("click", function () {
//             if (count > 0) {
//                 count -= 1;
//                 cartCount -= 1;

//                 counting.textContent = count;
//                 cartIcon.textContent = cartCount;

//                 note.textContent = "$" + (count * itemPrice);
//                 subTotal.textContent =  note.textContent

//             }
//         });
//     });
// });



document.addEventListener("DOMContentLoaded", function () {
    const cartIcon = document.getElementById("top");
    const subTotal = document.querySelector(".rowww");
    const Total = document.getElementById("total");
    const reset = document.querySelector(".delete")

    let cartCount = 0;
    let subTotalAmount = 0;

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
            if (note) note.textContent = "$" + (count * itemPrice).toFixed(2);
            subTotal.textContent = "$" + subTotalAmount.toFixed(2);
            Total.textContent = "$" + (subTotalAmount + 6).toFixed(2);
        });

        minus.addEventListener("click", function () {
            if (count > 0) {
                count -= 1;
                cartCount -= 1;
                subTotalAmount -= itemPrice;

                counting.textContent = count;
                cartIcon.textContent = cartCount;
                if (note) note.textContent = "$" + (count * itemPrice).toFixed(2);
                subTotal.textContent = "$" + subTotalAmount.toFixed(2);
                Total.textContent = "$" + (subTotalAmount + 6).toFixed(2);
            }
        });
    });
});




// buttonEl.addEventListener("click", function(){
    
//     if( count > 0){
//         message = "added"
//         note.textContent = message
         
//          cartTotal += count
//      cart.textContent = cartTotal
    
//       count = 0
//     counting.textContent = 0
//     }
//     setTimeout(() => {
//             note.textContent = ""
//         }, 1000)
//     })
