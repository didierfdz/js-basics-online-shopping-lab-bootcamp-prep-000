var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var obj = {
  'itemName': item,
  'itemPrice': Math.floor(Math.random() * 100)
 };
 
 cart.push(obj);
 return obj.itemName + ' has been added to your cart.';
}

function viewCart() {
  if (cart.length === 0) {
    return 'Your shopping cart is empty.';
  } else {
      var itemsArray = [];
      for (var i = 0; i < cart.length; i += 1) {
        var eachItem = cart[i];
        var item = eachItem.itemName;
        var price = eachItem.itemPrice;
        itemsArray.push(item + ' at $' + price);
      }
      
      return 'In your cart, you have ' + itemsArray + '.';
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
