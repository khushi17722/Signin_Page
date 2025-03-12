document.getElementById("registration-form").addEventListener("submit", function(event) {
    let valid = true;

    // Get values
    const firstName = document.getElementById("first-name").value.trim();
    const lastName = document.getElementById("last-name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirm-password").value.trim();
    const termsChecked = document.getElementById("terms-checkbox").checked;

    // Reset errors
    document.getElementById("first-name-error").textContent = "";
    document.getElementById("last-name-error").textContent = "";
    document.getElementById("email-error").textContent = "";
    document.getElementById("password-error").textContent = "";
    document.getElementById("confirm-password-error").textContent = "";
    document.getElementById("terms-error").textContent = "";

    // Validation
    if (firstName === "") {
        document.getElementById("first-name-error").textContent = "First name is required.";
        valid = false;
    }
    if (lastName === "") {
        document.getElementById("last-name-error").textContent = "Last name is required.";
        valid = false;
    }
    if (!email.match(/^\S+@\S+\.\S+$/)) {
        document.getElementById("email-error").textContent = "Enter a valid email.";
        valid = false;
    }
    if (password.length < 6) {
        document.getElementById("password-error").textContent = "Password must be at least 6 characters.";
        valid = false;
    }
    if (password !== confirmPassword) {
        document.getElementById("confirm-password-error").textContent = "Passwords do not match.";
        valid = false;
    }
    if (!termsChecked) {
        document.getElementById("terms-error").textContent = "You must accept the terms.";
        valid = false;
    }

    if (!valid) {
        event.preventDefault();
    }
});