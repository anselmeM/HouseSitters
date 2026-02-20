document.addEventListener('DOMContentLoaded', () => {
    injectFooter();
    initSearchBar();

    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');

    if (btn && menu) {
        btn.addEventListener('click', () => {
            const isExpanded = btn.getAttribute('aria-expanded') === 'true';
            btn.setAttribute('aria-expanded', !isExpanded);

            if (!isExpanded) {
                // Open menu
                menu.classList.remove('invisible');
                // distinct step to ensure transition triggers
                requestAnimationFrame(() => {
                    menu.classList.remove('max-h-0', 'opacity-0');
                    menu.classList.add('max-h-screen', 'opacity-100');
                });
            } else {
                // Close menu
                menu.classList.remove('max-h-screen', 'opacity-100');
                menu.classList.add('max-h-0', 'opacity-0');

                // Wait for transition to finish before hiding completely
                menu.addEventListener('transitionend', function onTransitionEnd(event) {
                    if (event.target !== menu) return;
                    if (!menu.classList.contains('opacity-100')) {
                        menu.classList.add('invisible');
                    }
                    menu.removeEventListener('transitionend', onTransitionEnd);
                });
            }
        });
    }
});

function initSearchBar() {
    const searchInputs = document.querySelectorAll('input[aria-label="Search products"]');

    searchInputs.forEach(input => {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                const term = input.value.trim();
                if (term) {
                    window.location.href = `products.html?search=${encodeURIComponent(term)}`;
                }
            }
        });
    });
}

function injectFooter() {
    const footerContainer = document.getElementById('site-footer');
    if (!footerContainer) return;

    // Use inline styles for properties not covered by existing utility classes to avoid recompilation issues
    footerContainer.innerHTML = `
      <footer class="bg-gray-800 text-gray-400 py-8" style="margin-top: auto;">
        <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 text-center md:text-left">
            <!-- Brand -->
            <div class="space-y-4">
              <h2 class="text-2xl font-bold text-white">Furni.</h2>
              <p class="text-sm text-gray-400">Crafting modern living spaces with timeless furniture designs.</p>
              <div class="flex space-x-4 justify-center md:justify-start">
                <a href="#" aria-label="Facebook" class="hover:text-primary transition-colors"><span class="material-icons-outlined">facebook</span></a>
                <a href="#" aria-label="Instagram" class="hover:text-primary transition-colors"><span class="material-icons-outlined">camera_alt</span></a>
                <a href="#" aria-label="Twitter" class="hover:text-primary transition-colors"><span class="material-icons-outlined">alternate_email</span></a>
              </div>
            </div>

            <!-- Quick Links -->
            <div>
              <h3 class="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <ul class="space-y-2 text-sm">
                <li><a href="index.html" class="hover:text-primary transition-colors">Home</a></li>
                <li><a href="products.html" class="hover:text-primary transition-colors">Products</a></li>
                <li><a href="rooms.html" class="hover:text-primary transition-colors">Rooms</a></li>
                <li><a href="sale.html" class="hover:text-primary transition-colors">Sale</a></li>
              </ul>
            </div>

            <!-- Support -->
            <div>
              <h3 class="text-lg font-semibold text-white mb-4">Support</h3>
              <ul class="space-y-2 text-sm">
                <li><a href="account.html" class="hover:text-primary transition-colors">My Account</a></li>
                <li><a href="wishlist.html" class="hover:text-primary transition-colors">Wishlist</a></li>
                <li><a href="cart.html" class="hover:text-primary transition-colors">Shopping Cart</a></li>
                <li><a href="#" class="hover:text-primary transition-colors">Terms of Service</a></li>
              </ul>
            </div>

            <!-- Newsletter -->
            <div>
              <h3 class="text-lg font-semibold text-white mb-4">Newsletter</h3>
              <p class="text-sm text-gray-400 mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
              <form class="flex gap-2" id="newsletter-form">
                <input type="email" placeholder="Enter your email" class="w-full bg-gray-800 text-white rounded-md text-sm focus:ring-primary focus:border-primary placeholder-gray-500" style="border-color: #374151;" required>
                <button type="submit" class="bg-primary text-white p-2 rounded-md hover:bg-orange-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                  <span class="material-icons-outlined text-sm">send</span>
                </button>
              </form>
            </div>
          </div>
          <div class="border-t mt-8 pt-8 text-center text-sm text-gray-500" style="border-color: #374151;">
            <p>&copy; 2024 Furni. All rights reserved.</p>
          </div>
        </div>
      </footer>
    `;

    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = newsletterForm.querySelector('input[type="email"]');
            if (input && input.value) {
                // Use cart's toast if available, otherwise alert
                if (typeof cart !== 'undefined' && cart.showToast) {
                    cart.showToast('Thanks for subscribing!');
                } else {
                    alert('Thanks for subscribing!');
                }
                input.value = '';
            }
        });
    }
}
