import { ShoppingCart } from '../src/bascket.js';


describe('ShoppingCar', () => {
    let cart;

    beforeEach(() => {
        cart = new ShoppingCart;
    })

    test('Create cart', () => {        
        expect(cart.makeCart()).toEqual({items: []});
    })

    test('add item in cart', () => {
        cart.addItem({ name: "car", price: 3 }, 5);
        expect(cart.items.length).toEqual(1);
        cart.addItem({ name: "house", price: 10 }, 2);
        expect(cart.items.length).toEqual(2);
    })

    test('get items from cart ', () => {
        cart.addItem({ name: "car", price: 3 }, 5)
        expect(cart.getItems()).toEqual([{items: { name: "car", price: 3 }, count: 5}]);
    })

    test('get cost all items', () => {
        cart.addItem({ name: "car", price: 3 }, 5);
        cart.addItem({ name: "house", price: 10 }, 2);
        expect(cart.getCost()).toEqual(3 * 5 + 10 * 2);
    })

    test('get cost all items', () => {
        cart.addItem({ name: "car", price: 3 }, 5);
        cart.addItem({ name: "house", price: 10 }, 2);
        expect(cart.getCount()).toEqual(5 + 2);
    })
})


const cart = new ShoppingCart();
cart.addItem({ name: "car", price: 3 }, 5);
cart.addItem({ name: "house", price: 10 }, 2);
console.log(cart.getItems().length); // 2
console.log(cart.getCost()); // 35
console.log(cart.getCount()); // 7
cart.addItem({ name: "house", price: 10 }, 1);
console.log(cart.getItems().length); // 3
console.log(cart.getCost()); // 45
