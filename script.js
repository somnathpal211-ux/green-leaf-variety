let currentLanguage = "en";

const productList = document.getElementById("product-list");
const searchBox = document.getElementById("searchBox");
const enBtn = document.getElementById("enBtn");
const bnBtn = document.getElementById("bnBtn");

function showProducts(list) {
  productList.innerHTML = "";

  list.forEach(product => {
    const name = currentLanguage === "bn"
      ? product.name_bn
      : product.name_en;

    productList.innerHTML += `
      <div class="product-card">
        <h3>${name}</h3>
        <p>${product.unit}</p>
        <p>৳ ${product.price || "--"}</p>
        <a class="order-btn"
           target="_blank"
           href="https://wa.me/918250266060?text=${encodeURIComponent("I want to order: " + name)}">
           🟢 Order on WhatsApp
        </a>
      </div>
    `;
  });
}

showProducts(products);

if (searchBox) {
  searchBox.addEventListener("input", function () {
    const keyword = this.value.toLowerCase();

    const filtered = products.filter(product =>
      product.name_en.toLowerCase().includes(keyword) ||
      product.name_bn.includes(keyword)
    );

    showProducts(filtered);
  });
}

if (enBtn) {
  enBtn.addEventListener("click", function () {
    currentLanguage = "en";
    showProducts(products);
  });
}

if (bnBtn) {
  bnBtn.addEventListener("click", function () {
    currentLanguage = "bn";
    showProducts(products);
  });
}
