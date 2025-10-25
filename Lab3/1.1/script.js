// TODO: Implement validation functions

function validateUsername(username) {
    // TODO: Check length (4-20) and alphanumeric
    //for (let char of username) {
    //    if (!((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9') || char === '_') || username.length < 4 || username.length > 20) {
    //        return false;
    //    }
    //}
    //return true;

    const usernameRegex = /^[a-zA-Z0-9_]{4,20}$/;
    return usernameRegex.test(username);
}

function validateEmail(email) {
    // TODO: Use regex for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email)
}

function validatePassword(password) {
    // TODO: Check length >= 8, has uppercase, has number
    const minLength = 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    return password.length >= minLength && hasUppercase && hasNumber;
}

function validatePasswordMatch(pass1, pass2) {
    // TODO: Compare passwords
    return pass1 === pass2 && pass1.length > 0;
}

function showError(fieldId, message) {
    // TODO: Display error message
    // 1. Construct the ID of the error div
    const errorElementId = fieldId + 'Error';
    
    // 2. Find the error element on the page
    const errorElement = document.getElementById(errorElementId);
    const inputElement = document.getElementById(fieldId);


    // 3. If it exists, set its text and show it
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.add('show'); // Use CSS class to show
    }

    if (inputElement) {
        inputElement.classList.add('invalid');
        inputElement.classList.remove('valid');
    }
}

function clearError(fieldId) {
    // TODO: Clear error message
    const errorElementId = fieldId + 'Error';
    const errorElement = document.getElementById(errorElementId);
    const inputElement = document.getElementById(fieldId);

    if (errorElement) {
        errorElement.textContent = '';
        errorElement.classList.remove('show'); // Use CSS class to hide
    }

    if (inputElement) {
        inputElement.classList.remove('invalid');
        inputElement.classList.add('valid');
    }
}

function validateForm() {
    // TODO: Validate all fields and enable/disable submit
    let isFormValid = true;
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value; // No trim for passwords
    const confirmPassword = document.getElementById('confirm-password').value;

    // 1. Validate Username
    if (validateUsername(username)) {
        clearError('username');
    } else {
        showError('username', 'Username must be 4-20 alphanumeric characters or underscores.');
        isFormValid = false;
    }

    // 2. Validate Email
    if (validateEmail(email)) {
        clearError('email');
    } else {
        showError('email', 'Please enter a valid email address.');
        isFormValid = false;
    }

    // 3. Validate Password
    if (validatePassword(password)) {
        clearError('password');
    } else {
        showError('password', 'Must be 8+ chars, with 1 uppercase and 1 number.');
        isFormValid = false;
    }

    // 4. Validate Password Match
    // We only check for a match *if* the main password is valid
    if (validatePasswordMatch(password, confirmPassword)) {
        clearError('confirm-password');
    } else if (isFormValid) { 
        // Only show this error if the password itself is valid but the match is wrong
        showError('confirm-password', 'Passwords do not match.');
        isFormValid = false;
    } else {
        // Clear confirm password error if password isn't valid yet
        clearError('confirm-password');
    }

    // Enable or disable the submit button
    document.getElementById('submitBtn').disabled = !isFormValid;
    
    // Return the final validation status
    return isFormValid;
}

// TODO: Add event listeners for real-time validation

const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmInput = document.getElementById('confirm-password');

usernameInput.addEventListener('input', validateForm);
emailInput.addEventListener('input', validateForm);
passwordInput.addEventListener('input', validateForm);
confirmInput.addEventListener('input', validateForm);

document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // TODO: Handle form submission
    if (validateForm()) {
        alert('Form submitted successfully!');
    }
});