let currentLanguage = "en";
let cart = [];

const productList = document.getElementById("product-list");
const searchBox = document.getElementById("searchBox");
const categoryFilter = document.getElementById("categoryFilter");
const cartCount = document.getElementById("cartCount");
const enBtn = document.getElementById("enBtn");
const bnBtn = document.getElementById("bnBtn");

function updateCart() {
  cartCount.innerText = cart.length;
}

function addToCart(id) {
  const product = products.find(p => p.id === id);

  if (product) {
    cart.push(product);
    updateCart();

    alert(product.name_en + " added to cart");
  }
}

function showProducts(list) {

  productList.innerHTML = "";

  list.forEach(product => {

    const name =
      currentLanguage === "bn"
      ? product.name_bn
      : product.name_en;

    productList.innerHTML += `
      <div class="product-card">

        <img src="images/no-image.png" alt="${name}">

        <h3>${name}</h3>

        <p>${product.unit}</p>

        <p>₹ ${product.price || "--"}</p>

        <button
          class="cart-btn"
          onclick="addToCart(${product.id})">
          🛒 Add To Cart
        </button>

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

  const keyword = searchBox.value.toLowerCase();

  const category = categoryFilter.value;

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

showProducts(products);

updateCart();

searchBox.addEventListener("input", filterProducts);

categoryFilter.addEventListener("change", filterProducts);

enBtn.addEventListener("click", () => {

  currentLanguage = "en";

  filterProducts();

});

bnBtn.addEventListener("click", () => {

  currentLanguage = "bn";

  filterProducts();

});

document.getElementById("cartButton").addEventListener("click", () => {

  if(cart.length === 0){
    alert("Your cart is empty.");
    return;
  }

  let message = "🛒 Green Leaf Variety Order\n\n";

  cart.forEach((item,index)=>{

    message += `${index+1}. ${item.name_en}\n`;

  });

  message += "\nPlease confirm my order.";

  window.open(
    "https://wa.me/918250266060?text=" +
    encodeURIComponent(message),
    "_blank"
  );

});
window.addEventListener("load", () => {
  filterProducts();
});

function clearCart() {
  cart = [];
  updateCart();
}

function updateCart() {
  if (cartCount) {
    cartCount.innerText = cart.length;
  }
}