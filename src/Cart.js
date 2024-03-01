class Cart {
  constructor() {
    this.items = []
  }

  getItems() {
    return this.items
  }

  addItems(item) {
    if (!item) throw new Error()

    this.items.push(item)
  }
}

module.exports = Cart;
