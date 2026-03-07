
## 2026-03-07 - Synchronous localStorage in Rendering Loops
**Learning:** Found a critical anti-pattern in `js/products.js` and `js/wishlist.js` where `wishlist.isInWishlist()` was called inside a map/forEach loop. Since `isInWishlist` calls `this.getItems()` which synchronously reads and parses `localStorage`, this caused O(N) I/O bound operations during initial page render and button state updates, significantly blocking the main thread for large product catalogs.
**Action:** Always inspect helper functions called inside rendering loops (`map`, `forEach`) to ensure they don't contain hidden synchronous I/O or expensive operations. Hoist data fetching outside the loop and convert arrays to a `Set` for O(1) lookups, ensuring safe type comparison by mapping items to strings first.
