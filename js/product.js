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







/*
	
id	1528
gender	"Men"
category	"Apparel"
subcategory	"Topwear"
articletype	"Jackets"
basecolour	"Black"
season	"Fall"
productionyear	2010
usagetype	"Sports"
productdisplayname	"Black Fleece Jacket"
parsed	1
soldout	0
relid	1528
price	3999
discount	49
variantname	"Ferrari Fleece"
brandname	"Puma"
brandbio	"PUMA is the World's Fastest Sports Brand"
brandimage	"http://assets.myntassets…932686-113016-3ff8sf.jpg"
agegroup	"Adults-Men"
colour1	"NA"
colour2	"NA"
fashiontype	"Fashion"
materialcaredesc	null
sizefitdesc	null
description	`<p style="text-align: ju…' and shoulders 18"</p>`
styledesc	null

*/