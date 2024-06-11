let main = document.querySelector(".products-div")

function createItem(id, name,category,image, description, price){
    this.id = id
    this.name = name 
    this.category = category
    this.image = image
    this.description = description
    this.price = price
}

let item1 = new createItem(1, "Bar Chairs", "kitchen", "https://akhonamj.github.io/ecommerce_images/images/barChairs.jpg", "2 Kitchen Bar Chairs", 25000)
let item2 = new createItem(2, "Dressing Table", "bedroom", "https://akhonamj.github.io/ecommerce_images/images/luxury_dresser.jpg", "Bedroom white and gold dressing table", 21000)
let item3 = new createItem(3, "Couch", "lounge area", "https://akhonamj.github.io/ecommerce_images/images/couch.jpg", "comfy green couch", 45000)
let item4 = new createItem(4, "Bed", "bedroom", "https://akhonamj.github.io/ecommerce_images/images/bed3.jpg", "navy bed with headboard", 52000)
let item5 = new createItem(5, "Coffee table", "lounge area", "https://akhonamj.github.io/ecommerce_images/images/coffeeTable0.jpg"," golden coffee table", 18000)
let item6 = new createItem(6, "Dinning table set", "dinning", "https://akhonamj.github.io/ecommerce_images/images/dinningTable.jpg", "Dinning table with 12 dinning chairs", 42000 )

let items = [item1, item2, item3, item4, item5, item6]

localStorage.setItem('items', JSON.stringify(items))

let cart = []

items.forEach(item =>{
    main.innerHTML += `
    <div class="card" style="width: 18rem;">
    <img src="${item.image}">
    <div class="card-body">
    <h5 class="card-title">${item.name}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
     <button class="purchase" value="${item.id}">Purchase</button>

  </div>
</div>
    
    `
})
