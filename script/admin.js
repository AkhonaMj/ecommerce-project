let products = JSON.parse(localStorage.getItem('items')) || [];
let inputName = document.querySelector("#name");
let inputPrice = document.querySelector("#price");
let inputDescribe = document.querySelector("#description");
let inputImgUrl = document.querySelector("#image")
let inputCategory = document.querySelector("#category")
let addProductsBtn = document.querySelector(".saveProducts")
let tbody = document.querySelector("tbody")
let rmBtn = document.querySelectorAll(".rmBtn")


function NewProduct(id, name,category,image, description, price){
    this.id = +id
    this.name = name 
    this.category = category
    this.image = image
    this.description = description
    this.price = +price
    this.quantity = 1
}


function displayItems(dynamic){
    tbody.innerHTML = '';  
    dynamic.forEach(item =>{
         tbody.innerHTML += `
            <td>${item.name}</td>
            <td>${item.category}</td>
            <td><img src="${item.image}" style="width: 50px; height: 50px;"></td>
            <td>R${item.price}</td>
            <td><button class="rmBtn">Delete</button></td>
            <td><button>Edit</button></td>
  
    `
    })
    }
   displayItems(products)


addProductsBtn.addEventListener("click",addProducts)

function addProducts() {
    id = products[products.length-1].id+1
    products.splice(new NewProduct(id, inputName.value, inputCategory.value, inputImgUrl.value, inputDescribe.value, inputPrice.value));
    localStorage.setItem('products', JSON.stringify(products)); 
    displayItems(products);

}

rmBtn.forEach(button => button.addEventListener("click", removeProducts()));
function removeProducts(id) {
    products = products.filter(product => product.id !== +id);
    products = [];
    localStorage.setItem('products', JSON.stringify(products));
    displayItems(products);
}



      
