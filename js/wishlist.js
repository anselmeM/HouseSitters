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
      this.showToast('Item added to wishlist');
      this.updateHeartIcons(productId, true);
    }
  },

  removeItem(productId) {
    const items = this.getItems();
    const updatedItems = items.filter(id => id !== productId);
    localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(updatedItems));
    this.updateWishlistCount();
    this.showToast('Item removed from wishlist');
    this.updateHeartIcons(productId, false);

    // If on wishlist page, re-render
    if (window.location.pathname.endsWith('wishlist.html')) {
        renderWishlist(); // Assumes global function available on wishlist.html
    }
  },

  isInWishlist(productId) {
    const items = this.getItems();
    return items.includes(productId);
  },

  toggleWishlist(productId) {
    if (this.isInWishlist(productId)) {
      this.removeItem(productId);
    } else {
      this.addItem(productId);
    }
  },

  updateWishlistCount() {
    const count = this.getItems().length;
    const wishlistLinks = document.querySelectorAll('a[aria-label="Favorites"]');

    wishlistLinks.forEach(link => {
      let badge = link.querySelector('.wishlist-badge');
      if (!badge) {
        badge = document.createElement('span');
        badge.className = 'wishlist-badge absolute -top-1 -right-1 bg-primary text-white text-xs font-bold px-1.5 py-0.5 rounded-full';
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

  updateHeartIcons(productId, isSaved) {
      // Find all heart buttons for this product
      const buttons = document.querySelectorAll(`button[data-product-id="${productId}"]`);
      buttons.forEach(btn => {
          const icon = btn.querySelector('.material-icons-outlined');
          if (icon) {
              if (isSaved) {
                  icon.textContent = 'favorite'; // Filled heart
                  icon.classList.add('text-primary');
              } else {
                  icon.textContent = 'favorite_border'; // Outlined heart
                  icon.classList.remove('text-primary');
              }
          }
          btn.setAttribute('aria-pressed', isSaved);
          btn.setAttribute('aria-label', isSaved ? 'Remove from wishlist' : 'Add to wishlist');
      });
  },

  showToast(message) {
    let toast = document.getElementById('wishlist-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'wishlist-toast';
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
      this.updateWishlistCount();
      // Initialize heart icons based on current page content
      const items = this.getItems();
      items.forEach(id => this.updateHeartIcons(id, true));
  }
};

// Initialize wishlist when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  wishlist.init();
});

// Expose global function for onclick handlers
window.toggleWishlist = function(id) {
    wishlist.toggleWishlist(id);
};
