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
    if (backBtn) backBtn.addEventListener("click", function(event1) {
        event1.preventDefault();
        document.body.classList.add("fade-out");
        setTimeout(()=>{
            history.back();
        }, 500); // Match CSS transition time
    });
    // Remove fade-out on history navigation (including bfcache)
    window.addEventListener("pageshow", function(event1) {
        console.log("pageshow fired. persisted:", event1.persisted);
        if (event1.persisted) // Page loaded from bfcache
        document.body.classList.remove("fade-out");
    });
    // Fallback for normal loads
    window.addEventListener("load", function() {
        document.body.classList.remove("fade-out");
    });
});
if (event.persisted) {
    document.body.style.display = "none";
    document.body.offsetHeight; // trigger reflow
    document.body.style.display = "";
}

//# sourceMappingURL=newinstallation.54f2fec7.js.map
