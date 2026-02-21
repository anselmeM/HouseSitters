document.addEventListener('DOMContentLoaded', () => {
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

function injectFooter() {
    const footerContainer = document.getElementById('site-footer');
    if (!footerContainer) return;

    footerContainer.innerHTML = `
    <footer class="text-white py-8" style="background-color: #111827; margin-top: 3rem;">
        <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                    <h3 class="text-2xl font-bold mb-4">Furni.</h3>
                    <p class="text-gray-400">Modern furniture for modern living. Quality pieces for every room in your home.</p>
                </div>
                <div>
                    <h4 class="text-lg font-semibold mb-4">Shop</h4>
                    <ul class="space-y-2 text-gray-400">
                        <li><a href="products.html" class="hover:text-primary transition-colors">All Products</a></li>
                        <li><a href="rooms.html" class="hover:text-primary transition-colors">Rooms</a></li>
                        <li><a href="sale.html" class="hover:text-primary transition-colors">Sale</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-lg font-semibold mb-4">Support</h4>
                    <ul class="space-y-2 text-gray-400">
                        <li><a href="#" class="hover:text-primary transition-colors">Contact Us</a></li>
                        <li><a href="#" class="hover:text-primary transition-colors">Shipping & Returns</a></li>
                        <li><a href="#" class="hover:text-primary transition-colors">FAQ</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-lg font-semibold mb-4">Newsletter</h4>
                    <p class="text-gray-400 mb-4">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
                    <form class="flex gap-2" id="newsletter-form">
                        <input type="email" placeholder="Enter your email" class="w-full rounded-md text-white focus:ring-primary focus:border-primary px-4 py-2" required style="background-color: #1f2937; border-color: #374151;">
                        <button type="submit" class="bg-primary text-white px-4 py-2 rounded-md hover:bg-orange-700 transition-colors">
                            <span class="material-icons-outlined">send</span>
                        </button>
                    </form>
                </div>
            </div>
            <div class="border-t border-gray-800 text-center text-gray-400" style="border-top-color: #374151; margin-top: 2rem; padding-top: 2rem;">
                <p>&copy; 2023 Furni. All rights reserved.</p>
            </div>
        </div>
    </footer>
    `;

    const form = document.getElementById('newsletter-form');
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Thanks for subscribing!');
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    injectFooter();
});
