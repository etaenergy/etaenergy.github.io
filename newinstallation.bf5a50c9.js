document.addEventListener("DOMContentLoaded", function() {
    console.log("Back button script loaded");
    const backBtn = document.querySelector("[data-back-btn]");
    console.log("Back button found:", backBtn);
    if (backBtn) backBtn.addEventListener("click", function(event) {
        event.preventDefault();
        document.body.classList.add("fade-out");
        setTimeout(()=>{
            history.back();
        }, 500); // Match your CSS transition
    });
});

//# sourceMappingURL=newinstallation.bf5a50c9.js.map
