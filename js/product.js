// https://kea-alt-del.dk/t7/api/products/1528

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://kea-alt-del.dk/t7/api/products/"+ id )
    .then(res=>res.json())
    .then((data)=>showProduct(data));

function showProduct(product){
    document.querySelector(".name_info").textContent =
        product.productdisplayname;
    document.querySelector(".brand").textContent = 
        product.brandname;
    document.querySelector(".price1").textContent =
        product.price;
    document.querySelector(".season").textContent = 
        product.season;
    document.querySelector(".type").textContent =
        product.articletype;
    document.querySelector(".number").textContent =
        product.id;
    document.querySelector(".site_id").textContent =
        product.productdisplayname;
    document.querySelector(".product_img").src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
}
