let currentLanguage = "en";

const productList = document.getElementById("product-list");
const searchBox = document.getElementById("searchBox");
const categoryFilter = document.getElementById("categoryFilter");
const enBtn = document.getElementById("enBtn");
const bnBtn = document.getElementById("bnBtn");

function showProducts(list) {
  productList.innerHTML = "";

  list.forEach(product => {

    const name =
      currentLanguage === "bn"
        ? product.name_bn
        : product.name_en;

    productList.innerHTML += `
      <div class="product-card">
        <h3>${name}</h3>

        <p>${product.unit}</p>

        <p>৳ ${product.price || "--"}</p>

        <a
          class="order-btn"
          target="_blank"
          href="https://wa.me/918250266060?text=${encodeURIComponent("I want to order: " + name)}">
          🟢 Order on WhatsApp
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
      category === "All Categories" ||
      product.category === category;

    return matchName && matchCategory;

  });

  showProducts(filtered);

}

showProducts(products);

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
