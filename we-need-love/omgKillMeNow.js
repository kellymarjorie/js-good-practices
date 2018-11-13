function checkToSeeIfFirstCartIsFull(cart) {
  if (cart.size > 100) {
    return true;
  }
}

let cartName = 'Shopping Cart';
let carts = [{
  name: cartName,
  size: 101
}];

let firstCart = carts[0];
let istheCartFull = checkToSeeIfFirstCartIsFull(firstCart);
console.log(istheCartFull);