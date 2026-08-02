fetch("products.json")
.then(response => response.json())
.then(products => {

const productList = document.getElementById("product-list");
const searchBox = document.getElementById("searchBox");

function showProducts(list){

productList.innerHTML="";

list.forEach(product=>{

productList.innerHTML += `
<div class="product-card">
<h3>${product.name_en}</h3>
<p>${product.name_bn}</p>
<p>${product.unit}</p>
<p>₹ ${product.price || "--"}</p>
</div>
`;

});

}

showProducts(products);

searchBox.addEventListener("input",function(){

const keyword=this.value.toLowerCase();

const filtered=products.filter(item=>

item.name_en.toLowerCase().includes(keyword) ||

item.name_bn.includes(keyword)

);

showProducts(filtered);

});

})
.catch(error=>console.log(error));
