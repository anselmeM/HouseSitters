from playwright.sync_api import sync_playwright, expect
import time

def run():
    print("Starting verification test...")
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        # Navigate to products page
        url = "http://localhost:8000/products.html"
        print(f"Navigating to {url}")
        try:
            page.goto(url)
        except Exception as e:
            print(f"Failed to load page: {e}")
            return

        # Wait for products to load
        print("Waiting for products to load...")
        products_grid = page.locator("#products-grid")
        expect(products_grid).to_be_visible()

        # Select the first wishlist button
        first_wishlist_btn = page.locator(".wishlist-toggle").first
        expect(first_wishlist_btn).to_be_visible()

        # Initial State: Should be outlined heart (not in wishlist)
        # Note: This assumes local storage is empty initially or cleared.
        # We can clear local storage first.
        page.evaluate("localStorage.clear()")
        page.reload()
        expect(products_grid).to_be_visible()

        # Check initial icon state (outlined)
        print("Checking initial state...")
        icon = first_wishlist_btn.locator("span.material-icons-outlined")
        expect(icon).to_have_text("favorite_border")
        expect(icon).not_to_have_class("text-red-500")

        # Click wishlist button
        print("Clicking wishlist button...")
        first_wishlist_btn.click()

        # Verify icon changes to filled heart
        print("Verifying icon update...")
        expect(icon).to_have_text("favorite")
        # Checking for class presence. Note: expect(locator).to_have_class verifies the full class string or partial with regex.
        # To be safe, we check if the class list contains text-red-500 via JS or attribute
        # But playwright has to_have_class.
        # Let's check attribute class contains text-red-500
        import re
        expect(icon).to_have_attribute("class", re.compile(r"text-red-500"))

        # Verify localStorage
        print("Verifying localStorage...")
        wishlist_data = page.evaluate("localStorage.getItem('furni_wishlist')")
        print(f"Wishlist data: {wishlist_data}")
        assert wishlist_data is not None
        assert "orange-sofa" in wishlist_data or len(wishlist_data) > 2 # Assuming first product is orange-sofa or just checking something was added

        # Reload page to test inline rendering optimization
        print("Reloading page...")
        page.reload()
        expect(products_grid).to_be_visible()

        # Check if state persisted (filled heart)
        print("Verifying persisted state...")
        first_wishlist_btn = page.locator(".wishlist-toggle").first
        icon = first_wishlist_btn.locator("span.material-icons-outlined")
        expect(icon).to_have_text("favorite")
        expect(icon).to_have_attribute("class", re.compile(r"text-red-500"))

        # Test Add to Cart
        print("Testing Add to Cart...")
        first_cart_btn = page.locator(".add-to-cart-btn").first
        first_cart_btn.click()

        # Check cart badge
        print("Verifying cart badge...")
        cart_badge = page.locator("a[aria-label='Shopping cart'] .cart-badge")
        expect(cart_badge).to_be_visible()
        expect(cart_badge).to_have_text("1")

        browser.close()
        print("Verification passed successfully!")

if __name__ == "__main__":
    run()
