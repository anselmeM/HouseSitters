document.addEventListener('DOMContentLoaded', () => {
    renderWishlist();
    wishlist.init(); // Initialize badge count
    cart.init(); // Initialize cart badge count
});

function renderWishlist() {
    const wishlistItems = wishlist.getItems(); // Array of IDs
    const container = document.getElementById('wishlist-items');
    const emptyMessage = document.getElementById('empty-wishlist-message');
    const wishlistContent = document.getElementById('wishlist-content');

    // Clear existing content
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

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

        // Image Container
        const imgContainer = document.createElement('div');
        imgContainer.className = 'relative aspect-square overflow-hidden';

        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.name;
        img.className = 'w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500';

        const removeBtn = document.createElement('button');
        removeBtn.type = 'button';
        removeBtn.ariaLabel = `Remove ${product.name} from wishlist`;
        removeBtn.className = 'absolute top-4 right-4 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md hover:text-red-500 transition-colors z-10';
        removeBtn.onclick = () => removeFromWishlist(product.id);

        const closeIcon = document.createElement('span');
        closeIcon.className = 'material-icons-outlined';
        closeIcon.textContent = 'close';
        removeBtn.appendChild(closeIcon);

        imgContainer.appendChild(img);
        imgContainer.appendChild(removeBtn);

        // Product Info
        const infoDiv = document.createElement('div');
        infoDiv.className = 'p-4';

        const title = document.createElement('h3');
        title.className = 'font-semibold text-lg mb-2';
        const link = document.createElement('a');
        link.href = `product.html?id=${product.id}`;
        link.className = 'hover:text-primary transition-colors';
        link.textContent = product.name;
        title.appendChild(link);

        const price = document.createElement('p');
        price.className = 'text-gray-600 dark:text-gray-400 mb-4';
        price.textContent = `$${product.price.toFixed(2)}`;

        const addToCartBtn = document.createElement('button');
        addToCartBtn.onclick = () => addToCart(product.id);
        addToCartBtn.ariaLabel = `Add ${product.name} to cart`;
        addToCartBtn.className = 'w-full bg-primary text-white font-bold py-2 px-4 rounded hover:bg-orange-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2';
        addToCartBtn.textContent = 'Add to Cart';

        infoDiv.appendChild(title);
        infoDiv.appendChild(price);
        infoDiv.appendChild(addToCartBtn);

        itemEl.appendChild(imgContainer);
        itemEl.appendChild(infoDiv);

        container.appendChild(itemEl);
    });
}

// Expose functions for inline onclick handlers if needed, though we used direct onclick
window.removeFromWishlist = function(id) {
    wishlist.removeItem(id);
    renderWishlist();
};

window.addToCart = function(id) {
    cart.addItem(id);
};
