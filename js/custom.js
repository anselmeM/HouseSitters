gsap.registerPlugin(ScrollTrigger);

// Animate the header on page load
gsap.from('header', {
    duration: 1,
    y: '-100%',
    opacity: 0,
    ease: 'power3.out'
});

// Animate the main page heading
gsap.from('h1', {
    duration: 1,
    x: -50,
    opacity: 0,
    delay: 0.2,
    ease: 'power3.out'
});

// Animate the filtering sidebar
gsap.from('aside', {
    duration: 1,
    x: -100,
    opacity: 0,
    delay: 0.4,
    ease: 'power3.out',
    scrollTrigger: {
        trigger: 'aside',
        start: 'top 85%',
    }
});

// Animate the product cards with a stagger effect
gsap.from('.grid .group', {
    duration: 0.8,
    y: 100,
    opacity: 0,
    stagger: 0.15,
    ease: 'power3.out',
    scrollTrigger: {
        trigger: '.grid',
        start: 'top 80%',
    }
});
