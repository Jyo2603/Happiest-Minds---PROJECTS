// Hardcoded credentials
const validUsername = "jyo";
const validPassword = "jyo";

// Login form handling
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get user input
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorElement = document.getElementById('error');

    // Check if credentials are correct
    if (username === validUsername && password === validPassword) {
        window.location.href = "home.html"; // Redirect to home page
    } else {
        errorElement.textContent = "Invalid credentials. Please try again.";
    }
});
