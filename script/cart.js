 let cartTable = document.querySelector(".cart-table-body");
 let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function displayCartItems() {
      cartTable.innerHTML = '';
      cart.forEach(item => {
        cartTable.innerHTML +=   `
        <tr>
            <td><img src="${item.image}" alt="Product Image" style="width: 50px; height: 50px;"></td>
            <td>${item.name}</td>
            <td><span>${item.price}</span></td>
            <td><input type="number" value="${item.quantity}"></td>
            <td><span>${(item.price * item.quantity).toFixed(2)}</span></td>
        </tr>`;
      });
    }
  
    displayCartItems(); 


