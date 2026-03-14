document.addEventListener('DOMContentLoaded', () => {
    const cartItems = cart.getItems();
    const itemsContainer = document.getElementById('order-items');
    const totalEl = document.getElementById('order-total');
    let total = 0;

    if (cartItems.length === 0) {
        window.location.href = 'cart.html'; // Redirect to cart if empty
        return;
    }

    // ⚡ Bolt Performance Optimization:
    // Create an O(1) lookup map for products to avoid O(N*M) complexity in the rendering loop
    // This reduces the time complexity from O(N * M) to O(N + M)
    const productMap = products.reduce((acc, product) => {
        acc[product.id] = product;
        return acc;
    }, {});

    cartItems.forEach(item => {
        const product = productMap[item.id];
        if (!product) return;

        const itemTotal = product.price * item.quantity;
        total += itemTotal;

        const itemEl = document.createElement('div');
        itemEl.className = 'flex justify-between text-sm';

        const nameSpan = document.createElement('span');
        nameSpan.textContent = `${product.name} x ${item.quantity}`;

        const priceSpan = document.createElement('span');
        priceSpan.textContent = `$${itemTotal.toFixed(2)}`;

        itemEl.appendChild(nameSpan);
        itemEl.appendChild(priceSpan);
        itemsContainer.appendChild(itemEl);
    });

    totalEl.textContent = `$${total.toFixed(2)}`;

    document.getElementById('checkout-form').addEventListener('submit', (e) => {
        e.preventDefault();
        // Simulate processing
        const btn = e.target.querySelector('button[type="submit"]');
        btn.disabled = true;
        btn.textContent = 'Processing...';

        setTimeout(() => {
            cart.clearCart();
            window.location.href = 'success.html';
        }, 1500);
    });
});
