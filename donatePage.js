document.addEventListener('DOMContentLoaded',function(){
    const contactButtons = document.querySelectorAll('.btn-contact');
    const buyButtons= document.querySelectorAll('.btn-buy');
    const donateButtons = document.querySelectorAll('.bank-donate');
    contactButtons.forEach(buttons =>{
        buttons.addEventListener('click',function(){
            alert('Contact form will open here');
        });
    });
    buyButtons.forEach(button =>{
        button.addEventListener('click',function(){
            alert('Purchase process will start here');
        });
    });
    donateButtons.forEach(button => {
        button.addEventListener('click',function(){
            alert('Donation process will start here');
        });
    });
    const filterSelects = document.querySelectorAll('.filter-select');
    filterSelects.forEach(select => {
        select.addEventListener('change', function(){
            console.log('filter changed to: ' + this.value);
        });
    });
});