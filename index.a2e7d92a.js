var $90f2e6d0a4ed88e0$exports = {};
// // WORKING CODE
// const cursor = document.querySelector(".custom-cursor");
// const cursorDot = document.querySelector(".cursor-dot");
// const links = document.querySelectorAll("a, button");
// let isCursorInited = false;
// let targetX = 0, targetY = 0;  // Target position of the cursor
// let currentX = 0, currentY = 0;  // Current position of the cursor
// const cursorSpeed = 0.05; // Control the lag speed (smaller is more laggy)
// // Initialize the cursor
// const initCursor = () => {
//   cursor.classList.add("custom-cursor--init");
//   isCursorInited = true;
// };
// // Destroy the cursor on mouse out
// const destroyCursor = () => {
//   cursor.classList.remove("custom-cursor--init");
//   isCursorInited = false;
// };
// links.forEach((link) => {
//   link.addEventListener("mouseover", () => {
//     clearTimeout(cursor.leaveTimeout);
//     cursor.classList.remove("custom-cursor--out");
//     cursor.classList.add("custom-cursor--link");
//   });
//   link.addEventListener("mouseout", () => {
//     // First: trigger the "out" animation
//     cursor.classList.remove("custom-cursor--link");
//     cursor.classList.add("custom-cursor--out");
//     // Optional: Remove .custom-cursor--out after animation completes
//     cursor.leaveTimeout = setTimeout(() => {
//       cursor.classList.remove("custom-cursor--out");
//     }, 300); // match the transition time
//   });
// });
// // Update cursor position smoothly with lag effect
// const updateCursorPosition = () => {
//   // Interpolate current position towards target position (for laggy effect)
//   currentX += (targetX - currentX) * cursorSpeed;
//   currentY += (targetY - currentY) * cursorSpeed;
//   // Update the large cursor position
//   cursor.style.left = `${currentX}px`;
//   cursor.style.top = `${currentY}px`;
//   // Update the small dot position
//   cursorDot.style.left = `${targetX}px`;
//   cursorDot.style.top = `${targetY}px`;
//   // Repeat this animation frame
//   requestAnimationFrame(updateCursorPosition);
// };
// // Mouse move event to update target position
// document.addEventListener("mousemove", (e) => {
//   targetX = e.clientX;
//   targetY = e.clientY;
//   // Initialize cursor if not yet initialized
//   if (!isCursorInited) {
//     initCursor();
//   }
// });
// // Destroy cursor on mouse out
// document.addEventListener("mouseout", destroyCursor);
// // Start the laggy cursor movement
// updateCursorPosition();
// // // test
// const lottieDiv = document.querySelector(".home-header_lottie-desktop");
// const lottieSection = document.querySelector(".lott"); // wrap the Lottie in a section or container
// const parallaxTiltIntensity = 10;
// const lerpSpeed = 0.1;
// let currentTiltX = 0;
// let currentTiltY = 0;
// let localX = 0;
// let localY = 0;
// let isInSection = false;
// document.addEventListener("mousemove", (e) => {
//   const rect = lottieSection.getBoundingClientRect();
//   isInSection = (
//     e.clientX >= rect.left &&
//     e.clientX <= rect.right &&
//     e.clientY >= rect.top &&
//     e.clientY <= rect.bottom
//   );
//   if (isInSection) {
//     localX = e.clientX - rect.left;
//     localY = e.clientY - rect.top;
//   }
// });
// function updateLottie3DTilt() {
//   if (!lottieDiv) return;
//   if (isInSection) {
//     const rect = lottieSection.getBoundingClientRect();
//     const centerX = rect.width / 2;
//     const centerY = rect.height / 2;
//     const offsetX = localX - centerX;
//     const offsetY = localY - centerY;
//     const percentX = offsetX / centerX;
//     const percentY = offsetY / centerY;
//     const targetTiltY = percentX * parallaxTiltIntensity * -1;
//     const targetTiltX = percentY * parallaxTiltIntensity;
//     currentTiltX += (targetTiltX - currentTiltX) * lerpSpeed;
//     currentTiltY += (targetTiltY - currentTiltY) * lerpSpeed;
//   } else {
//     // Slowly return to 0 rotation when mouse leaves the section
//     currentTiltX += (0 - currentTiltX) * lerpSpeed;
//     currentTiltY += (0 - currentTiltY) * lerpSpeed;
//   }
//   gsap.set(lottieDiv, {
//     rotationX: currentTiltX,
//     rotationY: currentTiltY,
//     transformPerspective: 800,
//     transformOrigin: "center center",
//   });
//   requestAnimationFrame(updateLottie3DTilt);
// }
// // Enhance cursor to match hovered element's size & shape
// const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
// interactiveElements.forEach((el) => {
//   el.addEventListener('mouseenter', () => {
//     const rect = el.getBoundingClientRect();
//     cursor.classList.add('custom-cursor--adapting');
//     cursor.style.width = `${rect.width}px`;
//     cursor.style.height = `${rect.height}px`;
//     const computedStyle = getComputedStyle(el);
//     cursor.style.borderRadius = computedStyle.borderRadius || '10px';
//   });
//   el.addEventListener('mouseleave', () => {
//     cursor.classList.remove('custom-cursor--adapting');
//     cursor.style.width = '100px';
//     cursor.style.height = '100px';
//     cursor.style.borderRadius = '50%';
//   });
// });
// updateLottie3DTilt();
const $90f2e6d0a4ed88e0$var$cursor = document.querySelector(".custom-cursor");
const $90f2e6d0a4ed88e0$var$cursorDot = document.querySelector(".cursor-dot");
const $90f2e6d0a4ed88e0$var$links = document.querySelectorAll("a, button, [role='button']");
let $90f2e6d0a4ed88e0$var$isCursorInited = false;
let $90f2e6d0a4ed88e0$var$targetX = 0, $90f2e6d0a4ed88e0$var$targetY = 0;
let $90f2e6d0a4ed88e0$var$currentX = 0, $90f2e6d0a4ed88e0$var$currentY = 0;
const $90f2e6d0a4ed88e0$var$cursorSpeed = 0.12;
const $90f2e6d0a4ed88e0$var$initCursor = ()=>{
    $90f2e6d0a4ed88e0$var$cursor.classList.add("custom-cursor--init");
    $90f2e6d0a4ed88e0$var$isCursorInited = true;
};
const $90f2e6d0a4ed88e0$var$destroyCursor = ()=>{
    $90f2e6d0a4ed88e0$var$cursor.classList.remove("custom-cursor--init");
    $90f2e6d0a4ed88e0$var$isCursorInited = false;
};
$90f2e6d0a4ed88e0$var$links.forEach((link)=>{
    link.addEventListener("mouseenter", ()=>{
        clearTimeout($90f2e6d0a4ed88e0$var$cursor.leaveTimeout);
        $90f2e6d0a4ed88e0$var$cursor.classList.remove("custom-cursor--out");
        $90f2e6d0a4ed88e0$var$cursor.classList.add("custom-cursor--link");
    });
    link.addEventListener("mouseleave", ()=>{
        $90f2e6d0a4ed88e0$var$cursor.classList.remove("custom-cursor--link");
        $90f2e6d0a4ed88e0$var$cursor.classList.add("custom-cursor--out");
        $90f2e6d0a4ed88e0$var$cursor.leaveTimeout = setTimeout(()=>{
            $90f2e6d0a4ed88e0$var$cursor.classList.remove("custom-cursor--out");
        }, 300);
    });
});
const $90f2e6d0a4ed88e0$var$updateCursorPosition = ()=>{
    $90f2e6d0a4ed88e0$var$currentX += ($90f2e6d0a4ed88e0$var$targetX - $90f2e6d0a4ed88e0$var$currentX) * $90f2e6d0a4ed88e0$var$cursorSpeed;
    $90f2e6d0a4ed88e0$var$currentY += ($90f2e6d0a4ed88e0$var$targetY - $90f2e6d0a4ed88e0$var$currentY) * $90f2e6d0a4ed88e0$var$cursorSpeed;
    $90f2e6d0a4ed88e0$var$cursor.style.left = `${$90f2e6d0a4ed88e0$var$currentX}px`;
    $90f2e6d0a4ed88e0$var$cursor.style.top = `${$90f2e6d0a4ed88e0$var$currentY}px`;
    $90f2e6d0a4ed88e0$var$cursorDot.style.left = `${$90f2e6d0a4ed88e0$var$targetX}px`;
    $90f2e6d0a4ed88e0$var$cursorDot.style.top = `${$90f2e6d0a4ed88e0$var$targetY}px`;
    requestAnimationFrame($90f2e6d0a4ed88e0$var$updateCursorPosition);
};
document.addEventListener("mousemove", (e)=>{
    $90f2e6d0a4ed88e0$var$targetX = e.clientX;
    $90f2e6d0a4ed88e0$var$targetY = e.clientY;
    if (!$90f2e6d0a4ed88e0$var$isCursorInited) $90f2e6d0a4ed88e0$var$initCursor();
});
document.addEventListener("mouseout", ()=>{
    $90f2e6d0a4ed88e0$var$destroyCursor();
});
$90f2e6d0a4ed88e0$var$updateCursorPosition(); // Removed cursor resizing and shape adapting on hover for minimal animation


