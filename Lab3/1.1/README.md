Form Validator – README

This project is a simple client-side form validation script written in JavaScript.
It validates user input for username, email, password, and confirm password fields in real time.
![alt text](/Picture/image.png)

Functions Overview

validateUsername(username)

Checks whether the username is valid.

- Must be 4–20 characters long

- Can contain letters, numbers, and underscores only

- Rejects symbols or spaces

Returns: true if valid, otherwise false

validateEmail(email)

Validates the email format using a regular expression.

- Must follow standard email format (e.g., example@domain.com)

- Rejects missing @, missing domain, or spaces

Returns: true if valid, otherwise false

validatePassword(password)

Ensures password strength.

- Must be at least 8 characters long

- Must include at least one uppercase letter

- Must include at least one number

Returns: true if all conditions are met, otherwise false

validatePasswordMatch(pass1, pass2)

Compares two password fields.

- Both passwords must match exactly

- Password cannot be empty

Returns: true if both match, otherwise false

showError(fieldId, message)

- Displays an error message under a specific input field.

- Finds the element with ID [fieldId + 'Error']

- Updates its text content with the given message

clearError(fieldId)

- Clears any existing error message for a specific field.

- Removes error text and .show class from the message element

validateForm()

- Performs validation for all fields and enables or disables the Submit button.

- Reads all field values.

- Validates each field using the above functions.

- Shows or clears error messages accordingly.

- Disables the Sign Up button if any field is invalid.

- Returns: true if all validations pass.