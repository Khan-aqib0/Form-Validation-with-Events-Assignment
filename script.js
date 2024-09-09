document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form');
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const passwordField = document.getElementById('password');
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');

    // Function to validate Name
    function validateName() {
        if (nameField.value.trim() === '') {
            nameError.style.display = 'block';
        } else {
            nameError.style.display = 'none';
        }
    }

    // Function to validate Email
    function validateEmail() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailField.value)) {
            emailError.style.display = 'block';
        } else {
            emailError.style.display = 'none';
        }
    }

    // Function to validate Password
    function validatePassword() {
        if (passwordField.value.length < 8) {
            passwordError.style.display = 'block';
        } else {
            passwordError.style.display = 'none';
        }
    }

    // Add event listeners for real-time validation
    nameField.addEventListener('input', validateName);
    emailField.addEventListener('input', validateEmail);
    passwordField.addEventListener('input', validatePassword);

    // Add event listener for form submission
    form.addEventListener('submit', (event) => {
        validateName();
        validateEmail();
        validatePassword();

        if (nameError.style.display === 'block' || 
            emailError.style.display === 'block' || 
            passwordError.style.display === 'block') {
            event.preventDefault(); // Prevent form submission if there are errors
        }
    });
});
