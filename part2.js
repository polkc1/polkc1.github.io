// JavaScript Document
// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // First Dropdown with onchange Event
    const dropdown1 = document.getElementById('dropdown1');

    dropdown1.addEventListener('change', function() {
        const url = this.value;
        if (url) {
            window.open(url, '_blank');
            // Reset the dropdown to default
            this.value = '';
        }
    });

    // Second Dropdown with Button and onclick Event
    const dropdown2 = document.getElementById('dropdown2');
    const navigateButton = document.getElementById('navigateButton');

    navigateButton.addEventListener('click', function() {
        const url = dropdown2.value;
        if (url) {
            window.open(url, '_blank');
            // Optionally, reset the dropdown
            dropdown2.value = '';
        } else {
            alert('Please select a website to navigate.');
        }
    });
});
