let main = document.querySelector(".products-div")
let searchBtn = document.querySelector(".btn")
let input = document.querySelector("input")
let selectCat = document.querySelector(".category")
let priceTen = document.querySelector(".ten")
let priceTwenty = document.querySelector(".twenty")



function createItem(id, name,category,image, description, price, quantity){
    this.id = id
    this.name = name 
    this.category = category
    this.image = image
    this.description = description
    this.price = price
    this.quantity = quantity
    }
    
let item1 = new createItem(1, "Bar Chairs", "Kitchen", "https://akhonamj.github.io/ecommerce_images/images/barChairs.jpg", "Elevate your kitchen with a pair of luxurious grey suede bar stools.  Gleaming gold accents add a touch of glamour, while the plush comfort invites lingering conversations.",  25000, 1)
let item2 = new createItem(2, "Dressing Table", "Bedroom", "https://akhonamj.github.io/ecommerce_images/images/luxury_dresser.jpg", "Indulge in a touch of whimsical charm with this dusty pink dressing table. Its soft, suede-like finish whispers elegance, while the playful hue creates a dreamy atmosphere perfect for your morning routine.",  21000, 1)
let item3 = new createItem(3, "Couch", "Lounge", "https://akhonamj.github.io/ecommerce_images/images/couch.jpg", "Embrace sophistication with this stunning green couch. The lush, suede-like fabric offers irresistible comfort, while the vibrant green hue injects a touch of personality. Gleaming gold legs add a touch of luxury, making this the perfect statement piece for your living room.", 45000, 1)
let item4 = new createItem(4, "Bed", "Bedroom", "https://akhonamj.github.io/ecommerce_images/images/bed3.jpg", "Create a serene escape in your bedroom with this queen-size blue headboard bed. The plush, suede-like fabric in a calming blue hue invites relaxation, while the elegant silhouette adds a touch of modern luxury.",  52000, 1)
let item5 = new createItem(5, "Coffee table", "Lounge", "https://akhonamj.github.io/ecommerce_images/images/coffeeTable0.jpg"," Add a touch of modern glam for your living room. This chic coffee table boasts a crisp white top that pairs perfectly with gleaming gold legs.  It's both stylish and sophisticated, offering the perfect platform for drinks, décor, or conversation starters.", 18000, 1)
let item6 = new createItem(6, "Dinning table set", "Dinning", "https://akhonamj.github.io/ecommerce_images/images/dinningTable.jpg", "Dine in dazzling style with this exquisite dining set. White and gold chairs offer a touch of modern elegance, their crisp white upholstery contrasting beautifully with gleaming gold accents. The sleek, clear glass table creates an airy feel, showcasing the beauty of your chairs and allowing light to flow freely through your dining space.", 42000, 1 )

let items = [item1, item2, item3, item4, item5, item6]

localStorage.setItem('items', JSON.stringify(items))

let cart = JSON.parse(localStorage.getItem('cart')) || [];
function displayItems(dynamic){
    dynamic.forEach(item =>{
        main.innerHTML += `
        <div id="card-products" class="card" style="width: 18rem;">
        <img src="${item.image}">
        <div class="card-body">
        <h5 class="card-title">${item.name} ${item.price}</h5>

        <!-- Button trigger modal -->
        <button type="button" class="btn-purchase" data-bs-toggle="modal" data-bs-target="#staticBackdrop${item.id}">
            View More
          </button>
          
          <!-- Modal -->
          <div class="modal fade" id="staticBackdrop${item.id}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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


    let buyBtns = document.querySelectorAll(".purchase")
    
  
  function addToCart(id) {
       let item = items.filter(object=> object.id === +id)[0]
    if (item) {
        let existingItem = cart.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            existingItem.quantity += 1; 
        } else {
            item.quantity = 1; 
            cart.push(item);
        }
        alert("Added item on cart!")
        localStorage.setItem("cart", JSON.stringify(cart));
        displayCartItems();
    }
}
  
  buyBtns.forEach(button=>{
  console.log('hehe');
  button.addEventListener("click", (event)=>{
        addToCart (event.target.value);  
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



priceTen.addEventListener("change", sortPriceTen);

function sortPriceTen() {
  let firstPriceOpt = items.filter(item => item.price >= 10000 && item.price < 20000) 
  main.innerHTML = ""

  displayItems(firstPriceOpt)
}


priceTwenty.addEventListener("change",sortPriceTwenty)

function sortPriceTwenty() {
  let scnPriceOpt = items.filter(item => item.price < 20000 && item.price < 30000) 
  main.innerHTML = ""

  displayItems(scnPriceOpt)
}

priceThirty.addEventListener("change",sortPriceThirty)

function sortPriceThirty() {
  let scnPriceOpt = items.filter(item => item.price < 20000 && item.price < 30000) 
  main.innerHTML = ""

  displayItems(scnPriceOpt)
}






