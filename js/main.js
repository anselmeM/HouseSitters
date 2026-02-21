document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');

    if (btn && menu) {
        btn.addEventListener('click', () => {
            const isExpanded = btn.getAttribute('aria-expanded') === 'true';
            btn.setAttribute('aria-expanded', !isExpanded);

            if (!isExpanded) {
                // Open menu
                menu.classList.remove('invisible');
                // Use double requestAnimationFrame to ensure the remove 'invisible' has taken effect in layout
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        menu.classList.remove('max-h-0', 'opacity-0');
                        menu.classList.add('max-h-screen', 'opacity-100');
                    });
                });
            } else {
                // Close menu
                menu.classList.remove('max-h-screen', 'opacity-100');
                menu.classList.add('max-h-0', 'opacity-0');

                // Wait for transition duration (300ms) before hiding completely
                // Using setTimeout is generally more robust than transitionend for simple UI states
                setTimeout(() => {
                    // Double check state hasn't changed during timeout
                    if (btn.getAttribute('aria-expanded') === 'false') {
                        menu.classList.add('invisible');
                    }
                }, 300);
            }
        });
    }

    injectFooter();
    initSearchBar();
});

function injectFooter() {
    const footerContainer = document.getElementById('site-footer');
    if (!footerContainer) return;

    const footer = document.createElement('footer');
    footer.className = 'text-white py-8';
    footer.style.backgroundColor = '#111827';
    footer.style.marginTop = '3rem';

    const container = document.createElement('div');
    container.className = 'mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8';

    const grid = document.createElement('div');
    grid.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8';

    // Column 1: Brand
    const col1 = document.createElement('div');
    const h3 = document.createElement('h3');
    h3.className = 'text-2xl font-bold mb-4';
    h3.textContent = 'Furni.';
    const p1 = document.createElement('p');
    p1.className = 'text-gray-400';
    p1.textContent = 'Modern furniture for modern living. Quality pieces for every room in your home.';
    col1.appendChild(h3);
    col1.appendChild(p1);

    // Column 2: Shop
    const col2 = document.createElement('div');
    const h4_2 = document.createElement('h4');
    h4_2.className = 'text-lg font-semibold mb-4';
    h4_2.textContent = 'Shop';
    const ul2 = document.createElement('ul');
    ul2.className = 'space-y-2 text-gray-400';
    const links2 = [
        { text: 'All Products', href: 'products.html' },
        { text: 'Rooms', href: 'rooms.html' },
        { text: 'Sale', href: 'sale.html' }
    ];
    links2.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = link.href;
        a.className = 'hover:text-primary transition-colors';
        a.textContent = link.text;
        li.appendChild(a);
        ul2.appendChild(li);
    });
    col2.appendChild(h4_2);
    col2.appendChild(ul2);

    // Column 3: Support
    const col3 = document.createElement('div');
    const h4_3 = document.createElement('h4');
    h4_3.className = 'text-lg font-semibold mb-4';
    h4_3.textContent = 'Support';
    const ul3 = document.createElement('ul');
    ul3.className = 'space-y-2 text-gray-400';
    const links3 = [
        { text: 'Contact Us', href: '#' },
        { text: 'Shipping & Returns', href: '#' },
        { text: 'FAQ', href: '#' }
    ];
    links3.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = link.href;
        a.className = 'hover:text-primary transition-colors';
        a.textContent = link.text;
        li.appendChild(a);
        ul3.appendChild(li);
    });
    col3.appendChild(h4_3);
    col3.appendChild(ul3);

    // Column 4: Newsletter
    const col4 = document.createElement('div');
    const h4_4 = document.createElement('h4');
    h4_4.className = 'text-lg font-semibold mb-4';
    h4_4.textContent = 'Newsletter';
    const p4 = document.createElement('p');
    p4.className = 'text-gray-400 mb-4';
    p4.textContent = 'Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.';

    const form = document.createElement('form');
    form.className = 'flex gap-2';
    form.onsubmit = (e) => {
        e.preventDefault();
        alert('Thanks for subscribing!');
    };

    const input = document.createElement('input');
    input.type = 'email';
    input.placeholder = 'Enter your email';
    input.ariaLabel = 'Email address';
    input.className = 'w-full rounded-md text-white focus:ring-primary focus:border-primary px-4 py-2';
    input.required = true;
    input.style.backgroundColor = '#1f2937';
    input.style.borderColor = '#374151';

    const button = document.createElement('button');
    button.type = 'submit';
    button.ariaLabel = 'Subscribe';
    button.className = 'bg-primary text-white px-4 py-2 rounded-md hover:bg-orange-700 transition-colors';

    const icon = document.createElement('span');
    icon.className = 'material-icons-outlined';
    icon.textContent = 'send';
    button.appendChild(icon);

    form.appendChild(input);
    form.appendChild(button);

    col4.appendChild(h4_4);
    col4.appendChild(p4);
    col4.appendChild(form);

    grid.appendChild(col1);
    grid.appendChild(col2);
    grid.appendChild(col3);
    grid.appendChild(col4);

    // Copyright
    const copyrightDiv = document.createElement('div');
    copyrightDiv.className = 'border-t border-gray-800 text-center text-gray-400';
    copyrightDiv.style.borderTopColor = '#374151';
    copyrightDiv.style.marginTop = '2rem';
    copyrightDiv.style.paddingTop = '2rem';

    const pCopy = document.createElement('p');
    pCopy.innerHTML = '&copy; 2023 Furni. All rights reserved.';
    copyrightDiv.appendChild(pCopy);

    container.appendChild(grid);
    container.appendChild(copyrightDiv);
    footer.appendChild(container);

    // Clear and append
    while (footerContainer.firstChild) {
        footerContainer.removeChild(footerContainer.firstChild);
    }
    footerContainer.appendChild(footer);
}

function initSearchBar() {
    const searchInputs = document.querySelectorAll('input[aria-label="Search products"]');
    searchInputs.forEach(input => {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                const term = input.value.trim();
                if (term) {
                    window.location.href = `products.html?search=${encodeURIComponent(term)}`;
                }
            }
        });
    });
}
