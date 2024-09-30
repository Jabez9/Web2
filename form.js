document.getElementById('sign-up-form').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent the default form submission

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let goal = document.getElementById('goal').value;
    let schedule = document.getElementById('schedule').value; // Get the selected date
    let terms = document.getElementById('terms').checked;

    // Basic validation for gender
    if (!gender) {
        alert('Please select your gender.');
        return;
    }

    // Basic validation for email
    if (!email.includes('@')) {
        alert('Please input a valid email address.');
        return;
    }

    // Validate that the selected date is not earlier than today
    const selectedDate = new Date(schedule);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set today's time to midnight for comparison

    if (selectedDate < today) {
        alert('Please select a date that is today or in the future.');
        return;
    }

    // Basic validation for terms
    if (!terms) {
        alert('You must agree to the terms.');
        return;
    }

    // Feedback to the user
    alert(`Thank you for signing up, ${name}!\nYour email: ${email}\nFitness goal: ${goal}\nPreferred session date: ${schedule}`);
    
    // Here you could handle further actions like sending the data to a server
});
