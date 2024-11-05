// JavaScript Document
// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('stateForm');
    const output = document.getElementById('stateOutput');

    // State Data as a Two-Dimensional Array
    const statesData = [
        ['AL', 'Alabama', 'Montgomery', '4,903,185'],
        ['AK', 'Alaska', 'Juneau', '731,545'],
        ['AZ', 'Arizona', 'Phoenix', '7,278,717'],
        ['AR', 'Arkansas', 'Little Rock', '3,017,825'],
        ['CA', 'California', 'Sacramento', '39,512,223'],
        ['CO', 'Colorado', 'Denver', '5,758,736']
    ];

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting

        // Clear previous output
        output.innerHTML = '';

        // Get user input and normalize it
        const userInput = document.getElementById('stateInput').value.trim().toLowerCase();

        if (userInput === '') {
            output.innerHTML = `<p style="color: red;">Please enter a state name or abbreviation.</p>`;
            return;
        }

        // Search for the state in the data
        let found = false;
        let stateInfo = [];

        for (let state of statesData) {
            let abbr = state[0].toLowerCase();
            let name = state[1].toLowerCase();
            if (userInput === abbr || userInput === name) {
                found = true;
                stateInfo = state;
                break;
            }
        }

        if (found) {
            // Display state information
            output.innerHTML = `
                <p style="color: green;">Thanks for your inquiry, here is the information you requested:</p>
                <ul>
                    <li><strong>State Abbreviation:</strong> ${stateInfo[0]}</li>
                    <li><strong>State Name:</strong> ${stateInfo[1]}</li>
                    <li><strong>Capital:</strong> ${stateInfo[2]}</li>
                    <li><strong>Population:</strong> ${stateInfo[3]}</li>
                </ul>
            `;
        } else {
            // List available states
            let availableStates = statesData.map(state => state[1]).join(', ');
            output.innerHTML = `<p style="color: red;">Sorry, we do not have information about this state! We only have information about: ${availableStates}.</p>`;
        }
    });

    // Clear Output on Reset
    form.addEventListener('reset', function() {
        output.innerHTML = '';
    });
});
