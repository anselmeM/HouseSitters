const WISHLIST_STORAGE_KEY = 'furni_wishlist';

const wishlist = {
  getItems() {
    const json = localStorage.getItem(WISHLIST_STORAGE_KEY);
    return json ? JSON.parse(json) : [];
  },

  addItem(productId) {
    const items = this.getItems();
    if (!items.includes(productId)) {
      items.push(productId);
      localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(items));
      this.updateWishlistCount();
      this.updateWishlistButtons();
      cart.showToast('Item added to wishlist');
    }
  },

  removeItem(productId) {
    const items = this.getItems();
    const updatedItems = items.filter(id => id !== productId);
    localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(updatedItems));
    this.updateWishlistCount();
    this.updateWishlistButtons();
    cart.showToast('Item removed from wishlist'); // Re-using cart toast for consistency
  },

  toggleItem(productId) {
    if (this.isInWishlist(productId)) {
      this.removeItem(productId);
    } else {
      this.addItem(productId);
    }
  },

  isInWishlist(productId) {
    const items = this.getItems();
    return items.includes(productId);
  },

  updateWishlistCount() {
    const items = this.getItems();
    const count = items.length;
    const wishlistLinks = document.querySelectorAll('a[aria-label="Favorites"]');

    wishlistLinks.forEach(link => {
      let badge = link.querySelector('.wishlist-badge');
      if (!badge) {
        badge = document.createElement('span');
        badge.className = 'wishlist-badge absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full';
        link.style.position = 'relative';
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

  updateWishlistButtons() {
    // Select all buttons intended to toggle wishlist state.
    // We assume they have a data attribute 'data-product-id' or use onclick handlers we can target?
    // A better approach is to use a specific class for wishlist toggle buttons.
    const buttons = document.querySelectorAll('.wishlist-toggle');
    buttons.forEach(button => {
        const productId = button.getAttribute('data-product-id');
        if (productId) {
            const isIn = this.isInWishlist(productId);
            const icon = button.querySelector('.material-icons-outlined');
            const label = button.querySelector('.wishlist-text');

            if (icon) {
                if (isIn) {
                    icon.textContent = 'favorite'; // Filled heart
                    icon.classList.add('text-red-500');
                    button.setAttribute('aria-label', 'Remove from wishlist');
                    if (label) label.textContent = 'In Wishlist';
                } else {
                    icon.textContent = 'favorite_border'; // Outlined heart
                    icon.classList.remove('text-red-500');
                    button.setAttribute('aria-label', 'Add to wishlist');
                    if (label) label.textContent = 'Add to Wishlist';
                }
            }
        }
    });
  },

  init() {
      this.updateWishlistCount();
      this.updateWishlistButtons();
  }
};

// Initialize wishlist when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  wishlist.init();
});

// Expose global function for onclick handlers if needed
window.toggleWishlist = function(id) {
    wishlist.toggleItem(id);
};
