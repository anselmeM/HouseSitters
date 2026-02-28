from playwright.sync_api import sync_playwright, expect

def run():
    print("Starting XSS reproduction test...")
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        # Mock products-data.js
        def handle_route(route):
            print("Intercepted request to products-data.js")
            route.fulfill(
                status=200,
                content_type="application/javascript",
                body="""
                const products = [
                  {
                    id: "xss-test",
                    name: "<img src=x onerror=window.hacked=true>",
                    price: 100,
                    image: "invalid",
                    category: "XSS",
                    description: "XSS Description",
                    collections: ["XSS"]
                  },
                  {
                    id: 12345,
                    name: "Numeric ID Product",
                    price: 200,
                    image: "https://placehold.co/600x400",
                    description: "Product with numeric ID",
                    category: "Test",
                    collections: ["Test"]
                  }
                ];
                function getProductById(id) { return products.find(p => p.id === id); }
                """
            )

        page.route("**/js/products-data.js", handle_route)

        # Navigate to products page
        url = "http://localhost:8000/products.html"
        print(f"Navigating to {url}")
        try:
            page.goto(url)
        except Exception as e:
            print(f"Failed to load page: {e}")
            return

        # Check for XSS execution
        print("Checking for XSS execution...")
        # Wait for products to be rendered
        page.wait_for_selector('#products-grid .group')

        is_hacked = page.evaluate("() => window.hacked === true")

        assert not is_hacked, "VULNERABILITY CONFIRMED: XSS payload executed!"
        print("Success: XSS payload NOT executed.")

        # Check if Numeric ID product is rendered (verifies no crash)
        print("Checking if numeric ID product rendered...")
        numeric_product = page.get_by_text("Numeric ID Product")
        expect(numeric_product).to_have_count(1)
        print("Success: Numeric ID product rendered correctly.")

        browser.close()

if __name__ == "__main__":
    run()
