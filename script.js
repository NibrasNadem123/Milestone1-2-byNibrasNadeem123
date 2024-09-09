function toggleSkillsVisibility() {
    // Get the elements
    var skillsSection = document.getElementById('skills');
    var toggleButton = document.getElementById('toggleButton');
    if (skillsSection && toggleButton) {
        // Get current computed display style
        var currentDisplay = window.getComputedStyle(skillsSection).display;
        console.log('Skills section display:', currentDisplay);
        // Toggle visibility and button text
        if (currentDisplay === 'none') {
            skillsSection.style.display = 'block'; // Show the section
            toggleButton.textContent = 'Hide Skills'; // Update button text
        }
        else {
            skillsSection.style.display = 'none'; // Hide the section
            toggleButton.textContent = 'Show Skills'; // Update button text
        }
    }
    else {
        console.error('Skills section or button not found in DOM.');
    }
}
// Ensure the DOM is loaded before adding event listener
document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById('toggleButton');
    if (toggleButton) {
        toggleButton.addEventListener('click', toggleSkillsVisibility);
    }
    else {
        console.error('Toggle button not found.');
    }
});
