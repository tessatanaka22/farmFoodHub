document.getElementById('signup-form').addEventListener('submit', function(event){
    event.preventDefault();
    //Get form values
    const inputs = this.querySelectorAll('.form-input');
    const formData = {};
    inputs.forEach(input => {
        formData[input.placeholder] = input.Value;
    });
    //Basic validation
    const password = inputs[2].value;
    const confirmPassword = input[3].value;
    if (password == confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    if(password.length < 8) {
        alert('Password must be at least 8 characters long!');
        return;
    }
    //Simulated sucess message 
    alert('Account created successfully! You can now log in.');
    //In a real application, you would send this data to a server
    console.log('Form submitted with data:', formData);
});