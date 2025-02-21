console.log('script.js loaded');
$(document).ready(function() {
    console.log('Script loaded');
    // Function to toggle sections based on checkbox state
    function toggleServiceSection(sectionId, checkbox) {
        if (checkbox.is(':checked')) $('#' + sectionId).slideDown(); // Slide down if checked
        else $('#' + sectionId).slideUp(); // Slide up if unchecked
    }
    // Event listeners for the checkboxes
    $('#installation').on('change', function() {
        toggleServiceSection('installation-details', $(this));
    });
    $('#modernization').on('change', function() {
        toggleServiceSection('modernization-details', $(this));
    });
    $('#maintenance').on('change', function() {
        toggleServiceSection('maintenance-details', $(this));
    });
});

//# sourceMappingURL=index.c4775257.js.map
