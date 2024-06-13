let products = JSON.parse(localStorage.getItem('products')) || [];
let main = document.querySelector("products-div")
let inputId = document.querySelector("#product-id");
let inputName = document.querySelector("#product-name");
let inputPrice = document.querySelector("#product-price");
let inputDescribe = document.querySelector("#product-description")
let inputImage = document.querySelector("#product-image")
let button = document.querySelector("button")


function displayProducts(something) {
    something.innerHTML = '';
        products.forEach((product, index) => {
            main.innerHTML += `
                <tr>
                    <td>${product.name}</td>
                    <td>${product.price.toFixed(2)}</td>
                    <td>${product.description}</td>
                    <td><img src="${product.image}" alt="Product Image" style="width: 50px; height: 50px;"></td>
                </tr>`;
        });
    }

    