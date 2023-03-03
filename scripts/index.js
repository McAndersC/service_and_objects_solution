// Vi henter vores service der giver adgang til data
import service from "./service.js";

// import {productTmpl, productDetailTmpl} from './templates.js';

// Referencer til DOM elementer.
const pageProduct = document.querySelector('.page-product');
const itemContainer = document.querySelector('.item-container');

// Vi opretter en reference til vores ProductFromFile metode i service.
let productsFromFile = service.getProductsFromFile();


const productTmpl = (product) => `<div>
    <img src="${product.image}"></img>
    <h1>${product.title}</h1>
    <p>${product.description}</p>
    <span>Author:${product.author} </span>
    <div><a href="product.html?id=${product.id}">Gå til produkt</a></div>
</div>`

const productDetailTmpl = (product) => `<div>
    <img src="${product.image}"></img>
    <h1>${product.title}</h1>
    <p>${product.description}</p>
    <span>Author:${product.author} </span>
</div>`


// Hvis vi har en Item Container så udføre vi følgende arbejde.
if(itemContainer) {

    // console.log('productsFromFile', productsFromFile)

    productsFromFile.then(productsInJson => {

        console.log(productsInJson)
        itemContainer.innerHTML = '';
        productsInJson.forEach( (product) => {

            itemContainer.innerHTML += productTmpl(product);
        
        });
    
    })
    
}

// Hvis vi er på produkt siden udføre vi følgende.
if(pageProduct) {

    let search = location.search;
    let productID = new URLSearchParams(search).get('id');

    const productContainer = document.querySelector('.product-container');
    const foundProduct = fileProducts.find( (product) => product.id == productID)

    productContainer.innerHTML = productDetailTmpl(foundProduct);

    console.log('foundProduct', foundProduct);

}
