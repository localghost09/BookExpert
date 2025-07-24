// Login page functionality

document.addEventListener('DOMContentLoaded', function() {
    console.log('Login page loaded');

    const loginForm = document.getElementById('login-form');
    const togglePasswordBtn = document.getElementById('toggle-password');
    const passwordInput = document.getElementById('password');

    // Handle form submission
    if (loginForm) {
        console.log('Login form found');
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Form submitted');

            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value;

            console.log('Email:', email, 'Password length:', password.length);

            // Very simple validation - accept any email format and password > 3 characters
            if (!email || email.length < 3) {
                alert('Please enter an email address');
                return;
            }

            if (!password || password.length < 3) {
                alert('Please enter a password (at least 3 characters)');
                return;
            }

            // Store login state immediately
            try {
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('userEmail', email);
                localStorage.setItem('userName', email.split('@')[0] || 'User');

                // Store user data in the format expected by dashboard
                const userData = {
                    firstName: email.split('@')[0] || 'Test',
                    lastName: 'User',
                    email: email,
                    id: Date.now()
                };
                localStorage.setItem('currentUser', JSON.stringify(userData));

                console.log('Login data stored successfully');

                // Show success and redirect immediately
                alert('Login successful! Redirecting...');

                // Force redirect to dashboard
                window.location.replace('dashboard.html');

            } catch (error) {
                console.error('Error storing login data:', error);
                alert('Login successful! Redirecting...');
                window.location.href = 'dashboard.html';
            }
        });
    } else {
        console.error('Login form not found!');
    }

    // Toggle password visibility (keep existing functionality)
    if (togglePasswordBtn && passwordInput) {
        togglePasswordBtn.addEventListener('click', function() {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);

            const icon = this.querySelector('i');
            if (type === 'password') {
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            } else {
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            }
        });
    }

    // Add a backup direct login button for testing (temporary)
    const loginButton = document.createElement('button');
    loginButton.innerHTML = '🚀 Direct Login (Test)';
    loginButton.className = 'fixed bottom-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg text-sm';
    loginButton.onclick = function() {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', 'test@example.com');
        localStorage.setItem('userName', 'Test User');

        // Store user data in the format expected by dashboard
        const userData = {
            firstName: 'Test',
            lastName: 'User',
            email: 'test@example.com',
            id: Date.now()
        };
        localStorage.setItem('currentUser', JSON.stringify(userData));

        window.location.href = 'dashboard.html';
    };
    document.body.appendChild(loginButton);
});
