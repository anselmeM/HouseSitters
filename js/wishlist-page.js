document.addEventListener('DOMContentLoaded', () => {
    renderWishlist();
    if (typeof wishlist !== 'undefined') wishlist.init();
    if (typeof cart !== 'undefined') cart.init();
});

function renderWishlist() {
    const wishlistItems = wishlist.getItems(); // Array of IDs
    const container = document.getElementById('wishlist-items');
    const emptyMessage = document.getElementById('empty-wishlist-message');
    const wishlistContent = document.getElementById('wishlist-content');

    container.innerHTML = '';

    if (wishlistItems.length === 0) {
        emptyMessage.classList.remove('hidden');
        wishlistContent.classList.add('hidden');
        return;
    }

    emptyMessage.classList.add('hidden');
    wishlistContent.classList.remove('hidden');

    wishlistItems.forEach(productId => {
        const product = products.find(p => p.id === productId);
        if (!product) return;

        const itemEl = document.createElement('div');
        itemEl.className = 'bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden group relative';

        itemEl.innerHTML = `
            <div class="relative aspect-square overflow-hidden">
                <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500">
                <button type="button" aria-label="Remove from wishlist" class="remove-wishlist-btn absolute top-4 right-4 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md hover:text-red-500 transition-colors z-10">
                    <span class="material-icons-outlined">close</span>
                </button>
            </div>
            <div class="p-4">
                <h3 class="font-semibold text-lg mb-2"><a href="product.html?id=${product.id}" class="hover:text-primary transition-colors">${product.name}</a></h3>
                <p class="text-gray-600 dark:text-gray-400">$${product.price.toFixed(2)}</p>
                <button class="add-to-cart-btn w-full bg-primary text-white font-bold py-2 px-4 rounded hover:bg-orange-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                    Add to Cart
                </button>
            </div>
        `;

        const removeBtn = itemEl.querySelector('.remove-wishlist-btn');
        removeBtn.addEventListener('click', () => removeFromWishlist(product.id));

        const addCartBtn = itemEl.querySelector('.add-to-cart-btn');
        addCartBtn.addEventListener('click', () => addToCart(product.id));

        container.appendChild(itemEl);
    });
}

function removeFromWishlist(id) {
    wishlist.removeItem(id);
    renderWishlist();
}

function addToCart(id) {
    cart.addItem(id);
}
