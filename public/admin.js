document.getElementById("productForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const product = {
        name: document.getElementById("name").value,
        description: document.getElementById("description").value,
        price: Number(document.getElementById("price").value),
        stock: Number(document.getElementById("stock").value)
    };

    const response = await fetch("/api/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
    });

    const message = document.getElementById("message");

    if (response.ok) {
        message.textContent = "Ürün başarıyla eklendi.";
        this.reset();
    } else {
        message.textContent = "Ürün eklenirken hata oluştu.";
    }
});

async function loadOrders() {
    const response = await fetch("/api/orders");
    const orders = await response.json();

    const ordersDiv = document.getElementById("orders");
    ordersDiv.innerHTML = "";

    if (orders.length === 0) {
        ordersDiv.innerHTML = "<p>Henüz sipariş yok.</p>";
        return;
    }

    orders.forEach(order => {
        const itemsText = order.items
            .map(item => `${item.name} - ${item.price} TL`)
            .join("<br>");

        ordersDiv.innerHTML += `
            <div class="product-card">
                <h3>Sipariş</h3>
                <p>${itemsText}</p>
                <strong>Toplam: ${order.totalPrice} TL</strong>
            </div>
        `;
    });
}

loadOrders();