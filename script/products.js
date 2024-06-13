let main = document.querySelector(".products-div")
let buyBtns = document.querySelectorAll(".purchase")
let searchBtn = document.querySelector(".btn")
let input = document.querySelector("input")
let selectCat = document.querySelector(".category")
let selectPrice = document.querySelector(".price")


function createItem(id, name,category,image, description, price){
    this.id = id
    this.name = name 
    this.category = category
    this.image = image
    this.description = description
    this.price = price
}

let item1 = new createItem(1, "Bar Chairs", "Kitchen", "https://akhonamj.github.io/ecommerce_images/images/barChairs.jpg", "2Kitchen Bar chair", "R" + 25000)
let item2 = new createItem(2, "Dressing Table", "Bedroom", "https://akhonamj.github.io/ecommerce_images/images/luxury_dresser.jpg", "Bedroom dust pink dressing table", "R" + 21000)
let item3 = new createItem(3, "Couch", "Lounge", "https://akhonamj.github.io/ecommerce_images/images/couch.jpg", "Comfy green 2 seater couch", "R" + 45000)
let item4 = new createItem(4, "Bed", "Bedroom", "https://akhonamj.github.io/ecommerce_images/images/bed3.jpg", "navy bed with headboard", "R" + 52000)
let item5 = new createItem(5, "Coffee table", "Lounge", "https://akhonamj.github.io/ecommerce_images/images/coffeeTable0.jpg"," golden coffee table","R" + 18000)
let item6 = new createItem(6, "Dinning table set", "Dinning", "https://akhonamj.github.io/ecommerce_images/images/dinningTable.jpg", "Dinning table with 12 dinning chairs", "R" + 42000 )

let items = [item1, item2, item3, item4, item5, item6]

localStorage.setItem('items', JSON.stringify(items))

// let cart = []
function displayItems(dynamic){
    dynamic.forEach(item =>{
        main.innerHTML += `
        <div id="card-products" class="card" style="width: 18rem;">
        <img src="${item.image}">
        <div class="card-body">
        <h5 class="card-title">${item.name} ${item.price}</h5>

                   <!-- Button trigger modal -->
          <button type="button" class="btn-purchase" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            View More
          </button>

          <!-- Modal -->
          <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="staticBackdropLabel">Product Description</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                 <p class="card-text">${item.description}</p>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary " >Add To Cart</button>
                </div>
              </div>
            </div>
          </div>
        
       
         <button class="purchase" value="${item.id}">Add To Cart</button>

    
      </div>
    </div>
        
        `
    })
}
displayItems(items)


function addToCart(id){
    let item = items.filter(object=> object.id === +id)[0]
    cart.push(item)

    localStorage.setItem("cart", JSON.stringify(cart))
}

buyBtns.forEach(button=>{
  button.addEventListener("click", (event)=>{
        addToCart(event.target.value);  
      })
})


searchBtn.addEventListener("click", (e)=>{
    e.preventDefault()
    search()
})

function search() {

  
  let filteredItems = items.filter(item => item.name.toLowerCase().includes(input.value.toLowerCase())
    );
    main.innerHTML = ""
    displayItems(filteredItems)
    

}


selectCat.addEventListener("change",filterByCat)

function filterByCat() {
  
    let categoryItems = items.filter(item => item.category.includes(selectCat.value));
    
    main.innerHTML = ""
    displayItems(categoryItems)
    
}



function filterbyPrice() {
  const selectedPrice = parseInt(selectPrice.value);
  let itemsWithPriceRange = items;

  if (selectedPrice > 0) {
    itemsWithPriceRange = items.filter(item => item.price >= selectedPrice);
  }

  main.innerHTML = ""; // Clear previous items
  displayItems(itemsWithPriceRange);
}

// Add event listener
selectPrice.addEventListener("change", filterbyPrice);




