document.addEventListener('DOMContentLoaded', () => {
  const productsGrid = document.getElementById('products-grid');

  if (productsGrid && typeof products !== 'undefined') {
    productsGrid.innerHTML = products.map(product => {
      // Determine if original price should be shown
      const priceDisplay = product.originalPrice
        ? `<span class="text-sm text-gray-500 line-through mr-2">$${product.originalPrice.toFixed(2)}</span>$${product.price.toFixed(2)}`
        : `$${product.price.toFixed(2)}`;

      return `
        <div class="group">
          <div class="relative rounded-lg overflow-hidden aspect-square mb-4">
            <a href="product.html?id=${product.id}">
              <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy">
            </a>
            <button type="button" class="wishlist-toggle absolute top-4 right-4 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100 z-10" data-product-id="${product.id}" onclick="toggleWishlist('${product.id}')" aria-label="Add to wishlist">
              <span class="material-icons-outlined text-gray-400">favorite_border</span>
            </button>
            <button type="button" aria-label="Add ${product.name} to cart" onclick="addToCart('${product.id}')" class="absolute bottom-4 right-4 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
              <span class="material-icons-outlined text-primary">add_shopping_cart</span>
            </button>
          </div>
          <a href="product.html?id=${product.id}"><h3 class="font-semibold text-lg hover:text-primary transition-colors">${product.name}</h3></a>
          <div class="flex items-center">
            <p class="text-gray-600 dark:text-gray-400">${priceDisplay}</p>
          </div>
        </div>
      `;
    }).join('');

    // Re-initialize wishlist buttons to set correct state (filled/outline)
    if (typeof wishlist !== 'undefined' && wishlist.updateWishlistButtons) {
        wishlist.updateWishlistButtons();
    }
  }
});
