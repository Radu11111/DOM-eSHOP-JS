// product module
class Product {
    constructor(id,name,image,price) {
        this.id=id
        this.name=name
        this.image=image
        this.price=price
    }
    render() {
        //hw2:fix price render ---DONE
        let html = `
        <div class="card m-2" style="width: 18rem;">
            <img src="${this.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${this.name}</h5>
                <p class="card-text"> 
                ${JSON.stringify(this.price.amount)}
                ${this.price.currency}
                </p>
                <a href="#"data-product-id="${this.id}"class="btn btn-primary btn-add-to-cart">Add to cart</a>
            </div>
        </div>`
        return html
    }
}