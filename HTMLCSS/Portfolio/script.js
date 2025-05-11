const menuOpenIcon = document.getElementById('bar-icon');
const mobileMenu = document.getElementById('small-screen-list');
const menuCloseIcon = document.getElementById('cross-icon');

menuOpenIcon.addEventListener('click', function () {
    mobileMenu.style.top = '-38px';
});

menuCloseIcon.addEventListener('click', function () {
    mobileMenu.style.top = '-296px';
});
