let currentLanguage = "en";

const productList = document.getElementById("product-list");
const searchBox = document.getElementById("searchBox");
const enBtn = document.getElementById("enBtn");
const bnBtn = document.getElementById("bnBtn");

function showProducts(list) {
  if (!productList) return;

  productList.innerHTML = "";

  list.forEach(product => {
    const name =
      currentLanguage === "bn"
        ? product.name_bn
        : product.name_en;

    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <h3>${name}</h3>
      <p>${product.unit}</p>
      <p>৳ ${product.price || "--"}</p>
    `;

    productList.appendChild(card);
  });
}

showProducts(products);
if (searchBox) {
  searchBox.addEventListener("input", function () {
    const keyword = this.value.toLowerCase();

    const filtered = products.filter(product =>
      product.name_en.toLowerCase().includes(keyword) ||
      product.name_bn.toLowerCase().includes(keyword)
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
