const CART_STORAGE_KEY = 'furni_cart';

const cart = {
  getItems() {
    const json = localStorage.getItem(CART_STORAGE_KEY);
    return json ? JSON.parse(json) : [];
  },

  addItem(productId) {
    const items = this.getItems();
    const existingItem = items.find(item => item.id === productId);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      items.push({ id: productId, quantity: 1 });
    }

    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    this.updateCartCount();
    this.showToast('Item added to cart');
  },

  removeItem(productId) {
    const items = this.getItems();
    const updatedItems = items.filter(item => item.id !== productId);
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(updatedItems));
    this.updateCartCount();
  },

  updateQuantity(productId, quantity) {
    const items = this.getItems();
    const item = items.find(item => item.id === productId);
    if (item) {
      const newQuantity = parseInt(quantity, 10);
      if (isNaN(newQuantity) || newQuantity <= 0) {
        this.removeItem(productId);
        return;
      }
      item.quantity = newQuantity;
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
      this.updateCartCount();
    }
  },

  clearCart() {
    localStorage.removeItem(CART_STORAGE_KEY);
    this.updateCartCount();
  },

  getTotalCount() {
    const items = this.getItems();
    return items.reduce((total, item) => total + item.quantity, 0);
  },

  updateCartCount() {
    const count = this.getTotalCount();
    const cartLinks = document.querySelectorAll('a[aria-label="Shopping cart"]');

    cartLinks.forEach(link => {
      let badge = link.querySelector('.cart-badge');
      if (!badge) {
        badge = document.createElement('span');
        badge.className = 'cart-badge absolute -top-1 -right-1 bg-primary text-white text-xs font-bold px-1.5 py-0.5 rounded-full';
        link.style.position = 'relative'; // Ensure parent is relative
        link.appendChild(badge);
      }

      if (count > 0) {
        badge.textContent = count;
        badge.style.display = 'block';
      } else {
        badge.style.display = 'none';
      }
    });
  },

  showToast(message) {
    let toast = document.getElementById('cart-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'cart-toast';
      toast.className = 'fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded shadow-lg z-50 transition-opacity duration-300 opacity-0';
      document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.classList.remove('opacity-0');

    setTimeout(() => {
      toast.classList.add('opacity-0');
    }, 3000);
  },

  init() {
      this.updateCartCount();
  }
};

// Initialize cart when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  cart.init();
});

// Expose global function for onclick handlers
window.addToCart = function(id) {
    cart.addItem(id);
};
