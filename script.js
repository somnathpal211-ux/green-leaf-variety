let currentLanguage = "en";
let cart = [];

const productList = document.getElementById("product-list");
const searchBox = document.getElementById("searchBox");
const categoryFilter = document.getElementById("categoryFilter");
const cartCount = document.getElementById("cartCount");
const enterBtn = document.getElementById("enterBtn");
function updateCart(){

  if(cartCount){
    cartCount.innerText = cart.length;
  }

}

if(enterBtn){

  enterBtn.addEventListener("click",()=>{

    document.querySelector(".categories").scrollIntoView({
      behavior:"smooth"
    });

  });

}
function showProducts(list){

  productList.innerHTML="";

  list.forEach(product=>{

    const name =
      currentLanguage==="bn"
      ? product.name_bn
      : product.name_en;

    productList.innerHTML += `
      <div class="product-card">

        <img src="${product.image || 'images/products/no-image.jpg'}" alt="${name}">

        <h3>${name}</h3>

        <p>${product.unit}</p>

        <p>₹ ${product.price}</p>

        <a
          class="order-btn"
          target="_blank"
          href="https://wa.me/918250266060?text=${encodeURIComponent("I want to order: "+name)}">

          💬 WhatsApp Order

        </a>

      </div>
    `;

  });

}
function filterProducts(){

  const keyword = searchBox.value.toLowerCase();

  const category = categoryFilter.value;

  const filtered = products.filter(product=>{

    const matchName =
      product.name_en.toLowerCase().includes(keyword) ||
      product.name_bn.includes(keyword);

    const matchCategory =
      category==="all" ||
      product.category===category;

    return matchName && matchCategory;

  });

  showProducts(filtered);

}
showProducts(products);

updateCart();

searchBox.addEventListener(
  "input",
  filterProducts
);

categoryFilter.addEventListener(
  "change",
  filterProducts
);
enBtn.addEventListener("click",()=>{

  currentLanguage="en";

  filterProducts();

});

bnBtn.addEventListener("click",()=>{

  currentLanguage="bn";

  filterProducts();

});
function addToCart(product){

  cart.push(product);

  updateCart();

}

document.addEventListener("click",(e)=>{

  if(e.target.classList.contains("add-cart")){

    const id=Number(e.target.dataset.id);

    const product=products.find(p=>p.id===id);

    if(product){

      addToCart(product);

    }

  }

});
document.getElementById("cartButton")
.addEventListener("click",()=>{

if(cart.length===0){

alert("Cart is empty!");

return;

}

let message="🛒 Green Leaf Variety Order%0A%0A";

cart.forEach((item,i)=>{

message += (i+1)+". "+item.name_en+"%0A";

});

window.open(
"https://wa.me/918250266060?text="+message,
"_blank"
);

});
window.addEventListener("load",()=>{

  if(typeof products!=="undefined"){

    filterProducts();

  }

});

console.log("🌿 Green Leaf Variety Loaded Successfully");