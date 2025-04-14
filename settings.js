//javascript for interactivity
document.addEventListener('DOMContentLoaded', function(){
    //Toggle switches
    const toggles= document.querySelectorAll('.toggle input');
    toggles.forEach(toggle => {
        toggle.addEventListener('change', function() {
            console.log(`Toggle ${this.parentNode.previousElementSibling.querySelector('h3').textContent} is now ${this.checked ? 'ON' : 'OFF'}`);
        });
    });
    //Dropdown selects
    const dropdowns= document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('change', function(){
            console.log(`${this.parentNode.previousElementSibling.querySelector('h3').textContent} changed to ${this.value}`);
        });
    });
    //Action buttons
    const actionButtons = document.querySelectorAll('.action-button');
    actionButtons.forEach(button => {
        button.addEventListener('click', function(){
            const actionName = this.parentNode.previousElementSibling.querySelector('h3').textContent;
            console.log(`Action button clicked: ${actionName}`);
            alert(`Action initiated: ${actionName}`);
        });
    });
    //Save changes button
    document.querySelector('.save-button').addEventListener('click', function(){
        console.log('Settings saved');
        alert('Your settings have been saved successfully!');
    });
    //Cancel button
     document.querySelector('.cancel-button').addEventListener('click', function(){
        console.log('Changes cancelled');
        alert('Changes cancelled');
     });
     //Navigation items
     const navItems = document.querySelectorAll('.nav-item');
     navItems.forEach(item => {
        item.addEventListener('click',function() {
            navItems.forEach(navItem => navItem.classList.remove('active'));
            this.classList.add('active');
            console.log(`Navigation changed to: ${this.querySelector('span').textContent}`);
        })
     })
})