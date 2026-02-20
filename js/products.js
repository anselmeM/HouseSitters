document.addEventListener('DOMContentLoaded', () => {
    // Initial setup
    const productGrid = document.getElementById('product-grid');
    if (productGrid) {
        // Initial render based on URL
        renderProducts();

        // Highlight active category filter
        const urlParams = new URLSearchParams(window.location.search);
        const currentCategory = urlParams.get('category') || 'All';
        updateActiveFilter(currentCategory);

        // Handle browser back/forward buttons
        window.addEventListener('popstate', () => {
            renderProducts();
            const newCategory = new URLSearchParams(window.location.search).get('category');
            updateActiveFilter(newCategory || 'All');
        });
    }

});

// Update active filter UI
function updateActiveFilter(category) {
    const buttons = document.querySelectorAll('#category-filters a');
    if (buttons.length === 0) return; // Add check if element exists

    buttons.forEach(btn => {
        // Get category from href
        const href = btn.getAttribute('href');
        // Handle cases where href might not contain 'category=' (e.g. if it's just 'products.html')
        let btnCategory = 'All';
        if (href.includes('category=')) {
            btnCategory = href.split('category=')[1];
        }

        if (btnCategory === category) {
             btn.classList.add('bg-primary', 'text-white');
             btn.classList.remove('bg-gray-100', 'dark:bg-gray-700', 'text-gray-600', 'dark:text-gray-300');
        } else {
             btn.classList.remove('bg-primary', 'text-white');
             btn.classList.add('bg-gray-100', 'dark:bg-gray-700', 'text-gray-600', 'dark:text-gray-300');
        }
    });
}

function renderProducts() {
    const productGrid = document.getElementById('product-grid');
    if (!productGrid) return; // Guard clause if running on non-products page

    const urlParams = new URLSearchParams(window.location.search);
    const categoryFilter = urlParams.get('category');
    const searchTerm = urlParams.get('search');

    // Filter products
    let filteredProducts = products;

    if (categoryFilter && categoryFilter !== 'All') {
        filteredProducts = filteredProducts.filter(p => p.category === categoryFilter);
    }

    if (searchTerm) {
        const term = searchTerm.toLowerCase();
        filteredProducts = filteredProducts.filter(p =>
            p.name.toLowerCase().includes(term) ||
            p.description.toLowerCase().includes(term)
        );
    }

    // Update page title if searching/filtering
    const titleEl = document.getElementById('page-title');
    if (titleEl) {
        if (searchTerm) {
            titleEl.textContent = `Search Results for "${searchTerm}"`;
        } else if (categoryFilter && categoryFilter !== 'All') {
            titleEl.textContent = categoryFilter;
        } else {
            titleEl.textContent = 'Our Products';
        }
    }

    // Clear grid
    productGrid.innerHTML = '';

    if (filteredProducts.length === 0) {
        productGrid.innerHTML = `
            <div class="col-span-full text-center py-12">
                <span class="material-icons-outlined text-6xl text-gray-300 mb-4">search_off</span>
                <p class="text-xl text-gray-500">No products found matching your criteria.</p>
                <a href="products.html" class="inline-block mt-4 text-primary hover:underline">View All Products</a>
            </div>
        `;
        return;
    }

    // Render products
    filteredProducts.forEach(product => {
        const productEl = document.createElement('div');
        productEl.className = 'group';

        // Wishlist button state
        const isWishlisted = wishlist.isInWishlist ? wishlist.isInWishlist(product.id) : false; // Safe check
        const wishlistClass = isWishlisted ? 'text-primary opacity-100' : 'opacity-0 group-hover:opacity-100';
        const wishlistIcon = isWishlisted ? 'favorite' : 'favorite_border';

        // Price display
        let priceHtml = `<p class="text-gray-600 dark:text-gray-400">$${product.price.toFixed(2)}</p>`;
        if (product.originalPrice) {
            priceHtml = `
                <div class="flex items-center gap-2">
                    <p class="text-red-600 font-semibold">$${product.price.toFixed(2)}</p>
                    <p class="text-gray-400 line-through text-sm">$${product.originalPrice.toFixed(2)}</p>
                </div>
            `;
        }

        productEl.innerHTML = `
            <div class="relative rounded-lg overflow-hidden aspect-square mb-4 bg-gray-100 dark:bg-gray-800">
                <a href="product.html?id=${product.id}">
                    <img src="${product.image}" alt="${product.name}" loading="lazy" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                </a>
                <button type="button"
                        aria-label="${isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}"
                        onclick="toggleWishlist('${product.id}')"
                        data-product-id="${product.id}"
                        class="absolute top-4 right-4 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md transition-all hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 ${wishlistClass}">
                    <span class="material-icons-outlined">${wishlistIcon}</span>
                </button>
                <button type="button"
                        aria-label="Add ${product.name} to cart"
                        onclick="addToCart('${product.id}')"
                        class="absolute bottom-4 right-4 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary/50 hover:text-primary">
                    <span class="material-icons-outlined">add_shopping_cart</span>
                </button>
            </div>
            <a href="product.html?id=${product.id}">
                <h3 class="font-semibold text-lg hover:text-primary transition-colors">${product.name}</h3>
            </a>
            ${priceHtml}
        `;

        productGrid.appendChild(productEl);
    });
}
