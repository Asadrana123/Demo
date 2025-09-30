const mainContainer = document.getElementById('main');
const loadingContainer = document.getElementById('loading');
const intersectionContainer = document.getElementById('intersection-container');
var isLoading = false;
var start = 0;
var end = 10;

const debounce = (fn) => {
    let timeOutId = null;
    return function () {
        if (timeOutId) clearTimeout(timeOutId);
        timeOutId = setTimeout(() => fn(), 500);
    }
};


const showResult = (data) => {
    loadingContainer.classList.replace('show', 'hide');
    isLoading = false;
    for (let i = 0; i < data.length; i++) {
        const result = document.createElement('div');
        result.setAttribute('class', 'result');
        const title = document.createElement('h3');
        title.textContent = data[i].title
        const index = document.createElement('div');
        index.textContent = data[i].id
        result.append(index, title);
        mainContainer.append(result);
    }
    start += 10;
    end += 10;
};

const fetchResult = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_start=${start}&_end=${end}`)
        .then((response) => response.json())
        .then((data) => showResult(data))
        .catch((err) => console.log(err))
};

const debounceFunction = debounce(fetchResult);

const startFetching = () => {
    loadingContainer.classList.replace('hide', 'show')
    isLoading = true;
    debounceFunction()
};


const observer = new IntersectionObserver((entries) => {
    entries.map((entry) => {
        if (entry.isIntersecting) {
            if (!isLoading) startFetching();
        }
    })
}, { threshold: 0 });

observer.observe(intersectionContainer);

