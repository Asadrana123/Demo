const barIcon = document.getElementById('bar-icon');
const smallScreeList = document.getElementById('small-screen-list')
const crossIcon=document.getElementById('cross-icon');
barIcon.addEventListener('click', function () {
    console.log(smallScreeList.style);
    smallScreeList.style.top = '-11px'
})
crossIcon.addEventListener('click', function () {
    console.log(smallScreeList.style);
    smallScreeList.style.top = '-200px'
})