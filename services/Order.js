import { getProductById } from "./Menu.js";

export async function addToCart(id) {
  const product = await getProductById(id);
  console.log(id);
  const results = app.store.cart.filter(
    (prodInCart) => prodInCart.product.id === id
  );

  if (results.length == 1) {
    app.store.cart = app.store.cart.map((p) => {
      return p.product.id === id ? { ...p, quantity: p.quantity + 1 } : p;
    });
  } else {
    app.store.cart = [...app.store.cart, { product, quantity: 1 }];
    console.log("already in not cart");
  }
}

export function removeFromCart(id, many = false) {
  if (many == false) {
    const prood = app.store.cart.filter((p) => p.product.id == id);
    if (prood[0].quantity == 1) {
      app.store.cart = app.store.cart.filter((p) => p.product.id !== id);
    } else {
      app.store.cart = app.store.cart.map((p) => {
        return p.product.id === id ? { ...p, quantity: p.quantity - 1 } : p;
      });
    }
  } else {
    app.store.cart = app.store.cart.filter((p) => p.product.id !== id);
  }
}
