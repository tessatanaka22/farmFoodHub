document.addEventListener("DOMContentLoaded", function () {
    const cartIcon = document.getElementById("top");
    const subTotal = document.querySelector(".rowww");

    let cartCount = 0;

    const items = document.querySelectorAll(".item");

    items.forEach(function (item) {
        const minus = item.querySelector(".minus");
        const added = item.querySelector(".plus");
        const counting = item.querySelector(".result");
        const note = item.querySelector(".tag");
        
        const itemPrice = parseFloat(item.getAttribute("data-price"));
        let count = 0;

        added.addEventListener("click", function () {
            count += 1;
            cartCount += 1;

            counting.textContent = count;
            cartIcon.textContent = cartCount;
            note.textContent = "$" + (count * itemPrice);
            subTotal.textContent =  note.textContent

        });

        minus.addEventListener("click", function () {
            if (count > 0) {
                count -= 1;
                cartCount -= 1;

                counting.textContent = count;
                cartIcon.textContent = cartCount;

                note.textContent = "$" + (count * itemPrice);
                subTotal.textContent =  note.textContent

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
