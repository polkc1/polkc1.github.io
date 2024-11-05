// JavaScript Document

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('userForm');
    const output = document.getElementById('output');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting

        // Clear previous output
        output.innerHTML = '';

        // Get form values
        const fullName = document.getElementById('fullName').value.trim();
        const ageGroups = document.getElementsByName('ageGroup');
        const browsers = document.getElementsByName('browsers');
        const movieGenre = document.getElementById('movieGenre').value;

        let errors = [];

        // Validate Full Name
        if (fullName === '') {
            errors.push('Please enter your full name.');
        }

        // Validate Age Group
        let ageSelected = false;
        let selectedAge = '';
        for (let age of ageGroups) {
            if (age.checked) {
                ageSelected = true;
                selectedAge = age.value;
                break;
            }
        }
        if (!ageSelected) {
            errors.push('Please select your age group.');
        }

        // Validate Browsers Used
        let browsersSelected = [];
        for (let browser of browsers) {
            if (browser.checked) {
                browsersSelected.push(browser.value);
            }
        }
        if (browsersSelected.length === 0) {
            errors.push('Please select at least one browser you have used.');
        }

        // Validate Movie Genre
        if (movieGenre === '') {
            errors.push('Please select your preferred movie genre.');
        }

        // Display Errors or Success Message
        if (errors.length > 0) {
            // Create an unordered list of errors
            let errorList = '<ul>';
            for (let error of errors) {
                errorList += `<li>${error}</li>`;
            }
            errorList += '</ul>';
            output.innerHTML = `<p style="color: red;">${errorList}</p>`;
        } else {
            output.innerHTML = `<p style="color: green;">Thanks, your data was submitted!</p>`;
            // Optionally, you can process the data further here
        }
    });

    // Clear Output on Reset
    form.addEventListener('reset', function() {
        output.innerHTML = '';
    });
});
