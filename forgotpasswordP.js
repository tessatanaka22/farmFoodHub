document.getElementById('reset-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email=document.getElementById('email').value;
    alert('password reset link has been sent to:' + email);
});