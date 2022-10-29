// main shop

//initialization of services
// const tds = new TestDataService()

// let catalog = tds.getTestProducts()

let cart = new Cart(100)
cart.render("shopNavigation")

renderCatalog("root-catalog")