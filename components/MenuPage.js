export class MenuPage extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const template = document.getElementById("menu-page-template");
    const content = template.content.cloneNode(true);
    this.root.appendChild(content);
    const styles = document.createElement("style");
    this.root.appendChild(styles);
    async function loadCSS() {
      const request = await fetch("/components/MenuPage.css");
      const css = await request.text();
      styles.innerText = css;
    }

    window.addEventListener("appmenuchanged", () => {
      this.render();
    });
    loadCSS();
    this.render();
  }
  render() {
    const menu = this.root.querySelector("#menu");
    menu.replaceChildren();
    if (app.store.menu) {
      for (let category of app.store.menu) {
        const liCategory = document.createElement("li");
        liCategory.innerHTML = `<h3>${category.name}</h3>
            <ul class='category'>
           
            </ul>`;
        menu.appendChild(liCategory);
        const ul = liCategory.querySelector("ul");
        category.products.forEach((element) => {
          const item = document.createElement("product-item");
          item.dataset.product = JSON.stringify(element);

          ul.appendChild(item);
        });
      }
    } else {
      menu.textContent = "...Loading...";
      console.log("render method called");
    }
  }
}

customElements.define("menu-page", MenuPage);
