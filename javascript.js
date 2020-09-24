const myName = document.getElementById('name')
const nameInput = document.getElementById('name-input')
const nameButton = document.getElementById('name-button')
const greenButton = document.getElementById('name-button-two')



nameButton.addEventListener('click', () => {
    
    
    myName.textContent = nameInput.value;
    console.log(nameInput.value);
   
});

greenButton.addEventListener('click', () => {

    myName.textContent = greenButton.value;
    console.log(nameInput.value)
});
