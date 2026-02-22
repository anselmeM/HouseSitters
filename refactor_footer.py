import os

footer_html = """<footer class="bg-gray-800 text-white py-12 mt-12">
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
                    <form id="newsletter-form" class="flex gap-2">
                        <input type="email" placeholder="Enter your email" aria-label="Email address for newsletter" class="w-full rounded-md text-white focus:ring-primary focus:border-primary px-4 py-2 bg-gray-800 border-gray-700" required>
                        <button type="submit" aria-label="Subscribe" class="bg-primary text-white px-4 py-2 rounded-md transition-colors">
                            <span class="material-icons-outlined">send</span>
                        </button>
                    </form>
                </div>
            </div>
            <div class="border-t border-gray-700 text-center text-gray-400 mt-12 pt-8" style="border-color: rgba(255,255,255,0.1);">
                <p>&copy; 2023 Furni. All rights reserved.</p>
            </div>
        </div>
    </footer>"""

def replace_footer(filepath):
    try:
        with open(filepath, 'r') as f:
            content = f.read()

        if '<div id="site-footer"></div>' in content:
            new_content = content.replace('<div id="site-footer"></div>', footer_html)
            with open(filepath, 'w') as f:
                f.write(new_content)
            print(f"Updated {filepath}")
        else:
            print(f"Skipped {filepath} (target not found)")
    except Exception as e:
        print(f"Error processing {filepath}: {e}")

files = [
    "cart.html",
    "checkout.html",
    "index.html",
    "product.html",
    "products.html",
    "rooms.html",
    "sale.html",
    "success.html",
    "wishlist.html"
]

for file in files:
    if os.path.exists(file):
        replace_footer(file)
    else:
        print(f"File not found: {file}")
