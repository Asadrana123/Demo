
const dialogContainer = document.getElementById('dialog-container');
const dialog = document.getElementById('dialog');
const showDialogButton = document.getElementById('popup-button');
const closeButtons = document.querySelectorAll('.close-button')
const firstCloseButton = closeButtons[0];
const secondCloseButton = closeButtons[1];
const backDropClick = document.getElementById('showBackDrop');
const showCloseIcon = document.getElementById('showCloseIcon');

document.addEventListener('click', (e) => {
    const target = e.target;
    switch (target) {
        case showDialogButton:
            dialogContainer.style.display = 'flex';
            break;
        case firstCloseButton:
        case secondCloseButton:
            dialogContainer.style.display = 'none';
            break;
        case backDropClick:
            dialogContainer.style.backgroundColor = target.checked ? 'rgba(0, 0, 0, 0.5)' : 'transparent';
            break;
        case showCloseIcon:
            firstCloseButton.style.visibility = target.checked ? 'visible' : 'hidden';
            break;
        default:
            if(document.getElementById('outSideClick').checked) dialogContainer.style.display = 'none';
    }
})

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.getElementById('escapeClick').checked) {
        dialogContainer.style.display = 'none';
    }

})


