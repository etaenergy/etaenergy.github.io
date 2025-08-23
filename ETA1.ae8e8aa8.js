window.submittedd = false; // Declare a global variable to track form submission
// function showThankYouMessage() {
//     document.getElementById('thank-message').style.display = 'block';
//     document.getElementById('subb').style.display = 'none';
//     document.getElementById('myForm').style.display = 'none';
// }
function showThankYouMessage() {
    const thankMsg = document.getElementById('thank-message');
    thankMsg.classList.remove('hidden'); // ✅ This is critical!
    thankMsg.style.display = 'flex'; // Flex for the Lottie + content layout
    document.getElementById('subb').style.display = 'none';
    document.getElementById('myForm').style.display = 'none';
}
// Validate Name
function validateName() {
    var name = document.getElementById('name').value;
    if (name.trim().length === 0) {
        alert('Name can\'t be blank');
        return false;
    }
    if (!name.match(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/)) {
        alert('Please enter your correct name');
        return false;
    }
    return true;
}
function validatePhone() {
    var phone1 = document.getElementById('phone').value.trim();
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
function validateEmail() {
    var email = document.getElementById('email').value;
    if (email.length === 0) {
        alert('Email can\'t be blank');
        return false;
    }
    if (!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/)) {
        alert('Please enter a correct email address');
        return false;
    }
    return true;
}
// Validate Full Form
// window.validateForm = function () {
//     if (!validateName() || !validatePhone() || !validateEmail()) {
//         alert('Form not submitted');
//         return false;
//     } else {
//         // window.submittedd = true;
//         sessionStorage.setItem('formSubmitted', 'true');
//         setTimeout(showThankYouMessage, 100); // Show the thank-you message after 1 second
//         return true;
//     }
// };
// Function to show thank-you message after submission
function showThankYouMessage() {
    document.getElementById('thank-message').style.display = 'block';
    document.getElementById('subb').style.display = 'none';
    document.getElementById('myForm').style.display = 'none';
}
window.validateForm = function() {
    if (!validateName() || !validatePhone() || !validateEmail()) {
        alert('Form not submitted');
        return false;
    }
    // showThankYouMessage();
    return true;
};
// async function handleSubmit(event) {
//     event.preventDefault();
//     if (!validateForm()) return false;
//     const form = document.getElementById("myForm");
//     if (form.honeypot && form.honeypot.value !== "") return false;
//     const recaptchaResponse = grecaptcha.getResponse();
//     if (!recaptchaResponse) {
//         alert("Please verify you are not a robot.");
//         return false;
//     }
//     const formData = new FormData(form);
//     formData.append("g-recaptcha-response", recaptchaResponse);
//     try {
//         const response = await fetch("https://script.google.com/macros/s/AKfycbyGXgegFWKD0aetPK10Hl_MBSHSGy7bPSKVjJYpWkIjesTwIkhh3PD4k1vMbPci5N8QeA/exec", {
//             method: "POST",
//             body: formData
//         });
//         if (response.ok) {
//             showThankYouMessage();
//             form.reset();
//             grecaptcha.reset();
//             sessionStorage.setItem("formSubmitted", "true");
//              // ✅ Only show message *after* successful submission
//         } else {
//             alert("Form submission failed. Please try again.");
//         }
//     } catch (error) {
//         console.error("Form error:", error);
//         alert("An error occurred. Please try again later.");
//     }
//     return false;
// }
//ok working
// function handleSubmit(event) {
//     event.preventDefault();
//     // Check if reCAPTCHA is completed
//     const recaptchaResponse = grecaptcha.getResponse(recaptchaContact);
//     if (!recaptchaResponse) {
//         alert("Please complete the reCAPTCHA challenge.");
//         return false;
//     }
//     // Validate form
//     if (!validateForm()) {
//         return false;
//     }
//     const form = document.getElementById("myForm");
//     const formData = new FormData(form);
//     formData.append("g-recaptcha-response", recaptchaResponse); // Optional: send to backend
//     fetch("https://script.google.com/macros/s/AKfycbyGXgegFWKD0aetPK10Hl_MBSHSGy7bPSKVjJYpWkIjesTwIkhh3PD4k1vMbPci5N8QeA/exec", {
//         method: "POST",
//         body: formData
//     })
//     .then(response => {
//         if (response.ok) {
//             console.log("Form submitted successfully.");
//             showThankYouMessage(); // ✅ show thank-you on success
//             grecaptcha.reset(recaptchaContact); // Optional: reset reCAPTCHA
//         } else {
//             throw new Error("Network response was not ok");
//         }
//     })
//     .catch(error => {
//         alert("There was an error submitting the form. Please try again later.");
//         console.error("Submission error:", error);
//     });
//     return false;
// }
function handleSubmit(event) {
    event.preventDefault();
    const cntbtns = document.getElementById("contbtns");
    const loader = document.getElementById("loader");
    // Check if reCAPTCHA is completed
    const recaptchaResponse = grecaptcha.getResponse(recaptchaContact);
    if (!recaptchaResponse) {
        alert("Please complete the reCAPTCHA challenge.");
        return false;
    }
    // Validate form
    if (!validateForm()) return false;
    // Passed validation and reCAPTCHA
    loader.style.display = "block"; // Show loading animation
    cntbtns.style.display = "none"; // Hide button
    const form = document.getElementById("myForm");
    const formData = new FormData(form);
    formData.append("g-recaptcha-response", recaptchaResponse);
    fetch("https://script.google.com/macros/s/AKfycbyGXgegFWKD0aetPK10Hl_MBSHSGy7bPSKVjJYpWkIjesTwIkhh3PD4k1vMbPci5N8QeA/exec", {
        method: "POST",
        body: formData
    }).then((response)=>{
        loader.style.display = "none"; // Hide loader
        if (response.ok) {
            console.log("Form submitted successfully.");
            showThankYouMessage();
            form.reset();
            sessionStorage.setItem("formSubmitted", "true");
            grecaptcha.reset(recaptchaContact);
        } else throw new Error("Network response was not ok");
    }).catch((error)=>{
        loader.style.display = "none"; // Hide loader
        cntbtns.style.display = "block"; // Show button again
        alert("There was an error submitting the form. Please try again later.");
        console.error("Submission error:", error);
    });
    return false;
}
// Handle Popup Logic
document.addEventListener("DOMContentLoaded", function() {
    var popupContainer = document.getElementById('popup-container');
    var closeBtn = document.getElementById('close-btn');
    var contactUsLinks = document.querySelectorAll('#contact-us-link-desktop, #contact-us-link-mobile');
    // Show popup after 5 seconds if not already shown
    if (!localStorage.getItem('popupShown')) setTimeout(function() {
        popupContainer.style.display = 'block';
        popupContainer.classList.add('show');
    }, 5000);
    else popupContainer.style.display = 'none';
    // Close popup event
    closeBtn.addEventListener('click', function() {
        popupContainer.classList.add('hide');
        setTimeout(function() {
            popupContainer.style.display = 'none';
            popupContainer.classList.remove('hide', 'show');
        }, 500);
        localStorage.setItem('popupShown', 'true');
    });
    // Show popup when clicking "Contact Us"
    contactUsLinks.forEach((link)=>{
        link.addEventListener('click', function(event) {
            event.preventDefault();
            popupContainer.style.display = 'block';
            popupContainer.classList.add('show');
            localStorage.setItem('popupShown', 'true');
        });
        if (localStorage.getItem('formSubmitted') === 'true') showThankYouMessage();
    });
}); // function toggleServiceSection(sectionId) {
 //     console.log('toggleServiceSection called with sectionId:', sectionId);
 //     var section = document.getElementById(sectionId);
 //     if (section) {
 //         section.style.display = section.style.display === 'none' ? 'block' : 'none';
 //     } else {
 //         console.error('Section not found: ' + sectionId);
 //     }
 // }

//# sourceMappingURL=ETA1.ae8e8aa8.js.map
