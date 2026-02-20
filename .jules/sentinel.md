## 2026-02-20 - Unsafe innerHTML in Checkout Summary
**Vulnerability:** The checkout page (`checkout.html`) rendered order items from `localStorage` directly using `innerHTML`. This allowed Stored DOM XSS if an attacker could poison `localStorage` (e.g., via a separate XSS or misconfiguration).
**Learning:** The application trusts `localStorage` data implicitly, assuming it originates from trusted code (`cart.js`). However, `localStorage` is mutable by any script on the origin, making it an untrusted source.
**Prevention:** Always treat data from `localStorage` as untrusted. Use `textContent` or `document.createElement` when rendering user-controlled data to the DOM, never `innerHTML` unless absolutely necessary and sanitized.
