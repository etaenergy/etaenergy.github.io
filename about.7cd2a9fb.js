var tmlabt = gsap.timeline({
    defaults: {
        duration: 1
    }
});
tmlabt.to(".nav_component", {
    opacity: 1,
    y: 0,
    stagger: 0.1,
    ease: "Power1.easeInOut"
}, "-=.6").fromTo(".about-header-title", {
    scale: 0,
    opacity: 0
}, {
    opacity: 1,
    scale: 1,
    y: 0,
    ease: "Power1.easeInOut"
}, "-=0.3");
let mctla = gsap.timeline({
    defaults: {
        duration: 1
    }
});
mctla.to(".marquee-scroll", {
    x: "-100%",
    duration: 30,
    ease: "linear",
    repeat: -1 // Infinite loop
});

//# sourceMappingURL=about.7cd2a9fb.js.map
