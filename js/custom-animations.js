document.addEventListener("DOMContentLoaded", function() {
    // Animate header elements
    gsap.from(".header-a1 ul li", {
        duration: 0.5,
        opacity: 0,
        y: -20,
        stagger: 0.2,
        ease: "power2.out"
    });

    gsap.from(".header-a3 form", {
        duration: 0.5,
        opacity: 0,
        y: -20,
        delay: 0.5,
        ease: "power2.out"
    });

    gsap.from(".header-a4 ul li", {
        duration: 0.5,
        opacity: 0,
        y: -20,
        stagger: 0.2,
        delay: 0.8,
        ease: "power2.out"
    });

    // Animate image containers
    gsap.from(".tfc-left, .tfc-right_a1, .tfc-right_b2", {
        duration: 1,
        opacity: 0,
        scale: 0.9,
        stagger: 0.3,
        scrollTrigger: {
            trigger: ".tfc-area",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });

    // Animate "What's new" section
    gsap.from(".wos-part", {
        duration: 1,
        opacity: 0,
        y: 50,
        stagger: 0.3,
        scrollTrigger: {
            trigger: ".wos-area",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });
});
