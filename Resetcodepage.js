// Fix typo in the button ID and select the button correctly
const codeInputs = document.querySelectorAll('.code-input');
const verifyBtn = document.getElementById('verify-btn'); // Was 'veriry-btn'

codeInputs.forEach((input, index) => {
    input.addEventListener('input', (e) => {
        // Allow only numbers
        e.target.value = e.target.value.replace(/[^0-9]/g, '');

        // Move to next input - there was a bug here, missing parentheses
        if(e.target.value && index < codeInputs.length - 1){
            codeInputs[index + 1].focus();
        }
        // Check if all inputs are filled
        checkInputs();
    });
    
    // Handle backspace
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && !e.target.value && index > 0){
            codeInputs[index - 1].focus();
        }
    });
});

// Check if all inputs are filled
function checkInputs() {
    const allFilled = Array.from(codeInputs).every(input => input.value);
    verifyBtn.disabled = !allFilled;
}

// Form submission with API integration
document.getElementById('code-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get the verification code from all inputs
    const code = Array.from(codeInputs).map(input => input.value).join('');
    
    try {
        // Show loading state
        verifyBtn.textContent = 'Verifying...';
        verifyBtn.disabled = true;
        
        // Send verification code to API
        const response = await fetch('${https://farmfoodhub-backend.onrender.com}/reset-password/',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                verification_code: code 
            })
        });
        
        // Handle the response
        if (response.ok) {
            const data = await response.json();
            // Redirect to set new password page or show success message
            window.location.href = data.redirect_url || '/set-new-password';
        } else {
            const errorData = await response.json();
            // Show error message
            alert(errorData.message || 'Invalid verification code. Please try again.');
            
            // Clear inputs for retry
            codeInputs.forEach(input => {
                input.value = '';
            });
            codeInputs[0].focus();
            verifyBtn.disabled = true;
        }
    } catch (error) {
        console.error('Error submitting verification code:', error);
        alert('Connection error. Please try again later.');
    } finally {
        // Reset button state
        verifyBtn.textContent = 'Verify Code';
        verifyBtn.disabled = false;
    }
});

// Handle "Resend Code" functionality
document.querySelector('.resend-link').addEventListener('click', async (e) => {
    e.preventDefault();
    
    try {
        const response = await fetch('${https://farmfoodhub-backend.onrender.com}/reset-password/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
            // You may need to include user email or other identifier here
            // body: JSON.stringify({ email: userEmail })
        });
        
        if (response.ok) {
            // Reset timer
            timeLeft = 299; // 4:59 in seconds
            
            // Clear inputs
            codeInputs.forEach(input => {
                input.value = '';
                input.disabled = false;
            });
            
            codeInputs[0].focus();
            verifyBtn.disabled = true;
            
            alert('A new verification code has been sent to your email.');
        } else {
            const errorData = await response.json();
            alert(errorData.message || 'Failed to resend code. Please try again.');
        }
    } catch (error) {
        console.error('Error resending code:', error);
        alert('Connection error. Please try again later.');
    }
});

// Countdown timer
let timeLeft = 299; // 4:59 in seconds (corrected from 599 which is 9:59)
const countdownEl = document.getElementById('countdown');

const countdownTimer = setInterval(() => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    countdownEl.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    if(timeLeft <= 0) {
        clearInterval(countdownTimer);
        countdownEl.textContent = '00:00';
        // Disable inputs and button when time expires
        codeInputs.forEach(input => {
            input.disabled = true;
        });
        verifyBtn.disabled = true;
        
        // Display message that code has expired
        alert('Verification code has expired. Please request a new code.');
    } else {
        timeLeft--;
    }
}, 1000);