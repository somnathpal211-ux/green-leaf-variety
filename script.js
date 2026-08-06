let currentLanguage = "en";
let cart = [];

const productList = document.getElementById("product-list");
const searchBox = document.getElementById("searchBox");
const categoryFilter = document.getElementById("categoryFilter");
const cartCount = document.getElementById("cartCount");
const enterBtn = document.getElementById("enterBtn");
const cartButton = document.getElementById("cartButton");
function updateCart() {

  if (cartCount) {
    cartCount.innerText = cart.length;
  }

}

if (enterBtn) {

  enterBtn.addEventListener("click", () => {

    const section = document.querySelector(".categories");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth"
      });
    }

  });

}
function showProducts(list) {

  if (!productList) return;

  productList.innerHTML = "";

  list.forEach(product => {

    const name =
      currentLanguage === "bn"
      ? product.name_bn
      : product.name_en;

    productList.innerHTML += `
      <div class="product-card">

        <img src="${product.image || 'images/products/no-image.jpg'}" alt="${name}">

        <h3>${name}</h3>

        <p>${product.unit}</p>

        <p>₹ ${product.price || "Price on Request"}</p>

        <a
          class="order-btn"
          target="_blank"
          href="https://wa.me/918250266060?text=${encodeURIComponent("I want to order: " + name)}">

          💬 WhatsApp Order

        </a>

      </div>
    `;

  });

}
function filterProducts() {

  if (typeof products === "undefined") return;

  const keyword = searchBox
    ? searchBox.value.toLowerCase()
    : "";

  const category = categoryFilter
    ? categoryFilter.value
    : "all";

  const filtered = products.filter(product => {

    const matchName =
      product.name_en.toLowerCase().includes(keyword) ||
      product.name_bn.includes(keyword);

    const matchCategory =
      category === "all" ||
      product.category === category;

    return matchName && matchCategory;

  });

  showProducts(filtered);

}

if (searchBox) {
  searchBox.addEventListener("input", filterProducts);
}

if (categoryFilter) {
  categoryFilter.addEventListener("change", filterProducts);
}
function addToCart(product) {

  cart.push(product);

  updateCart();

}

document.addEventListener("click", (e) => {

  if (e.target.classList.contains("add-cart")) {

    const id = Number(e.target.dataset.id);

    const product = products.find(p => p.id === id);

    if (product) {
      addToCart(product);
    }

  }

});

if (cartButton) {

  cartButton.addEventListener("click", () => {

    if (cart.length === 0) {
      alert("Cart is empty!");
      return;
    }

    let message = "🛒 Green Leaf Variety Order\n\n";

    cart.forEach((item, i) => {
      message += (i + 1) + ". " + item.name_en + "\n";
    });

    window.open(
      "https://wa.me/918250266060?text=" + encodeURIComponent(message),
      "_blank"
    );

  });

}
window.addEventListener("load", () => {

  updateCart();

  if (typeof products !== "undefined") {
    filterProducts();
  }

});

console.log("🌿 Green Leaf Variety Loaded Successfully");