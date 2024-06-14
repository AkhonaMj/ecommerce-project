 let cartTable = document.querySelector(".cart-table-body");
 let cart = JSON.parse(localStorage.getItem('cart')) || [];
 let clearBtn = document.querySelector(".clearBtn");
 let checkoutMsg = document.querySelector("span");

    function displayCartItems() {
      cartTable.innerHTML = '';
      cart.forEach(item => {
        cartTable.innerHTML +=   `
        <tr>
            <td><img src="${item.image}" alt="Product Image" style="width: 50px; height: 50px;"></td>
            <td>${item.name}</td>
            <td><span>${item.price}</span></td>
            <td>${item.quantity}</td>
            <td><span>${(item.price * item.quantity).toFixed(2)}</span></td>
        </tr>
        `;   
      });
    }
  
    displayCartItems(); 


clearBtn.addEventListener("click",clearCart)


function clearCart() {
  if (cart.length > 0) {
      cart = [];
      localStorage.setItem('cart', JSON.stringify(cart));
      checkoutMsg.innerHTML = "Thank you for shopping with us!";
      displayCartItems();

  }
}



    
    