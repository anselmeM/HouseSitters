function escapeHTML(str) {
    return String(str).replace(/[&<>"']/g, function(match) {
        const escape = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;'
        };
        return escape[match];
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderCart();
});

function renderCart() {
    const cartItems = cart.getItems();
    const container = document.getElementById('cart-items');
    const emptyMessage = document.getElementById('empty-cart-message');
    const cartContent = document.getElementById('cart-content');
    const subtotalEl = document.getElementById('cart-subtotal');
    const totalEl = document.getElementById('cart-total');

    container.innerHTML = '';
    let total = 0;

    if (cartItems.length === 0) {
        emptyMessage.classList.remove('hidden');
        cartContent.classList.add('hidden');
        return;
    }

    emptyMessage.classList.add('hidden');
    cartContent.classList.remove('hidden');

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
        itemEl.className = 'flex items-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700';
        itemEl.style.cssText = "flex-wrap: wrap; gap: 1rem;";

        itemEl.innerHTML = `
            <div class="flex-shrink-0 overflow-hidden rounded-md" style="width: 6rem; height: 6rem;">
                <img src="${escapeHTML(product.image)}" alt="${escapeHTML(product.name)}" class="w-full h-full object-cover">
            </div>
            <div class="flex-1 ml-4 text-left">
                <h3 class="font-semibold text-lg"><a href="product.html?id=${escapeHTML(product.id)}" class="hover:text-primary transition-colors">${escapeHTML(product.name)}</a></h3>
                <p class="text-gray-600 dark:text-gray-400">$${product.price.toFixed(2)}</p>
            </div>
            <div class="flex items-center space-x-4 ml-4">
                <div class="flex items-center border border-gray-300 dark:border-gray-600 rounded-md">
                    <button type="button" aria-label="Decrease quantity of ${escapeHTML(product.name)}" class="decrease-qty-btn px-3 py-1 text-gray-600 dark:text-gray-400 hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-l-md">-</button>
                    <input type="number" min="1" value="${escapeHTML(item.quantity)}" aria-label="Quantity of ${escapeHTML(product.name)}" class="qty-input w-12 text-center border-none bg-transparent focus-visible:ring-2 focus-visible:ring-primary p-1">
                    <button type="button" aria-label="Increase quantity of ${escapeHTML(product.name)}" class="increase-qty-btn px-3 py-1 text-gray-600 dark:text-gray-400 hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-r-md">+</button>
                </div>
                <button type="button" class="remove-item-btn text-red-500 hover:text-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full p-1" aria-label="Remove ${escapeHTML(product.name)} from cart">
                    <span class="material-icons-outlined">delete</span>
                </button>
            </div>
            <div class="font-bold text-lg ml-8 text-right w-24">
                $${itemTotal.toFixed(2)}
            </div>
        `;

        // Attach listeners
        const decreaseBtn = itemEl.querySelector('.decrease-qty-btn');
        decreaseBtn.addEventListener('click', () => updateItemQuantity(item.id, item.quantity - 1));

        const increaseBtn = itemEl.querySelector('.increase-qty-btn');
        increaseBtn.addEventListener('click', () => updateItemQuantity(item.id, item.quantity + 1));

        const input = itemEl.querySelector('.qty-input');
        input.addEventListener('change', (e) => updateItemQuantity(item.id, e.target.value));

        const removeBtn = itemEl.querySelector('.remove-item-btn');
        removeBtn.addEventListener('click', () => removeItemFromCart(item.id));

        container.appendChild(itemEl);
    });

    subtotalEl.textContent = `$${total.toFixed(2)}`;
    totalEl.textContent = `$${total.toFixed(2)}`;
}

function updateItemQuantity(id, quantity) {
    cart.updateQuantity(id, quantity);
    renderCart();
}

function removeItemFromCart(id) {
    cart.removeItem(id);
    renderCart();
}
