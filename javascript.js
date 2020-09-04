const myName = document.getElementById('name')
const nameInput = document.getElementById('name-input')
const nameButton = document.getElementById('name-button')



nameButton.addEventListener('click', () => {
    
    
    myName.textContent = nameInput.value;
    console.log(nameInput.value);
   
});
