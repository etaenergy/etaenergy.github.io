// The place I saw this effect:
// https://angle2.agency/
// Red Staper made a NICE tutorial about this effect! You should check it out!
// https://www.youtube.com/watch?v=LgiadQQM6mo&t=5s
window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('resize', handleWindowResize);
const spansSlow = document.querySelectorAll('.spanSlow');
const spansFast = document.querySelectorAll('.spanFast');
let width = window.innerWidth;
function handleMouseMove(e) {
    let normalizedPosition = e.pageX / (width / 2) - 1;
    let speedSlow = 100 * normalizedPosition;
    let speedFast = 200 * normalizedPosition;
    spansSlow.forEach((span)=>{
        span.style.transform = `translate(${speedSlow}px)`;
    });
    spansFast.forEach((span)=>{
        span.style.transform = `translate(${speedFast}px)`;
    });
}
//we need to recalculate width when the window is resized
function handleWindowResize() {
    width = window.innerWidth;
}
// // Select the elements
const images = document.querySelectorAll('.imgshow');
// Set up the GSAP animations
const timeline = gsap.timeline({
    repeat: -1
});
timeline.from(images[0], {
    duration: 2,
    opacity: 0
}).to(images[0], {
    duration: 2,
    opacity: 0
}).from(images[1], {
    duration: 2,
    opacity: 0
}).to(images[1], {
    duration: 2,
    opacity: 0
});
// Start the animation
timeline.play();

//# sourceMappingURL=about.7cd2a9fb.js.map
