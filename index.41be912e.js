window.submitted = false; // Declare a global variable to track form submission
// Function to show thank-you message after submission
function showThankYouMessage1() {
    document.getElementById('thankyou-message1').style.display = 'block';
    document.getElementById('subb1').style.display = 'none';
    document.getElementById('quoteForm').style.display = 'none';
    setTimeout(()=>{
        document.getElementById('popup-container1').style.display = 'none';
    }, 3000);
}
// Validate Name
function validateName1() {
    var name1 = document.getElementById('name1').value.trim();
    if (name1.length === 0) {
        alert("Name can't be blank");
        return false;
    }
    var nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ'-]{2,}(?: [A-Za-zÀ-ÖØ-öø-ÿ'-]{2,}){0,2}$/;
    if (!nameRegex.test(name1)) {
        alert('Please enter a valid name (letters only, up to 3 words)');
        return false;
    }
    return true;
}
// Validate Phone
// function validatePhone1() {
//     var phone1 = document.getElementById('phone1').value.trim();
//     if (phone1.length === 0) return true; // Phone is optional
//     var intlRegex = /^\+?[1-9]\d{5,14}$/;
//     if (!intlRegex.test(phone1)) {
//         alert('Please enter a valid international phone number in the format +123456789...');
//         return false;
//     }
//     return true;
// }
function validatePhone1() {
    var phone1 = document.getElementById('phone1').value.trim();
    if (phone1.length === 0) return true; // Phone is optional
    // UAE numbers: starts with +971 or 0, followed by 5 and 8 digits
    var uaeRegex = /^(?:\+971|0)5[0-9]{8}$/;
    // International: strictly starts with + and 6-15 digits
    var intlRegex = /^\+[1-9]\d{5,14}$/;
    if (!uaeRegex.test(phone1) && !intlRegex.test(phone1)) {
        alert('Please enter a valid UAE or international phone number');
        return false;
    }
    return true;
}
// Validate Email
function validateEmail1() {
    var email1 = document.getElementById('email1').value;
    if (email1.length === 0) {
        alert('Email can\'t be blank');
        return false;
    }
    if (!email1.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/)) {
        alert('Please enter a correct email address');
        return false;
    }
    return true;
}
// Validate at least one service selected
function validateServiceSelection() {
    const installationVisible = document.getElementById('installation-details').style.display !== 'none';
    const modernizationVisible = document.getElementById('modernization-details').style.display !== 'none';
    const maintenanceVisible = document.getElementById('maintenance-details').style.display !== 'none';
    if (!installationVisible && !modernizationVisible && !maintenanceVisible) {
        alert('Please select at least one service (Installation, Modernization, or Maintenance).');
        return false;
    }
    return true;
}
// Validate service details
function validateServiceDetails() {
    let isAnyValid = false;
    const installationVisible = document.getElementById('installation-details').style.display !== 'none';
    if (installationVisible) {
        const budget1 = document.getElementById('budget1').value;
        const floors1 = document.getElementById('floor1').value.trim();
        if (budget1 !== '----' && floors1 !== '' && !isNaN(floors1) && parseInt(floors1) >= 1) isAnyValid = true;
    }
    const modernizationVisible = document.getElementById('modernization-details').style.display !== 'none';
    if (modernizationVisible) {
        const budget2 = document.getElementById('budget2').value;
        const floors2 = document.getElementById('floor2').value.trim();
        const scope = document.getElementById('modernization-scope').value.trim();
        if (budget2 !== '----' && floors2 !== '' && !isNaN(floors2) && parseInt(floors2) >= 1 && scope !== '') isAnyValid = true;
    }
    const maintenanceVisible = document.getElementById('maintenance-details').style.display !== 'none';
    if (maintenanceVisible) {
        const frequency = document.getElementById('maintenance-frequency').value;
        const budget3 = document.getElementById('budget3').value;
        const floors3 = document.getElementById('floor3').value.trim();
        if (frequency !== '----' && budget3 !== '----' && floors3 !== '' && !isNaN(floors3) && parseInt(floors3) >= 1) isAnyValid = true;
    }
    if (!isAnyValid) {
        alert('Please fill in valid details for at least one visible service section.');
        return false;
    }
    return true;
}
// Validate entire form
function validateForm1() {
    if (!validateName1() || !validatePhone1() || !validateEmail1() || !validateServiceSelection() || !validateServiceDetails()) {
        alert('Form not submitted');
        return false;
    }
    window.submitted = true;
    setTimeout(showThankYouMessage1, 100);
    return true;
}
function handleQuoteSubmit(event) {
    event.preventDefault();
    // Check if reCAPTCHA is completed
    const recaptchaResponse = grecaptcha.getResponse(recaptchaQuote);
    if (!recaptchaResponse) {
        alert("Please complete the reCAPTCHA challenge.");
        return false;
    }
    // Validate form
    if (!validateForm1()) return false;
    const form = document.getElementById("quoteForm");
    const formData = new FormData(form);
    formData.append("g-recaptcha-response", recaptchaResponse); // Optional: send to backend
    fetch("https://script.google.com/macros/s/AKfycbyp0VH-0wpYn6uip2eJq34iY_dy1iq74ESjjnCiB2NKAmzUkN7AYXjRRqLMwKU3-PYJWQ/exec", {
        method: "POST",
        body: formData
    }).then((response)=>{
        if (response.ok) {
            console.log("Quote submitted successfully.");
            showThankYouMessage1(); // ✅ show thank-you on success
            grecaptcha.reset(recaptchaQuote); // Optional: reset reCAPTCHA
        } else throw new Error("Network response was not ok");
    }).catch((error)=>{
        alert("There was an error submitting the form. Please try again later.");
        console.error("Submission error:", error);
    });
    return false;
}
// Handle popup logic
document.addEventListener("DOMContentLoaded", function() {
    const popupContainer1 = document.getElementById('popup-container1');
    const closeBtn1 = document.getElementById('close-btn1');
    const contactUsLinks1 = document.querySelectorAll('#quote-us-link-desktop, #quote-us-link-mobile');
    closeBtn1.addEventListener('click', function() {
        popupContainer1.classList.add('hide');
        setTimeout(()=>{
            popupContainer1.style.display = 'none';
            popupContainer1.classList.remove('hide', 'show');
        }, 500);
        sessionStorage.setItem('popupShown', true);
    });
    contactUsLinks1.forEach((link)=>{
        link.addEventListener('click', function(event) {
            event.preventDefault();
            popupContainer1.style.display = 'block';
            popupContainer1.classList.add('show');
            sessionStorage.setItem('popupShown', true);
        });
    });
});

//# sourceMappingURL=index.41be912e.js.map
