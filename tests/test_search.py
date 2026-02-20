import pytest
from playwright.sync_api import sync_playwright, expect
import os

@pytest.fixture(scope="session")
def browser():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        yield browser
        browser.close()

@pytest.fixture
def page(browser):
    context = browser.new_context()
    page = context.new_page()
    # Workaround for timeouts: block external CDN requests
    # Blocking external CDNs as recommended to avoid timeouts
    page.route("**/*", lambda route: route.continue_() if "localhost" in route.request.url or route.request.url.startswith("data:") else route.abort())
    yield page
    context.close()

@pytest.fixture
def base_url():
    return os.environ.get("BASE_URL", "http://localhost:8000")

def test_search_input_placeholder(page, base_url):
    """Verify that the search input has the correct placeholder and aria-label."""
    page.goto(base_url)

    # Locate the search input by its aria-label
    search_input = page.locator('input[aria-label="Search products"]')

    # Assertions
    expect(search_input).to_be_visible()
    expect(search_input).to_have_attribute("placeholder", "What are you looking for?")
    expect(search_input).to_have_attribute("aria-label", "Search products")
