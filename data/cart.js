export const cart = [];

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
      quantity: quantity,
    });
  }
}
