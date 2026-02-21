document.addEventListener('DOMContentLoaded', () => {
    // Wishlist buttons
    const wishlistButtons = document.querySelectorAll('.wishlist-toggle');
    wishlistButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-product-id');
            if (typeof wishlist !== 'undefined') wishlist.toggleItem(id);
        });
    });

    // Add to cart buttons
    // Assumes buttons have class 'add-to-cart-btn' and 'data-product-id' attribute
    const cartButtons = document.querySelectorAll('.add-to-cart-btn');
    cartButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-product-id');
            if (typeof cart !== 'undefined') cart.addItem(id);
        });
    });
});
