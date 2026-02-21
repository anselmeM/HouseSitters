document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');
  const product = products.find(p => p.id === productId);

  const container = document.getElementById('product-container');
  const loading = document.getElementById('loading');
  const notFound = document.getElementById('not-found');

  if (product) {
    document.title = `${product.name} - Modern Furniture`;
    document.querySelector('meta[name="description"]').setAttribute("content", product.description);
    document.getElementById('product-name').textContent = product.name;
    document.getElementById('product-image').src = product.image;
    document.getElementById('product-image').alt = product.name;
    document.getElementById('product-description').textContent = product.description;

    const priceEl = document.getElementById('product-price');
    const originalPriceEl = document.getElementById('product-original-price');

    if (product.originalPrice) {
         priceEl.textContent = `$${product.price.toFixed(2)}`;
         originalPriceEl.textContent = `$${product.originalPrice.toFixed(2)}`;
         originalPriceEl.classList.remove('hidden');
    } else {
         priceEl.textContent = `$${product.price.toFixed(2)}`;
    }

    const btn = document.getElementById('add-to-cart-btn');
    btn.onclick = () => {
        // Use cart object directly if available, fallback to window global for safety
        if (typeof cart !== 'undefined') {
            cart.addItem(product.id);
            // cart.addItem already shows toast in js/cart.js, but here it adds a custom message?
            // js/cart.js says: this.showToast('Item added to cart');
            // The original code here did:
            // window.addToCart(product.id);
            // cart.showToast(`Added ${product.name} to cart!`);
            // So it showed TWO toasts? Or addToCart calls cart.addItem which shows one.
            // window.addToCart = function(id) { cart.addItem(id); }; in js/cart.js
            // So calling cart.addItem triggers 'Item added to cart'.
            // Then this code triggers 'Added ... to cart!'.
            // I'll stick to original behavior: call cart.addItem then showToast.
            cart.showToast(`Added ${product.name} to cart!`);
        }
    };

    const wishlistBtn = document.getElementById('add-to-wishlist-btn');
    wishlistBtn.setAttribute('data-product-id', product.id);
    wishlistBtn.onclick = () => {
         if (typeof wishlist !== 'undefined') wishlist.toggleItem(product.id);
    };
    // Update initial state
    if (typeof wishlist !== 'undefined') wishlist.updateWishlistButtons();

    loading.classList.add('hidden');
    container.classList.remove('hidden');
  } else {
    loading.classList.add('hidden');
    notFound.classList.remove('hidden');
  }

  // Initialize cart badge
  if (typeof cart !== 'undefined') cart.init();
});
