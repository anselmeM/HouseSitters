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
                // distinct step to ensure transition triggers
                requestAnimationFrame(() => {
                    menu.classList.remove('max-h-0', 'opacity-0');
                    menu.classList.add('max-h-screen', 'opacity-100');
                });
            } else {
                // Close menu
                menu.classList.remove('max-h-screen', 'opacity-100');
                menu.classList.add('max-h-0', 'opacity-0');

                // Wait for transition to finish before hiding completely
                menu.addEventListener('transitionend', function onTransitionEnd(event) {
                    if (event.target !== menu) return;
                    if (!menu.classList.contains('opacity-100')) menu.classList.add('invisible');
                    menu.removeEventListener('transitionend', onTransitionEnd);
                });
            }
        });
    }
});
