var showDialog = false;

const dialogContainer = document.getElementById('dialog-container');
const showDialogButton = document.getElementById('popup-button');
const closeButtons = document.querySelectorAll('.close-button')
console.log(typeof closeButtons)
// closeButtons.map((btn)=>{
//     console.log(btn)
// })

showDialogButton.addEventListener('click', () => dialogContainer.style.display = 'flex')


