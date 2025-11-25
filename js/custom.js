gsap.registerPlugin(ScrollTrigger);

// Animate the header on page load
gsap.from('.header-area', {
    duration: 1,
    y: '-100%',
    opacity: 0,
    ease: 'power3.out'
});

// Animate the main content sections
gsap.from('.tfc-area .row > div', {
    duration: 1,
    y: 100,
    opacity: 0,
    stagger: 0.2,
    ease: 'power3.out',
    scrollTrigger: {
        trigger: '.tfc-area',
        start: 'top 80%',
    }
});

gsap.from('.wos-area .wos-part', {
    duration: 1,
    y: 100,
    opacity: 0,
    stagger: 0.2,
    ease: 'power3.out',
    scrollTrigger: {
        trigger: '.wos-area',
        start: 'top 80%',
    }
});

// Animate the scrolltotop button
gsap.to('.scrolltotop', {
    duration: 0.5,
    opacity: 1,
    y: 0,
    ease: 'power3.out',
    scrollTrigger: {
        trigger: 'body',
        start: 'top -20%',
        toggleActions: 'play none none reverse'
    }
});
