// document.addEventListener("DOMContentLoaded", function() {
    let cartTable = document.querySelector(".cart-table-body");
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    function displayCartItems() {
      cartTable.innerHTML = '';
      cart.forEach(item => {
        cartTable.innerHTML += `
          <tr>
            <td>${item.name}</td>
            <td><span id="amount">${item.price}</span></td>
          
          </tr>
        `;
      });
    }
  
    displayCartItems(); 
//   });
  