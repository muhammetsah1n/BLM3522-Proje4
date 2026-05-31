function loadCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItems = document.getElementById("cartItems");
    const totalPrice = document.getElementById("totalPrice");

    cartItems.innerHTML = "";

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Sepetiniz boş.</p>";
        totalPrice.textContent = "";
        return;
    }

    let total = 0;

    cart.forEach(item => {
        total += item.price;

        cartItems.innerHTML += `
            <div class="product-card">
                <h3>${item.name}</h3>
                <strong>${item.price} TL</strong>
            </div>
        `;
    });

    totalPrice.textContent = `Toplam: ${total} TL`;
}

function clearCart() {
    localStorage.removeItem("cart");
    loadCart();
}

loadCart();

async function checkout() {

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        alert("Sepet bos.");
        return;
    }

    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

    const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            items: cart,
            totalPrice
        })
    });

    if (response.ok) {
        alert("Siparis basariyla olusturuldu.");

        localStorage.removeItem("cart");

        loadCart();
    } else {
        alert("Siparis olusturulamadi.");
    }
}