let formData = {};

function showPage(pageNumber){
    switch(pageNumber){
        case 1:
            document.getElementById('landingPage').style.display = 'block';
            document.getElementById('reservationDates').style.display = 'none';
            document.getElementById('personalDetails').style.display = 'none';
            document.getElementById('additionalDetails').style.display = 'none';
            document.getElementById('bookingReview').style.display = 'none';
            document.getElementById('successMessage').style.display = 'none';
            break;
        case 2:
            document.getElementById('landingPage').style.display = 'none';
            document.getElementById('reservationDates').style.display = 'block';
            document.getElementById('personalDetails').style.display = 'none';
            document.getElementById('additionalDetails').style.display = 'none';
            document.getElementById('bookingReview').style.display = 'none';
            document.getElementById('successMessage').style.display = 'none';
            break;
        case 3:
            document.getElementById('landingPage').style.display = 'none';
            document.getElementById('reservationDates').style.display = 'none';
            document.getElementById('personalDetails').style.display = 'block';
            document.getElementById('additionalDetails').style.display = 'none';
            document.getElementById('bookingReview').style.display = 'none';
            document.getElementById('successMessage').style.display = 'none';
            break;
        case 4:
            document.getElementById('landingPage').style.display = 'none';
            document.getElementById('reservationDates').style.display = 'none';
            document.getElementById('personalDetails').style.display = 'none';
            document.getElementById('additionalDetails').style.display = 'block';
            document.getElementById('bookingReview').style.display = 'none';
            document.getElementById('successMessage').style.display = 'none';
            break;
        case 5:
            document.getElementById('landingPage').style.display = 'none';
            document.getElementById('reservationDates').style.display = 'none';
            document.getElementById('personalDetails').style.display = 'none';
            document.getElementById('additionalDetails').style.display = 'none';
            document.getElementById('bookingReview').style.display = 'block';
            document.getElementById('successMessage').style.display = 'none';
            getFormData();
            displayReview();
            break;
        case 6:
            document.getElementById('landingPage').style.display = 'none';
            document.getElementById('reservationDates').style.display = 'none';
            document.getElementById('personalDetails').style.display = 'none';
            document.getElementById('additionalDetails').style.display = 'none';
            document.getElementById('bookingReview').style.display = 'none';
            document.getElementById('successMessage').style.display = 'block';
            break;
        default: break;
    }
}

function displayReview() {
    document.getElementById('reviewDetails').innerHTML = `
        <p><strong>Full Name:</strong> ${formData.fullName}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone No.:</strong> ${formData.phone}</p>
        <p><strong>No. of Adults:</strong> ${formData.adults}</p>
        <p><strong>No. of Children:</strong> ${formData.children}</p>
        <p><strong>Check-in Date:</strong> ${formData.checkInDate}</p>
        <p><strong>Checkout Date:</strong> ${formData.checkOutDate}</p>
        <p><strong>Do you need cooking facility?</strong> ${formData.q1}</p>
        <p><strong>Do you need outdoor activity equipments (Eg- Swiming googles, surf board)?</strong> ${formData.q2}</p>
        <p><strong>Additional Comments:</strong> ${formData.comments}</p>
    `;
}

function submitForm() {
    if (document.getElementById('agree').checked) {
        showPage(6);
    } else {
        alert('Please agree to terms and conditions.');
    }
}

// Function to get the selected value from radio button options
function getSelectedRadioValue(name) {
    // Construct the selector based on the provided name
    const selector = 'input[name="' + name + '"]:checked';
    
    // Select the checked radio button
    const selectedRadio = document.querySelector(selector);

    if (selectedRadio) {
        // Get the value of the selected radio button
        const selectedValue = selectedRadio.value;
        return selectedValue;
    } else {
        return null; // Return null if no option is selected
    }
}


function getFormData() {
    formData.fullName = document.getElementById('fullName').value;
    formData.email = document.getElementById('email').value;
    formData.phone = document.getElementById('phone').value;
    formData.adults = document.getElementById('adults').value;
    formData.children = document.getElementById('children').value;
    formData.checkInDate = document.getElementById('checkInDate').value;
    formData.checkOutDate = document.getElementById('checkOutDate').value;
    formData.q1 = getSelectedRadioValue('q1');
    formData.q2 = getSelectedRadioValue('q2');
    formData.comments = document.getElementById('comments').value;   
}

// Get the range input elements
var adultsRange = document.getElementById('adults');
var childrenRange = document.getElementById('children');

// Get the span elements to display the range values
var adultsValueSpan = document.getElementById('adultsValue');
var childrenValueSpan = document.getElementById('childrenValue');

// Function to update the displayed values
function updateRangeValues() {
    adultsValueSpan.textContent = adultsRange.value;
    childrenValueSpan.textContent = childrenRange.value;
}

// Update the displayed values initially
updateRangeValues();

// Listen for input events to update the displayed values
adultsRange.addEventListener('input', updateRangeValues);
childrenRange.addEventListener('input', updateRangeValues);



document.addEventListener('DOMContentLoaded', function () {
    const pihaWrappers = document.querySelectorAll('.pihaWrapper');
    const detailsDiv = document.getElementById('myDetails');

    // Function to handle animation sequence
    function animateSequence(index) {
        if (index < pihaWrappers.length) {
            // Display current pihaWrapper
            pihaWrappers[index].style.display = 'block';
            // Wait for the animation to finish
            setTimeout(() => {
                // Hide current pihaWrapper
                pihaWrappers[index].style.display = 'none';
                // Continue with the next one
                animateSequence(index + 1);
            }, 6000);
        } else {
            // All animations are done, show the "Details" div
            detailsDiv.style.display = 'block';
        }
    }

    // Start the animation sequence
    animateSequence(0);
});

function redirectToWebsite(url) {
    window.open(url, '_blank');
}

function m10replay(){
    document.addEventListener('DOMContentLoaded', function () {
        const m10Wrappers = document.querySelectorAll('.m10Wrapper');
        const detailsDiv = document.getElementById('myDetails2');
    
        // Function to handle animation sequence
        function animateSequence(index) {
            if (index < m10Wrappers.length) {
                // Display current m10Wrapper
                m10Wrappers[index].style.display = 'block';
                // Wait for the animation to finish
                setTimeout(() => {
                    // Hide current m10Wrapper
                    m10Wrappers[index].style.display = 'none';
                    // Continue with the next one
                    animateSequence(index + 1);
                }, 3000);
            } else {
                // All animations are done, show the "Details" div
                detailsDiv.style.display = 'block';
            }
        }
    
        // Start the animation sequence
        animateSequence(0);
    });
}
document.addEventListener('DOMContentLoaded', function () {
    const m10Wrappers = document.querySelectorAll('.m10Wrapper');
    const detailsDiv = document.getElementById('myDetails2');

    // Function to handle animation sequence
    function animateSequence(index) {
        if (index < m10Wrappers.length) {
            // Display current m10Wrapper
            m10Wrappers[index].style.display = 'block';
            // Wait for the animation to finish
            setTimeout(() => {
                // Hide current m10Wrapper
                m10Wrappers[index].style.display = 'none';
                // Continue with the next one
                animateSequence(index + 1);
            }, 3000);
        } else {
            // All animations are done, show the "Details" div
            detailsDiv.style.display = 'block';
        }
    }

    // Start the animation sequence
    animateSequence(0);
});


