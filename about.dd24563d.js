var $d172752ccfca74c1$exports = {};
function $d172752ccfca74c1$var$updateLogoColor(bgColor) {
    const logo = document.getElementById("logoSVG");
    // Convert HEX color to RGB
    const rgb = $d172752ccfca74c1$var$hexToRgb(bgColor);
    if (!rgb) return; // Exit if hexToRgb returned null
    const brightness = rgb.r * 0.299 + rgb.g * 0.587 + rgb.b * 0.114; // Calculate brightness
    // Adjust logo color based on background brightness
    const logoColor = brightness > 128 ? "#ff7d7d" : "#ec2227"; // Light BG → Black Logo, Dark BG → White Logo
    // Apply the color with a transition
    logo.querySelectorAll("polygon, path").forEach((el)=>el.setAttribute("fill", logoColor));
}
function $d172752ccfca74c1$var$hexToRgb(hex) {
    if (typeof hex !== 'string') return null;
    hex = hex.replace('#', '');
    if (hex.length === 3) hex = hex.split('').map(function(char) {
        return char + char;
    }).join('');
    const rgb = /^([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})$/i.exec(hex);
    return rgb ? {
        r: parseInt(rgb[1], 16),
        g: parseInt(rgb[2], 16),
        b: parseInt(rgb[3], 16)
    } : null;
}
// Detect when the logo moves into a new section
const $d172752ccfca74c1$var$observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting) {
            const bgColor = window.getComputedStyle(entry.target).backgroundColor;
            $d172752ccfca74c1$var$updateLogoColor($d172752ccfca74c1$var$rgbToHex(bgColor)); // Convert RGB to HEX and update logo color
        }
    });
}, {
    threshold: 0.5
});
// Observe sections
document.querySelectorAll('.section').forEach((section)=>$d172752ccfca74c1$var$observer.observe(section));
// Function to convert RGB to HEX
function $d172752ccfca74c1$var$rgbToHex(rgb) {
    let [r, g, b] = rgb.match(/\d+/g);
    return `#${(16777216 | r << 16 | g << 8 | +b).toString(16).slice(1)}`;
}
// Initialize the logo color based on the first section
const $d172752ccfca74c1$var$firstSectionBgColor = "#FF3535"; // Initial background color
$d172752ccfca74c1$var$updateLogoColor($d172752ccfca74c1$var$firstSectionBgColor);
// Update logo color on scroll by checking the current section's background color
window.addEventListener("scroll", function() {
    const sections = document.querySelectorAll('.section');
    let bgColor = $d172752ccfca74c1$var$firstSectionBgColor; // Default to the first section's color
    sections.forEach((section)=>{
        const rect = section.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom >= 0) bgColor = window.getComputedStyle(section).backgroundColor;
    });
    $d172752ccfca74c1$var$updateLogoColor($d172752ccfca74c1$var$rgbToHex(bgColor));
});
// Initial check on page load
window.addEventListener("load", function() {
    $d172752ccfca74c1$var$updateLogoColor($d172752ccfca74c1$var$firstSectionBgColor);
});
// Re-check logo color on mobile device resize
window.addEventListener("resize", function() {
    const sections = document.querySelectorAll('.section');
    let bgColor = $d172752ccfca74c1$var$firstSectionBgColor; // Default to the first section's color
    sections.forEach((section)=>{
        const rect = section.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom >= 0) bgColor = window.getComputedStyle(section).backgroundColor;
    });
    $d172752ccfca74c1$var$updateLogoColor($d172752ccfca74c1$var$rgbToHex(bgColor));
});
// Update logo color on mobile touch event
window.addEventListener("touchmove", function() {
    const sections = document.querySelectorAll('.section');
    let bgColor = $d172752ccfca74c1$var$firstSectionBgColor; // Default to the first section's color
    sections.forEach((section)=>{
        const rect = section.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom >= 0) bgColor = window.getComputedStyle(section).backgroundColor;
    });
    $d172752ccfca74c1$var$updateLogoColor($d172752ccfca74c1$var$rgbToHex(bgColor));
});


//# sourceMappingURL=about.dd24563d.js.map
