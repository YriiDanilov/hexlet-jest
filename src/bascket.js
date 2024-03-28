export class ShoppingCart {

  constructor() {
    this.items = [];
  }

  makeCart() {
    return new ShoppingCart();
  }

  addItem(items, count) {
    this.items.push({items, count})
  }

  getItems() {
    return this.items;
  }

  getCost() {
    let totalPrice = 0;
    for (let item of this.items) {
      totalPrice += item.items.price * item.count;
    }
    return totalPrice;
  }

  getCount() {
    let totalCount = 0;
    for (let item of this.items) {
      totalCount += item.count;
    }
    return totalCount;
  }

}





/* const cart = new ShoppingCart();
cart.addItem({ name: "car", price: 3 }, 5);
cart.addItem({ name: "house", price: 10 }, 2);
console.log(cart.getItems().length); // 2
console.log(cart.getCost()); // 35
console.log(cart.getCount()); // 7
cart.addItem({ name: "house", price: 10 }, 1);
console.log(cart.getItems().length); // 3
console.log(cart.getCost()); // 45
 */