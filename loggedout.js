document.querySelector('.login-button').addEventListener('click', function(){
    //Redirect to login page
    alert('Redirecting to login page...');
    //window.location.href = 'login.html';
});
document.querySelector('.back-link').addEventListener('click', function(e) {
    e.preventDefault();
    //Redirect to homepage
    alert('Redirecting to homepage...');
    //window.location,href = 'index.html'
});