// document.addEventListener("DOMContentLoaded", function () {
//   console.log("Back button script loaded");
//   const backBtn = document.querySelector("[data-back-btn]");
//   console.log("Back button found:", backBtn);
//   if (backBtn) {
//     backBtn.addEventListener("click", function (event) {
//       event.preventDefault();
//       document.body.classList.add("fade-out");
//       setTimeout(() => {
//         history.back();
//       }, 500); // Match your CSS transition
//     });
//   }
// });
// document.addEventListener("DOMContentLoaded", () => {
//   console.log("Back button script loaded");
//   const backBtn = document.querySelector("[data-back-btn]");
//   console.log("Back button found:", backBtn);
//   if (backBtn) {
//     backBtn.addEventListener("click", function (event) {
//       event.preventDefault();
//       // Apply fade-out transition
//       // document.body.classList.add("fade-out");
//       // Delay going back until after transition
//       setTimeout(() => {
//         history.back();
//       }, 500); // Match with CSS transition duration
//     });
//   }
//   // // Ensure fade-out is removed when page is shown (from bfcache or reload)
//   // window.addEventListener("pageshow", function (event) {
//   //   console.log("Page show, persisted:", event.persisted);
//   //   document.body.classList.remove("fade-out");
//   //   // Optional: fix blank page in iOS/Safari by forcing redraw
//   //   if (event.persisted) {
//   //     document.body.style.display = "none";
//   //     document.body.offsetHeight; // force reflow
//   //     document.body.style.display = "";
//   //   }
//   // });
//   // // Also remove fade-out in normal load
//   // window.addEventListener("load", () => {
//   //   document.body.classList.remove("fade-out");
//   // });
// });
document.addEventListener("DOMContentLoaded", function() {
    const burger = document.querySelector(".nav_menu-lottie-hamburgerr");
    if (burger && !burger.querySelector("span")) {
        const span = document.createElement("span");
        burger.appendChild(span);
    }
    burger.addEventListener("click", function() {
        burger.classList.toggle("active");
    });
});
document.addEventListener("DOMContentLoaded", ()=>{
    // Wait until page has fully loaded
    window.addEventListener("load", ()=>{
        const hash = window.location.hash;
        if (hash) // Use timeout to wait for fade-in to complete
        setTimeout(()=>{
            const target = document.querySelector(hash);
            if (target) target.scrollIntoView({
                behavior: "smooth"
            });
        }, 500); // Match this with your fade animation duration
    });
});

//# sourceMappingURL=installation.6dccfcdc.js.map
