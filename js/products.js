document.addEventListener('DOMContentLoaded', () => {
  const productsGrid = document.getElementById('products-grid');

  if (productsGrid && typeof products !== 'undefined') {
    const urlParams = new URLSearchParams(window.location.search);
    const collectionFilter = urlParams.get('collection');
    const categoryFilter = urlParams.get('category');
    const searchFilter = urlParams.get('search');
    const pageTitle = document.querySelector('h1.text-4xl.font-bold.mb-8');

    let filteredProducts = products;

    if (collectionFilter) {
      const lowerCollection = collectionFilter.toLowerCase();
      filteredProducts = filteredProducts.filter(p =>
        p.collections && p.collections.some(c => c.toLowerCase() === lowerCollection)
      );
      if (pageTitle) pageTitle.textContent = `${collectionFilter} Collection`;
    }

    if (categoryFilter) {
      const lowerCategory = categoryFilter.toLowerCase();
      filteredProducts = filteredProducts.filter(p =>
        p.category && p.category.toLowerCase() === lowerCategory
      );
      if (pageTitle) pageTitle.textContent = categoryFilter;
    }

    if (searchFilter) {
      const term = searchFilter.toLowerCase();
      filteredProducts = filteredProducts.filter(p =>
        p.name.toLowerCase().includes(term) ||
        (p.description && p.description.toLowerCase().includes(term))
      );
      if (pageTitle) pageTitle.textContent = `Search results for "${searchFilter}"`;
    }

    // Clear existing content (skeletons)
    while (productsGrid.firstChild) {
        productsGrid.removeChild(productsGrid.firstChild);
    }

    if (filteredProducts.length === 0) {
      const p = document.createElement('p');
      p.className = 'col-span-full text-center text-gray-500 text-xl py-12';
      p.textContent = 'No products found.';
      productsGrid.appendChild(p);
    } else {
      filteredProducts.forEach(product => {
        const groupDiv = document.createElement('div');
        groupDiv.className = 'group';

        // Image Container
        const imgContainer = document.createElement('div');
        imgContainer.className = 'relative rounded-lg overflow-hidden aspect-square mb-4';

        const imgLink = document.createElement('a');
        imgLink.href = `product.html?id=${product.id}`;

        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.name;
        img.className = 'w-full h-full object-cover group-hover:scale-105 transition-transform duration-500';
        img.loading = 'lazy';

        imgLink.appendChild(img);

        // Wishlist Button
        const wishlistBtn = document.createElement('button');
        wishlistBtn.type = 'button';
        wishlistBtn.className = 'wishlist-toggle absolute top-4 right-4 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100 z-10';
        wishlistBtn.setAttribute('data-product-id', product.id);
        wishlistBtn.onclick = () => toggleWishlist(product.id);
        wishlistBtn.ariaLabel = `Add ${product.name} to wishlist`;

        const wishlistIcon = document.createElement('span');
        wishlistIcon.className = 'material-icons-outlined text-gray-400';
        wishlistIcon.textContent = 'favorite_border';
        wishlistBtn.appendChild(wishlistIcon);

        // Add to Cart Button
        const cartBtn = document.createElement('button');
        cartBtn.type = 'button';
        cartBtn.ariaLabel = `Add ${product.name} to cart`;
        cartBtn.onclick = () => addToCart(product.id);
        cartBtn.className = 'absolute bottom-4 right-4 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity';

        const cartIcon = document.createElement('span');
        cartIcon.className = 'material-icons-outlined text-primary';
        cartIcon.textContent = 'add_shopping_cart';
        cartBtn.appendChild(cartIcon);

        imgContainer.appendChild(imgLink);
        imgContainer.appendChild(wishlistBtn);
        imgContainer.appendChild(cartBtn);

        // Title
        const titleLink = document.createElement('a');
        titleLink.href = `product.html?id=${product.id}`;
        const title = document.createElement('h3');
        title.className = 'font-semibold text-lg hover:text-primary transition-colors';
        title.textContent = product.name;
        titleLink.appendChild(title);

        // Price
        const priceDiv = document.createElement('div');
        priceDiv.className = 'flex items-center';
        const priceP = document.createElement('p');
        priceP.className = 'text-gray-600 dark:text-gray-400';

        if (product.originalPrice) {
            const originalPriceSpan = document.createElement('span');
            originalPriceSpan.className = 'text-sm text-gray-500 line-through mr-2';
            originalPriceSpan.textContent = `$${product.originalPrice.toFixed(2)}`;
            priceP.appendChild(originalPriceSpan);
            priceP.appendChild(document.createTextNode(`$${product.price.toFixed(2)}`));
        } else {
            priceP.textContent = `$${product.price.toFixed(2)}`;
        }
        priceDiv.appendChild(priceP);

        groupDiv.appendChild(imgContainer);
        groupDiv.appendChild(titleLink);
        groupDiv.appendChild(priceDiv);

        productsGrid.appendChild(groupDiv);
      });
    }

    // Re-initialize wishlist buttons to set correct state (filled/outline)
    if (typeof wishlist !== 'undefined' && wishlist.updateWishlistButtons) {
      wishlist.updateWishlistButtons();
    }
  }
});
