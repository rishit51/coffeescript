const Router = {
  init: () => {
    const routes = document.querySelectorAll("a.navlink").forEach((a) => {
      const url = a.getAttribute("href");
      a.addEventListener("click", (event) => {
        event.preventDefault();
        Router.go(url);
      });
    });
    // Check for initial state
    window.addEventListener("popstate", () => {
      Router.go(event.state.route, false);
    });
    Router.go(location.pathname);
  },
  go: (route, addToHistory = true) => {
    if (addToHistory) {
      history.pushState({ route }, "", route);
    }
    let pageElement = null;
    switch (route) {
      case "/":
        pageElement = document.createElement("menu-page");

        break;
      case "/order":
        pageElement = document.createElement("order-page");

        break;
      default:
        if (route.startsWith("/product-")) {
          pageElement = document.createElement("details-page");
          pageElement.dataset.productId = route.substring(
            route.lastIndexOf("-") + 1
          );
        }
        break;
    }
    if (pageElement === null) {
    }
    document.querySelector("main").replaceChildren(pageElement);
    window.scrollX = 0;
    window.scrollY = 0;
  },
};

export default Router;
