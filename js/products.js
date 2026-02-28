document.addEventListener('DOMContentLoaded', () => {
  const productsGrid = document.getElementById('products-grid');

  // Simple HTML escaper
  const escapeHTML = (str) => {
    if (str == null) return '';
    return String(str).replace(/[&<>'"]/g, tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
    }[tag]));
  };

  if (productsGrid && typeof products !== 'undefined') {
    const urlParams = new URLSearchParams(window.location.search);
    const collectionFilter = urlParams.get('collection');
    const categoryFilter = urlParams.get('category');
    const searchFilter = urlParams.get('search');

    let filteredProducts = products;

    if (collectionFilter) {
      filteredProducts = filteredProducts.filter(p => p.collections && p.collections.includes(collectionFilter));
      const pageTitle = document.querySelector('h1.text-4xl.font-bold.mb-8');
      if (pageTitle) pageTitle.textContent = `${collectionFilter} Collection`;
    }

    if (categoryFilter) {
       filteredProducts = filteredProducts.filter(p => p.category === categoryFilter);
       const pageTitle = document.querySelector('h1.text-4xl.font-bold.mb-8');
       if (pageTitle) pageTitle.textContent = categoryFilter;
    }

    if (searchFilter) {
        const term = searchFilter.toLowerCase();
        filteredProducts = filteredProducts.filter(p =>
            p.name.toLowerCase().includes(term) ||
            (p.description && p.description.toLowerCase().includes(term))
        );
        const pageTitle = document.querySelector('h1.text-4xl.font-bold.mb-8');
        if (pageTitle) pageTitle.textContent = `Search results for "${searchFilter}"`;
    }

    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = `<p class="col-span-full text-center text-gray-500 text-xl py-12">No products found.</p>`;
    } else {
        productsGrid.innerHTML = filteredProducts.map(product => {
          // Determine if original price should be shown
          const priceDisplay = product.originalPrice
            ? `<span class="text-sm text-gray-500 line-through mr-2">$${product.originalPrice.toFixed(2)}</span>$${product.price.toFixed(2)}`
            : `$${product.price.toFixed(2)}`;

          // Check wishlist state for initial render
          const inWishlist = typeof wishlist !== 'undefined' && wishlist.isInWishlist(product.id);
          const wishlistIcon = inWishlist ? 'favorite' : 'favorite_border';
          const wishlistClass = inWishlist ? 'text-red-500' : 'text-gray-400';
          const wishlistLabel = inWishlist ? 'Remove from wishlist' : 'Add to wishlist';

          const safeId = escapeHTML(product.id);
          const safeName = escapeHTML(product.name);
          const safeImage = escapeHTML(product.image);

          return `
            <div class="group">
              <div class="relative rounded-lg overflow-hidden aspect-square mb-4">
                <a href="product.html?id=${safeId}">
                  <img src="${safeImage}" alt="${safeName}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy">
                </a>
                <button type="button" class="wishlist-toggle absolute top-4 right-4 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100 z-10" data-product-id="${safeId}" aria-label="${wishlistLabel}">
                  <span class="material-icons-outlined ${wishlistClass}">${wishlistIcon}</span>
                </button>
                <button type="button" aria-label="Add ${safeName} to cart" data-product-id="${safeId}" class="add-to-cart-btn absolute bottom-4 right-4 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100">
                  <span class="material-icons-outlined text-primary">add_shopping_cart</span>
                </button>
              </div>
              <a href="product.html?id=${safeId}"><h3 class="font-semibold text-lg hover:text-primary transition-colors">${safeName}</h3></a>
              <div class="flex items-center">
                <p class="text-gray-600 dark:text-gray-400">${priceDisplay}</p>
              </div>
            </div>
          `;
        }).join('');
    }

    // Event delegation for product actions (optimized: 1 listener instead of N)
    productsGrid.addEventListener('click', (e) => {
        const wishlistBtn = e.target.closest('.wishlist-toggle');
        if (wishlistBtn) {
            e.preventDefault();
            const id = wishlistBtn.getAttribute('data-product-id');
            if (typeof wishlist !== 'undefined') wishlist.toggleItem(id);
            return;
        }

        const cartBtn = e.target.closest('.add-to-cart-btn');
        if (cartBtn) {
            e.preventDefault();
            const id = cartBtn.getAttribute('data-product-id');
            if (typeof cart !== 'undefined') cart.addItem(id);
            return;
        }
    });
  }
});
