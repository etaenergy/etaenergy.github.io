var $df317fa1a05c397d$exports = {};
var $df317fa1a05c397d$var$tml = gsap.timeline({
    defaults: {
        duration: 1
    }
});
$df317fa1a05c397d$var$tml.to(".nav_component", {
    opacity: 1,
    y: 0,
    stagger: 0.1,
    ease: "Power1.easeInOut"
}, "-=0.2").to(".section-video-hero, .fab, .maskkimg", {
    opacity: 1,
    p: 0,
    ease: "Power1.easeInOut"
}, "-=0.2").to(".nav_component, .videoo", {
    opacity: 1,
    p: 0,
    stagger: 0.1,
    ease: "Power1.easeInOut"
}, "-=0.2").to(".home-hero-title", {
    opacity: 1,
    ease: "Power1.easeInOut",
    margin: 0
}, "-=0.2");
let $df317fa1a05c397d$var$laptl = gsap.timeline({
    defaults: {
        duration: 1
    }
});
$df317fa1a05c397d$var$laptl.to(".course-wyn_animation-text-left", {
    x: 0,
    ease: "Power1.easeInOut"
}, "-=0.10").to(".course-wyn_animation-text-right", {
    x: 0,
    ease: "Power1.easeInOut"
}, "-=0.9").to(".course-wyn_midi-image", {
    opacity: 1,
    ease: "Power1.easeInOut"
}, "-=0.9");
ScrollTrigger.create({
    trigger: '.course-wyn_animation-text-left',
    start: "bottom 80%",
    end: "+=500",
    animation: $df317fa1a05c397d$var$laptl,
    scrub: true
});
let $df317fa1a05c397d$var$laptlm = gsap.timeline({
    defaults: {
        duration: 1
    }
});
$df317fa1a05c397d$var$laptlm.to(".course-wyn_midi-title-mobile", {
    opacity: 1,
    y: 0,
    ease: "Power1.easeInOut"
}, "");
ScrollTrigger.create({
    trigger: '.sup',
    start: "top 10%",
    end: "+=500",
    animation: $df317fa1a05c397d$var$laptlm
});
let $df317fa1a05c397d$var$crstl = gsap.timeline({
    defaults: {
        duration: 1
    }
});
$df317fa1a05c397d$var$crstl.to(".course-modules_heading-wrapper", {
    opacity: 1,
    y: 0,
    ease: "Power1.easeInOut"
}, "").to(".course-modules_subheading-container", {
    opacity: 1,
    y: 0,
    ease: "Power1.easeInOut"
}, "-=0.5").to("#stylebtn", {
    opacity: 1,
    y: 0,
    ease: "Power1.easeInOut"
}, "-=0.5");
ScrollTrigger.create({
    trigger: '#abtbtn',
    start: "top 10%",
    end: "+=500",
    animation: $df317fa1a05c397d$var$crstl
});
let $df317fa1a05c397d$var$syctl = gsap.timeline({
    defaults: {
        duration: 1
    }
});
$df317fa1a05c397d$var$syctl.to(".webdev_syl", {
    zIndex: 10,
    opacity: 1,
    x: 0,
    ease: "Power1.easeInOut"
}, "").to(".webdev_lott", {
    zIndex: 9,
    opacity: 1,
    x: 0,
    ease: "Power1.easeInOut"
}, "");
ScrollTrigger.create({
    trigger: '#stylebtn',
    start: "top 60%",
    end: "+=500",
    animation: $df317fa1a05c397d$var$syctl,
    scrub: true,
    scrub: 1,
    toggleActions: "play pause resume reset"
});
let $df317fa1a05c397d$var$autsyctl = gsap.timeline({
    defaults: {
        duration: 1
    }
});
$df317fa1a05c397d$var$autsyctl.to(".idaut_syl", {
    zIndex: 10,
    opacity: 1,
    x: 0,
    ease: "Power1.easeInOut"
}, "").to(".idaut_lott", {
    zIndex: 9,
    opacity: 1,
    x: 0,
    ease: "Power1.easeInOut"
}, "");
ScrollTrigger.create({
    trigger: '.webdev_lott',
    start: "100% 50%",
    end: "+=500",
    animation: $df317fa1a05c397d$var$autsyctl,
    scrub: true,
    scrub: 1,
    toggleActions: "play pause resume reset"
});
let $df317fa1a05c397d$var$embsyctl = gsap.timeline({
    defaults: {
        duration: 1
    }
});
$df317fa1a05c397d$var$embsyctl.to(".embdev_syl", {
    zIndex: 10,
    opacity: 1,
    x: 0,
    ease: "Power1.easeInOut"
}, "").to(".embdev_lott", {
    zIndex: 9,
    opacity: 1,
    x: 0,
    ease: "Power1.easeInOut"
}, "");
ScrollTrigger.create({
    trigger: '.idaut_syl',
    start: "bottom 50%",
    end: "+=500",
    animation: $df317fa1a05c397d$var$embsyctl,
    scrub: true,
    scrub: 1,
    toggleActions: "play pause resume reset"
});
let $df317fa1a05c397d$var$autsyctlhos = gsap.timeline({
    defaults: {
        duration: 1
    }
});
$df317fa1a05c397d$var$autsyctlhos.to(".idaut_sylhos", {
    zIndex: 10,
    opacity: 1,
    x: 0,
    ease: "Power1.easeInOut"
}, "").to(".idaut_lotthos", {
    zIndex: 9,
    opacity: 1,
    x: 0,
    ease: "Power1.easeInOut"
}, "");
ScrollTrigger.create({
    trigger: '.embdev_syl',
    start: "100% 50%",
    end: "+=500",
    animation: $df317fa1a05c397d$var$autsyctlhos,
    scrub: true,
    scrub: 1,
    toggleActions: "play pause resume reset"
});
let $df317fa1a05c397d$var$embsyctlpana = gsap.timeline({
    defaults: {
        duration: 1
    }
});
$df317fa1a05c397d$var$embsyctlpana.to(".embdev_sylpana", {
    zIndex: 10,
    opacity: 1,
    x: 0,
    ease: "Power1.easeInOut"
}, "").to(".embdev_lottpana", {
    zIndex: 9,
    opacity: 1,
    x: 0,
    ease: "Power1.easeInOut"
}, "");
ScrollTrigger.create({
    trigger: '.idaut_sylhos',
    start: "bottom 50%",
    end: "+=500",
    animation: $df317fa1a05c397d$var$embsyctlpana,
    scrub: true,
    scrub: 1,
    toggleActions: "play pause resume reset"
});
let $df317fa1a05c397d$var$autsyctlhos24 = gsap.timeline({
    defaults: {
        duration: 1
    }
});
$df317fa1a05c397d$var$autsyctlhos24.to(".idaut_sylhos24", {
    zIndex: 10,
    opacity: 1,
    x: 0,
    ease: "Power1.easeInOut"
}, "").to(".idaut_lotthos24", {
    zIndex: 9,
    opacity: 1,
    x: 0,
    ease: "Power1.easeInOut"
}, "");
ScrollTrigger.create({
    trigger: '.embdev_sylpana',
    start: "100% 50%",
    end: "+=500",
    animation: $df317fa1a05c397d$var$autsyctlhos24,
    scrub: true,
    scrub: 1,
    toggleActions: "play pause resume reset"
});
let $df317fa1a05c397d$var$ulktl = gsap.timeline({
    defaults: {
        duration: 1
    }
});
$df317fa1a05c397d$var$ulktl.to(".course-areas_content-wrapper", {
    opacity: 1,
    scale: 1,
    y: 0,
    ease: "Power1.easeInOut"
}, "");
ScrollTrigger.create({
    trigger: '#dwnbtn',
    start: "top 50%",
    end: "+=500",
    animation: $df317fa1a05c397d$var$ulktl
});
let $df317fa1a05c397d$var$movtxtl = gsap.timeline({
    defaults: {
        duration: 2
    }
});
$df317fa1a05c397d$var$movtxtl.to(".to-right", {
    x: -1500,
    ease: "power1.inOut"
}, "").to(".to-left", {
    x: 1500,
    ease: "power1.inOut"
}, "");
ScrollTrigger.create({
    trigger: '.course-areas_content-wrapper',
    start: "top 70%",
    end: "+=" + window.innerHeight * 10,
    anticipatePin: true,
    animation: $df317fa1a05c397d$var$movtxtl,
    scrub: true,
    scrub: 1,
    toggleActions: "play pause resume reset"
});
// Dropdowns
$('.dd_label').click(function() {
    $(this).closest('.dropdown').toggleClass('active').siblings('.dropdown').removeClass('active');
});
$(document).mouseup(function(e) {
    var dropDownLabel = $('.dd_label');
    if (!dropDownLabel.is(e.target) // The target of the click isn't the dropdown.
     && dropDownLabel.has(e.target).length === 0) $('.dd_label').closest('.dropdown').removeClass('active');
});


