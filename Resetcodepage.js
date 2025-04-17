//Auto-focus next  input when a digit is entered
const codeInputs = document.querySelectorAll('.code-input');
const verifyBtn = document.getElementById('veriry-btn');

codeInputs.forEach((input, index) => {
    input.addEventListener('input', (e) => {
    //Allow only numbers
    e.target.value = e.target.value.replace(/[^0-9]/g, '');

    //move to next input
    if(e.target.value && index < codeInputs.length - 1){
        codeInputs[index + 1].focus;
    }
    //Check if all inputs are filled
    checkInputs();
    });
    //Handle backspace
    input.addEventListener('keydown', (e)=>{
        if (e.key === 'Backspace' && !e.target.value && index > 0){
            codeInputs[index - 1].focus();
        }
    });
});
//Check if all inpute are filled
function checkInputs() {
    const allFilled = Array.from(codeInputs).every(input => input.value);
    verifyBtn.disabled = !allFilled;
}
//form submission
document.getElementById('code-form').addEventListener('submit', (e)=> {
    e.preventDefault();
    const code= Array.from(codeInputs).map(input => input.value).join('');
    alert(`Verifying code ${code}`);
});
//countdown timer
let timeLeft=599; //4:59 in seconds
const countdownEl= document.getElementById('countdown');

const countdownTimer = setInterval(()=>{
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    countdownEl.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    if(timeLeft <= 0) {
        clearInterval(countdownTimer);
        countdownEl.textContent = '00:00';
        //Disable inputs and button when time expires
        codeInputs.forEach(input => {
            input.disabled = true;
        });
        verifyBtn.disabled = true;
    } else {timeLeft--;}
}, 1000);

