export let cart = JSON.parse(localStorage.getItem("cart"));

if (!cart) {
  cart = [
    {
      productId: "id3",
      quantity: 2,
      deliveryOptionId: "1",
    },
    {
      productId: "id4",
      quantity: 1,
      deliveryOptionId: "2",
    },
  ];
}

function saveToStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function addToCart(productId) {
  let matchingItem;

  cart.forEach((CartItem) => {
    if (productId === CartItem.productId) {
      matchingItem = CartItem;
    }
  });

  const addedToCart = document.querySelector(`.js-added-to-cart-${productId}`);

  addedToCart.classList.add("added-to-cart-visible");

  setTimeout(() => {
    addedToCart.classList.remove("added-to-cart-visible");
  }, 2000);

  const quantitySelector = document.querySelector(
    `.js-quantity-selector-${productId}`
  );

  let quantity = Number(quantitySelector.value);

  if (matchingItem) {
    matchingItem.quantity += quantity;
  } else {
    cart.push({
      productId: productId,
      quantity: 1,
      deliveryOptionId: "2",
    });
  }
  saveToStorage();
}

export function removeFromCart(productId) {
  const newCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });
  cart = newCart;

  saveToStorage();
}
