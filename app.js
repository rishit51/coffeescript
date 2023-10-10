import API from "./services/API.js";
import proxiedStore from "./services/Store.js";
import { loadData } from "./services/Menu.js";
import Router from "./Router.js";
import ProductItem from "./components/ProductItem.js";
import { DetailsPage } from "./components/DetailsPage.js";
import { MenuPage } from "./components/MenuPage.js";
import { OrderPage } from "./components/OrderPage.js";
import CartItem from "./components/CartItem.js";
window.app = {};
app.store = proxiedStore;
app.router = Router;

window.addEventListener("DOMContentLoaded", () => {
  loadData();
  app.router.init();
});
window.addEventListener("appcartchange", (event) => {
  const badge = document.getElementById("badge");
  const qty = app.store.cart.reduce((acc, item) => acc + item.quantity, 0);
  badge.textContent = qty;
  badge.hidden = qty == 0;
});
