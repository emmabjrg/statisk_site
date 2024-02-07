fetch("https://kea-alt-del.dk/t7/api/products")
    .then(res=>res.json())
    .then(data=>showProducts(data))


function showProducts(products){
    //looper igennem og kalder showProduct
    products.forEach(showProduct)
}

function showProduct(product){
    //console.log(product)
    //fange template
    const template = document.querySelector("#product_item_template").content;
    //lave en kopi
    const copy = template.cloneNode(true);
    //ændre indhold
    copy.querySelector(".item_name").textContent=product.productdisplayname;
    copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
    copy.querySelector("#type").textContent=product.articletype;
    copy.querySelector("#brand").textContent=product.brandname;
    copy.querySelector("#price").textContent=product.price;

    //appende til hvor den skal være i DOM
    document.querySelector("main").appendChild(copy);}