document.getElementById('fitness-form').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent form submission for demo purposes

    let name = document.getElementById('name').value;
    let goal = document.getElementById('goal').value;
    let terms = document.getElementById('terms').checked;

    if (!name) {
        alert('Please enter your name.');
        return;
    }

    if (!terms) {
        alert('Please read and agree to the terms.');
        return;
    }

    alert(`Thanks, ${name}! We’ve received your fitness goal: ${goal}`);
});
