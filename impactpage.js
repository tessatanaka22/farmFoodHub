// Add interactivity to the menu items
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click',function(){
        document.querySelectorAll('.menu-item').forEach(i => i.classList.remove('active'));
        this.classList.add('active');
    });
});
//Add interactivity to the close icons on stat cards
document.querySelectorAll('.stat-card .icon').forEach(icon => {
    icon.addEventListener('click', function() {
        const card = this.closest('.stat-card');
        card.style.display = 'none';
    });
});
//Export report button functionality
document.querySelector('.export-btn').addEventListener('click', function() {
    alert('Report will be exported as PDF');
});
// Logout button functionality
document.querySelector('.logout-btn').addEventListener('click', function(){
    alert('Logging out...');
});