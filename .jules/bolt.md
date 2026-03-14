
## 2026-03-07 - Synchronous localStorage in Rendering Loops
**Learning:** Found a critical anti-pattern in `js/products.js` and `js/wishlist.js` where `wishlist.isInWishlist()` was called inside a map/forEach loop. Since `isInWishlist` calls `this.getItems()` which synchronously reads and parses `localStorage`, this caused O(N) I/O bound operations during initial page render and button state updates, significantly blocking the main thread for large product catalogs.
**Action:** Always inspect helper functions called inside rendering loops (`map`, `forEach`) to ensure they don't contain hidden synchronous I/O or expensive operations. Hoist data fetching outside the loop and convert arrays to a `Set` for O(1) lookups, ensuring safe type comparison by mapping items to strings first.

## 2026-03-14 - O(N*M) Product Lookups in Render Loops
**Learning:** Found an anti-pattern in `js/wishlist-page.js`, `js/cart-page.js`, and `js/checkout-page.js` where `products.find(...)` was called inside rendering loops (`forEach`). This caused O(N*M) time complexity during the page render when rendering N items in the cart or wishlist against a global products array of M items. This could significantly impact rendering performance when the user has many items in their cart/wishlist and the product catalog is large.
**Action:** Always build an O(1) lookup dictionary (using `reduce`) before the rendering loop to avoid repeating O(N) searches inside the loop, transforming the complexity from O(N * M) to O(N + M).
