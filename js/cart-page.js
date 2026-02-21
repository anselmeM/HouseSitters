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

    // Clear existing content
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    let total = 0;

    if (cartItems.length === 0) {
        emptyMessage.classList.remove('hidden');
        cartContent.classList.add('hidden');
        return;
    }

    emptyMessage.classList.add('hidden');
    cartContent.classList.remove('hidden');

    cartItems.forEach(item => {
        const product = products.find(p => p.id === item.id);
        if (!product) return;

        const itemTotal = product.price * item.quantity;
        total += itemTotal;

        const itemEl = document.createElement('div');
        itemEl.className = 'flex items-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700';
        itemEl.style.cssText = "flex-wrap: wrap; gap: 1rem;";

        // Image Container
        const imgContainer = document.createElement('div');
        imgContainer.className = 'flex-shrink-0 overflow-hidden rounded-md';
        imgContainer.style.width = '6rem';
        imgContainer.style.height = '6rem';

        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.name;
        img.className = 'w-full h-full object-cover';
        imgContainer.appendChild(img);

        // Product Info
        const infoDiv = document.createElement('div');
        infoDiv.className = 'flex-1 ml-4 text-left';

        const title = document.createElement('h3');
        title.className = 'font-semibold text-lg';
        const link = document.createElement('a');
        link.href = `product.html?id=${product.id}`;
        link.className = 'hover:text-primary transition-colors';
        link.textContent = product.name;
        title.appendChild(link);

        const price = document.createElement('p');
        price.className = 'text-gray-600 dark:text-gray-400';
        price.textContent = `$${product.price.toFixed(2)}`;

        infoDiv.appendChild(title);
        infoDiv.appendChild(price);

        // Controls
        const controlsDiv = document.createElement('div');
        controlsDiv.className = 'flex items-center space-x-4 ml-4';

        const quantityDiv = document.createElement('div');
        quantityDiv.className = 'flex items-center border border-gray-300 dark:border-gray-600 rounded-md';

        const decreaseBtn = document.createElement('button');
        decreaseBtn.type = 'button';
        decreaseBtn.className = 'px-3 py-1 text-gray-600 dark:text-gray-400 hover:text-primary focus:outline-none';
        decreaseBtn.onclick = () => updateItemQuantity(item.id, item.quantity - 1);
        decreaseBtn.ariaLabel = 'Decrease quantity';
        decreaseBtn.textContent = '-';

        const qtyInput = document.createElement('input');
        qtyInput.type = 'number';
        qtyInput.min = '1';
        qtyInput.value = item.quantity;
        qtyInput.className = 'w-12 text-center border-none bg-transparent focus:ring-0 p-1';
        qtyInput.onchange = (e) => updateItemQuantity(item.id, e.target.value);
        qtyInput.ariaLabel = `Quantity for ${product.name}`;

        const increaseBtn = document.createElement('button');
        increaseBtn.type = 'button';
        increaseBtn.className = 'px-3 py-1 text-gray-600 dark:text-gray-400 hover:text-primary focus:outline-none';
        increaseBtn.onclick = () => updateItemQuantity(item.id, item.quantity + 1);
        increaseBtn.ariaLabel = 'Increase quantity';
        increaseBtn.textContent = '+';

        quantityDiv.appendChild(decreaseBtn);
        quantityDiv.appendChild(qtyInput);
        quantityDiv.appendChild(increaseBtn);

        const removeBtn = document.createElement('button');
        removeBtn.type = 'button';
        removeBtn.className = 'text-red-500 hover:text-red-700 focus:outline-none';
        removeBtn.onclick = () => removeItemFromCart(item.id);
        removeBtn.ariaLabel = `Remove ${product.name}`;

        const removeIcon = document.createElement('span');
        removeIcon.className = 'material-icons-outlined';
        removeIcon.textContent = 'delete';
        removeBtn.appendChild(removeIcon);

        controlsDiv.appendChild(quantityDiv);
        controlsDiv.appendChild(removeBtn);

        // Total Price
        const totalDiv = document.createElement('div');
        totalDiv.className = 'font-bold text-lg ml-8 text-right w-24';
        totalDiv.textContent = `$${itemTotal.toFixed(2)}`;

        itemEl.appendChild(imgContainer);
        itemEl.appendChild(infoDiv);
        itemEl.appendChild(controlsDiv);
        itemEl.appendChild(totalDiv);

        container.appendChild(itemEl);
    });

    subtotalEl.textContent = `$${total.toFixed(2)}`;
    totalEl.textContent = `$${total.toFixed(2)}`;
}

// Expose functions for inline onclick handlers if needed, though we attached them directly
window.updateItemQuantity = function(id, quantity) {
    cart.updateQuantity(id, quantity);
    renderCart();
};

window.removeItemFromCart = function(id) {
    cart.removeItem(id);
    renderCart();
};
