import { addToCart, cart, loadFromStorage } from "../../../data/cart.js";

describe("Test suite : Add to Cart function", () => {
  it("adds an existing prodcut in the cart", () => {
    spyOn(localStorage, "setItem");
    spyOn(localStorage, "getItem").and.callFake(() => {
      return JSON.stringify([
        {
          productId: "id3",
          quantity: 2,
          deliveryOptionsId: "1",
        },
      ]);
    });
    loadFromStorage();
    addToCart("id3");
    expect(cart.length).toEqual(1);
    expect(cart[0].productId).toEqual("id3");
    expect(cart[0].quantity).toEqual(3);
  });

  it("adds a new product in the cart", () => {
    spyOn(localStorage, "setItem");
    spyOn(localStorage, "getItem").and.callFake(() => {
      return JSON.stringify([]);
    });
    loadFromStorage();
    addToCart("id3");
    expect(cart.length).toEqual(1);
    expect(cart[0].productId).toEqual("id3");
    expect(cart[0].quantity).toEqual(1);
  });
});
