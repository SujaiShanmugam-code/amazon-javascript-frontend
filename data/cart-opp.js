function Cart(localStorageKey) {
  const cart = {
    cartItems: undefined,
    loadFromStorage() {
      this.cartItems = JSON.parse(localStorage.getItem(localStorageKey));

      if (!this.cartItems) {
        this.cartItems = [
          {
            productId: "id3",
            quantity: 2,
            deliveryOptionsId: "1",
          },
          {
            productId: "id4",
            quantity: 1,
            deliveryOptionsId: "2",
          },
        ];
      }
    },
    saveToStorage() {
      localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
    },
    addToCart(productId) {
      let matchingItem;

      this.cartItems.forEach((cartItem) => {
        if (productId === cartItem.productId) {
          matchingItem = cartItem;
        }
      });

      if (matchingItem) {
        matchingItem.quantity += 1;
      } else {
        this.cartItems.push({
          productId: productId,
          quantity: 1,
          deliveryOptionsId: "1",
        });
      }

      this.saveToStorage();
    },
    removeFromCart(productId) {
      const newCart = [];

      this.cartItems.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
          newCart.push(cartItem);
        }
      });

      this.cartItems = newCart;

      this.saveToStorage();
    },
    updateDeliveryOption(productId, deliveryOptionId) {
      let matchingItem;

      this.cartItems.forEach((cartItem) => {
        if (productId === cartItem.productId) {
          matchingItem = cartItem;
        }
      });

      matchingItem.deliveryOptionsId = deliveryOptionId;

      this.saveToStorage();
    },
  };
  return cart;
}

const cart = Cart("cart-oop");
const businessCart = Cart("business-cart-oop");

cart.loadFromStorage();

businessCart.loadFromStorage();

cart.addToCart("dd82ca78-a18b-4e2a-9250-31e67412f98d");

console.log(cart);
console.log(businessCart);
