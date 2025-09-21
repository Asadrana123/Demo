var showDialog = false;

const dialogContainer = document.getElementById('dialog-container');
const showDialogButton = document.getElementById('popup-button');
const closeButtons = document.querySelectorAll('.close-button')

closeButtons.forEach((btn) => btn.addEventListener('click',() => dialogContainer.style.display = 'none'));

showDialogButton.addEventListener('click', () => dialogContainer.style.display = 'flex')


