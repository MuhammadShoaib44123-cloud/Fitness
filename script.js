// Smooth scrolling function
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Progress Tracker Demo using Chart.js
let ctx = document.getElementById('progressChart').getContext('2d');
let progressChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [{
            label: 'Progress (e.g., Weight Loss in lbs)',
            data: [0, 5, 10, 15],
            borderColor: '#007BFF',
            backgroundColor: 'rgba(0, 123, 255, 0.2)',
            fill: true,
            tension: 0.4, // Smoother curve for professionalism
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { position: 'top' },
            tooltip: { enabled: true }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: { display: true, text: 'Value' }
            },
            x: {
                title: { display: true, text: 'Weeks' }
            }
        }
    }
});

// Simulate progress update
function updateProgress() {
    progressChart.data.datasets[0].data = [0, 7, 14, 20]; // Updated sample data
    progressChart.update();
    alert('Updated progress chart. In a real app, this would pull from your profile data!');
}
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent actual form submission
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('login-error');
    
    // Basic validation (in a real app, this would check against a server)
    if (email === '' || password === '') {
        errorMessage.textContent = 'Please fill in all fields.';
        errorMessage.style.display = 'block';
        return;
    }
    
    // Mock authentication (replace with real API call)
    const validEmail = 'user@example.com';  // Example valid email
    const validPassword = 'password123';    // Example valid password
    
    if (email === validEmail && password === validPassword) {
        alert('Login successful! Redirecting to dashboard...');  // In a real app, redirect to a dashboard page
        window.location.href = 'index.html';  // Redirect back to home for now
    } else {
        errorMessage.textContent = 'Invalid email or password. Please try again.';
        errorMessage.style.display = 'block';
    }
});
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent actual form submission
    
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const terms = document.getElementById('terms').checked;
    const errorMessage = document.getElementById('signup-error');
    
    errorMessage.style.display = 'none';  // Hide error message initially
    errorMessage.textContent = '';  // Clear previous errors
    
    if (!fullName || !email || !password || !confirmPassword) {
        errorMessage.textContent = 'All fields are required.';
        errorMessage.style.display = 'block';
        return;
    }
    
    if (!email.includes('@')) {
        errorMessage.textContent = 'Please enter a valid email address.';
        errorMessage.style.display = 'block';
        return;
    }
    
    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match.';
        errorMessage.style.display = 'block';
        return;
    }
    
    if (!terms) {
        errorMessage.textContent = 'You must agree to the Terms of Service.';
        errorMessage.style.display = 'block';
        return;
    }
    
    // Mock successful signup (in a real app, send data to a server)
    alert('Signup successful! Welcome to FitLife. Redirecting to login...');
    window.location.href = 'login.html';  // Redirect to login page
});