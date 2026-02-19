from playwright.sync_api import sync_playwright, expect

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        # Set viewport to mobile size
        page.set_viewport_size({"width": 375, "height": 667})

        # Go to the homepage
        try:
            page.goto("http://localhost:8000")
        except Exception as e:
            print(f"Failed to load page: {e}")
            return

        # Check if mobile menu button is visible
        menu_btn = page.locator("#mobile-menu-btn")
        expect(menu_btn).to_be_visible()

        # Check if mobile menu is hidden initially
        mobile_menu = page.locator("#mobile-menu")
        expect(mobile_menu).not_to_be_visible()

        # Click the button
        print("Clicking menu button...")
        menu_btn.click()

        # Check if mobile menu becomes visible
        print("Checking if menu is visible...")
        expect(mobile_menu).to_be_visible()

        # Check links
        products_link = mobile_menu.get_by_role("link", name="Products")
        expect(products_link).to_be_visible()

        # Click again to close
        print("Closing menu...")
        menu_btn.click()

        # Wait for transition (using expect to be hidden)
        print("Checking if menu is hidden...")
        expect(mobile_menu).not_to_be_visible()

        browser.close()
        print("Test passed!")

if __name__ == "__main__":
    run()
