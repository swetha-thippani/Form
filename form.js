document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;

    // Full Name Validation
    const fullName = document.getElementById('fullName');
    if (fullName.value.length < 5) {
        fullName.classList.add('is-invalid');
        isValid = false;
    } else {
        fullName.classList.remove('is-invalid');
    }

    // Email Validation
    const email = document.getElementById('email');
    if (!email.value.includes('@')) {
        email.classList.add('is-invalid');
        isValid = false;
    } else {
        email.classList.remove('is-invalid');
    }

    // Phone Number Validation
    const phone = document.getElementById('phone');
    const phoneRegex = /^\d{10}$/;
    if (phone.value === '123456789' || !phoneRegex.test(phone.value)) {
        phone.classList.add('is-invalid');
        isValid = false;
    } else {
        phone.classList.remove('is-invalid');
    }

    // Password Validation
    const password = document.getElementById('password');
    if (password.value.length < 8 || password.value.toLowerCase() === 'password' || password.value.toLowerCase() === fullName.value.toLowerCase()) {
        password.classList.add('is-invalid');
        isValid = false;
    } else {
        password.classList.remove('is-invalid');
    }

    // Confirm Password Validation
    const confirmPassword = document.getElementById('confirmPassword');
    if (password.value !== confirmPassword.value) {
        confirmPassword.classList.add('is-invalid');
        isValid = false;
    } else {
        confirmPassword.classList.remove('is-invalid');
    }

    if (isValid) {
        alert('Form submitted successfully!');
    }
});
