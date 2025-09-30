const mainContainer = document.getElementById('main');
const loadingContainer = document.getElementById('loading');
const intersectionContainer=document.getElementById('intersection-container')
var start = 0;
var end = 10;
// https://jsonplaceholder.typicode.com/posts?_start=${start}&_end=${end}

const fetchResult = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_start=${start}&_end=${end}`)
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
}

fetchResult();

