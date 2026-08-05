let currentLanguage = "en";

const productList = document.getElementById("product-list");
const searchBox = document.getElementById("searchBox");
const enBtn = document.getElementById("enBtn");
const bnBtn = document.getElementById("bnBtn");

function showProducts(list) {
  if (!productList) return;

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
      </div>
    `;
  });
}

showProducts(products);

if (searchBox) {
  searchBox.addEventListener("input", function () {
    const keyword = this.value.toLowerCase();

    const filtered = products.filter(item =>
      item.name_en.toLowerCase().includes(keyword) ||
      item.name_bn.toLowerCase().includes(keyword)
    );

    showProducts(filtered);
  });
}

if (enBtn) {
  enBtn.onclick = function () {
    currentLanguage = "en";
    showProducts(products);
  };
}

if (bnBtn) {
  bnBtn.onclick = function () {
    currentLanguage = "bn";
    showProducts(products);
  };
}
