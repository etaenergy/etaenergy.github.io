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
document.addEventListener("DOMContentLoaded", function() {
    console.log("Back button script loaded");
    const backBtn = document.querySelector("[data-back-btn]");
    console.log("Back button found:", backBtn);
    if (backBtn) backBtn.addEventListener("click", function(event) {
        event.preventDefault();
        document.body.classList.add("fade-out");
        setTimeout(()=>{
            if (history.length > 1) history.back();
            else window.location.href = "index.html"; // or your fallback page
        }, 500);
    });
    // Remove fade-out on return (important!)
    window.addEventListener("pageshow", function() {
        document.body.classList.remove("fade-out");
    });
    // Just in case it comes from a hard reload or fresh navigation
    window.addEventListener("load", function() {
        document.body.classList.remove("fade-out");
    });
});

//# sourceMappingURL=newinstallation.78e7dfcc.js.map
