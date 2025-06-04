// async function handleSubmit(event) {
//     event.preventDefault();
//     // Validate form using your existing validation
//     if (!validateForm()) {
//         return false;
//     }
//     const form = document.getElementById("myForm");
//     // Honeypot check (anti-spam)
//     if (form.honeypot && form.honeypot.value !== "") {
//         return false; // Detected bot
//     }
//     const formData = new FormData(form);
//     try {
//         const response = await fetch("https://script.google.com/macros/s/AKfycbyGXgegFWKD0aetPK10Hl_MBSHSGy7bPSKVjJYpWkIjesTwIkhh3PD4k1vMbPci5N8QeA/exec", {
//             method: "POST",
//             body: formData
//         });
//         if (response.ok) {
//             // Success
//             form.reset();
//             sessionStorage.setItem('formSubmitted', 'true');
//             showThankYouMessage();
//         } else {
//             alert("Form submission failed. Please try again.");
//         }
//     } catch (error) {
//         console.error("Form error:", error);
//         alert("An error occurred. Please try again later.");
//     }
//     return false; // Prevent default form submission
// }
// function showThankYouMessage() {
//     document.getElementById("thank-message").classList.remove("hidden");
// }
// function resetFormState() {
//     document.getElementById("thank-message").classList.add("hidden");
//     sessionStorage.removeItem('formSubmitted');
// }
async function handleSubmit(event) {
    event.preventDefault();
    if (!validateForm()) return false;
    const form = document.getElementById("myForm");
    // Honeypot check
    if (form.honeypot && form.honeypot.value !== "") return false;
    // Get reCAPTCHA token
    const recaptchaResponse = grecaptcha.getResponse();
    if (!recaptchaResponse) {
        alert("Please verify you are not a robot.");
        return false;
    }
    const formData = new FormData(form);
    formData.append("g-recaptcha-response", recaptchaResponse); // Important
    try {
        const response = await fetch("https://script.google.com/macros/s/AKfycbyGXgegFWKD0aetPK10Hl_MBSHSGy7bPSKVjJYpWkIjesTwIkhh3PD4k1vMbPci5N8QeA/exec", {
            method: "POST",
            body: formData
        });
        if (response.ok) {
            form.reset();
            grecaptcha.reset(); // Reset reCAPTCHA
            sessionStorage.setItem("formSubmitted", "true");
            showThankYouMessage();
        } else alert("Form submission failed. Please try again.");
    } catch (error) {
        console.error("Form error:", error);
        alert("An error occurred. Please try again later.");
    }
    return false;
}

//# sourceMappingURL=index.4cbdb456.js.map
