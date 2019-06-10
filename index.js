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
        itemsArray.push(' ' + item + ' at $' + price);
      }
      
      if (itemsArray.length === 1) {
        return 'In your cart, you have' + itemsArray + '.';
      } else if (itemsArray.length === 2) {
        return 'In your cart, you have' + itemsArray[0] + ', and' + itemsArray[1] + '.';
      } else {
        var firstItemsArray = itemsArray.slice(0,-1)
        return 'In your cart, you have' + firstItemsArray.join(',') + ', and' + itemsArray[itemsArray.length - 1] + '.';
      }
  }
}


function total() {
  var sum = 0;
  for (var i = 0; i < cart.length; i += 1) {
    var eachItem = cart[i];
    var price = eachItem.itemPrice;
    sum += price;
    }
  
  return sum;
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
