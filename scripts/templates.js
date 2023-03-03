export const productTmpl = (product) => `<div>
    <img src="${product.image}"></img>
    <h1>${product.title}</h1>
    <p>${product.description}</p>
    <span>Author:${product.author} </span>
    <div><a href="product.html?id=${product.id}">Gå til produkt</a></div>
</div>`

export const productDetailTmpl = (product) => `<div>
    <img src="${product.image}"></img>
    <h1>${product.title}</h1>
    <p>${product.description}</p>
    <span>Author:${product.author} </span>
</div>`
