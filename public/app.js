async function loadProducts() {
    const response = await fetch("/api/products");
    const products = await response.json();

    const productContainer = document.getElementById("products");

    productContainer.innerHTML = "";

    products.forEach(product => {
        productContainer.innerHTML += `
            <div class="product-card">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <strong>${product.price} TL</strong>
                <button onclick="addToCart('${product._id}', '${product.name}', ${product.price})">Sepete Ekle</button>
            </div>
        `;
    });
}

loadProducts();

function addToCart(id, name, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({ id, name, price });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Ürün sepete eklendi.");
}