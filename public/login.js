document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const user = {
            username,
            password
        };

        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Login successful!');
                // Redirect to dashboard or homepage
                window.location.href = '/dashboard.html';
            } else {
                alert('Login failed! Please check your credentials and try again.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while logging in. Please try again later.');
        });
    });
});
