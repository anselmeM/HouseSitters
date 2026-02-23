from playwright.sync_api import sync_playwright, expect
import time

def run():
    print("Starting HTML Injection vulnerability test...")
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        # Intercept products-data.js request and serve malicious content
        # We inject a div with a unique ID to test for HTML injection (defacement/phishing vector)
        def handle_route(route):
            print("Intercepting products-data.js")
            route.fulfill(
                status=200,
                content_type="application/javascript",
                body="""
                    const products = [
                      {
                        id: "xss-test",
                        name: "Product <div id='injected-element' style='color:red'>INJECTED</div>",
                        price: 100,
                        image: "https://placehold.co/100",
                        description: "XSS Test",
                        category: "Test"
                      }
                    ];
                """
            )

        page.route("**/js/products-data.js", handle_route)

        # Navigate to products page
        url = "http://localhost:8000/products.html"
        print(f"Navigating to {url}")
        page.goto(url)

        # Wait for products to load
        try:
            page.wait_for_selector("#products-grid .group", timeout=5000)
        except:
            print("Product grid content not found")

        # Check if the injected element exists in the DOM
        print("Checking for injected element...")
        is_injected = page.locator("#injected-element").count() > 0

        if is_injected:
            print("🚨 VULNERABILITY CONFIRMED: HTML Injection successful!")
        else:
            print("✅ HTML Injection failed (Content is sanitized or blocked).")

        browser.close()
        return is_injected

if __name__ == "__main__":
    is_vulnerable = run()
