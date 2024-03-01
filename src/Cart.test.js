const Cart = require("./Cart")

describe("when using Cart object", () => {
    it("should get the cart items", () => {
        //Arrange
        const cart = new Cart()

        //Act
        const cartItems = cart.getItems()

        //Assert
        expect(cartItems).toBeDefined()
    })

    it("should add items to cart", () => {
        //Arrange
        const cart = new Cart()

        const item = {
            id: "1",
            price: "10"
        }

        //Act
        cart.addItems(item)

        //Assert
        expect(cart.items).toContainEqual(item)
    })

    it("should throw an error when the item pass to addItems is invalid eg: null", () => {
        const cart = new Cart()
        let error

        
        try {
            cart.addItems(null)            
        } catch (e) {
            error = e
        }

        expect(error).toBeDefined()
    })
})